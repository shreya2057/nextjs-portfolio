import {
  EducationType,
  ResumeExperienceType,
  ResumeProjectType,
} from "../type";

export const experience: ResumeExperienceType[] = [
  {
    id: 1,
    position: "Junior React Developer",
    companyName: "Code Himalaya Pvt. Ltd",
    timeline: "01-Feb, 2024 - Present",
    details: [
      "Developed responsive web applications using React.js, Tailwind CSS and Chakra UI ensuring best user experience across various devices and screen sizes.",
      "Intergrated third-party API like Nodemailer for contact form to enable the functionality directly from React application.",
      "Gained familarity with OAuth 2.0 authentication and implemented it for secure authentication and authorization.",
    ],
  },
  {
    id: 2,
    position: "React Developer Intern",
    companyName: "Code Himalaya Pvt. Ltd",
    timeline: "01-Jan, 2024 - 31-Jan, 2024",
    details: [
      "Developed responsive web applications using React.js, Tailwind CSS and Chakra UI ensuring best user experience across various devices and screen sizes.",
      "Intergrated third-party API like Nodemailer for contact form to enable the functionality directly from React application.",
      "Gained familarity with OAuth 2.0 authentication and implemented it for secure authentication and authorization.",
    ],
  },
  {
    id: 3,
    position: "Software Intern",
    companyName: "LIS Nepal Pvt. Ltd",
    timeline: "April, 2023 - July, 2023",
    details: [
      "Developed SQL queries and procedures to extract and transform the required data for reporting purpose.",
      "Developed on Excel reports and RTF reports using Oracle BI publisher according to the requirements and provided insights to support business person.",
      "Gained familiarity with both RA and RMS site databases and table and generated RA and RMS reports according to the requirements.",
    ],
  },
];

export const resumeProjects: ResumeProjectType[] = [
  {
    id: 1,
    projectName: "EventTrack",
    projectType: "Semester project",
    about:
      "EventTrack is a common web platfrom for Event management. The application can be used by both organisers and users for promoting and finding an event.",
    keyFeatures: [
      "Searching the events based on categories, location and time of the event.",
      "Exploring the information of the event and registering for an event.",
      "Creating and promoting events using single platform.",
      "Monitoring and managing the participants of the event.",
    ],
    link: "test",
    tools: "HTML, CSS, JavaScript, Node.Js, and Mongo DB.",
  },
];

export const education: EducationType[] = [
  {
    id: 1,
    institution: "Kathmandu University",
    courseName: "BSc.Computer Science",
    graduationYear: "2023",
    gpa: "3.70",
  },
  {
    id: 2,
    institution: "Little Angel's High School",
    courseName: "High School",
    graduationYear: "2018",
    gpa: "3.29",
  },
  {
    id: 3,
    institution: "KMC School",
    courseName: "SLC",
    graduationYear: "2016",
    gpa: "3.65",
  },
];

export const skills: string[] = [
  "HTML",
  "CSS",
  "JavaScript",
  "Typescript",
  "Next.js",
  "React.js",
  "Tailwind CSS",
  "Chakra UI",
  "Shadcn",
  "React Query",
  "React-hook-form",
  "Redux",
  "RTK Query",
  "Firebase",
];
