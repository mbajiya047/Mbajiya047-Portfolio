/**
 * ====================================================================
 * POKÉMON GBA SYSTEM PORTFOLIO — CONFIGURATION & DATA SOURCE
 * ====================================================================
 * Profile, Skills, Projects & Certificate Vault for MOHIT BAJIYA
 * B.Tech CSE (Core) Student at SRM University, Delhi NCR
 * ====================================================================
 */

const PORTFOLIO_DATA = {
  // --- TRAINER PROFILE ---
  trainer: {
    name: "MOHIT BAJIYA",
    title: "B.Tech CSE Student • AI & Robotics Enthusiast • Developer",
    class: "COMPUTER SCIENCE & AI/ROBOTICS",
    level: 99,
    rank: "S-TIER",
    hp: "100 / 100",
    mp: "100 / 100",
    status: "ONLINE // BUILDING TECH",
    location: "Rajasthan, India",
    affiliation: "SRM University, Delhi NCR (2025–2029)",
    phone: "+91 9461147252",
    email: "mbajiya047@gmail.com",
    avatarText: "M",
    avatarImage: "assets/mohit_portrait.jpg",
    resumeUrl: "assets/resume/Mohit_Bajiya_CV.pdf",
    bio: [
      "Motivated and enthusiastic B.Tech Computer Science Engineering student at SRM University with a strong interest in Artificial Intelligence, Machine Learning, Robotics, and Embedded Systems.",
      "Hackathon competitor and builder: Led Team 'Neural Nexus' at Brainwave 2026 (GGSIPU USAR) pitching the ASTRA Cryptographic E-Voting System. Certified in Google AI Agent Bootcamps and Google Analytics.",
      "Continuously mastering modern paradigms: Python, Scikit-Learn, Machine Learning, C, Embedded Systems, React, Vite, FastAPI, and LLM Workflow Automation."
    ],
    highlights: [
      { label: "CLASS", value: "AI, ML & EMBEDDED" },
      { label: "PRIMARY TYPE", value: "PYTHON & ROBOTICS" },
      { label: "SECONDARY TYPE", value: "LLMs & REACT/WEB" },
      { label: "SPECIAL MOVE", value: "ASTRA CRYPTO HACKATHON PITCH" }
    ],
    quickStats: [
      { label: "PROJECT QUESTS", value: "8+ BUILDS" },
      { label: "HACKATHONS", value: "BRAINWAVE '26" },
      { label: "CERTIFICATIONS", value: "5+ VAULT ITEMS" },
      { label: "COFFEE CONSUMED", value: "∞ CUPS" }
    ]
  },

  // --- TRAINER STATS (SKILLS) ---
  skills: [
    {
      category: "PROGRAMMING & ML",
      icon: "⚡",
      items: [
        { name: "Python", level: 92, type: "Scripting / AI / ML", exp: "MASTERED" },
        { name: "C Language", level: 73, type: "Core Systems", exp: "PROFICIENT" },
        { name: "Embedded C", level: 82, type: "Microcontrollers", exp: "PROFICIENT" },
        { name: "JavaScript (ES6+) & React", level: 48, type: "Frontend & Apps", exp: "INTERMEDIATE" },
        { name: "HTML5 & CSS3 / Tailwind", level: 92, type: "Responsive UI", exp: "MASTERED" }
      ]
    },
    {
      category: "AI, ML & DATA SCIENCE",
      icon: "🤖",
      items: [
        { name: "Predictive Modeling & Scikit-Learn", level: 88, type: "Machine Learning", exp: "ADVANCED" },
        { name: "FastAPI & Real-time AI Streaming", level: 88, type: "AI Backend", exp: "ADVANCED" },
        { name: "Google Gemini API & LLMs", level: 90, type: "AI Integration", exp: "ADVANCED" },
        { name: "Prompt Engineering & Automation", level: 94, type: "Productivity", exp: "MASTERED" },
        { name: "Pandas, NumPy & Matplotlib", level: 88, type: "Data Analytics", exp: "ADVANCED" }
      ]
    },
    {
      category: "ROBOTICS & EMBEDDED SYSTEMS",
      icon: "🦾",
      items: [
        { name: "Arduino & Microcontrollers", level: 88, type: "Hardware", exp: "ADVANCED" },
        { name: "Servo Motors & Locomotion", level: 85, type: "Robotics", exp: "PROFICIENT" },
        { name: "Sensors & IoT Integration", level: 82, type: "Electronics", exp: "PROFICIENT" },
        { name: "Hardware Testing & Assembly", level: 86, type: "Troubleshooting", exp: "ADVANCED" },
        { name: "Multi-Legged Walking Kinematics", level: 84, type: "Robotics Algorithms", exp: "PROFICIENT" }
      ]
    },
    {
      category: "CS FUNDAMENTALS & TOOLS",
      icon: "🛠️",
      items: [
        { name: "Git & GitHub Version Control", level: 92, type: "Collaboration", exp: "MASTERED" },
        { name: "Vite, Node.js & React Ecosystem", level: 86, type: "Web Tooling", exp: "ADVANCED" },
        { name: "Flask & REST API Architecture", level: 85, type: "Backend", exp: "PROFICIENT" },
        { name: "Operating Systems (OS)", level: 84, type: "Core CS", exp: "PROFICIENT" },
        { name: "Computer Networks (CN)", level: 80, type: "Core CS", exp: "PROFICIENT" },
        { name: "VS Code & Arduino IDE", level: 95, type: "Development", exp: "MASTERED" }
      ]
    }
  ],

  // --- QUEST LOG (PROJECTS) ---
  quests: [
    {
      id: "quest-001",
      questNo: "QUEST #001",
      title: "ASTRA — Decentralized E-Voting System",
      type: "HACKATHON SPOTLIGHT / WEB3 / CRYPTO",
      category: "featured",
      featured: true,
      difficulty: "★★★★★",
      status: "COMPLETED (HACKATHON SHOWCASE)",
      statusColor: "gold",
      summary: "Showcased at the Brainwave 2026 Hackathon (GGSIPU USAR) by Team 'Neural Nexus'. A tamper-resistant, decentralized cryptographic voting system with zero-knowledge voter identity verification and live transparent audits.",
      techStack: ["Node.js", "Express", "React", "MongoDB", "Cryptography", "REST APIs"],
      features: [
        "Cryptographic voter token generation preserving complete ballot anonymity",
        "Immutable audit trails preventing double-voting and unauthorized tallies",
        "Live election analytics monitor with dynamic reactive charts",
        "Presented & defended before distinguished university jury at Brainwave 2026"
      ],
      challenges: "Ensuring zero-leakage voter privacy while maintaining instant cryptographic auditability and high concurrency.",
      learned: "Cryptographic state design, rapid hackathon prototyping, technical pitching, and secure system architecture.",
      githubUrl: "https://github.com/mbajiya047/ASTRA-E-Voting-System",
      liveDemoUrl: "#",
      thumbnailIcon: "🗳️"
    },
    {
      id: "quest-002",
      questNo: "QUEST #002",
      title: "Sahayak AI — Public Good Streaming Assistant",
      type: "AI / FASTAPI / GEMINI STREAMING",
      category: "ai",
      featured: true,
      difficulty: "★★★★☆",
      status: "COMPLETED",
      statusColor: "blue",
      summary: "An intelligent public good AI assistant featuring real-time token streaming via FastAPI SSE endpoints, multi-language query support, and Google Gemini API integration.",
      techStack: ["Python", "FastAPI", "Google Gemini API", "Streaming SSE", "Pydantic", "CORS"],
      features: [
        "Real-time token streaming endpoint (/api/ask/stream) for instant conversational responsiveness",
        "Google Gemini API integration with custom system prompts for public good guidance",
        "Pydantic schema validation, robust CORS configuration, and asynchronous request handling",
        "Modular backend architecture with clean service layer abstractions and health check monitoring"
      ],
      challenges: "Designing low-latency Server-Sent Events (SSE) streaming while maintaining resilient API connection pooling.",
      learned: "FastAPI asynchronous streaming pipelines, Gemini API service layer encapsulation, and production API design.",
      githubUrl: "https://github.com/parthshandilya2007-ai/Sahayak_AI",
      liveDemoUrl: "#",
      thumbnailIcon: "🤖"
    },
    {
      id: "quest-003",
      questNo: "QUEST #003",
      title: "Predictive Modeling & Risk Scoring for Bank Churn",
      type: "MACHINE LEARNING / DATA SCIENCE",
      category: "ai",
      featured: true,
      difficulty: "★★★★★",
      status: "COMPLETED",
      statusColor: "gold",
      summary: "A machine learning predictive risk-scoring system analyzing bank customer attrition dynamics, evaluating churn probabilities, and identifying critical customer retention factors.",
      techStack: ["Python", "Scikit-Learn", "Pandas", "NumPy", "Matplotlib", "Seaborn", "XGBoost"],
      features: [
        "End-to-end exploratory data analysis (EDA) on banking customer demographic & financial profiles",
        "Predictive classification modeling comparing Random Forest, Logistic Regression, and XGBoost",
        "Quantitative risk scoring evaluating churn probabilities, ROC-AUC curves, and confusion matrices",
        "Feature importance diagnostics highlighting key retention drivers (credit score, balance, activity, tenure)"
      ],
      challenges: "Handling class imbalance in banking customer churn data and calibrating probability thresholds for proactive retention alerts.",
      learned: "Machine learning model selection, feature engineering, classification evaluation metrics, and business risk modeling.",
      githubUrl: "https://github.com/mbajiya047/Predictive-Modeling-and-Risk-Scoring-for-Bank-Customer-Churn",
      liveDemoUrl: "#",
      thumbnailIcon: "📈"
    },
    {
      id: "quest-004",
      questNo: "QUEST #004",
      title: "Ziaka Cafe Prototype — React Ordering App",
      type: "REACT / VITE / WEB APP",
      category: "web",
      featured: true,
      difficulty: "★★★☆☆",
      status: "COMPLETED",
      statusColor: "green",
      summary: "A modern, high-performance digital cafe ordering prototype engineered with React and Vite, featuring interactive menu catalogs, cart calculations, and responsive UI.",
      techStack: ["React.js", "Vite", "JavaScript (ES6)", "HTML5", "CSS3", "Oxlint"],
      features: [
        "Interactive cafe menu catalog with category filtering and instant search",
        "Reactive shopping cart with live total calculations and order checkout flows",
        "Blazing fast development & build configuration using Vite and modern JSX architecture",
        "Mobile-first responsive layout with tactile button interactions and clean typography"
      ],
      challenges: "Maintaining fluid component state re-renders across cart updates without unnecessary overhead.",
      learned: "React component architecture, Vite tooling ecosystem, state management patterns, and UI ergonomics.",
      githubUrl: "https://github.com/mbajiya047/Ziaka-cafe-prototype",
      liveDemoUrl: "#",
      thumbnailIcon: "☕"
    },
    {
      id: "quest-005",
      questNo: "QUEST #005",
      title: "Hexapod Robot — Multi-Legged Robotic System",
      type: "ROBOTICS / EMBEDDED C",
      category: "systems",
      featured: true,
      difficulty: "★★★★★",
      status: "COMPLETED",
      statusColor: "gold",
      summary: "An intelligent multi-legged robotic system capable of stable locomotion and terrain navigation using servo motor control, microcontrollers, sensors, and power modules.",
      techStack: ["Arduino", "Embedded C", "Robotics", "Servo Motors", "Sensors", "Microcontrollers"],
      features: [
        "Designed and assembled physical multi-jointed robotic hexapod structure with 6 articulated legs",
        "Programmed movement and walking algorithms for stable, balance-accurate multi-legged locomotion",
        "Integrated servo motors, sensor feedback loops, and power management modules",
        "Conducted extensive hardware testing, vibration troubleshooting, and stability optimization"
      ],
      challenges: "Synchronizing multiple high-torque servo motors with precise PWM signals while preserving mechanical center of gravity and battery efficiency.",
      learned: "Mastered embedded robotics architecture, kinematic gait pacing, real-time sensor integration, and hardware diagnostics.",
      githubUrl: "https://github.com/mbajiya047",
      liveDemoUrl: "#",
      thumbnailIcon: "🦾"
    },
    {
      id: "quest-006",
      questNo: "QUEST #006",
      title: "Gemini AI Chatbot",
      type: "AI / LLM / FULL STACK",
      category: "ai",
      featured: false,
      difficulty: "★★★★☆",
      status: "COMPLETED",
      statusColor: "blue",
      summary: "A responsive, context-aware conversational AI companion leveraging the Google Gemini API with a modern glassmorphism UI, real-time streaming, and automatic retry resilience.",
      techStack: ["HTML5", "CSS3", "JavaScript (ES6)", "Google Gemini API"],
      features: [
        "Real-time, context-aware multi-turn conversations using Google Gemini API",
        "Sleek glassmorphism UI with auto-resizing text input, chat history, and typing indicators",
        "Automatic retry mechanism with exponential backoff on busy API responses",
        "Markdown rendering engine for bold typography and syntax-formatted code blocks"
      ],
      challenges: "Handling rate limits gracefully and streaming markdown tokens cleanly without UI stutter.",
      learned: "Deep prompt engineering, API error-handling architectures, asynchronous JavaScript, and user-centric frontend ergonomics.",
      githubUrl: "https://github.com/mbajiya047/gemini-chatbot",
      liveDemoUrl: "#",
      thumbnailIcon: "💬"
    },
    {
      id: "quest-007",
      questNo: "QUEST #007",
      title: "Sentiment Analyzer Web App",
      type: "NLP / PYTHON FLASK",
      category: "ai",
      featured: false,
      difficulty: "★★★☆☆",
      status: "COMPLETED",
      statusColor: "green",
      summary: "A Flask-based Natural Language Processing application classifying text sentiment as Positive, Negative, or Neutral with polarity and subjectivity scores, deployed on Render.",
      techStack: ["Python", "Flask", "TextBlob", "HTML5", "CSS3", "JavaScript", "Gunicorn"],
      features: [
        "Real-time NLP sentiment classification into Positive, Negative, or Neutral categories",
        "Precise scoring metrics for polarity (-1.0 to +1.0) and subjectivity (0.0 to 1.0)",
        "Modern, responsive web interface with instant visual sentiment gauges",
        "Production deployment on Render cloud infrastructure using Gunicorn WSGI"
      ],
      challenges: "Providing accurate polarity classification across ambiguous, colloquial, and noisy natural language phrases.",
      learned: "TextBlob NLP pipelines, Python Flask REST architecture, WSGI production deployment, and responsive UI design.",
      githubUrl: "https://github.com/mbajiya047/sentiment-analyzer",
      liveDemoUrl: "#",
      thumbnailIcon: "🎭"
    },
    {
      id: "quest-008",
      questNo: "QUEST #008",
      title: "Student Performance Data Analysis Dashboard",
      type: "DATA SCIENCE / FLASK",
      category: "web",
      featured: false,
      difficulty: "★★★★☆",
      status: "COMPLETED",
      statusColor: "gold",
      summary: "A comprehensive data analysis dashboard processing student performance CSV datasets to compute statistical averages, scatter plots, Matplotlib correlation heatmaps, and REST APIs.",
      techStack: ["Python", "Flask", "Pandas", "NumPy", "Matplotlib", "HTML5", "CSS3", "JavaScript"],
      features: [
        "Automated CSV data ingestion, cleaning, and statistical processing with Pandas & NumPy",
        "Dynamic calculation of subject-wise averages, distribution metrics, and correlation matrices",
        "Visual chart generation: interactive bar charts, scatter plots, and Matplotlib heatmaps",
        "REST API endpoints returning structured JSON data for decoupled frontend consumption"
      ],
      challenges: "Generating and streaming high-resolution visual plots on the fly while maintaining snappy REST API response times.",
      learned: "Exploratory Data Analysis (EDA), statistical modeling in Python, data visualization pipelines, and REST API design.",
      githubUrl: "https://github.com/mbajiya047/data_analysis_project",
      liveDemoUrl: "#",
      thumbnailIcon: "📊"
    }
  ],

  // --- CERTIFICATE VAULT (OFFICIAL CREDENTIALS & HACKATHONS) ---
  certificates: [
    {
      id: "cert-01",
      title: "Brainwave 2026 Hackathon — ASTRA Project Presentation",
      category: "HACKATHON SPOTLIGHT",
      issuer: "Guru Gobind Singh Indraprastha University (GGSIPU), East Delhi Campus",
      department: "University School of Automation and Robotics (USAR) & ACTS-EDC",
      team: "Neural Nexus (Mohit Bajiya)",
      date: "16th Aug & 22nd Aug, 2026",
      certNo: "USAR/ACTS/BRAINWAVE/2026/P/138",
      image: "assets/certificates/brainwave_hackathon_astra.jpg",
      badgeColor: "gold",
      summary: "Successfully pitched and presented the ASTRA Decentralized E-Voting project at Brainwave 2026 Hackathon. Evaluated by Dean Prof. Arvinder Kaur, Assoc. Dir. Prof. Rahul Johari, Dr. Neeta Singh, and Dr. Amar Arora.",
      highlights: [
        "Pitched ASTRA: Zero-knowledge cryptographic voting security against ballot tampering",
        "Demonstrated working real-time analytical dashboard and voter verification pipeline",
        "Represented Team 'Neural Nexus' with rigorous technical defense before university panel"
      ]
    },
    {
      id: "cert-02",
      title: "Google for Developers — Build with AI Bootcamp (Jaipur)",
      category: "GOOGLE AI BOOTCAMP",
      issuer: "Google for Developers & Hack2Skill (H2S)",
      department: "Build with AI Bootcamps",
      date: "26/08/2026",
      certNo: "2026H2S08BWAIBJPR-P00037",
      image: "assets/certificates/google_build_with_ai.png",
      badgeColor: "blue",
      summary: "Demonstrated production technical skills required to build AI agents, architect LLM workflows, and integrate generative AI into production-ready architectures.",
      highlights: [
        "Hands-on AI Agent development & prompt orchestration",
        "Generative AI model fine-tuning & production workflow integration",
        "Official certification from Google for Developers"
      ]
    },
    {
      id: "cert-03",
      title: "Google Analytics Certification (2026–2027)",
      category: "GOOGLE CERTIFICATION",
      issuer: "Google",
      department: "Google Analytics Academy",
      date: "August 16, 2026 — August 16, 2027",
      certNo: "191598478",
      image: "assets/certificates/google_analytics.jpg",
      badgeColor: "yellow",
      summary: "Certified in web and app analytics fundamentals, event tracking, audience segmentation, traffic reporting, and data-driven digital measurement strategies.",
      highlights: [
        "Web & App user behavioral telemetry and event stream modeling",
        "Conversion funnel optimization and audience reporting",
        "Official verified credential from Google"
      ]
    },
    {
      id: "cert-04",
      title: "Python Development Virtual Internship Certificate",
      category: "INDUSTRY INTERNSHIP",
      issuer: "QSkill (Squarcell Resource India Pvt. Ltd. / SR INDIA)",
      department: "Python Engineering Division",
      date: "6th July – 6th August 2026",
      certNo: "qspy20260711276",
      image: "assets/certificates/qskill_python_internship.jpg",
      badgeColor: "green",
      summary: "Awarded Certificate of Completion for high-performance virtual internship in Python development, algorithm design, and collaborative problem-solving.",
      highlights: [
        "Completed 31-day rigorous Python software development curriculum",
        "Recognized for strong analytical capabilities and swift adoption of emerging tech",
        "Verified by Co-Founder Subhajit Roy (SR INDIA)"
      ]
    },
    {
      id: "cert-05",
      title: "Official Letter of Recommendation — QSkill / SR INDIA",
      category: "RECOMMENDATION LETTER",
      issuer: "Subhajit Roy (Co-Founder, SR INDIA)",
      department: "Executive Leadership, SR INDIA",
      date: "10th August, 2026",
      certNo: "SID: qspy20260711276",
      image: "assets/certificates/qskill_recommendation_letter.jpg",
      badgeColor: "purple",
      summary: "Formal Letter of Recommendation endorsing Mohit Bajiya for excellence in analytical thinking, high productivity, fast skill acquisition, and team leadership.",
      highlights: [
        "'Exhibited performance in this role and made valuable contribution to our organization'",
        "'Quickly acquired new skills and adeptly adapted to emerging technologies'",
        "'Wholeheartedly recommended for any future software engineering endeavors'"
      ]
    },
    {
      id: "cert-06",
      title: "Commonwealth Bank — Tech Explorer Job Simulation",
      category: "FORAGE JOB SIMULATION",
      issuer: "Commonwealth Bank & Forage",
      department: "Technology & Engineering Simulation",
      date: "August 16th, 2026",
      certNo: "User Code: 6a770633c074a0be77302097",
      image: "assets/certificates/forage_commonwealth_bank.png",
      badgeColor: "gold",
      summary: "Completed comprehensive practical tasks in Software Engineering (iOS widget), Requirements Gathering, Cybersecurity (IAM), and Data Science for targeted advertising.",
      highlights: [
        "Software Engineering: Building an iOS Widget",
        "Tech Analysis: Requirements Gathering & Stakeholder Coordination",
        "Cybersecurity: Identity and Access Management",
        "Data Science: Behavioral Data Analytics for Online Advertising"
      ]
    }
  ],

  // --- TRAINER JOURNEY (EDUCATION & MILESTONES) ---
  journey: [
    {
      level: "LV. 01",
      route: "ROUTE 01 // RAJASTHAN FOUNDATION",
      title: "Secondary & Higher Secondary Education",
      institution: "Senior Secondary School, Rajasthan",
      period: "2021 — 2024",
      grade: "Science & Mathematics Stream",
      description: "Built strong fundamentals in Mathematics, Physics, and logical problem solving. First spark of passion for robotics, microcontrollers, and computer programming.",
      badge: "🌱 SEEDLING",
      skillsLearned: ["Mathematics", "Physics", "Logic Building", "Basics of C / Python"]
    },
    {
      level: "LV. 10",
      route: "ROUTE 04 // SRM UNIVERSITY CAMPUS",
      title: "Bachelor of Technology — Computer Science Engineering (Core)",
      institution: "SRM University, Delhi NCR, Sonipat, Haryana",
      period: "2025 — 2029 (Currently 1st Year, 2nd Semester)",
      grade: "B.Tech CSE (Core)",
      description: "Undergraduate computer science engineering studies covering Operating Systems, Computer Networks, C Programming, Algorithms, and Emerging AI Technologies.",
      badge: "⚡ SCHOLAR",
      skillsLearned: ["Operating Systems", "Computer Networks", "C Programming", "Software Engineering", "AI Integration"]
    },
    {
      level: "LV. 25",
      route: "ROUTE 09 // HACKATHONS & LABS",
      title: "Brainwave 2026 Hackathon & AI Agent Systems",
      institution: "GGSIPU USAR • Google for Developers • QSkill",
      period: "2025 — 2026",
      grade: "Team Neural Nexus Lead • 5+ Certified Credentials",
      description: "Pitched ASTRA at Brainwave 2026 Hackathon, built Sahayak AI streaming assistant with FastAPI & Gemini, engineered Churn ML models, and earned Google AI Certification.",
      badge: "🏆 HACKATHON BUILDER",
      skillsLearned: ["ASTRA Cryptography", "FastAPI Streaming", "Google AI Agents", "Scikit-Learn", "Embedded C"]
    },
    {
      level: "LV. 50",
      route: "VICTORY ROAD // FUTURE HORIZONS",
      title: "Software Engineering, AI & Robotics Industry Quests",
      institution: "Target: SDE / AI Engineer / ML & Embedded Roles",
      period: "2026 — 2029+",
      grade: "Actively Seeking Internships & Collaborations",
      description: "Ready to deploy skills in full-stack Python/React development, AI agents, machine learning modeling, and embedded systems to innovative engineering teams.",
      badge: "👑 CHAMPION",
      skillsLearned: ["Production Scalability", "AI/ML Workflows", "Hardware Integration", "Cross-Functional Collaboration"]
    }
  ],

  // --- BADGES & ACHIEVEMENTS ---
  achievements: [
    {
      id: "badge-01",
      name: "BRAINWAVE HACKATHON BADGE",
      category: "HACKATHONS",
      title: "Brainwave 2026 — ASTRA Pitch Lead",
      issuer: "GGSIPU USAR (Team Neural Nexus)",
      date: "August 2026",
      description: "Pitched and demonstrated ASTRA Decentralized E-Voting System before university jury and dean at GGSIPU East Delhi Campus.",
      icon: "🏆",
      color: "#f8d030"
    },
    {
      id: "badge-02",
      name: "GOOGLE AI BOOTCAMP BADGE",
      category: "ARTIFICIAL INTELLIGENCE",
      title: "Build with AI Bootcamp (Jaipur)",
      issuer: "Google for Developers / Hack2Skill",
      date: "August 26, 2026",
      description: "Demonstrated skills required to build AI agents, architect workflows, and integrate generative AI into production systems.",
      icon: "🤖",
      color: "#3090e8"
    },
    {
      id: "badge-03",
      name: "GOOGLE ANALYTICS BADGE",
      category: "CERTIFICATIONS",
      title: "Google Analytics Certification",
      issuer: "Google (ID: 191598478)",
      date: "Aug 16, 2026 — Aug 16, 2027",
      description: "Certified by Google in web and app analytics fundamentals, event tracking, and data-driven digital measurement.",
      icon: "📈",
      color: "#28d060"
    },
    {
      id: "badge-04",
      name: "QSKILL RECOMMENDATION BADGE",
      category: "INTERNSHIPS",
      title: "Letter of Recommendation & Cert.",
      issuer: "Co-Founder Subhajit Roy (SR INDIA)",
      date: "August 2026",
      description: "Awarded Letter of Recommendation and completion certificate for excellence in Python development and rapid tech adoption.",
      icon: "📜",
      color: "#9955bb"
    },
    {
      id: "badge-05",
      name: "CHURN ML PREDICTOR BADGE",
      category: "MACHINE LEARNING",
      title: "Bank Customer Churn Risk Modeler",
      issuer: "Machine Learning & Scikit-Learn Lab",
      date: "2026",
      description: "Engineered predictive classification pipelines evaluating customer churn risk probabilities with Random Forest and XGBoost.",
      icon: "📊",
      color: "#f8d030"
    },
    {
      id: "badge-06",
      name: "HEXAPOD ROBOTICS BADGE",
      category: "ROBOTICS",
      title: "Intelligent Multi-Legged Robot Creator",
      issuer: "SRM Academic Robotics Lab",
      date: "2026",
      description: "Engineered and assembled a functional 6-legged robotic system with custom locomotion gait and balance algorithms in Embedded C.",
      icon: "🦾",
      color: "#d84838"
    }
  ],

  // --- MISSION HISTORY (EXPERIENCE) ---
  missions: [
    {
      id: "mission-01",
      role: "Hackathon Team Lead & System Architect",
      organization: "Brainwave 2026 Hackathon — Team Neural Nexus",
      period: "16th & 22nd August 2026",
      location: "GGSIPU East Delhi Campus",
      type: "HACKATHON COMPETITION",
      responsibilities: [
        "Led Team 'Neural Nexus' to design and showcase the ASTRA Cryptographic E-Voting System.",
        "Engineered real-time voting audit architecture preventing ballot fraud and ensuring voter anonymity.",
        "Delivered end-to-end technical pitch and live demo before faculty panel, Dean USAR, and industry judges."
      ],
      techUsed: ["ASTRA Protocol", "React", "Node.js", "Cryptography", "REST APIs", "Team Leadership"]
    },
    {
      id: "mission-02",
      role: "Python Development Intern",
      organization: "QSkill (Squarcell Resource India Pvt. Ltd. / SR INDIA)",
      period: "July 6, 2026 – August 6, 2026",
      location: "Virtual Internship",
      type: "INTERNSHIP",
      responsibilities: [
        "Developed Python algorithms and modules focusing on problem-solving, structured logic, and data handling.",
        "Awarded Certificate of Completion and Letter of Recommendation from Subhajit Roy, Co-Founder of SR INDIA.",
        "Recognized for strong analytical skills, quick adaptation to emerging technologies, and effective team collaboration."
      ],
      techUsed: ["Python", "Algorithms", "Data Structures", "Git", "Problem Solving"]
    },
    {
      id: "mission-03",
      role: "AI Agent Builder & Participant",
      organization: "Google for Developers — Build with AI Bootcamp",
      period: "August 2026",
      location: "Jaipur, Rajasthan",
      type: "TECHNICAL BOOTCAMP",
      responsibilities: [
        "Practiced hands-on generative AI integration, prompt design, and AI agent workflow architecture.",
        "Built prototypes utilizing Google Gemini API and LLM tool-calling capabilities.",
        "Earned verified Google for Developers Build with AI Certification."
      ],
      techUsed: ["Google Gemini API", "AI Agents", "Prompt Engineering", "Workflow Automation"]
    },
    {
      id: "mission-04",
      role: "Lead Hardware & Software Developer",
      organization: "Hexapod Robotic System — Academic Project",
      period: "3 Months Project Duration",
      location: "SRM University, Haryana",
      type: "ACADEMIC PROJECT",
      responsibilities: [
        "Designed and assembled physical structure of multi-legged hexapod robot with 6 articulated legs.",
        "Programmed movement and walking algorithms in Embedded C and Arduino IDE for smooth balance and terrain locomotion.",
        "Integrated microcontrollers, servo motors, sensors, and power distribution modules with rigorous troubleshooting."
      ],
      techUsed: ["Arduino", "Embedded C", "Robotics", "Servo Motors", "Sensors", "Hardware Integration"]
    }
  ],

  // --- GITHUB & CODING ACTIVITY (TERMINAL) ---
  activityLog: {
    githubUsername: "mbajiya047",
    totalContributions: "Active Builder & Researcher",
    streak: "Consistent Project Sprints",
    currentFocus: "ASTRA Voting Security, Machine Learning Churn Scoring, and FastAPI AI Agents",
    recentCommits: [
      { repo: "ASTRA-E-Voting-System", msg: "feat: present cryptographic proof pipeline at Brainwave 2026", time: "Recent" },
      { repo: "Sahayak_AI", msg: "feat: implement /api/ask/stream streaming endpoint with Gemini API", time: "Recent" },
      { repo: "Predictive-Modeling-and-Risk-Scoring-for-Bank-Customer-Churn", msg: "feat: add Random Forest & XGBoost risk scoring with ROC-AUC analysis", time: "Recent" },
      { repo: "Ziaka-cafe-prototype", msg: "feat: build reactive cart and menu catalog with React & Vite", time: "Recent" }
    ],
    terminalHelp: [
      { cmd: "help", desc: "List all available system commands" },
      { cmd: "trainer", desc: "Display Mohit's trainer profile card" },
      { cmd: "certs", desc: "View all verified certificates & hackathon awards" },
      { cmd: "skills", desc: "Inspect current developer & hardware stat levels" },
      { cmd: "quests", desc: "View all active & completed project quests" },
      { cmd: "badges", desc: "View unlocked certifications & achievements" },
      { cmd: "contact", desc: "Show connection channels, phone & email" },
      { cmd: "clear", desc: "Clear the terminal screen" },
      { cmd: "sudo hire-me", desc: "Unlock fast-track recruiter pipeline!" }
    ]
  },

  // --- CONTACT & SOCIAL COORDINATES ---
  contact: {
    phone: "+91 9461147252",
    email: "mbajiya047@gmail.com",
    github: "https://github.com/mbajiya047",
    linkedin: "https://www.linkedin.com/in/mohit-bajiya-039853391/",
    location: "Rajasthan, India",
    university: "SRM University, Delhi NCR, Sonipat, Haryana",
    availabilityStatus: "OPEN FOR INTERNSHIPS & COLLABORATIONS",
    formEndpoint: "https://formspree.io/f/xkjngwbz"
  }
};

// Freeze object to avoid accidental mutation
if (typeof Object.freeze === "function") {
  Object.freeze(PORTFOLIO_DATA);
}
