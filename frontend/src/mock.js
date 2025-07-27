// Mock data for Bhavya Kalra's Portfolio

export const personalInfo = {
  name: "Bhavya Kalra",
  title: "Student Programmer",
  location: "Ghaziabad, India",
  grade: "Grade 12 (2025 batch)",
  tagline: "Passionate • Self-Driven • Logic-Minded",
  mission: "To grow as a passionate developer by contributing to real-world projects, enhancing my programming skills, and constantly evolving through challenges in the tech world.",
  heroImage: "https://images.unsplash.com/photo-1555209183-8facf96a4349?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1Nzd8MHwxfHNlYXJjaHwzfHxjb2RpbmclMjB3b3Jrc3BhY2V8ZW58MHx8fHwxNzUzNTg2NDQzfDA&ixlib=rb-4.1.0&q=85"
};

export const education = [
  {
    level: "12th Grade (Expected)",
    percentage: "93%",
    board: "CISCE Board",
    year: "2025",
    status: "expected"
  },
  {
    level: "10th Grade",
    percentage: "90.2%",
    board: "CISCE Board", 
    year: "2023",
    status: "completed"
  }
];

export const technicalSkills = {
  languages: [
    { name: "Java", level: "Advanced", icon: "☕" },
    { name: "Python", level: "Intermediate", icon: "🐍" },
    { name: "C++", level: "Intermediate", icon: "⚡" },
    { name: "HTML", level: "Advanced", icon: "🌐" },
    { name: "CSS", level: "Advanced", icon: "🎨" }
  ],
  tools: [
    { name: "Visual Studio Code", category: "Editor" },
    { name: "BlueJ", category: "IDE" },
    { name: "Notepad++", category: "Text Editor" }
  ],
  strengths: [
    "Web Design Basics",
    "Object-Oriented Programming", 
    "Clean Code Writing",
    "Problem Solving",
    "Logic Development"
  ]
};

export const projects = [
  {
    id: 1,
    title: "Student Result Calculator",
    tech: "Java",
    description: "A CLI-based tool that calculates total marks, average, and grade for students with clean interface and accurate computation.",
    features: [
      "Input validation for student data",
      "Automatic grade calculation",
      "Average and percentage computation",
      "User-friendly command line interface"
    ],
    image: "https://images.unsplash.com/photo-1636586108931-a8b9b8796ba6",
    codeSnippet: `// Grade calculation logic
public String calculateGrade(double percentage) {
    if (percentage >= 90) return "A+";
    else if (percentage >= 80) return "A";
    else if (percentage >= 70) return "B";
    return "C";
}`,
    status: "Completed"
  },
  {
    id: 2,
    title: "Personal Portfolio Website",
    tech: "HTML/CSS",
    description: "A custom-coded responsive website showcasing my projects, skills, and achievements with modern design principles.",
    features: [
      "Responsive design for all devices",
      "Clean and modern UI/UX",
      "Interactive elements and animations",
      "Professional project showcase"
    ],
    image: "https://images.unsplash.com/photo-1457305237443-44c3d5a30b89",
    codeSnippet: `/* Responsive design approach */
@media (max-width: 768px) {
  .portfolio-grid {
    grid-template-columns: 1fr;
    gap: 20px;
  }
}`,
    status: "Completed"
  },
  {
    id: 3,
    title: "Simple Chatbot",
    tech: "Python", 
    description: "A basic chatbot using Python logic, focusing on response handling and string operations with pattern matching.",
    features: [
      "Natural language processing basics",
      "Pattern matching for responses",
      "Conversation flow management",
      "Extensible response database"
    ],
    image: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4",
    codeSnippet: `# Basic chatbot response logic
def get_response(user_input):
    user_input = user_input.lower()
    if 'hello' in user_input:
        return "Hi there! How can I help you?"
    elif 'bye' in user_input:
        return "Goodbye! Have a great day!"
    return "I'm learning to understand better!"`,
    status: "Completed"
  }
];

export const experience = [
  {
    title: "School's Top Coder",
    organization: "Various Tech Fests",
    description: "Consistently ranked among top performers in school coding competitions and tech events.",
    period: "2022 - Present"
  },
  {
    title: "Self-Guided Learning Journey",
    organization: "Personal Development",
    description: "Completed 10+ personal projects through independent research and hands-on coding practice.",
    period: "2020 - Present"
  },
  {
    title: "Java Programming Explorer",
    organization: "Self-Study",
    description: "Started Java programming journey in Grade 8, continuously improving through trial, error, and determination.",
    period: "Grade 8 - Present"
  }
];

export const funFacts = [
  "I love writing clean, well-structured code",
  "I believe that every bug is just a disguised opportunity to learn",
  "I'm bilingual — fluent in Hindi and English",
  "I aim to contribute to open-source in the near future"
];

export const contactInfo = {
  email: "bhavya.kalra@example.com",
  github: "https://github.com/bhavyakalra",
  linkedin: "https://linkedin.com/in/bhavyakalra",
  resumeLink: "/resume.pdf",
  portfolioLink: "bhavyakalra.github.io"
};