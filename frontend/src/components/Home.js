import React, { useState, useEffect } from 'react';
import { personalInfo, education, experience, funFacts, contactInfo, technicalSkills, projects } from '../mock';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { Progress } from './ui/progress';
import { 
  GraduationCap, 
  Award, 
  Heart, 
  Download, 
  Github, 
  Linkedin, 
  Mail,
  Phone,
  MapPin,
  Twitter,
  Instagram,
  ExternalLink,
  Code,
  Eye,
  X,
  Calendar,
  Trophy,
  Star,
  Coffee,
  Bug,
  Globe,
  BookOpen,
  Terminal,
  FileText,
  GitBranch
} from 'lucide-react';

const Home = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const iconMap = {
    Code: Code,
    Terminal: Terminal,
    FileText: FileText,
    GitBranch: GitBranch,
    Bug: Bug,
    Globe: Globe,
    Heart: Heart,
    Coffee: Coffee,
    BookOpen: BookOpen
  };

  const getIcon = (iconName) => {
    const IconComponent = iconMap[iconName];
    return IconComponent ? <IconComponent className="w-5 h-5" /> : <Code className="w-5 h-5" />;
  };

  return (
    <div className="min-h-screen bg-bg-page text-text-primary">
      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'navbar scrolled' : 'navbar'}`}>
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="heading-3 bg-gradient-to-r from-brand-primary to-brand-accent bg-clip-text text-transparent">
              {personalInfo.name}
            </div>
            <div className="hidden md:flex items-center space-x-2">
              <a href="#about" className="nav-link">About</a>
              <a href="#skills" className="nav-link">Skills</a>
              <a href="#projects" className="nav-link">Projects</a>
              <a href="#contact" className="nav-link">Contact</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-background">
          <img 
            src={personalInfo.heroImage} 
            alt="Coding workspace" 
            className="hero-image"
          />
          <div className="hero-overlay"></div>
        </div>
        
        <div className="container">
          <div className="hero-content animate-fade-in-up">
            <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
              {/* Profile Image */}
              <div className="profile-image mb-8">
                <img 
                  src={personalInfo.profileImage}
                  alt={personalInfo.name}
                />
              </div>
              
              <div className="max-w-2xl">
                <p className="body-text text-brand-accent mb-4 uppercase tracking-wide">
                  {personalInfo.tagline}
                </p>
                <h1 className="hero-title mb-6">
                  {personalInfo.name}
                </h1>
                <p className="heading-3 mb-4 text-text-secondary">
                  {personalInfo.title}
                </p>
                <p className="body-large mb-6 flex items-center justify-center lg:justify-start gap-2">
                  <MapPin className="w-5 h-5 text-brand-primary" />
                  {personalInfo.location} • {personalInfo.university}
                </p>
                <p className="body-text mb-8 text-center lg:text-left">
                  {personalInfo.grade} • {personalInfo.university}
                </p>
                
                <p className="body-large mb-8 max-w-xl">
                  {personalInfo.mission}
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button 
                    className="btn-primary group"
                    onClick={() => {
                      // Create a temporary link element to trigger download
                      const link = document.createElement('a');
                      link.href = contactInfo.resumeLink;
                      link.download = 'Bhavya_Kalra_Resume.pdf';
                      document.body.appendChild(link);
                      link.click();
                      document.body.removeChild(link);
                    }}
                  >
                    <Download className="w-5 h-5" />
                    My Resume
                  </Button>
                  <Button 
                    className="btn-secondary group"
                    onClick={() => {
                      window.location.href = `mailto:${contactInfo.email}?subject=Hiring Inquiry&body=Hi Bhavya, I am interested in discussing potential opportunities with you.`;
                    }}
                  >
                    <Mail className="w-5 h-5" />
                    Hire Me
                  </Button>
                  <Button 
                    className="btn-secondary group"
                    onClick={() => {
                      document.getElementById('projects').scrollIntoView({ behavior: 'smooth' });
                    }}
                  >
                    <Github className="w-5 h-5" />
                    View Projects
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 bg-bg-page">
        <div className="container">
          <h2 className="section-title text-center mb-16 animate-fade-in-up">About Me</h2>
          
          <div className="grid lg:grid-cols-2 gap-12 mb-16">
            {/* Education */}
            <Card className="glass-card animate-fade-in-up">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 heading-3">
                  <GraduationCap className="w-6 h-6 text-brand-primary" />
                  Education
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {education.map((edu, index) => (
                  <div key={index} className="relative pl-8 pb-6 border-l-2 border-brand-primary">
                    <div className="absolute -left-2 top-0 w-4 h-4 bg-brand-primary rounded-full"></div>
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="heading-4">{edu.level}</h4>
                      <Badge className="bg-gradient-to-r from-brand-primary to-brand-secondary text-white border-none">
                        {edu.percentage}
                      </Badge>
                    </div>
                    <p className="body-text">
                      {edu.board} • {edu.year}
                    </p>
                    {edu.status === 'expected' && (
                      <Badge variant="outline" className="mt-2 text-brand-accent border-brand-accent">
                        Expected
                      </Badge>
                    )}
                    {edu.status === 'current' && (
                      <Badge variant="outline" className="mt-2 text-green-400 border-green-400">
                        Current
                      </Badge>
                    )}
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Experience */}
            <Card className="glass-card animate-fade-in-up">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 heading-3">
                  <Award className="w-6 h-6 text-brand-primary" />
                  Experience
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {experience.map((exp, index) => (
                  <div key={index} className="relative pl-8 pb-6 border-l-2 border-brand-secondary">
                    <div className="absolute -left-2 top-0 w-4 h-4 bg-brand-secondary rounded-full"></div>
                    <h4 className="heading-4 mb-2">{exp.title}</h4>
                    <p className="body-text text-brand-primary mb-2 flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      {exp.organization} • {exp.period}
                    </p>
                    <p className="body-text mb-3">
                      {exp.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {exp.achievements.map((achievement, i) => (
                        <Badge key={i} variant="outline" className="text-xs text-brand-accent border-brand-accent">
                          <Trophy className="w-3 h-3 mr-1" />
                          {achievement}
                        </Badge>
                      ))}
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>

          {/* Fun Facts */}
          <Card className="glass-card animate-fade-in-up">
            <CardHeader>
              <CardTitle className="flex items-center gap-3 heading-3 text-center">
                <Heart className="w-6 h-6 text-brand-primary" />
                Fun Facts About Me
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {funFacts.map((fact, index) => (
                  <div key={index} className="flex items-start gap-4 p-4 rounded-lg bg-bg-card border border-border-light hover:border-brand-primary transition-all duration-300">
                    <div className="text-brand-primary mt-1">
                      {getIcon(fact.icon)}
                    </div>
                    <p className="body-text">{fact.text}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-24 bg-bg-card">
        <div className="container">
          <h2 className="section-title text-center mb-16 animate-fade-in-up">Technical Arsenal</h2>
          
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Programming Languages */}
            <Card className="glass-card animate-fade-in-up">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 heading-3">
                  <Code className="w-6 h-6 text-brand-primary" />
                  Languages
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {technicalSkills.languages.map((skill, index) => (
                  <div key={index} className="skill-item">
                    <div className="flex items-center justify-between mb-3">
                      <span className="heading-4">{skill.name}</span>
                      <Badge className="text-xs bg-brand-primary text-white">
                        {skill.category}
                      </Badge>
                    </div>
                    <div className="progress-bar mb-2">
                      <div 
                        className="progress-fill" 
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                    <p className="body-text text-right">{skill.level}%</p>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Development Tools */}
            <Card className="glass-card animate-fade-in-up">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 heading-3">
                  <Terminal className="w-6 h-6 text-brand-primary" />
                  Tools & IDEs
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {technicalSkills.tools.map((tool, index) => (
                  <div key={index} className="skill-item">
                    <div className="flex items-center gap-4">
                      <div className="text-brand-primary">
                        {getIcon(tool.icon)}
                      </div>
                      <div className="flex-1">
                        <span className="heading-4 block">{tool.name}</span>
                        <Badge variant="outline" className="text-xs mt-1 border-brand-secondary text-brand-secondary">
                          {tool.category}
                        </Badge>
                      </div>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Core Strengths */}
            <Card className="glass-card animate-fade-in-up">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 heading-3">
                  <Star className="w-6 h-6 text-brand-primary" />
                  Core Strengths
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {technicalSkills.strengths.map((strength, index) => (
                  <div key={index} className="skill-item">
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-brand-primary rounded-full animate-pulse"></div>
                      <span className="body-text">{strength}</span>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-24 bg-bg-page">
        <div className="container">
          <h2 className="section-title text-center mb-16 animate-fade-in-up">Featured Projects</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <Card key={project.id} className="project-card group">
                <div className="relative overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="project-image"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center">
                    <Button 
                      onClick={() => setSelectedProject(project)}
                      className="btn-primary"
                    >
                      <Eye className="w-4 h-4 mr-2" />
                      View Details
                    </Button>
                  </div>
                  <Badge className="absolute top-4 right-4 bg-brand-primary text-white">
                    {project.tech}
                  </Badge>
                </div>
                
                <CardContent className="p-6 relative z-10">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="heading-3">{project.title}</h3>
                    <Badge 
                      variant={project.status === 'Completed' ? 'default' : 'outline'}
                      className={project.status === 'Completed' ? 'bg-green-600 text-white' : 'border-brand-accent text-brand-accent'}
                    >
                      {project.status}
                    </Badge>
                  </div>
                  
                  <p className="body-text mb-4 line-clamp-3">
                    {project.description}
                  </p>
                  
                  <div className="flex gap-2">
                    <Button size="sm" className="btn-secondary flex-1">
                      <Github className="w-4 h-4 mr-1" />
                      Code
                    </Button>
                    <Button size="sm" variant="outline" className="text-brand-primary hover:text-white border-brand-primary">
                      <ExternalLink className="w-4 h-4 mr-1" />
                      Live
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Project Modal */}
      {selectedProject && (
        <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center p-4 z-50">
          <div className="glass-card max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex justify-between items-start mb-6">
                <div>
                  <Badge className="bg-brand-primary text-white mb-3">
                    {selectedProject.tech}
                  </Badge>
                  <h3 className="heading-2 text-2xl">{selectedProject.title}</h3>
                </div>
                <Button 
                  variant="ghost"
                  onClick={() => setSelectedProject(null)}
                  className="text-text-secondary hover:text-brand-primary"
                >
                  <X className="w-6 h-6" />
                </Button>
              </div>
              
              <img 
                src={selectedProject.image} 
                alt={selectedProject.title}
                className="w-full h-64 object-cover rounded-lg mb-6"
              />
              
              <p className="body-large mb-6">{selectedProject.description}</p>
              
              <div className="mb-6">
                <h4 className="heading-3 mb-4">Key Features:</h4>
                <div className="grid md:grid-cols-2 gap-3">
                  {selectedProject.features.map((feature, index) => (
                    <div key={index} className="flex items-start gap-3 p-3 bg-bg-card rounded-lg">
                      <div className="w-2 h-2 bg-brand-primary rounded-full mt-2"></div>
                      <span className="body-text">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="mb-6">
                <h4 className="heading-3 mb-4">Code Snippet:</h4>
                <pre className="bg-bg-page p-4 rounded-lg overflow-x-auto border border-border-light">
                  <code className="text-sm text-text-primary font-mono">
                    {selectedProject.codeSnippet}
                  </code>
                </pre>
              </div>
              
              <div className="flex gap-4">
                <Button className="btn-primary">
                  <Github className="w-4 h-4 mr-2" />
                  View Code
                </Button>
                <Button className="btn-secondary">
                  <ExternalLink className="w-4 h-4 mr-2" />
                  Live Demo
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-bg-card">
        <div className="container">
          <h2 className="section-title text-center mb-16 animate-fade-in-up">Let's Connect</h2>
          
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <p className="body-large mb-4">
                {contactInfo.availability}
              </p>
              <p className="body-text text-text-secondary max-w-2xl mx-auto">
                Ready to collaborate or just want to chat about programming? I'm always excited to connect with fellow developers and tech enthusiasts!
              </p>
            </div>

            {/* Contact Cards */}
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              <Card className="contact-card">
                <CardContent className="p-6">
                  <Mail className="w-8 h-8 text-brand-primary mx-auto mb-4" />
                  <h3 className="heading-4 mb-2">Email</h3>
                  <p className="body-text text-text-secondary mb-4 break-all">
                    {contactInfo.email}
                  </p>
                  <Button className="btn-primary w-full" size="sm">
                    Send Email
                  </Button>
                </CardContent>
              </Card>

              <Card className="contact-card">
                <CardContent className="p-6">
                  <Phone className="w-8 h-8 text-brand-primary mx-auto mb-4" />
                  <h3 className="heading-4 mb-2">Phone</h3>
                  <p className="body-text text-text-secondary mb-4">
                    {contactInfo.phone}
                  </p>
                  <Button className="btn-secondary w-full" size="sm">
                    Call Now
                  </Button>
                </CardContent>
              </Card>

              <Card className="contact-card">
                <CardContent className="p-6">
                  <MapPin className="w-8 h-8 text-brand-primary mx-auto mb-4" />
                  <h3 className="heading-4 mb-2">Location</h3>
                  <p className="body-text text-text-secondary mb-4 text-center">
                    {contactInfo.location}
                  </p>
                  <Button className="btn-secondary w-full" size="sm">
                    Get Directions
                  </Button>
                </CardContent>
              </Card>

              <Card className="contact-card">
                <CardContent className="p-6">
                  <Download className="w-8 h-8 text-brand-primary mx-auto mb-4" />
                  <h3 className="heading-4 mb-2">Resume</h3>
                  <p className="body-text text-text-secondary mb-4">
                    Download my complete resume
                  </p>
                  <Button 
                    className="btn-primary w-full" 
                    size="sm"
                    onClick={() => {
                      const link = document.createElement('a');
                      link.href = contactInfo.resumeLink;
                      link.download = 'Bhavya_Kalra_Resume.pdf';
                      document.body.appendChild(link);
                      link.click();
                      document.body.removeChild(link);
                    }}
                  >
                    My Resume
                  </Button>
                </CardContent>
              </Card>
            </div>

            {/* Social Links */}
            <div className="text-center">
              <h3 className="heading-3 mb-6">Follow Me Online</h3>
              <div className="flex justify-center gap-4 flex-wrap">
                <Button className="btn-secondary">
                  <Github className="w-5 h-5 mr-2" />
                  GitHub
                </Button>
                <Button className="btn-secondary">
                  <Linkedin className="w-5 h-5 mr-2" />
                  LinkedIn
                </Button>
                <Button className="btn-secondary">
                  <Twitter className="w-5 h-5 mr-2" />
                  Twitter
                </Button>
                <Button className="btn-secondary">
                  <Instagram className="w-5 h-5 mr-2" />
                  Instagram
                </Button>
              </div>
              
              <div className="mt-8 p-6 bg-bg-page rounded-lg border border-border-light">
                <p className="body-text text-text-secondary">
                  Portfolio URL: <span className="text-brand-primary font-mono">{contactInfo.portfolioLink}</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-bg-page border-t border-border-light">
        <div className="container">
          <div className="text-center">
            <p className="body-text text-text-secondary mb-4">
              © 2025 {personalInfo.name}. Built with passion, powered by curiosity ☕
            </p>
            <p className="body-text text-text-muted italic">
              "I believe that every bug is just a disguised opportunity to learn"
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;