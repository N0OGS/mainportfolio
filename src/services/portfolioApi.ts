import {
  ApiResponse,
  ProfileData,
  SkillItem,
  ProjectItem,
  ExperienceItem,
  ActivityStats,
  ContactSubmission,
  ContactResponse
} from '../types/portfolio';

// Base fetcher with error handling and timing metrics
async function request<T>(endpoint: string, options?: RequestInit): Promise<ApiResponse<T>> {
  const startTime = performance.now();
  try {
    const res = await fetch(endpoint, {
      headers: {
        'Content-Type': 'application/json',
        ...options?.headers
      },
      ...options
    });

    if (!res.ok) {
      const errorBody = await res.json().catch(() => ({}));
      throw new Error(errorBody.error || `HTTP ${res.status}: ${res.statusText}`);
    }

    const json: ApiResponse<T> = await res.json();
    // compute client-measured round-trip latency
    json.latencyMs = Math.round(performance.now() - startTime);
    return json;
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : 'Unknown network error';
    return {
      success: false,
      endpoint,
      timestamp: new Date().toISOString(),
      latencyMs: Math.round(performance.now() - startTime),
      data: null as unknown as T,
      meta: {
        filterApplied: { error: message }
      }
    };
  }
}

export const portfolioApi = {
  // Modular Profile endpoint
  getProfile: async (): Promise<ApiResponse<ProfileData>> => {
    return request<ProfileData>('/api/profile');
  },

  // Modular Skills endpoint with query params
  getSkills: async (params?: { category?: string; search?: string; featured?: boolean }): Promise<ApiResponse<SkillItem[]>> => {
    const query = new URLSearchParams();
    if (params?.category && params.category !== 'all') query.set('category', params.category);
    if (params?.search && params.search.trim()) query.set('search', params.search.trim());
    if (params?.featured) query.set('featured', 'true');
    const qs = query.toString();
    return request<SkillItem[]>(`/api/skills${qs ? `?${qs}` : ''}`);
  },

  // Modular Projects endpoint with filter & search
  getProjects: async (params?: { category?: string; tag?: string; search?: string; featured?: boolean }): Promise<ApiResponse<ProjectItem[]>> => {
    const query = new URLSearchParams();
    if (params?.category && params.category !== 'all') query.set('category', params.category);
    if (params?.tag && params.tag.trim()) query.set('tag', params.tag.trim());
    if (params?.search && params.search.trim()) query.set('search', params.search.trim());
    if (params?.featured) query.set('featured', 'true');
    const qs = query.toString();
    return request<ProjectItem[]>(`/api/projects${qs ? `?${qs}` : ''}`);
  },

  // Single Project Detail
  getProjectById: async (id: string): Promise<ApiResponse<ProjectItem>> => {
    return request<ProjectItem>(`/api/projects/${encodeURIComponent(id)}`);
  },

  // Modular Experience endpoint
  getExperience: async (currentOnly?: boolean): Promise<ApiResponse<ExperienceItem[]>> => {
    const qs = currentOnly ? '?currentOnly=true' : '';
    return request<ExperienceItem[]>(`/api/experience${qs}`);
  },

  // Modular Stats & Velocity endpoint
  getStats: async (): Promise<ApiResponse<ActivityStats>> => {
    return request<ActivityStats>('/api/stats');
  },

  // Modular Contact POST endpoint
  submitContact: async (submission: ContactSubmission): Promise<ApiResponse<ContactResponse>> => {
    return request<ContactResponse>('/api/contact', {
      method: 'POST',
      body: JSON.stringify(submission)
    });
  }
};
