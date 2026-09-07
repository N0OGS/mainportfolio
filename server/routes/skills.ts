import { Router, Request, Response } from 'express';
import { profileData, skillsData } from '../data/portfolioData';
import { ApiResponse, SkillItem } from '../../src/types/portfolio';

const router = Router();

router.get('/', (req: Request, res: Response) => {
  const start = Date.now();
  const { category, search, featured } = req.query;

  let filtered = [...skillsData];

  if (category && typeof category === 'string' && category !== 'all') {
    filtered = filtered.filter((skill) => skill.category.toLowerCase() === category.toLowerCase());
  }

  if (featured === 'true') {
    filtered = filtered.filter((skill) => skill.featured);
  }

  if (search && typeof search === 'string' && search.trim()) {
    const q = search.trim().toLowerCase();
    filtered = filtered.filter(
      (skill) =>
        skill.name.toLowerCase().includes(q) ||
        skill.tags.some((t) => t.toLowerCase().includes(q)) ||
        skill.highlight.toLowerCase().includes(q)
    );
  }

  const response: ApiResponse<SkillItem[]> = {
    success: true,
    endpoint: '/api/skills',
    timestamp: new Date().toISOString(),
    latencyMs: Date.now() - start,
    data: filtered,
    meta: {
      total: filtered.length,
      filterApplied: {
        category: category as string | undefined,
        search: search as string | undefined,
        featured: featured ? featured === 'true' : undefined
      }
    }
  };

  res.json(response);
});

export default router;
