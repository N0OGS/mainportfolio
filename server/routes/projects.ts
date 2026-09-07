import { Router, Request, Response } from 'express';
import { projectsData } from '../data/portfolioData';
import { ApiResponse, ProjectItem } from '../../src/types/portfolio';

const router = Router();

router.get('/', (req: Request, res: Response) => {
  const start = Date.now();
  const { category, tag, featured, search } = req.query;

  let filtered = [...projectsData];

  if (category && typeof category === 'string' && category !== 'all') {
    filtered = filtered.filter((p) => p.category.toLowerCase() === category.toLowerCase());
  }

  if (tag && typeof tag === 'string' && tag.trim()) {
    const t = tag.trim().toLowerCase();
    filtered = filtered.filter((p) => p.tags.some((tagItem) => tagItem.toLowerCase() === t));
  }

  if (featured === 'true') {
    filtered = filtered.filter((p) => p.featured);
  }

  if (search && typeof search === 'string' && search.trim()) {
    const q = search.trim().toLowerCase();
    filtered = filtered.filter(
      (p) =>
        p.title.toLowerCase().includes(q) ||
        p.summary.toLowerCase().includes(q) ||
        p.tags.some((t) => t.toLowerCase().includes(q)) ||
        p.architectureNotes.some((a) => a.toLowerCase().includes(q))
    );
  }

  const response: ApiResponse<ProjectItem[]> = {
    success: true,
    endpoint: '/api/projects',
    timestamp: new Date().toISOString(),
    latencyMs: Date.now() - start,
    data: filtered,
    meta: {
      total: filtered.length,
      filterApplied: {
        category: category as string | undefined,
        tag: tag as string | undefined,
        featured: featured ? featured === 'true' : undefined
      }
    }
  };

  res.json(response);
});

// Single project detail endpoint
router.get('/:id', (req: Request, res: Response) => {
  const start = Date.now();
  const project = projectsData.find((p) => p.id === req.params.id);

  if (!project) {
    res.status(404).json({
      success: false,
      endpoint: `/api/projects/${req.params.id}`,
      timestamp: new Date().toISOString(),
      latencyMs: Date.now() - start,
      data: null,
      error: 'Project not found'
    });
    return;
  }

  res.json({
    success: true,
    endpoint: `/api/projects/${req.params.id}`,
    timestamp: new Date().toISOString(),
    latencyMs: Date.now() - start,
    data: project
  });
});

export default router;
