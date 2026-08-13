const projects = [
    {
        id: 1,
        title: 'Mettssenia',
        subTitle: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.',
        keyFeature: [
            {
                id: 1,
                description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quae.',
            }, {
                id: 2,
                description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quae.',
            }
        ],
        projectApps: [
            {
                id: 1,
                name: 'MettsCredit',
                isPlayStore: true,
                isAppStore: false,
                idWebApp: true,
                playStoreLink: 'https://play.google.com/store/apps/details?id=com.mettscredit',
                appStoreLink: null
            },
            {
                id: 2,
                name: 'MettsPe',
                isPlayStore: true,
                isAppStore: false,
                playStoreLink: 'https://play.google.com/store/apps/details?id=com.mettscredit',
                appStoreLink: null
            }
        ]
    },
     {
        id: 2,
        title: 'Stapples',
        subTitle: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.',
        keyFeature: [
            {
                id: 1,
                description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quae.',
            }, {
                id: 2,
                description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quae.',
            }
        ],
        projectApps: [
            {
                id: 1,
                name: 'MettsCredit',
                isPlayStore: true,
                isAppStore: false,
                playStoreLink: 'https://play.google.com/store/apps/details?id=com.mettscredit',
                appStoreLink: null
            },
            {
                id: 2,
                name: 'MettsPe',
                isPlayStore: true,
                isAppStore: false,
                playStoreLink: 'https://play.google.com/store/apps/details?id=com.mettscredit',
                appStoreLink: null
            }
        ]
    }
]


const profileData = {
  skills: {
    languages: ["JavaScript", "TypeScript", "Kotlin", "C++"],
    frameworksAndLibraries: [
      "React Native",
      "Expo",
      "React",
      "Redux",
      "RTK Query",
      "Node.js",
      "Tailwind CSS",
    ],
    coreCompetencies: [
      "Mobile App Architecture",
      "State Management",
      "API Integration",
      "Performance Optimization",
      "UI/UX Implementation",
    ],
    computerScience: [
      "Data Structures & Algorithms",
      "OOPs",
      "Operating Systems",
      "DBMS",
      "RESTful APIs",
    ],
    developerTools: [
      "Git",
      "GitHub",
      "Android Studio",
      "Xcode",
      "Firebase",
      "Postman",
      "VS Code",
      "GitHub Copilot",
    ],
  },

  education: {
    degree: "B.Tech in Information Technology",
    institution: "Dr. Ram Manohar Lohia Avadh University, Ayodhya",
    score: "74.9%",
    duration: "Nov 2020 – June 2024",
    location: "Ayodhya, India",
  },

  experience: [
    {
      id: 1,
      company: "Srchout Software",
      role: "React Native Engineer",
      type: "Full-Time",
      location: "Gurgaon, India (Remote)",
      duration: "July 2024 – Present",
      highlights: [
        "Developed and maintained 10+ React Native apps with scalable architecture and optimized performance.",
        "Built a Property Management app (Mettsenia) with advanced graph views, dashboards, and IoT integration for device control and recharge management.",
        "Published multiple production-ready apps on both Play Store and App Store ensuring smooth release pipelines.",
      ],
    },
    {
      id: 2,
      company: "Hyathi Technology",
      role: "Full-Stack Developer Intern",
      type: "Internship",
      location: "Gorakhpur, India (On-site)",
      duration: "September 2023 – April 2024",
      highlights: [
        "Built cross-platform mobile apps using React Native, Redux, and RTK Query with deep linking and responsive UI.",
        "Developed FinTech features such as KYC, NFC payments, and push notifications.",
        "Contributed to a Web3 DeSo blockchain-based social media app and enterprise dock management system.",
      ],
    },
  ],
};

export default profileData;
