import React from 'react';
import { personalInfo } from '../mock';
import { Button } from './ui/button';
import { Download, Github, Linkedin } from 'lucide-react';

const Hero = () => {
  return (
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
        <div className="hero-content">
          <div className="space-y-6">
            <div>
              <p className="caption text-secondary-yellow">
                {personalInfo.tagline}
              </p>
              <h1 className="hero-title">
                {personalInfo.name}
              </h1>
              <p className="body-large mt-4">
                {personalInfo.title}
              </p>
              <p className="body-medium text-text-secondary mt-2">
                📍 {personalInfo.location} • {personalInfo.grade}
              </p>
            </div>
            
            <p className="body-medium max-w-2xl">
              {personalInfo.mission}
            </p>
            
            <div className="flex flex-wrap gap-4 mt-8">
              <Button className="btn-primary">
                <Download className="w-4 h-4 mr-2" />
                Download Resume
              </Button>
              <Button variant="outline" className="btn-secondary">
                <Github className="w-4 h-4 mr-2" />
                View Projects
              </Button>
              <Button variant="outline" className="btn-secondary">
                <Linkedin className="w-4 h-4 mr-2" />
                Connect
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;