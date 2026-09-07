import { Router, Request, Response } from 'express';
import { profileData } from '../data/portfolioData';
import { ApiResponse, ProfileData } from '../../src/types/portfolio';

const router = Router();

router.get('/', (req: Request, res: Response) => {
  const start = Date.now();
  const response: ApiResponse<ProfileData> = {
    success: true,
    endpoint: '/api/profile',
    timestamp: new Date().toISOString(),
    latencyMs: Date.now() - start,
    data: profileData
  };
  res.json(response);
});

export default router;
