import React, { useState } from 'react';
import { projects } from '../mock';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { Code, ExternalLink, Eye } from 'lucide-react';

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section className="py-24 bg-bg-page">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="heading-2 mb-4">Featured Projects</h2>
          <p className="body-large text-text-secondary max-w-2xl mx-auto">
            Explore my journey through code — from simple calculators to interactive web experiences
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <Card key={project.id} className="event-card group hover:border-brand-primary transition-all duration-300">
              <div className="event-card-image">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <Button 
                    onClick={() => setSelectedProject(project)}
                    className="btn-primary"
                  >
                    <Eye className="w-4 h-4 mr-2" />
                    View Details
                  </Button>
                </div>
              </div>
              
              <CardHeader className="event-card-content">
                <div className="flex items-center justify-between mb-2">
                  <Badge variant="outline" className="text-brand-primary border-brand-primary">
                    {project.tech}
                  </Badge>
                  <Badge variant="secondary" className="text-xs">
                    {project.status}
                  </Badge>
                </div>
                
                <CardTitle className="event-card-title">
                  {project.title}
                </CardTitle>
                
                <CardDescription className="body-small">
                  {project.description}
                </CardDescription>
                
                <div className="flex gap-2 mt-4">
                  <Button size="sm" className="btn-secondary">
                    <Code className="w-4 h-4 mr-1" />
                    Code
                  </Button>
                  <Button size="sm" variant="ghost" className="text-brand-primary hover:text-brand-hover">
                    <ExternalLink className="w-4 h-4 mr-1" />
                    Live
                  </Button>
                </div>
              </CardHeader>
            </Card>
          ))}
        </div>

        {/* Project Detail Modal */}
        {selectedProject && (
          <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center p-4 z-50">
            <div className="bg-bg-card max-w-4xl w-full max-h-[90vh] overflow-y-auto rounded-lg">
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <Badge className="text-brand-primary border-brand-primary mb-2">
                      {selectedProject.tech}
                    </Badge>
                    <h3 className="heading-4">{selectedProject.title}</h3>
                  </div>
                  <Button 
                    variant="ghost"
                    onClick={() => setSelectedProject(null)}
                    className="text-text-secondary hover:text-text-primary"
                  >
                    ✕
                  </Button>
                </div>
                
                <img 
                  src={selectedProject.image} 
                  alt={selectedProject.title}
                  className="w-full h-64 object-cover rounded-lg mb-6"
                />
                
                <p className="body-medium mb-6">{selectedProject.description}</p>
                
                <div className="mb-6">
                  <h4 className="heading-6 mb-3">Key Features:</h4>
                  <ul className="space-y-2">
                    {selectedProject.features.map((feature, index) => (
                      <li key={index} className="body-small flex items-start">
                        <span className="text-brand-primary mr-2">•</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="mb-6">
                  <h4 className="heading-6 mb-3">Code Snippet:</h4>
                  <pre className="bg-bg-page p-4 rounded-lg overflow-x-auto">
                    <code className="text-sm text-text-primary font-mono">
                      {selectedProject.codeSnippet}
                    </code>
                  </pre>
                </div>
                
                <div className="flex gap-4">
                  <Button className="btn-primary">
                    <Code className="w-4 h-4 mr-2" />
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
      </div>
    </section>
  );
};

export default Projects;