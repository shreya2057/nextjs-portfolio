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

export type EducationType = {
  id: number;
  institution: string;
  courseName: string;
  graduationYear: string;
  gpa: string;
};

export type AwardsType = {
  id: number;
  title: string;
  event: string;
};
