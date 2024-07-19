export type ResumeExperienceType = {
  id: number;
  position: string;
  companyName: string;
  timeline: string;
  details: string[];
};

export type ResumeProjectType = {
  id: number;
  projectName: string;
  projectType: string;
  about: string;
  keyFeatures: string[];
  tools: string;
  link: string;
};
