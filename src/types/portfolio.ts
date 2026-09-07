export type SkillCategory =
  | 'all'
  | 'languages'
  | 'frameworks'
  | 'hardware'
  | 'cloud-ai'
  | 'frontend'
  | 'backend'
  | 'cloud'
  | 'architecture'
  | 'tools';

export interface SocialLink {
  platform: string;
  label: string;
  url: string;
  icon: string;
}

export interface MetricItem {
  label: string;
  value: string;
  detail: string;
}

export interface EducationItem {
  institution: string;
  degree: string;
  period: string;
  awards?: string[];
  location?: string;
}

export interface CertificationItem {
  title: string;
  issuer: string;
  verified?: boolean;
}

export interface ProfileData {
  name: string;
  title: string;
  roleSubtitle: string;
  bio: string[];
  location: string;
  availability: {
    status: 'available' | 'contract' | 'booked';
    badge: string;
    description: string;
  };
  contactEmail: string;
  phone?: string;
  socials: SocialLink[];
  metrics: MetricItem[];
  resumeUrl: string;
  timezone: string;
  education?: EducationItem[];
  certifications?: CertificationItem[];
}

export interface SkillItem {
  id: string;
  name: string;
  category: SkillCategory;
  level: number;
  years: number;
  tags: string[];
  featured: boolean;
  highlight: string;
}

export interface ProjectItem {
  id: string;
  title: string;
  summary: string;
  description: string;
  category: 'fintech-ai' | 'hardware-vr' | 'computer-vision' | 'software-systems' | 'fullstack' | 'distributed' | 'systems' | 'ai-cloud' | 'devtools';
  tags: string[];
  metrics: { label: string; value: string }[];
  architectureNotes: string[];
  githubUrl: string;
  demoUrl?: string;
  featured: boolean;
  status: 'production' | 'beta' | 'open-source';
  stars?: number;
}

export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  companyUrl?: string;
  location: string;
  period: string;
  type: string;
  current: boolean;
  achievements: string[];
  technologies: string[];
}

export interface ActivityStats {
  commitsThisYear: number;
  prsMerged: number;
  ossContributions: number;
  productionUptime: string;
  languageBreakdown: { name: string; percentage: number; color: string }[];
  weeklyActivity: { day: string; count: number }[];
  recentMilestones: {
    id: string;
    date: string;
    title: string;
    type: 'commit' | 'release' | 'deploy' | 'speaker';
    details: string;
  }[];
}

export interface ContactSubmission {
  name: string;
  email: string;
  subject: string;
  message: string;
  inquiryType: 'project' | 'hiring' | 'advisory' | 'general';
}

export interface ContactResponse {
  received: boolean;
  ticketId: string;
  timestamp: string;
  message: string;
}

export interface ApiResponse<T> {
  success: boolean;
  endpoint: string;
  timestamp: string;
  latencyMs: number;
  data: T;
  meta?: {
    total?: number;
    filterApplied?: Record<string, string | boolean | undefined>;
  };
}
