export interface SkillCategory {
  id: string;
  title: string;
  skills: string[];
}

export const skillCategories: SkillCategory[] = [
  {
    id: "hospitality-kitchen",
    title: "Hospitality & Kitchen Skills",
    skills: [
      "Food Preparation & Cooking",
      "Kitchen & Staff Management", 
      "Customer Service Excellence",
      "Menu Planning & Development",
      "Food Safety & Hygiene Standards",
      "Inventory Management",
      "Cost Control & Budgeting",
      "Quality Control & Presentation",
      "Time Management & Teamwork",
      "Working Under Pressure",
      "POS Systems Operation",
      "Cash Handling & Transactions"
    ]
  },
  {
    id: "leadership-communication",
    title: "Leadership & Communication Skills",
    skills: [
      "Team Leadership & Training",
      "Staff Scheduling & Coordination",
      "Problem Solving & Quick Adaptation", 
      "Communication (English & Vietnamese)",
      "Customer Relationship Management",
      "Conflict Resolution",
      "Strong Work Ethic: punctual, reliable, adaptable",
      "Multitasking in Fast-Paced Environment"
    ]
  }
];

export interface Education {
  id: string;
  degree: string;
  institution: string;
  location: string;
  period: string;
  status?: string;
  distinction?: string;
}

export const education: Education[] = [
  {
    id: "master-data-science",
    degree: "Master of Data Science",
    institution: "Deakin University",
    location: "Melbourne",
    period: "2024 – Present",
    status: "Current"
  },
  {
    id: "bachelor-computer-science",
    degree: "Bachelor of Computer Science",
    institution: "Deakin University",
    location: "Melbourne",
    period: "2020 – 2022",
    distinction: "Distinction"
  },
  {
    id: "diploma-it",
    degree: "Diploma of Information Technology",
    institution: "Deakin University",
    location: "Melbourne",
    period: "2020",
    distinction: "High Distinction"
  }
];

export interface Reference {
  id: string;
  name: string;
  title: string;
  email: string;
}

export const references: Reference[] = [
  {
    id: "cian-byrne",
    name: "Cian Byrne",
    title: "Internship Supervisor",
    email: "cian@strongcompute.com"
  },
  {
    id: "lai-hy",
    name: "Lai Hy",
    title: "System Business & Data Analytics Manager",
    email: "laihy@augstudy.com"
  }
];