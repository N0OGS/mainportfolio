import { Router, Request, Response } from 'express';
import { activityStatsData } from '../data/portfolioData';
import { ApiResponse, ActivityStats } from '../../src/types/portfolio';

const router = Router();

router.get('/', (req: Request, res: Response) => {
  const start = Date.now();

  const response: ApiResponse<ActivityStats> = {
    success: true,
    endpoint: '/api/stats',
    timestamp: new Date().toISOString(),
    latencyMs: Date.now() - start,
    data: activityStatsData
  };

  res.json(response);
});

export default router;
