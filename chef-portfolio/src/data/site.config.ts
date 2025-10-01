export interface SiteConfig {
  name: string;
  title: string;
  description: string;
  location: string;
  phone: string;
  email: string;
  cvPath: string;
  links: {
    linkedin?: string;
    github?: string;
    portfolio?: string;
    facebook?: string;
    instagram?: string;
  };
}

export const siteConfig: SiteConfig = {
  name: "Daniel Le",
  title: "Hospitality Professional",
  description: "Passionate hospitality professional with over 3 years of comprehensive experience in restaurant operations. Proven expertise in front-of-house service, back-of-house operations, and team leadership as a head chef. Recently enhanced my skill set through IT experience, developing strong problem-solving and organizational capabilities that bring additional value to hospitality environments. Known for delivering exceptional customer experiences, maintaining high-quality standards, and thriving in fast-paced environments. Currently available for flexible scheduling with excellent availability throughout the week.",
  location: "Fitzroy, Melbourne VIC 3065",
  phone: "0421 470 854",
  email: "ltpd175@gmail.com",
  cvPath: "/Daniel_Le_CV.pdf",
  links: {
    linkedin: "https://www.linkedin.com/in/hiiammeo/",
    github: "https://github.com/HiIamMeo",
    portfolio: "https://www.meointechland.com/",
    facebook: "https://www.facebook.com/Hi.IamMeo/",
    instagram: "https://www.instagram.com/daniel_175_______/"
  }
};