// Mock data for Bhavya Kalra's Portfolio

export const personalInfo = {
  name: "Bhavya Kalra",
  title: "Computer Science Engineering Student",
  location: "Noida, India",
  grade: "BTech CSE, 1st Year",
  university: "Amity University, Noida",
  tagline: "Passionate • Self-Driven • Logic-Minded",
  mission: "To grow as a passionate developer by contributing to real-world projects, enhancing my programming skills, and constantly evolving through challenges in the tech world.",
  heroImage: "https://images.unsplash.com/photo-1555209183-8facf96a4349?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1Nzd8MHwxfHNlYXJjaHwzfHxjb2RpbmclMjB3b3Jrc3BhY2V8ZW58MHx8fHwxNzUzNTg2NDQzfDA&ixlib=rb-4.1.0&q=85",
  profileImage: "https://images.unsplash.com/photo-1681164315430-6159b2361615?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1ODF8MHwxfHNlYXJjaHwyfHxpbmRpYW4lMjBwcm9ncmFtbWVyfGVufDB8fHx8MTc1MzU4NjcxOHww&ixlib=rb-4.1.0&q=85"
};

export const education = [
  {
    level: "BTech Computer Science Engineering",
    percentage: "1st Year",
    board: "Amity University, Noida",
    year: "2025-2029",
    status: "current"
  },
  {
    level: "12th Grade",
    percentage: "93%",
    board: "CISCE Board",
    year: "2025",
    status: "completed"
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
    { name: "Java", level: 90, category: "Backend" },
    { name: "Python", level: 75, category: "Backend" },
    { name: "C++", level: 70, category: "Systems" },
    { name: "HTML", level: 85, category: "Frontend" },
    { name: "CSS", level: 80, category: "Frontend" },
    { name: "JavaScript", level: 65, category: "Frontend" }
  ],
  tools: [
    { name: "Visual Studio Code", category: "Editor", icon: "Code" },
    { name: "BlueJ", category: "IDE", icon: "Terminal" },
    { name: "Notepad++", category: "Text Editor", icon: "FileText" },
    { name: "Git", category: "Version Control", icon: "GitBranch" }
  ],
  strengths: [
    "Web Design Basics",
    "Object-Oriented Programming", 
    "Clean Code Writing",
    "Problem Solving",
    "Logic Development",
    "Algorithm Design"
  ]
};

export const projects = [
  {
    id: 1,
    title: "Student Result Calculator",
    tech: "Java",
    description: "A comprehensive CLI-based tool that calculates total marks, average, and grade for students with advanced features like data validation and report generation.",
    features: [
      "Input validation for student data",
      "Automatic grade calculation with custom ranges",
      "Average and percentage computation",
      "User-friendly command line interface",
      "Data persistence and report generation",
      "Multi-student batch processing"
    ],
    image: "https://images.unsplash.com/photo-1636586108931-a8b9b8796ba6",
    codeSnippet: `// Advanced grade calculation with custom ranges
public class GradeCalculator {
    private Map<String, Integer> gradeThresholds;
    
    public GradeCalculator() {
        gradeThresholds = new HashMap<>();
        gradeThresholds.put("A+", 95);
        gradeThresholds.put("A", 85);
        gradeThresholds.put("B+", 75);
        gradeThresholds.put("B", 65);
        gradeThresholds.put("C", 50);
    }
    
    public String calculateGrade(double percentage) {
        return gradeThresholds.entrySet().stream()
            .filter(entry -> percentage >= entry.getValue())
            .map(Map.Entry::getKey)
            .findFirst()
            .orElse("F");
    }
}`,
    status: "Completed",
    github: "#",
    demo: "#"
  },
  {
    id: 2,
    title: "Personal Portfolio Website",
    tech: "HTML/CSS/JS",
    description: "A fully responsive, modern portfolio website showcasing my projects and skills with interactive animations, dark mode support, and optimized performance.",
    features: [
      "Fully responsive design for all devices",
      "Modern glass-morphism UI/UX",
      "Smooth scroll animations and transitions",
      "Dark/Light mode toggle",
      "Professional project showcase with modals",
      "Contact form with validation",
      "SEO optimized structure"
    ],
    image: "https://images.unsplash.com/photo-1457305237443-44c3d5a30b89",
    codeSnippet: `/* Advanced CSS Grid with Responsive Design */
.portfolio-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 2rem;
  padding: 2rem;
}

@media (max-width: 768px) {
  .portfolio-grid {
    grid-template-columns: 1fr;
    gap: 1.5rem;
    padding: 1rem;
  }
}

/* Glass morphism effect */
.glass-card {
  backdrop-filter: blur(16px);
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 16px;
}`,
    status: "Completed",
    github: "#",
    demo: "#"
  },
  {
    id: 3,
    title: "Intelligent Chatbot",
    tech: "Python", 
    description: "An advanced Python chatbot with natural language processing capabilities, context awareness, and machine learning integration for personalized responses.",
    features: [
      "Natural language processing with NLTK",
      "Context-aware conversation management",
      "Machine learning response optimization",
      "Sentiment analysis integration",
      "Extensible knowledge base system",
      "Multi-language support capability",
      "Training data visualization"
    ],
    image: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4",
    codeSnippet: `import nltk
from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.metrics.pairwise import cosine_similarity
import numpy as np

class IntelligentChatbot:
    def __init__(self):
        self.vectorizer = TfidfVectorizer()
        self.knowledge_base = []
        self.responses = []
        self.context_history = []
        
    def train(self, training_data):
        """Train the chatbot with conversation data"""
        self.knowledge_base = [item['input'] for item in training_data]
        self.responses = [item['response'] for item in training_data]
        self.vectorizer.fit(self.knowledge_base)
        
    def get_response(self, user_input):
        """Generate contextually aware response"""
        # Add context awareness
        contextual_input = self._add_context(user_input)
        
        # Vectorize and find similarity
        user_vector = self.vectorizer.transform([contextual_input])
        kb_vectors = self.vectorizer.transform(self.knowledge_base)
        
        similarities = cosine_similarity(user_vector, kb_vectors)
        best_match_idx = np.argmax(similarities)
        
        if similarities[0][best_match_idx] > 0.3:
            response = self.responses[best_match_idx]
        else:
            response = "I'm learning to understand that better. Can you rephrase?"
            
        self.context_history.append(user_input)
        return response`,
    status: "In Development",
    github: "#",
    demo: "#"
  }
];

export const experience = [
  {
    title: "Top Performer in Coding Competitions",
    organization: "Various School Tech Fests",
    description: "Consistently ranked among top 3 performers in multiple inter-school coding competitions, demonstrating strong problem-solving skills and algorithmic thinking.",
    period: "2022 - Present",
    achievements: ["Winner - CodeFest 2024", "2nd Place - TechQuiz 2023", "Best Algorithm Design Award"]
  },
  {
    title: "Independent Project Developer",
    organization: "Self-Guided Learning",
    description: "Developed and completed 15+ personal programming projects across different technologies, showcasing versatility and continuous learning mindset.",
    period: "2020 - Present",
    achievements: ["15+ completed projects", "5+ GitHub repositories", "200+ commits"]
  },
  {
    title: "Java Programming Specialist",
    organization: "Self-Study & Practice",
    description: "Started Java programming journey in Grade 8, mastering OOP concepts, data structures, and developing multiple console applications.",
    period: "Grade 8 - Present",
    achievements: ["OOP Mastery", "Data Structures Implementation", "Console Application Development"]
  }
];

export const funFacts = [
  {
    icon: "Code",
    text: "I love writing clean, well-structured code that others can easily understand"
  },
  {
    icon: "Bug",
    text: "I believe every bug is just a disguised opportunity to learn something new"
  },
  {
    icon: "Globe",
    text: "I'm bilingual — fluent in Hindi and English, helping me connect with diverse communities"
  },
  {
    icon: "Heart",
    text: "I aim to contribute to open-source projects and give back to the developer community"
  },
  {
    icon: "Coffee",
    text: "Powered by curiosity, determination, and occasionally, really good coffee"
  },
  {
    icon: "BookOpen",  
    text: "Always learning new technologies and staying updated with industry trends"
  }
];

export const contactInfo = {
  email: "bhavya.kalra@example.com",
  phone: "+91 9876543210",
  location: "Ghaziabad, Uttar Pradesh, India",
  github: "https://github.com/bhavyakalra",
  linkedin: "https://linkedin.com/in/bhavyakalra",
  twitter: "https://twitter.com/bhavyakalra",
  instagram: "https://instagram.com/bhavyakalra",
  resumeLink: "/resume.pdf",
  portfolioLink: "bhavyakalra.github.io",
  availability: "Available for internships and collaborative projects"
};