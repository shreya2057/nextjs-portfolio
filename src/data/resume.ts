import {
  AwardsType,
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
    link: "https://github.com/shreya2057/EventTrack",
    tools: "HTML, CSS, JavaScript, Node.Js, and Mongo DB.",
  },
  {
    id: 2,
    projectName: "Sahayogi haat",
    projectType: "Semester project",
    about:
      "Sahayogi Haath provides a single platform for users to search charity organizations, get detailed information and donate. This application also integrates eSewa payment.",
    keyFeatures: [
      "Search Charity Organizations based on Location and Categories.",
      "Receive Donations (if you are a verified charity organization).",
      "Make donations directly from the app (for donors).",
      "Admin Panel for donation verifcation, retrival and publishing activities.",
    ],
    link: "https://github.com/shreya2057/Sahayogi_Haath_Donation_App",
    tools: "Flutter, Cloud Firestore, Firebase Auth and Cloudinary.",
  },
  {
    id: 3,
    projectName: "EventTrack-v2.0",
    projectType: "Semester project",
    about:
      "EventTrack-v2.0 is a mobile application for Event Management. The application can be used by both organisers and users for promoting and finding an event.",
    keyFeatures: [
      "Searching and exploring the events based on categories, location and time of the event.",
      "Creating and promoting events using single platform.",
      "Monitoring and managing the participants of the event.",
    ],
    link: "https://github.com/shreya2057/EventTrack-app-v2.0",
    tools: "Flutter, Node.Js, and MongoDb",
  },
  {
    id: 4,
    projectName: "EventTrace",
    projectType: "Semester project",
    about:
      "EventTrace is the complete Event managament and tracking Web-based Application that brings participants and organiser of the events in a single platfom. It helps user find and register for an event. EventTrace helps the organiser manage and promote the event on the single platform.",
    keyFeatures: [
      "Searching and exploring the interested categories of events",
      "Registering for an event.",
      "Create, manage and promote event.",
      "View and manage the participants of the events.",
    ],
    link: "https://github.com/shreya2057/Event-Trace",
    tools: "React.js, and Firebase.",
  },
  {
    id: 5,
    projectName: "Ecommerce app",
    projectType: "Semester project",
    about:
      "Ecommerce app is the ecommerce plaform that allows user to find and buy the item of there choice.",
    keyFeatures: [
      "Searching and exploring the items.",
      "Adding the items to the cart.",
      "View items according to the category.",
      "View the past orders.",
    ],
    link: "https://github.com/shreya2057/Ecommerce_app",
    tools: "Chakra UI, React Query, Zustand, React.js and dummyJSON.",
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

export const additionalSkills = [
  "SQL",
  "Oracle Business Intelligence",
  "Oracle BI publisher",
  "Report designing tools",
];

export const volunteering = [
  "KU HackFest 2021",
  "GitHub Field Day Nepal 2022",
  "GitHub Field Day Nepal 2023",
];

export const awards: AwardsType[] = [
  {
    id: 1,
    title: "Best innovation in technology",
    event: "Ace Ignite 2022",
  },
];
