import mettseniaLogo from "../assets/mettsenia.png";
import stapplesLogo from "../assets/stapples.png";

// mettsCredit image
import mettsCredit1 from "../assets/mettsCredit/mettsCredit1.png";
import mettsCredit2 from "../assets/mettsCredit/mettsCredit2.png";
import mettsCredit3 from "../assets/mettsCredit/mettsCredit3.png";
import mettsCredit4 from "../assets/mettsCredit/mettsCredit4.png";
import mettsCredit5 from "../assets/mettsCredit/mettsCredit5.png";
import mettsCredit6 from "../assets/mettsCredit/mettsCredit6.png";
import mettsCredit7 from "../assets/mettsCredit/mettsCredit7.png";
import mettsCredit8 from "../assets/mettsCredit/mettsCredit8.png";
import mettsCredit9 from "../assets/mettsCredit/mettsCredit9.png";

export interface ProjectFeature {
  id: number;
  description: string;
}

export interface ProjectApp {
  id: number;
  name: string;
  isPlayStore: boolean;
  isAppStore: boolean;
  isWebApp?: boolean;
  playStoreLink?: string | null;
  appStoreLink?: string | null;
  webAppLink?: string | null;
  shoCaseImages?: string[];
}

export interface Project {
  id: number;
  title: string;
  projectLogo?: string;
  officialWebsite?: string;
  subTitle: string;
  keyFeatures: ProjectFeature[];
  projectApps: ProjectApp[];
}

export const projectsData: Project[] = [
  {
    id: 1,
    title: "Mettsenia",
    projectLogo: mettseniaLogo,
    officialWebsite: "https://mettsenia.com",
    subTitle:
      "IoT-based property management platform enabling users to monitor, control, and analyze energy and water consumption across smart devices with real-time dashboards and Bluetooth-enabled controls.",
    keyFeatures: [
      {
        id: 1,
        description:
          "Supports real-time energy and water usage tracking with interactive charts and analytics.",
      },
      {
        id: 2,
        description:
          "Offline Bluetooth connectivity for on/off control and recharge management of IoT devices.",
      },
      {
        id: 3,
        description:
          "Managed via the MettsCredit app for property owners and MettsPe app for tenants, allowing seamless property and device management.",
      },
    ],

    projectApps: [
      {
        id: 1,
        name: "MettsCredit",
        isPlayStore: true,
        isAppStore: true,
        isWebApp: false,
        playStoreLink:
          "https://play.google.com/store/apps/details?id=com.mettsenia.owner&hl=en",
        appStoreLink: "https://apps.apple.com/us/app/mettscredit/id6742732876",
        shoCaseImages: [
          mettsCredit1,
          mettsCredit2,
          mettsCredit3,
          mettsCredit4,
          mettsCredit5,
          mettsCredit6,
          mettsCredit7,
          mettsCredit8,
          mettsCredit9,
        ],
      },
      {
        id: 2,
        name: "MettsPe",
        isPlayStore: true,
        isAppStore: true,
        isWebApp: false,
        playStoreLink:
          "https://play.google.com/store/apps/details?id=com.metsensia.tenant&hl=en",
        appStoreLink: "https://apps.apple.com/us/app/id6742181606",
        shoCaseImages: [
          mettsCredit1,
          mettsCredit2,
          mettsCredit3,
          mettsCredit4,
          mettsCredit5,
          mettsCredit6,
          mettsCredit7,
          mettsCredit8,
          mettsCredit9,
        ],
      },
    ],
  },
  {
    id: 2,
    title: "Stapples",
    projectLogo: stapplesLogo,
    officialWebsite: "https://www.stapples.in",
    subTitle:
      "Cross-platform smart printing ecosystem that allows users to upload, manage, and print documents via mobile, web, or kiosk integration with secure payments and real-time sync.",
    keyFeatures: [
      {
        id: 1,
        description:
          "Seamless multi-device integration (Android, iOS, and Kiosk) for document printing workflows.",
      },
      {
        id: 2,
        description:
          "Integrated Razorpay payment system and QR code-based document retrieval for enhanced user experience.",
      },
    ],
    projectApps: [
      {
        id: 1,
        name: "Stapples User",
        isPlayStore: true,
        isAppStore: true,
        isWebApp: true,
        playStoreLink:
          "https://play.google.com/store/apps/details?id=com.kiosk_user&hl=en",
        appStoreLink: "https://apps.apple.com/in/app/stapples/id6752280756/",
        webAppLink: "https://www.stapples.in",
      },
    ],
  },
];
