import { Router, Request, Response } from 'express';
import { experienceData } from '../data/portfolioData';
import { ApiResponse, ExperienceItem } from '../../src/types/portfolio';

const router = Router();

router.get('/', (req: Request, res: Response) => {
  const start = Date.now();
  const { currentOnly } = req.query;

  let items = [...experienceData];
  if (currentOnly === 'true') {
    items = items.filter((item) => item.current);
  }

  const response: ApiResponse<ExperienceItem[]> = {
    success: true,
    endpoint: '/api/experience',
    timestamp: new Date().toISOString(),
    latencyMs: Date.now() - start,
    data: items,
    meta: {
      total: items.length
    }
  };

  res.json(response);
});

export default router;
