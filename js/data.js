/**
 * ====================================================================
 * MOHIT BAJIYA — DEVELOPER & TRAINER DATA LAYER (GBA SYSTEM THEME)
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
      { label: "SPECIALTY", value: "FASTAPI & KINEMATICS" }
    ],
    quickStats: [
      { label: "PROJECTS", value: "8 ACTIVE QUESTS" },
      { label: "HACKATHONS", value: "BRAINWAVE '26" },
      { label: "CERTIFICATIONS", value: "7 VAULT ITEMS" },
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
      id: "quest-astra",
      questNo: "QUEST #001",
      title: "ASTRA — Decentralized Cryptographic E-Voting System",
      category: "Full Stack Web",
      type: "Cryptographic Security / Hackathon Project",
      difficulty: "★★★★★ (S-RANK)",
      status: "PITCHED & DEFENDED",
      statusColor: "status-gold",
      thumbnailIcon: "🛡️",
      summary: "Pitched and presented at Brainwave 2026 Hackathon (GGSIPU USAR). Designed with zero-knowledge cryptographic safeguards, biometric voter tokens, and verifiable audit trails to eliminate voter coercion and tampering.",
      description: "ASTRA is a next-generation electronic voting protocol combining zero-knowledge proof cryptography, biometric voter authorization, and tamper-resistant audit ledgers. Built and defended at Brainwave 2026 before university jury and dean.",
      techStack: ["Python", "FastAPI", "Cryptography", "React", "SHA-256", "Zero-Knowledge Proofs"],
      githubUrl: "https://github.com/mbajiya047/ASTRA-E-Voting-System",
      liveDemoUrl: "#",
      featured: true,
      expReward: "+1500 EXP",
      highlights: [
        "Cryptographic proof-of-vote ensuring 100% election auditability",
        "Presented at USAR GGSIPU Brainwave 2026 Hackathon",
        "Real-time election dashboard with live integrity verification"
      ]
    },
    {
      id: "quest-sahayak",
      questNo: "QUEST #002",
      title: "Sahayak AI — Real-Time Streaming Assistant",
      category: "AI & ML",
      type: "AI Agent & Backend API",
      difficulty: "★★★★☆ (A-RANK)",
      status: "COMPLETED",
      statusColor: "status-green",
      thumbnailIcon: "🤖",
      summary: "High-performance AI assistant backend built with FastAPI and Google Gemini API, delivering low-latency real-time response streaming via Server-Sent Events (SSE).",
      description: "Engineered robust conversational AI system utilizing Google Gemini API and FastAPI streaming architecture. Features token streaming, multi-turn dialogue management, and contextual prompt engineering.",
      techStack: ["FastAPI", "Python", "Google Gemini API", "SSE Streaming", "Prompt Engineering"],
      githubUrl: "https://github.com/parthshandilya2007-ai/Sahayak_AI",
      liveDemoUrl: "#",
      featured: true,
      expReward: "+1200 EXP",
      highlights: [
        "Real-time Server-Sent Events (SSE) streaming API",
        "Google Gemini API integration with custom agent routing",
        "Ultra-low latency async FastAPI architecture"
      ]
    },
    {
      id: "quest-bank-churn",
      questNo: "QUEST #003",
      title: "Predictive Modeling & Risk Scoring for Bank Customer Churn",
      category: "AI & ML",
      type: "Machine Learning & Risk Analytics",
      difficulty: "★★★★☆ (A-RANK)",
      status: "COMPLETED",
      statusColor: "status-green",
      thumbnailIcon: "📊",
      summary: "End-to-end Machine Learning pipeline utilizing Random Forest, XGBoost, and Scikit-Learn to forecast customer attrition and generate risk scores for proactive retention.",
      description: "Data science and ML project utilizing feature engineering, SMOTE imbalance handling, Random Forest, and XGBoost classifiers. Evaluated with ROC-AUC curves and confusion matrices to calculate individual customer retention risk scores.",
      techStack: ["Python", "Scikit-Learn", "XGBoost", "Pandas", "Matplotlib", "ROC-AUC"],
      githubUrl: "https://github.com/mbajiya047/Predictive-Modeling-and-Risk-Scoring-for-Bank-Customer-Churn",
      liveDemoUrl: "#",
      featured: true,
      expReward: "+1000 EXP",
      highlights: [
        "Ensemble ML modeling with Random Forest & XGBoost",
        "High ROC-AUC accuracy and feature importance ranking",
        "Actionable risk-scoring output for customer retention strategy"
      ]
    },
    {
      id: "quest-hexapod",
      questNo: "QUEST #004",
      title: "Hexapod Multi-Legged Kinematics Robot",
      category: "Robotics & IoT",
      type: "Robotics & Hardware Engineering",
      difficulty: "★★★★☆ (A-RANK)",
      status: "COMPLETED",
      statusColor: "status-green",
      thumbnailIcon: "🦾",
      summary: "Designed and engineered an articulated 6-legged walking robot using Arduino, servo motor arrays, and Embedded C for stable multi-terrain balance and forward kinematics.",
      description: "Custom-built hexapod robot featuring 18 degrees of freedom (DOF). Programmed tripod-gait walking algorithms, body posture balance, and obstacle navigation using Arduino and Embedded C.",
      techStack: ["Arduino", "Embedded C", "Servo Motors", "Kinematics", "Hardware Prototyping"],
      githubUrl: "https://github.com/mbajiya047",
      liveDemoUrl: "#",
      featured: true,
      expReward: "+1100 EXP",
      highlights: [
        "18-DOF tripod gait locomotion algorithm in Embedded C",
        "Real-time sensor balance and obstacle avoidance",
        "Custom mechanical frame design and servo power distribution"
      ]
    },
    {
      id: "quest-ziaka",
      questNo: "QUEST #005",
      title: "Ziaka Cafe — Modern Responsive Web App Prototype",
      category: "Full Stack Web",
      type: "Frontend & UI/UX Application",
      difficulty: "★★★☆☆ (B-RANK)",
      status: "COMPLETED",
      statusColor: "status-green",
      thumbnailIcon: "☕",
      summary: "A sleek, responsive digital cafe ordering and catalog application prototype crafted with React, modern CSS, and Vite tooling for lightning-fast customer browsing.",
      description: "Interactive single-page cafe application featuring interactive digital menus, categorized food catalog, dynamic shopping cart state management, and modern responsive UI.",
      techStack: ["React", "JavaScript", "Vite", "CSS3", "State Management"],
      githubUrl: "https://github.com/mbajiya047/Ziaka-cafe-prototype",
      liveDemoUrl: "#",
      featured: false,
      expReward: "+800 EXP",
      highlights: [
        "Reactive cart state management and instant price calculation",
        "Mobile-first responsive food menu with category filtering",
        "Vite-powered SPA architecture"
      ]
    },
    {
      id: "quest-student-dashboard",
      questNo: "QUEST #006",
      title: "Student Performance Data Analysis Dashboard",
      category: "AI & ML",
      type: "Data Science & Visual Analytics",
      difficulty: "★★★☆☆ (B-RANK)",
      status: "COMPLETED",
      statusColor: "status-green",
      thumbnailIcon: "📈",
      summary: "Comprehensive analytical data dashboard examining student academic performance metrics across multiple socio-economic and study-habit variables using Pandas and Seaborn.",
      description: "Exploratory data analysis pipeline extracting correlation matrices, regression trends, and academic performance distributions with visual chart exports.",
      techStack: ["Python", "Pandas", "Matplotlib", "Seaborn", "Jupyter Notebook"],
      githubUrl: "https://github.com/mbajiya047",
      liveDemoUrl: "#",
      featured: false,
      expReward: "+750 EXP",
      highlights: [
        "Statistical multi-variable correlation analysis",
        "Automated visual report generation with Seaborn",
        "Actionable performance predictor models"
      ]
    },
    {
      id: "quest-sentiment",
      questNo: "QUEST #007",
      title: "Live Sentiment Analyzer Web Application",
      category: "AI & ML",
      type: "Natural Language Processing (NLP)",
      difficulty: "★★★☆☆ (B-RANK)",
      status: "DEPLOYED",
      statusColor: "status-blue",
      thumbnailIcon: "💬",
      summary: "Real-time NLP web application deployed on Render cloud platform. Analyzes user feedback and text strings to classify polarity (Positive / Neutral / Negative) with confidence scoring.",
      description: "Full-stack NLP service with Flask backend and responsive frontend. Deployed on Render for public accessibility with sub-second sentiment inference.",
      techStack: ["Python", "Flask", "NLTK / TextBlob", "Render Cloud", "HTML5/CSS3"],
      githubUrl: "https://github.com/mbajiya047",
      liveDemoUrl: "#",
      featured: false,
      expReward: "+650 EXP",
      highlights: [
        "Cloud-deployed production Flask microservice on Render",
        "Real-time text tokenization and sentiment classification",
        "Confidence score and emotion breakdown visualizer"
      ]
    },
    {
      id: "quest-gemini-bot",
      questNo: "QUEST #008",
      title: "Gemini AI Multi-Turn Conversational Bot",
      category: "AI & ML",
      type: "Generative AI Application",
      difficulty: "★★☆☆☆ (B-RANK)",
      status: "COMPLETED",
      statusColor: "status-green",
      thumbnailIcon: "⚡",
      summary: "Interactive AI chatbot utilizing Google's Gemini LLM. Supports conversation memory, code explanation, and custom system prompt personas.",
      description: "Lightweight conversational agent built with Python and the Google Generative AI SDK, demonstrating prompt engineering and API error handling.",
      techStack: ["Python", "Google Gemini SDK", "Streamlit / CLI", "API Architecture"],
      githubUrl: "https://github.com/mbajiya047",
      liveDemoUrl: "#",
      featured: false,
      expReward: "+600 EXP",
      highlights: [
        "Multi-turn conversational history management",
        "Zero-shot and few-shot prompt customization",
        "Graceful token quota & rate-limit handling"
      ]
    }
  ],

  // --- CERTIFICATES VAULT ---
  certificates: [
    {
      id: "cert-01",
      title: "Brainwave 2026 Hackathon — ASTRA Project Presentation",
      category: "HACKATHON SPOTLIGHT",
      issuer: "Guru Gobind Singh Indraprastha University (GGSIPU USAR)",
      department: "University School of Automation and Robotics & ACTS-EDC",
      date: "16th & 22nd August, 2026",
      certNo: "USAR/ACTS/BRAINWAVE/2026/P/138",
      image: "assets/certificates/brainwave_hackathon_astra.jpg",
      badgeColor: "gold",
      summary: "Official Certificate of Participation and Pitch Presentation at the Brainwave 2026 Hackathon (East Delhi Campus). Led Team 'Neural Nexus' presenting the ASTRA Cryptographic E-Voting System before university jury and dean.",
      highlights: [
        "Presented ASTRA zero-knowledge voting protocol before university evaluation panel",
        "Certificate signed by Dean Prof. Arvinder Kaur & Assoc. Dir. Prof. Rahul Johari",
        "Recognized for innovative cryptographic voting and election transparency architecture"
      ]
    },
    {
      id: "cert-02",
      title: "Google for Developers — Build with AI Bootcamp (Jaipur)",
      category: "GOOGLE DEVELOPERS",
      issuer: "Google for Developers & Hack2Skill (H2S)",
      department: "Google Developer Groups (GDG)",
      date: "August 26, 2026",
      certNo: "2026H2S08BWAIBJPR-P00037",
      image: "assets/certificates/google_build_with_ai.jpg",
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
    },
    {
      id: "cert-07",
      title: "OOSC 4.0 Hackathon Participation Certificate",
      category: "IIIT ALLAHABAD HACKATHON",
      issuer: "Indian Institute of Information Technology (IIIT), Allahabad",
      department: "Opportunity Open Source Conference (OOSC) 4.0",
      date: "2026",
      certNo: "eb65f01e-ef9e-4179-9f55-78f5389e50c6",
      image: "assets/certificates/iiit_allahabad_oosc_hackathon.png",
      badgeColor: "blue",
      summary: "Official Certificate of Participation awarded to Mohit Bajiya (SRM University, Sonipat) for participating in the OOSC 4.0 Hackathon of Opportunity Open Source Conference organized by Indian Institute of Information Technology (IIIT), Allahabad.",
      highlights: [
        "Participated in the competitive OOSC 4.0 Hackathon organized by IIIT Allahabad",
        "Represented SRM University in Open Source software engineering & collaborative problem solving",
        "Official Verified Credential: ID eb65f01e-ef9e-4179-9f55-78f5389e50c6"
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
      institution: "GGSIPU USAR • Google for Developers • QSkill • IIIT Allahabad",
      period: "2025 — 2026",
      grade: "Team Neural Nexus Lead • 7+ Certified Credentials",
      description: "Pitched ASTRA at Brainwave 2026 Hackathon, competed at IIIT Allahabad OOSC 4.0 Hackathon, built Sahayak AI streaming assistant with FastAPI & Gemini, engineered Churn ML models, and earned Google AI Certification.",
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
      color: "#50b0f8"
    },
    {
      id: "badge-03",
      name: "GOOGLE ANALYTICS BADGE",
      category: "DATA & ANALYTICS",
      title: "Google Analytics Certified (2026–2027)",
      issuer: "Google",
      date: "August 16, 2026",
      description: "Mastered web analytics, event stream telemetry, user acquisition tracking, and conversion optimization.",
      icon: "📈",
      color: "#f8b030"
    },
    {
      id: "badge-04",
      name: "PYTHON ENGINEER BADGE",
      category: "ENGINEERING",
      title: "QSkill Python Virtual Internship",
      issuer: "QSkill (SR INDIA)",
      date: "July – August 2026",
      description: "Recognized for high-performance Python development, algorithm design, and software problem-solving.",
      icon: "🐍",
      color: "#58d888"
    },
    {
      id: "badge-05",
      name: "HARDWARE KINEMATICS BADGE",
      category: "ROBOTICS",
      title: "Hexapod 18-DOF Robot Builder",
      issuer: "Autonomous Robotics Lab",
      date: "2025 – 2026",
      description: "Designed multi-legged walking mechanics, balance kinematics, and Embedded C locomotion control.",
      icon: "🦾",
      color: "#d86050"
    },
    {
      id: "badge-06",
      name: "ACADEMIC EXCELLENCE BADGE",
      category: "ACADEMICS",
      title: "B.Tech CSE Core Undergraduate",
      issuer: "SRM University, Delhi NCR",
      date: "2025 — 2029",
      description: "Pursuing Core Computer Science Engineering with focus on Operating Systems, Networks, and Algorithms.",
      icon: "🎓",
      color: "#b070f8"
    }
  ],

  // --- MISSIONS (WORK EXPERIENCE & INTERNSHIPS) ---
  missions: [
    {
      id: "exp-01",
      role: "Python Software Development Virtual Intern",
      organization: "QSkill (Squarcell Resource India Pvt. Ltd. / SR INDIA)",
      period: "July 6, 2026 — August 6, 2026 (1 Month)",
      location: "Remote / Virtual",
      type: "INTERNSHIP",
      responsibilities: [
        "Developed Python scripts and algorithms for structured data processing and algorithmic problem solving.",
        "Collaborated on module implementation, unit testing, code optimization, and documentation.",
        "Received formal Letter of Recommendation from Co-Founder Subhajit Roy for strong analytical thinking and fast learning."
      ],
      techUsed: ["Python", "Algorithms", "Data Structures", "Git", "Problem Solving"]
    },
    {
      id: "exp-02",
      role: "Team Lead & Lead Presenter (ASTRA Project)",
      organization: "Team 'Neural Nexus' — Brainwave 2026 Hackathon (GGSIPU USAR)",
      period: "16th & 22nd August, 2026",
      location: "GGSIPU East Delhi Campus, Delhi",
      type: "HACKATHON LEADERSHIP",
      responsibilities: [
        "Led team of developers in architecting ASTRA Cryptographic E-Voting System protocol.",
        "Pitched technical architecture and live demonstration before university evaluation committee and Dean Prof. Arvinder Kaur.",
        "Engineered zero-knowledge proof concepts and tamper-resistant election audit pipelines."
      ],
      techUsed: ["FastAPI", "Python", "React", "Zero-Knowledge Proofs", "Cryptography", "Pitch Presentation"]
    },
    {
      id: "exp-03",
      role: "Hardware & Robotics Lead (Hexapod Kinematics Project)",
      organization: "Academic Robotics Lab • SRM University",
      period: "2025 — 2026",
      location: "Sonipat, Haryana",
      type: "HARDWARE R&D",
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
