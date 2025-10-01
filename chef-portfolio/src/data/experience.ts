export interface Experience {
  id: string;
  title: string;
  company: string;
  location: string;
  period: string;
  type: 'hospitality' | 'it' | 'other';
  responsibilities: string[];
  isCurrentRole?: boolean;
  locationLink?: string;
}

export const experiences: Experience[] = [
  {
    id: "it-support-aug",
    title: "IT Support Officer",
    company: "AUG Student Service",
    location: "Melbourne",
    period: "Oct 2024 – Aug 2025",
    type: "it",
    isCurrentRole: false,
    responsibilities: [
      "Resolved IT issues and supported digital systems (websites, CRM)",
      "Collaborated with teams to optimize workflows",
      "Strengthened troubleshooting, multitasking, and problem-solving skills – all transferable to high-pressure hospitality settings"
    ]
  },
  {
    id: "miss-saigon-staff",
    title: "Front & Back of House Staff",
    company: "Miss Saigon Chadstone",
    location: "Chadstone",
    period: "Dec 2022 – Mar 2024",
    type: "hospitality",
    locationLink: "https://maps.app.goo.gl/tE7LmUAxTuNqzeMH7",
    responsibilities: [
      "Provided exceptional customer service in a high-volume restaurant",
      "Assisted with both kitchen operations and front-of-house service",
      "Maintained a clean, organized, and safe working environment"
    ]
  },
  {
    id: "harvest-blend-staff",
    title: "Front & Back of House Staff",
    company: "Harvest Blend Cafe",
    location: "Camberwell",
    period: "Sep 2022 – Nov 2022",
    type: "hospitality",
    locationLink: "https://maps.app.goo.gl/mgPLGA6fJs9oAwSq7",
    responsibilities: [
      "Delivered food and beverages with speed and accuracy",
      "Supported kitchen preparation and ensured smooth service flow"
    ]
  },
  {
    id: "le-feu-head-chef",
    title: "Head Chef",
    company: "Le Feu GF Restaurant Company",
    location: "Berwick & Springvale",
    period: "Oct 2021 – Aug 2022",
    type: "hospitality",
    locationLink: "https://maps.app.goo.gl/FrtrZ3r6LG2vJMg86",
    responsibilities: [
      "Led kitchen team, managing food preparation and plating",
      "Trained and supervised staff to maintain quality standards",
      "Ensured compliance with food safety and hygiene regulations"
    ]
  },
  {
    id: "dada-hero-staff",
    title: "Fast Food Staff",
    company: "DaDa Hero Chicken & Coco MilkTea",
    location: "Chadstone & Springvale",
    period: "May 2021 – Jan 2022",
    type: "hospitality",
    responsibilities: [
      "Handled food preparation, order taking, and customer service",
      "Worked efficiently under peak-time pressure"
    ]
  },
  {
    id: "sai-gon-sous-chef",
    title: "Sous Chef",
    company: "Sai Gon Corner Vietnamese Restaurant",
    location: "Forest Hill Chase",
    period: "Apr 2020 – Jul 2021",
    type: "hospitality",
    locationLink: "https://maps.app.goo.gl/S7WRyNYvzx88uW8Z9",
    responsibilities: [
      "Assisted head chef in daily kitchen operations",
      "Managed stock, food preparation, and quality control"
    ]
  }
];