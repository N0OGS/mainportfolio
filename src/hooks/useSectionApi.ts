import { useState, useEffect, useCallback, useRef } from 'react';
import { ApiResponse } from '../types/portfolio';

interface UseSectionApiOptions<T> {
  fetcher: () => Promise<ApiResponse<T>>;
  deps?: unknown[];
  autoFetch?: boolean;
}

export interface UseSectionApiResult<T> {
  data: T | null;
  loading: boolean;
  error: string | null;
  latencyMs: number;
  endpoint: string;
  timestamp: string | null;
  refetch: () => Promise<void>;
}

export function useSectionApi<T>({
  fetcher,
  deps = [],
  autoFetch = true
}: UseSectionApiOptions<T>): UseSectionApiResult<T> {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState<boolean>(autoFetch);
  const [error, setError] = useState<string | null>(null);
  const [latencyMs, setLatencyMs] = useState<number>(0);
  const [endpoint, setEndpoint] = useState<string>('');
  const [timestamp, setTimestamp] = useState<string | null>(null);

  // Store latest fetcher in ref to avoid unnecessary re-triggers
  const fetcherRef = useRef(fetcher);
  fetcherRef.current = fetcher;

  const execute = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetcherRef.current();
      setLatencyMs(response.latencyMs);
      setEndpoint(response.endpoint);
      setTimestamp(response.timestamp);

      if (response.success && response.data !== null) {
        setData(response.data);
      } else {
        setError(
          (response.meta?.filterApplied?.error as string) ||
          'Failed to load section data from API'
        );
      }
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : 'Network request failed');
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    if (autoFetch) {
      execute();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps);

  return {
    data,
    loading,
    error,
    latencyMs,
    endpoint,
    timestamp,
    refetch: execute
  };
}
