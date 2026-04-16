// =====================================================
// Portfolio Data — Edit this file to update your content
// =====================================================

export const personalInfo = {
  name: "Mahmoud Shaaban Hassan",
  title: "CS & AI Student | Aspiring Data Analyst",
  subtitle: "CS & AI Student passionate about Data Analysis & Machine Learning",
  email: "your-email@example.com",
  github: "https://github.com/your-github",
  linkedin: "https://linkedin.com/in/your-linkedin",
};

export const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];

export interface Skill {
  name: string;
}

export interface SkillGroup {
  title: string;
  icon: string;
  skills: Skill[];
}

export const skillGroups: SkillGroup[] = [
  {
    title: "Languages",
    icon: "code",
    skills: [
      { name: "Python" },
      { name: "C++" },
      { name: "Java" },
      { name: "SQL" },
    ],
  },
  {
    title: "Data Stack",
    icon: "bar-chart",
    skills: [
      { name: "NumPy" },
      { name: "Pandas" },
      { name: "Matplotlib" },
      { name: "Seaborn" },
    ],
  },
  {
    title: "Tools",
    icon: "wrench",
    skills: [
      { name: "Jupyter" },
      { name: "VS Code" },
      { name: "SQL Server" },
      { name: "Git" },
      { name: "MS Office" },
    ],
  },
  {
    title: "Interests",
    icon: "brain",
    skills: [
      { name: "Machine Learning" },
      { name: "Artificial Intelligence" },
    ],
  },
];

export interface Project {
  title: string;
  description: string;
  techStack: string[];
  github: string;
  demo?: string;
}

export const projects: Project[] = [
  {
    title: "Sales Data Dashboard",
    description:
      "Interactive dashboard analyzing sales trends, customer segments, and revenue forecasts using Python and visualization libraries.",
    techStack: ["Python", "Pandas", "Matplotlib", "Seaborn"],
    github: "https://github.com/your-github/sales-dashboard",
    demo: "",
  },
  {
    title: "Student Grade Predictor",
    description:
      "ML model that predicts student performance based on study habits and demographic features using scikit-learn.",
    techStack: ["Python", "scikit-learn", "NumPy", "Jupyter"],
    github: "https://github.com/your-github/grade-predictor",
  },
  {
    title: "Library Management System",
    description:
      "Full database-driven application for managing book inventory, members, and borrowing records with SQL Server backend.",
    techStack: ["Java", "SQL Server", "JDBC"],
    github: "https://github.com/your-github/library-system",
  },
  {
    title: "COVID-19 Data Analysis",
    description:
      "Exploratory data analysis of global COVID-19 trends with interactive visualizations and statistical insights.",
    techStack: ["Python", "Pandas", "Plotly", "Jupyter"],
    github: "https://github.com/your-github/covid-analysis",
    demo: "",
  },
  {
    title: "CLI Task Manager",
    description:
      "Command-line task management tool built with C++ featuring file persistence, priority sorting, and search.",
    techStack: ["C++", "File I/O", "OOP"],
    github: "https://github.com/your-github/task-manager",
  },
];

export interface Education {
  title: string;
  period: string;
  description: string;
  courses?: string[];
}

export const education: Education[] = [
  {
    title: "CS & AI Specialization — 2nd Year",
    period: "2023 – Present",
    description:
      "Pursuing a degree in Computer Science with specialization in Artificial Intelligence.",
    courses: [
      "Data Structures (C++)",
      "Object-Oriented Programming",
      "Databases (SQL Server)",
      "Python & Data Analysis",
    ],
  },
];
