import React from 'react';
import { personalInfo, education, experience, funFacts, contactInfo } from '../mock';
import Hero from './Hero';
import Skills from './Skills';
import Projects from './Projects';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { GraduationCap, Award, Heart, Download, Github, Linkedin, Mail } from 'lucide-react';

const Home = () => {
  return (
    <div className="min-h-screen bg-bg-page text-text-primary">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-bg-page/90 backdrop-blur-sm border-b border-border-medium z-40">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="heading-6">{personalInfo.name}</div>
            <div className="hidden md:flex items-center space-x-8">
              <a href="#about" className="nav-link">About</a>
              <a href="#skills" className="nav-link">Skills</a>
              <a href="#projects" className="nav-link">Projects</a>
              <a href="#contact" className="nav-link">Contact</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <Hero />

      {/* About Section */}
      <section id="about" className="py-24 bg-bg-card">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="heading-2 mb-4">About Me</h2>
            <p className="body-large text-text-secondary max-w-3xl mx-auto">
              A passionate student programmer with a sharp eye for problem-solving and a mind wired for logic. 
              I believe in learning by doing and creating impact through code.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 mb-16">
            {/* Education */}
            <Card className="team-card">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 heading-5">
                  <GraduationCap className="w-5 h-5 text-brand-primary" />
                  Education
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {education.map((edu, index) => (
                  <div key={index} className="border-l-2 border-brand-primary pl-6 pb-4">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="heading-6">{edu.level}</h4>
                      <Badge className="text-brand-primary border-brand-primary">
                        {edu.percentage}
                      </Badge>
                    </div>
                    <p className="body-small text-text-secondary">
                      {edu.board} • {edu.year}
                    </p>
                    {edu.status === 'expected' && (
                      <Badge variant="secondary" className="mt-2 text-xs">
                        Expected
                      </Badge>
                    )}
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Experience */}
            <Card className="team-card">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 heading-5">
                  <Award className="w-5 h-5 text-brand-primary" />
                  Experience
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {experience.map((exp, index) => (
                  <div key={index} className="border-l-2 border-secondary-olive pl-6 pb-4">
                    <h4 className="heading-6 mb-1">{exp.title}</h4>
                    <p className="caption text-brand-primary mb-2">
                      {exp.organization} • {exp.period}
                    </p>
                    <p className="body-small text-text-secondary">
                      {exp.description}
                    </p>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>

          {/* Fun Facts */}
          <div className="bg-secondary-olive p-8 rounded-lg">
            <div className="flex items-center gap-2 mb-6">
              <Heart className="w-5 h-5 text-brand-primary" />
              <h3 className="heading-5">Fun Facts About Me</h3>
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              {funFacts.map((fact, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-brand-primary rounded-full mt-2"></div>
                  <p className="body-small">{fact}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <Skills />

      {/* Projects Section */}
      <Projects />

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-bg-card">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="heading-2 mb-4">Let's Connect</h2>
            <p className="body-large text-text-secondary max-w-2xl mx-auto">
              Ready to collaborate or just want to chat about programming? I'm always excited to connect with fellow developers and tech enthusiasts!
            </p>
          </div>

          <div className="max-w-2xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <Card className="team-card text-center">
                <CardContent className="p-8">
                  <Download className="w-8 h-8 text-brand-primary mx-auto mb-4" />
                  <h3 className="heading-6 mb-2">Resume</h3>
                  <p className="body-small text-text-secondary mb-4">
                    Download my complete resume
                  </p>
                  <Button className="btn-primary w-full">
                    Download PDF
                  </Button>
                </CardContent>
              </Card>

              <Card className="team-card text-center">
                <CardContent className="p-8">
                  <Mail className="w-8 h-8 text-brand-primary mx-auto mb-4" />
                  <h3 className="heading-6 mb-2">Email</h3>
                  <p className="body-small text-text-secondary mb-4">
                    Drop me a message anytime
                  </p>
                  <Button className="btn-secondary w-full">
                    Send Email
                  </Button>
                </CardContent>
              </Card>
            </div>

            <div className="flex justify-center gap-6">
              <Button variant="outline" className="btn-secondary">
                <Github className="w-5 h-5 mr-2" />
                GitHub
              </Button>
              <Button variant="outline" className="btn-secondary">
                <Linkedin className="w-5 h-5 mr-2" />
                LinkedIn
              </Button>
            </div>

            <div className="text-center mt-12">
              <p className="body-small text-text-secondary">
                Portfolio URL: <span className="text-brand-primary">{contactInfo.portfolioLink}</span>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-bg-page border-t border-border-medium">
        <div className="container">
          <div className="text-center">
            <p className="body-small text-text-secondary mb-4">
              © 2025 {personalInfo.name}. Built with passion and lots of coffee ☕
            </p>
            <p className="caption text-text-muted">
              "I believe that every bug is just a disguised opportunity to learn"
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;