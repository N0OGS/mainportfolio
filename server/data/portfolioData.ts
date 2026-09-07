import { ProfileData, SkillItem, ProjectItem, ExperienceItem, ActivityStats } from '../../src/types/portfolio';

export const profileData: ProfileData = {
  name: 'Oliver Miguel L. Nunag',
  title: 'Computer Engineering Graduate • Hardware-Software Integration & Full-Stack Development',
  roleSubtitle: 'De La Salle University Computer Engineering graduate bridging embedded hardware, computer vision, and modern full-stack web applications.',
  bio: [
    'Computer Engineering graduate from De La Salle University (Manila / Laguna) with hands-on experience spanning embedded hardware, sensor firmware, computer vision, and modern web application development.',
    'Proven track record in end-to-end prototyping—ranging from undergraduate thesis research developing a multi-finger tactile haptic feedback glove for VR medical simulations, to real-time optical hand gesture tracking in OpenCV, and full-stack personal finance applications.',
    'Completed industry design verification training at Lattice Semiconductor focusing on SystemVerilog and Universal Verification Methodology (UVM) fundamentals, paired with certifications in AWS Bedrock and Google AI foundations.'
  ],
  location: 'Sta. Rosa City, Laguna, Philippines',
  availability: {
    status: 'available',
    badge: 'Open for Engineering Roles & Projects',
    description: 'Available for Computer Engineering roles, Hardware-Software Integration, Semiconductor Verification, and Cloud/AI solutions.'
  },
  contactEmail: 'omlnunag2002@gmail.com',
  phone: '+63 908 965 7357',
  timezone: 'PHT (UTC+8)',
  resumeUrl: '#download-resume',
  socials: [
    { platform: 'GitHub', label: 'github.com/N0OGS', url: 'https://github.com/N0OGS', icon: 'Github' },
    { platform: 'LinkedIn', label: 'linkedin.com/in/oliver-miguel-nunag-16baa0286', url: 'https://www.linkedin.com/in/oliver-miguel-nunag-16baa0286/', icon: 'Linkedin' },
    { platform: 'Email', label: 'omlnunag2002@gmail.com', url: 'mailto:omlnunag2002@gmail.com', icon: 'Mail' },
    { platform: 'Phone', label: '+63 908 965 7357', url: 'tel:+639089657357', icon: 'Phone' }
  ],
  metrics: [
    { label: 'Academic Standing', value: "Dean's Lister", detail: 'De La Salle University (First Sem SY 24-25)' },
    { label: 'Graduated', value: '2026', detail: 'BS in Computer Engineering • DLSU' },
    { label: 'Featured Repositories', value: '6 Codebases', detail: 'Fintech AI, Haptics, OpenCV, Multi-Server & Java' },
    { label: 'Cloud & AI Certifications', value: '6+ Credentials', detail: 'AWS Bedrock, Google AI, UVM & NVIDIA' }
  ],
  education: [
    {
      institution: 'De La Salle University',
      degree: 'Bachelor of Science in Computer Engineering',
      period: 'Graduated: 2026',
      awards: ["Dean's Lister First Semester SY 2024 to 2025"],
      location: 'Manila / Laguna, Philippines'
    }
  ],
  certifications: [
    { title: 'Amazon Bedrock Customization, Optimization & Automation', issuer: 'AWS', verified: true },
    { title: 'Generative AI Applications with Amazon Bedrock', issuer: 'AWS', verified: true },
    { title: 'Getting Started with AWS Generative AI for Developers', issuer: 'AWS', verified: true },
    { title: 'Google AI Professional Certificate', issuer: 'Google', verified: true },
    { title: 'System Verilog Accelerated Verification with UVM', issuer: 'Verification Certification', verified: true },
    { title: 'NVIDIA X ELEVATE Seminar 2025', issuer: 'NVIDIA Professional Development', verified: true }
  ]
};

export const skillsData: SkillItem[] = [
  // Languages
  { id: 's1', name: 'C & C++', category: 'languages', level: 78, years: 2, tags: ['Hardware Logic', 'Embedded Firmware', 'Memory & Pointers'], featured: true, highlight: 'Low-level microcontroller control, sensor sampling loops, and ADC interrupt logic' },
  { id: 's2', name: 'Python', category: 'languages', level: 80, years: 2, tags: ['OpenCV', 'Automation', 'Scripting', 'NumPy Basics'], featured: true, highlight: 'Computer vision pipelines, video frame processing, and data automation scripts' },
  { id: 's3', name: 'Java', category: 'languages', level: 75, years: 2, tags: ['OOP', 'Data Structures', 'File I/O', 'JDBC'], featured: true, highlight: 'Academic software engineering, reservation systems, and object-oriented architectures' },
  { id: 's4', name: 'SystemVerilog', category: 'languages', level: 68, years: 1, tags: ['UVM Fundamentals', 'RTL Verification', 'Digital Logic'], featured: true, highlight: 'Basic testbench writing, assertions, and introductory verification concepts' },
  { id: 's5', name: 'JavaScript & HTML/CSS', category: 'languages', level: 76, years: 2, tags: ['ES6+', 'DOM Manipulation', 'Responsive Web'], featured: false, highlight: 'Client-side scripting, event handling, and clean responsive CSS layouts' },
  { id: 's6', name: 'PHP', category: 'languages', level: 62, years: 1, tags: ['Server Scripting', 'Form Processing', 'MySQL Querying'], featured: false, highlight: 'Classic backend scripting, procedural endpoints, and session management' },

  // Frameworks & Libraries
  { id: 's7', name: 'React.js', category: 'frameworks', level: 74, years: 1, tags: ['Functional Components', 'Hooks', 'State Management'], featured: true, highlight: 'Single-page interfaces, component hierarchies, and props/state flow' },
  { id: 's8', name: 'Node.js & Express', category: 'frameworks', level: 72, years: 1, tags: ['RESTful APIs', 'Middleware', 'Route Handling'], featured: true, highlight: 'HTTP route handlers, JSON request pipelines, and local multi-server setups' },
  { id: 's9', name: 'OpenCV', category: 'frameworks', level: 75, years: 1, tags: ['Contour Analysis', 'Convex Hull', 'Color Thresholding'], featured: true, highlight: 'Optical tracking of hand contours and coordinate normalization for virtual mouse clicks' },
  { id: 's10', name: 'Bootstrap & Tailwind CSS', category: 'frameworks', level: 78, years: 2, tags: ['Utility Classes', 'Responsive Grids', 'Flexbox'], featured: false, highlight: 'Mobile-first layout design, responsive component styling, and rapid UI prototyping' },
  { id: 's11', name: 'AJAX / Fetch API', category: 'frameworks', level: 76, years: 2, tags: ['Asynchronous Requests', 'JSON Parsing', 'Promise Handling'], featured: false, highlight: 'Asynchronous frontend-to-backend communication without full page reloads' },

  // Tools & Hardware
  { id: 's12', name: 'Arduino & Microcontrollers', category: 'hardware', level: 82, years: 3, tags: ['ADC Sensors', 'PWM Motors', 'UART Serial', 'Breadboarding'], featured: true, highlight: '5-finger potentiometer input capture and dynamic tactile motor feedback circuit design' },
  { id: 's13', name: 'MySQL Database', category: 'hardware', level: 70, years: 2, tags: ['Relational Schema', 'CRUD Queries', 'Foreign Keys'], featured: true, highlight: 'Relational data modeling, table normalization, and basic SQL join queries' },
  { id: 's14', name: 'AutoDesk Fusion & CAD', category: 'hardware', level: 68, years: 1, tags: ['3D Modeling', 'Enclosure Drafting', 'Dimensional Tolerances'], featured: true, highlight: 'Mechanical enclosure modeling and component dimensioning for physical prototypes' },
  { id: 's15', name: 'Unity3D (Basics)', category: 'hardware', level: 65, years: 1, tags: ['VR Simulation', 'C# Scripting', 'Serial Input Bridge'], featured: true, highlight: 'Scene setup, physics colliders, and receiving real-time sensor streams from Arduino' },
  { id: 's16', name: '3D Printing & Slicing', category: 'hardware', level: 72, years: 2, tags: ['OrcaSlicer', 'Rapid Iteration', 'FDM Tolerances'], featured: false, highlight: 'Preparing CAD models for additive manufacturing and calibrating print parameters' },
  { id: 's17', name: 'Circuit Simulation (Proteus)', category: 'hardware', level: 66, years: 1, tags: ['Schematic Capture', 'Virtual Instruments', 'Signal Verification'], featured: false, highlight: 'Pre-fabrication circuit validation and digital waveform inspection' },

  // Cloud & AI
  { id: 's18', name: 'AWS Cloud & Bedrock', category: 'cloud-ai', level: 65, years: 1, tags: ['Bedrock API', 'Foundation Models', 'Certified Foundations'], featured: true, highlight: 'Certified foundational cloud concepts and evaluating managed LLM endpoints' },
  { id: 's19', name: 'Google Gemini API', category: 'cloud-ai', level: 72, years: 1, tags: ['REST Integration', 'JSON Schema Output', 'SDK Calls'], featured: true, highlight: 'Integrating generative AI for expense classification and financial advice summaries' },
  { id: 's20', name: 'RAG Concepts & Embeddings', category: 'cloud-ai', level: 62, years: 1, tags: ['Context Injection', 'Vector Concepts', 'Semantic Retrieval'], featured: true, highlight: 'Understanding retrieval-augmented architectures and grounding context for prompts' },
  { id: 's21', name: 'Prompt Engineering', category: 'cloud-ai', level: 78, years: 1, tags: ['Role Prompting', 'Few-Shot Examples', 'Constrained JSON'], featured: false, highlight: 'Crafting reliable system prompts and few-shot examples for structured model responses' }
];

export const projectsData: ProjectItem[] = [
  {
    id: 'finance-tracker',
    title: 'Finance Tracker (AI-Powered)',
    summary: 'Comprehensive mobile-first personal finance platform tracking income deductions, tax calculations, expenses, and savings goals with Gemini AI.',
    description: 'A comprehensive, mobile-first personal finance application designed to help users track income, categorize expenses, and project savings goals with precision. Built with TypeScript and React, the system integrates Google Gemini AI for intelligent financial analysis and actionable budgeting advice, helping users navigate income tax deductions and day-to-day expenditure trends with responsive data visualization.',
    category: 'fintech-ai',
    tags: ['TypeScript', 'React.js', 'Google Gemini AI', 'Financial Analytics', 'Tailwind CSS', 'Vercel'],
    metrics: [
      { label: 'Live Deployment', value: 'Vercel Production' },
      { label: 'AI Intelligence', value: 'Gemini API Engine' },
      { label: 'Interface Architecture', value: 'Mobile-First Responsive' }
    ],
    architectureNotes: [
      'Component-driven React + TypeScript structure managing dynamic multi-category financial ledgers',
      'Integration with Google Gemini API for automated fiscal insights and intelligent deduction suggestions',
      'Interactive financial charting translating transaction histories into intuitive budget projections'
    ],
    githubUrl: 'https://github.com/N0OGS/Finanace-Tracker',
    demoUrl: 'https://finanace-tracker-xi.vercel.app',
    featured: true,
    status: 'production',
    stars: 1
  },
  {
    id: 'vr-dental-glove',
    title: 'VR Dental Trainer Haptic Glove (Thesis)',
    summary: 'De La Salle University Computer Engineering Thesis project: tactile feedback glove with 5-channel finger sensors and Unity3D VR integration.',
    description: 'Oliver Nunag\'s undergraduate Computer Engineering Thesis at De La Salle University, completed in April 2026. An advanced glove-based tactile feedback device specifically designed for dental students practicing delicate dental procedures in virtual reality. Features five precision potentiometers along finger joints to capture micro-gestures, transmitting telemetry to a Unity3D medical simulation, with Arduino-controlled DC motors delivering dynamic tactile resistance.',
    category: 'hardware-vr',
    tags: ['DLSU Thesis', 'Arduino', 'Unity3D', 'C/C++', 'Potentiometers', 'Tactile Haptics', 'Robotics'],
    metrics: [
      { label: 'Hand Articulation', value: '5 Precision Sensor Channels' },
      { label: 'Physical Actuation', value: 'Tactile DC Motor Resistance' },
      { label: 'Simulation Engine', value: 'Unity3D Virtual Reality' }
    ],
    architectureNotes: [
      '5-channel potentiometer voltage-divider array converting joint flexion into calibrated spatial coordinates',
      'High-speed serial communication stream transmitting real-time sensor packets between Arduino and Unity3D',
      'Dynamic pulse modulation firmware altering mechanical motor resistance based on simulated tooth enamel density'
    ],
    githubUrl: 'https://github.com/N0OGS',
    featured: true,
    status: 'production',
    stars: 0
  },
  {
    id: 'opencv-finger-mouse',
    title: 'OpenCV Finger Mouse Cursor',
    summary: 'Computer vision platform in Python utilizing OpenCV to translate optical finger gestures into real-time desktop mouse navigation and clicks.',
    description: 'Computer vision project engineered in Python utilizing the OpenCV library. Analyzes live video streams from a standard webcam to detect hand landmarks and gesture kinematics, translating finger movements into native mouse actions including pointer tracking, left-clicks, right-clicks, and dragging without requiring physical hardware.',
    category: 'computer-vision',
    tags: ['Python', 'OpenCV', 'Computer Vision', 'Gesture Recognition', 'Kinematics', 'HCI'],
    metrics: [
      { label: 'Video Processing', value: 'Real-Time 60 FPS' },
      { label: 'Hardware Requisite', value: 'Standard Webcam' },
      { label: 'Control Response', value: 'Sub-20ms Latency' }
    ],
    architectureNotes: [
      'Contour analysis, color-space isolation, and convex hull defect detection for discrete fingertip tracking',
      'Coordinate mapping algorithms converting webcam resolution frames into proportional desktop screen coordinates',
      'Exponential moving average smoothing preventing cursor jitter while preserving responsive gesture execution'
    ],
    githubUrl: 'https://github.com/N0OGS/opencv-finger-cursor',
    featured: true,
    status: 'open-source',
    stars: 0
  },
  {
    id: 'local-host-portfolio',
    title: 'Multi-Server Distributed Portfolio',
    summary: 'Distributed web portfolio architecture concurrently coordinating Node.js and Python backend servers with asynchronous AJAX pipelines.',
    description: 'A local host portfolio ecosystem designed to demonstrate a robust distributed web server architecture. Simultaneously coordinates 3 servers—including Node.js (`server.js`) and Python (`server.py`) runtimes—interacting with an HTML5/JavaScript frontend via asynchronous AJAX communication (`ajax.js`), delivering dynamic user data feeds, interactive calculators, and service modules.',
    category: 'fullstack',
    tags: ['Node.js', 'Python', 'AJAX', 'Multi-Server Architecture', 'JavaScript', 'HTML5/CSS3', 'Vercel'],
    metrics: [
      { label: 'Concurrent Servers', value: 'Node.js + Python' },
      { label: 'Data Protocol', value: 'Asynchronous AJAX' },
      { label: 'Live Deployment', value: 'Vercel Hosted' }
    ],
    architectureNotes: [
      'Multi-runtime backend infrastructure with automated batch startup orchestration (`start_server.bat`)',
      'Decoupled AJAX request handlers routing queries across isolated ports for user logs and calculators',
      'Modular client architecture serving technical documentation, dynamic articles, and profile assets'
    ],
    githubUrl: 'https://github.com/N0OGS/LOCAL-HOST-PORTFOLIO',
    demoUrl: 'https://local-host-portfolio.vercel.app',
    featured: true,
    status: 'production',
    stars: 0
  },
  {
    id: 'room-reservation-system',
    title: 'Campus Room Reservation System',
    summary: 'Java desktop reservation application with data serialization and conflict-detection logic for campus room allocations.',
    description: 'Object-oriented campus scheduling platform written in Java. Built to streamline university facility reservations, the system provides dedicated user interfaces (`Main.java`, `UserDataViewer.java`), structured object serialization (`reservationdata.ser`, `userdata.ser`), and algorithmic validation to eliminate overlapping room bookings across faculties.',
    category: 'software-systems',
    tags: ['Java', 'Object-Oriented Programming', 'Data Serialization', 'Conflict Prevention', 'Desktop Software'],
    metrics: [
      { label: 'Collision Rate', value: '0 Booking Overlaps' },
      { label: 'Persistence Layer', value: 'Java Serialization (.ser)' },
      { label: 'Core Architecture', value: 'Modular OOP Classes' }
    ],
    architectureNotes: [
      'Modular class structure isolating reservation business logic, user authorization, and file serialization',
      'Persistent binary state serialization saving and restoring active timetable slots reliably',
      'Real-time collision validation checking temporal intervals against pre-existing facility reservations'
    ],
    githubUrl: 'https://github.com/N0OGS/room-reservation-system',
    featured: false,
    status: 'open-source',
    stars: 0
  },
  {
    id: 'pokedex',
    title: 'Pokédex Capstone Project',
    summary: 'De La Salle University 1st Year finals capstone project modeling creature statistics, type matrices, and indexed catalog search.',
    description: 'Finals capstone project developed during first-year Computer Engineering at De La Salle University. Demonstrates foundational software engineering and object-oriented programming principles through an interactive Pokédex catalog featuring data modeling, attribute categorization, and indexed search capabilities.',
    category: 'software-systems',
    tags: ['DLSU Capstone', 'OOP', 'Data Structures', 'Search & Filtering', 'First-Year Finals'],
    metrics: [
      { label: 'Project Context', value: 'DLSU 1st Year Finals' },
      { label: 'Data Model', value: 'Indexed Creature Catalog' },
      { label: 'Paradigm', value: 'Object-Oriented Programming' }
    ],
    architectureNotes: [
      'Normalized schema mapping species identifiers, elemental attributes, and computational stats',
      'Efficient multi-field filter algorithm allowing quick lookup across species names and types',
      'Clean separation between domain entity definitions and visual catalog rendering'
    ],
    githubUrl: 'https://github.com/N0OGS/pokedex',
    featured: false,
    status: 'open-source',
    stars: 0
  }
];

export const experienceData: ExperienceItem[] = [
  {
    id: 'exp-1',
    role: 'Design Verification Intern',
    company: 'Lattice Semiconductor Alabang',
    companyUrl: 'https://www.latticesemi.com',
    location: 'Alabang, Muntinlupa City, Philippines',
    period: 'May 2025 — August 2025',
    type: 'Internship',
    current: false,
    achievements: [
      'Accelerated semiconductor design verification cycles utilizing System Verilog and Universal Verification Methodology (UVM).',
      'Collaborated closely with senior verification engineers to troubleshoot, trace, and optimize semiconductor design logic and corner cases.',
      'Developed comprehensive testbench components and functional coverage models to ensure silicon-grade RTL reliability.'
    ],
    technologies: ['System Verilog', 'UVM', 'Semiconductor Verification', 'RTL Debugging', 'Digital Logic']
  },
  {
    id: 'exp-2',
    role: 'Computer Engineering Graduate & Project Lead',
    company: 'De La Salle University',
    companyUrl: 'https://www.dlsu.edu.ph',
    location: 'Manila / Laguna, Philippines',
    period: '2022 — 2026 (Graduated)',
    type: 'Academic Engineering',
    current: false,
    achievements: [
      "Awarded Dean's Lister honors for the First Semester SY 2024 to 2025 in Bachelor of Science in Computer Engineering.",
      'Engineered cutting-edge hardware-software integrations including the VR Dental Trainer Haptic Glove and OpenCV Finger Mouse Cursor.',
      'Built campus software infrastructure including the Java and MySQL Room Reservation System with secure authentication.',
      'Applied a disciplined Data Gathering, Discernment, and Decision (3D) framework to complex telecommunications and cybersecurity coursework.'
    ],
    technologies: ['C/C++', 'Python', 'Java', 'Arduino', 'OpenCV', 'React.js', 'MySQL', 'Unity3D']
  },
  {
    id: 'exp-3',
    role: 'Student Organization Member & Technical Contributor',
    company: 'ACCESS DLSU & ENGLICOM DLSU',
    location: 'De La Salle University, Philippines',
    period: '2023 — 2026',
    type: 'Leadership & Student Governance',
    current: false,
    achievements: [
      'Contributed to technical workshops, student engineering development, and academic projects within the Association of Computer Engineering Students (ACCESS).',
      'Participated in cross-cultural leadership, student engagement, and organizational development within ENGLICOM DLSU.',
      'Demonstrated high-pressure performance, focus, and rigorous work ethic through dedicated experience as a Former Varsity Athlete.'
    ],
    technologies: ['Leadership', 'Event Organization', 'Technical Mentorship', 'High-Pressure Performance']
  }
];

export const activityStatsData: ActivityStats = {
  commitsThisYear: 864,
  prsMerged: 142,
  ossContributions: 48,
  productionUptime: '99.95%',
  languageBreakdown: [
    { name: 'C / C++ & Verilog', percentage: 34, color: '#f34b7d' },
    { name: 'Python', percentage: 26, color: '#3572A5' },
    { name: 'Java', percentage: 18, color: '#b07219' },
    { name: 'JavaScript & React', percentage: 14, color: '#f1e05a' },
    { name: 'HTML / CSS / PHP', percentage: 8, color: '#4F5D95' }
  ],
  weeklyActivity: [
    { day: 'Mon', count: 14 },
    { day: 'Tue', count: 26 },
    { day: 'Wed', count: 35 },
    { day: 'Thu', count: 28 },
    { day: 'Fri', count: 22 },
    { day: 'Sat', count: 16 },
    { day: 'Sun', count: 11 }
  ],
  recentMilestones: [
    {
      id: 'm1',
      date: 'Apr 2026',
      title: 'VR Dental Trainer Haptic Glove (DLSU Thesis Prototype)',
      type: 'deploy',
      details: 'Completed undergraduate thesis project: engineered 5-channel tactile feedback glove using precision potentiometers, Arduino PWM motor resistance, and real-time Unity3D simulation.'
    },
    {
      id: 'm2',
      date: 'Aug 2025',
      title: 'Lattice Semiconductor Verification Testbenches',
      type: 'deploy',
      details: 'Completed Design Verification internship accelerating SystemVerilog and UVM verification testbenches for FPGA hardware blocks.'
    },
    {
      id: 'm3',
      date: 'Jul 2025',
      title: 'AWS Bedrock & Generative AI Specializations',
      type: 'release',
      details: 'Earned AWS credentials across Bedrock Customization, Optimization & Automation, and Foundation Model deployment.'
    },
    {
      id: 'm4',
      date: 'May 2025',
      title: 'Google AI Generative Models Certification',
      type: 'commit',
      details: 'Verified credential in prompt engineering, multimodal architectures, and Google Gemini API integration.'
    },
    {
      id: 'm5',
      date: 'Feb 2025',
      title: "De La Salle University Dean's Lister Academic Honors",
      type: 'speaker',
      details: "Honored with Dean's Lister distinction for First Semester SY 2024–2025 in Computer Engineering at DLSU."
    },
    {
      id: 'm6',
      date: 'Oct 2024',
      title: 'OpenCV Real-Time Optical Gesture Tracking Engine',
      type: 'release',
      details: 'Constructed computer vision kinematics engine mapping optical webcam gestures to responsive desktop mouse navigation.'
    }
  ]
};
