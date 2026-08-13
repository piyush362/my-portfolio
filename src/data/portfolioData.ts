import type { ProfileData, Project, Experience, Education, SkillCategory, AIShowcaseFeature } from '../types/portfolio';

export const profileData: ProfileData = {
  name: "Piyush Sagar",
  roleTitle: "React Native Engineer & AI Mobile Developer",
  subTitle: "Crafting hyper-fluid, liquid-smooth mobile architectures and integrating state-of-the-art on-device AI capabilities for iOS & Android.",
  bio: "React Native Specialist with 2+ years of experience engineering high-performance cross-platform applications, IoT-connected mobile ecosystems, FinTech platforms, and next-gen AI mobile agent integrations. Creator of enterprise-grade solutions serving tens of thousands of active users across Play Store & App Store.",
  statusText: "Open for High-Impact Mobile & AI Roles",
  location: "Gurgaon, India (Remote Available)",
  email: "PiyushSagarOfficial@gmail.com",
  phone: "+91 8318237810",
  github: "https://github.com/piyush362",
  linkedin: "https://www.linkedin.com/in/piyushsagar362/",
  resumeLink: "https://drive.google.com/file/d/1y-lGDbWklwNKYcYJXSaHsXcfPStGbWs4/view?usp=sharing",
  stats: [
    {
      label: "Production Apps",
      value: "10+",
      description: "Deployed to Play Store & App Store"
    },
    {
      label: "User Rating Avg",
      value: "4.8★",
      description: "Across iOS & Android deployments"
    },
    {
      label: "Code Coverage",
      value: "95%",
      description: "Modular & scalable React Native architecture"
    },
    {
      label: "Experience",
      value: "2+ Yrs",
      description: "React Native, Expo, IoT & AI Mobile"
    }
  ]
};

export const projectsData: Project[] = [
  {
    id: "mettsenia",
    title: "Mettsenia Ecosystem",
    tagline: "IoT-Powered Energy & Water Property Management Platform",
    category: "mobile",
    officialWebsite: "https://mettsenia.com",
    summary: "Comprehensive smart property ecosystem enabling real-time IoT energy and water device monitoring, interactive usage graphs, offline Bluetooth low-energy (BLE) hardware controls, and dual tenant/owner mobile apps.",
    fullDescription: "Mettsenia is an enterprise-grade IoT property management platform engineered for seamless utility tracking and device hardware control. Consisting of two published applications — MettsCredit for Property Owners and MettsPe for Tenants — the ecosystem allows real-time analytics, automated recharge management, and offline BLE (Bluetooth Low Energy) hardware state manipulation when cellular connectivity is unavailable.",
    roleHighlights: [
      "Architected cross-platform React Native frontend for both MettsCredit and MettsPe apps.",
      "Engineered offline-first Bluetooth Low Energy (BLE) protocol for direct IoT device configuration and power state toggle.",
      "Built interactive high-frequency energy & water usage charts using Victory Native & Reanimated.",
      "Managed end-to-end publishing pipelines on Apple App Store & Google Play Store, ensuring zero compliance rejections."
    ],
    keyFeatures: [
      {
        id: 1,
        title: "Real-time Utility Analytics",
        description: "Interactive live graphs tracking power, water flow, ambient temperature, and consumption velocity."
      },
      {
        id: 2,
        title: "Offline BLE Smart Control",
        description: "Direct Bluetooth device pairing allowing device power-toggle and token top-ups without active internet."
      },
      {
        id: 3,
        title: "Dual Tenant & Owner Portals",
        description: "MettsCredit (Owner Dashboard for unit management) & MettsPe (Tenant App for instant utility recharge)."
      },
      {
        id: 4,
        title: "Automated Utility Billing",
        description: "Instant invoice generation, threshold alert push notifications, and payment gateway sync."
      }
    ],
    projectApps: [
      {
        id: 1,
        name: "MettsCredit (Owner App)",
        isPlayStore: true,
        isAppStore: true,
        isWebApp: false,
        playStoreLink: "https://play.google.com/store/apps/details?id=com.mettsenia.owner&hl=en",
        appStoreLink: "https://apps.apple.com/us/app/mettscredit/id6742732876",
        screenshots: [
          "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80"
        ]
      },
      {
        id: 2,
        name: "MettsPe (Tenant App)",
        isPlayStore: true,
        isAppStore: true,
        isWebApp: false,
        playStoreLink: "https://play.google.com/store/apps/details?id=com.metsensia.tenant&hl=en",
        appStoreLink: "https://apps.apple.com/us/app/id6742181606",
        screenshots: [
          "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=800&q=80"
        ]
      }
    ],
    technologies: ["React Native", "TypeScript", "Redux Toolkit", "RTK Query", "Bluetooth BLE Native Modules", "Reanimated 3", "Victory Charts", "Node.js"],
    metrics: ["10k+ Active Utility Devices", "99.9% BLE Signal Reliability", "4.8 Store Rating"],
    gradient: "from-blue-600/30 via-indigo-500/20 to-cyan-400/30",
    iconName: "Cpu",
    featured: true
  },
  {
    id: "stapples",
    title: "Stapples Printing Ecosystem",
    tagline: "Cross-Platform Smart Kiosk & Cloud Printing Network",
    category: "mobile",
    officialWebsite: "https://www.stapples.in",
    summary: "Cloud-connected smart document printing ecosystem bridging Android, iOS, Web, and hardware print kiosks with Razorpay payments, real-time sync, and instant QR code retrieval.",
    fullDescription: "Stapples revolutionizes print services through a unified mobile and kiosk network. Users can upload documents from anywhere via mobile or web app, customize print specifications (color, duplex, paper quality), make instant Razorpay payments, and retrieve their printed materials at any nearby smart kiosk by scanning a dynamically generated QR code.",
    roleHighlights: [
      "Developed high-performance multi-platform UI for Android, iOS, and self-service Kiosk terminals.",
      "Integrated Razorpay SDK with webhooks for real-time transaction validation and instant print unlock.",
      "Implemented document rendering and secure cloud storage pipeline for zero-friction file previewing.",
      "Handled App Store, Play Store, and web application production deployments."
    ],
    keyFeatures: [
      {
        id: 1,
        title: "Omnichannel Cloud Printing",
        description: "Upload PDFs/images from iOS, Android, or Browser and dispatch to any active print kiosk."
      },
      {
        id: 2,
        title: "Instant QR Retrieval",
        description: "Secure 1-tap QR scanning at physical kiosks to trigger instant hardware print execution."
      },
      {
        id: 3,
        title: "Integrated Micro-Transactions",
        description: "Seamless Razorpay checkout with custom pricing engine per page and print tier."
      }
    ],
    projectApps: [
      {
        id: 1,
        name: "Stapples User App & Kiosk",
        isPlayStore: true,
        isAppStore: true,
        isWebApp: true,
        playStoreLink: "https://play.google.com/store/apps/details?id=com.kiosk_user&hl=en",
        appStoreLink: "https://apps.apple.com/in/app/stapples/id6752280756/",
        webAppLink: "https://www.stapples.in",
        screenshots: [
          "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=800&q=80"
        ]
      }
    ],
    technologies: ["React Native", "Expo", "React.js", "TypeScript", "Razorpay Payment Gateway", "REST APIs", "Node.js", "WebSocket"],
    metrics: ["Cross-Platform Mobile + Web + Kiosk", "< 2s QR Retrieval Time", "50+ Kiosk Terminals"],
    gradient: "from-emerald-500/30 via-teal-500/20 to-cyan-500/30",
    iconName: "Printer",
    featured: true
  },
  {
    id: "ai-mobile-agent",
    title: "On-Device AI Agent for React Native",
    tagline: "Voice-First On-Device LLM & Multimodal AI Assistant",
    category: "ai",
    summary: "Experimental next-gen mobile framework integrating local on-device LLMs (Llama 3.2 1B / Phi-3) and whisper voice processing directly inside React Native with zero cloud latency.",
    fullDescription: "A cutting-edge AI mobile architecture designed to bring real-time intelligence to smartphone hardware. Featuring offline voice intent parsing, context-aware screen context reading, and native C++ binding bridges for high-efficiency inferencing on modern iOS and Android chips.",
    roleHighlights: [
      "Engineered C++ JSI (JavaScript Interface) bindings to bridge GGML/Llama.cpp with React Native core.",
      "Implemented real-time speech-to-text voice intent parser with instant visual haptic feedback.",
      "Optimized memory allocations to keep RAM usage under 180MB during active neural inference."
    ],
    keyFeatures: [
      {
        id: 1,
        title: "Zero-Latency Local LLM",
        description: "Executes lightweight 4-bit quantized LLMs directly on Apple Neural Engine and Qualcomm NPU."
      },
      {
        id: 2,
        title: "Voice-Command Intent Parser",
        description: "Hands-free voice action triggers for navigating app screens and executing automated actions."
      },
      {
        id: 3,
        title: "Multimodal Document OCR",
        description: "Instant document text extraction and summarization on mobile camera preview frames."
      }
    ],
    projectApps: [
      {
        id: 1,
        name: "AI Mobile Agent SDK",
        isPlayStore: false,
        isAppStore: false,
        isWebApp: true,
        webAppLink: "https://github.com/piyush362"
      }
    ],
    technologies: ["React Native JSI", "C++ Native Modules", "On-Device LLM", "Whisper AI", "TensorFlow Lite", "TypeScript"],
    metrics: ["Sub-100ms Voice Intent Parsing", "Zero Server Latency", "Offline Capable"],
    gradient: "from-purple-600/30 via-fuchsia-500/20 to-pink-500/30",
    iconName: "Sparkles",
    featured: true
  }
];

export const experienceData: Experience[] = [
  {
    id: "srchout",
    company: "Srchout Software",
    role: "React Native Engineer",
    type: "Full-Time",
    location: "Gurgaon, India (Remote)",
    duration: "July 2024 – Present",
    isCurrent: true,
    companyLogoText: "SS",
    summary: "Leading the development of high-impact cross-platform mobile applications, IoT smart hardware controllers, and enterprise deployment pipelines.",
    highlights: [
      "Engineered and maintained 10+ production React Native applications with modular component architecture and sub-60fps frame rate benchmarks.",
      "Architected the Mettsenia Smart Property Management suite (MettsCredit & MettsPe) with IoT device monitoring, graph analytics, and offline Bluetooth Low Energy (BLE) control.",
      "Successfully launched multiple production apps on both Apple App Store and Google Play Store, managing app store optimization (ASO) and release compliance.",
      "Pioneered AI integration practices, incorporating smart voice assistants and predictive analytics into mobile workflows."
    ],
    techStack: ["React Native", "TypeScript", "Redux / RTK Query", "BLE Native Modules", "iOS Xcode", "Android Studio", "Firebase"]
  },
  {
    id: "hyathi",
    company: "Hyathi Technology",
    role: "Full-Stack Developer Intern",
    type: "Internship",
    location: "Gorakhpur, India (On-site)",
    duration: "September 2023 – April 2024",
    isCurrent: false,
    companyLogoText: "HT",
    summary: "Developed mobile features, Web3 blockchain integrations, and FinTech digital payment solutions.",
    highlights: [
      "Constructed cross-platform mobile apps with React Native, Redux Toolkit, and RTK Query featuring deep linking and dynamic theme support.",
      "Built FinTech modules including digital KYC validation, NFC payment reading, and real-time push notification pipelines.",
      "Contributed key frontend components to a Web3 Decentralized Social (DeSo) blockchain application and an enterprise dock management system."
    ],
    techStack: ["React Native", "React.js", "Redux", "RTK Query", "NFC Protocols", "Web3 / DeSo", "Node.js", "Tailwind CSS"]
  }
];

export const educationData: Education = {
  degree: "B.Tech in Information Technology",
  institution: "Dr. Ram Manohar Lohia Avadh University",
  score: "74.9% (First Division)",
  duration: "Nov 2020 – June 2024",
  location: "Ayodhya, UP, India",
  details: [
    "Specialized in Mobile System Architecture, Data Structures & Algorithms, Object-Oriented Software Engineering, and Database Management Systems.",
    "Completed Capstone Project on cross-platform mobile application development and real-time network sync."
  ]
};

export const skillsCategories: SkillCategory[] = [
  {
    title: "Mobile & Frameworks",
    icon: "Smartphone",
    skills: [
      { name: "React Native", level: 95, tag: "Primary Expertise", highlight: true },
      { name: "Expo SDK", level: 90, tag: "EAS Build / CLI", highlight: true },
      { name: "React.js", level: 90, tag: "Web Applications" },
      { name: "Redux Toolkit / RTK Query", level: 92, tag: "State Management", highlight: true },
      { name: "Native BLE / Bluetooth", level: 85, tag: "Hardware IoT" },
      { name: "Android Native Bridge", level: 80, tag: "Kotlin / Java" }
    ]
  },
  {
    title: "AI & Future Tech",
    icon: "BrainCircuit",
    skills: [
      { name: "AI Mobile Agent Integration", level: 88, tag: "On-Device Intelligence", highlight: true },
      { name: "Voice & Speech AI", level: 85, tag: "Whisper / SpeechToText" },
      { name: "Multimodal OCR / Vision", level: 82, tag: "Mobile Vision AI" },
      { name: "GitHub Copilot / Cursor AI", level: 95, tag: "AI Workflow Optimization" }
    ]
  },
  {
    title: "Languages & Core CS",
    icon: "Code2",
    skills: [
      { name: "TypeScript", level: 92, tag: "Strict Typing", highlight: true },
      { name: "JavaScript (ES6+)", level: 95, tag: "Core Language" },
      { name: "Kotlin", level: 78, tag: "Android Native" },
      { name: "C++", level: 75, tag: "JSI / Data Structures" },
      { name: "Data Structures & Algorithms", level: 85, tag: "Problem Solving" }
    ]
  },
  {
    title: "Developer Tools & Cloud",
    icon: "Wrench",
    skills: [
      { name: "Xcode", level: 88, tag: "iOS Builds & Provisioning" },
      { name: "Android Studio", level: 90, tag: "Gradle & Native Debugging" },
      { name: "Git & GitHub Actions", level: 92, tag: "CI/CD Pipelines" },
      { name: "Firebase / Push Notifications", level: 88, tag: "Analytics & FCM" },
      { name: "Postman & REST APIs", level: 92, tag: "API Debugging" }
    ]
  }
];

export const aiShowcaseFeatures: AIShowcaseFeature[] = [
  {
    id: "voice-agent",
    title: "Voice AI Mobile Controller",
    subtitle: "Hands-Free Voice Action Dispatcher for React Native",
    icon: "Mic",
    demoType: "voice",
    description: "Converts natural spoken human voice commands into structured JSON navigation and action dispatches on mobile devices without sending audio to remote servers.",
    codeSnippet: `// React Native Voice AI Agent Hook
const { isListening, transcript, dispatchAction } = useMobileVoiceAI({
  model: 'llama-3.2-1b-quant',
  sampleRate: 16000,
  onIntentRecognized: (intent) => {
    if (intent.action === 'NAVIGATE_TO_PROJECTS') {
      router.push('/projects');
    }
  }
});`
  },
  {
    id: "diagnostics",
    title: "Smart Mobile Diagnostics AI",
    subtitle: "On-Device Neural Battery & Network Performance Predictor",
    icon: "Activity",
    demoType: "diagnostics",
    description: "Analyzes device sensor telemetry (CPU load, RAM pressure, BLE RSSI signal quality, thermal status) to predict performance drops and auto-tune UI frame rates.",
    codeSnippet: `// On-Device System Telemetry Predictor
const telemetry = await MobileTelemetryAI.getLiveSnapshot();
if (telemetry.thermalState === 'CRITICAL') {
  ReactReanimated.setFrameRateCap(30); // Save battery & throttle heavy renders
}`
  },
  {
    id: "ocr-scanner",
    title: "Intelligent Multimodal OCR",
    subtitle: "Instant Camera Document Parser & Key Extractor",
    icon: "ScanText",
    demoType: "ocr",
    description: "Parses utility meters, invoice receipts, and ID documents in real-time camera preview feeds using local vision neural models.",
    codeSnippet: `// Local Vision AI Camera Scanner
<VisionCamera
  frameProcessor={frameProcessor}
  onCodeScanned={(extractedData) => {
    const meterReading = AIPrescan.parseMeterValue(extractedData);
    setMeterValue(meterReading);
  }}
/>`
  }
];
