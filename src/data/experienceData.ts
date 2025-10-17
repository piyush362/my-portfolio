export interface Experience {
  id: number;
  company: string;
  role: string;
  type: string;
  location: string;
  duration: string;
  highlights: string[];
}

export const experienceData: Experience[] = [
  {
    id: 1,
    company: "Srchout Software",
    role: "React Native Engineer",
    type: "Full-Time",
    location: "Gurgaon, India (Remote)",
    duration: "July 2024 – Present",
    highlights: [
      "Developed and maintained 10+ React Native apps with scalable architecture and optimized performance.",
      "Built Mettsenia — a Property Management app featuring IoT integration, interactive dashboards, and Bluetooth control.",
      "Published multiple production-ready apps on the Play Store and App Store ensuring smooth releases and platform compliance.",
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
];
