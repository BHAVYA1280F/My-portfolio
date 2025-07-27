import React from 'react';
import { technicalSkills } from '../mock';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Progress } from './ui/progress';
import { Code, Tool, Star } from 'lucide-react';

const Skills = () => {
  const getSkillLevel = (level) => {
    switch(level) {
      case 'Advanced': return 90;
      case 'Intermediate': return 70;
      case 'Beginner': return 40;
      default: return 50;
    }
  };

  return (
    <section className="py-24 bg-bg-card">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="heading-2 mb-4">Technical Arsenal</h2>
          <p className="body-large text-text-secondary max-w-2xl mx-auto">
            Constantly evolving skillset built through hands-on learning and real-world application
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Programming Languages */}
          <Card className="team-card">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 heading-5">
                <Code className="w-5 h-5 text-brand-primary" />
                Programming Languages
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              {technicalSkills.languages.map((skill, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="body-small font-medium">{skill.name}</span>
                    <Badge variant="outline" className="text-xs">
                      {skill.level}
                    </Badge>
                  </div>
                  <Progress 
                    value={getSkillLevel(skill.level)} 
                    className="h-2"
                  />
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Development Tools */}
          <Card className="team-card">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 heading-5">
                <Tool className="w-5 h-5 text-brand-primary" />
                Development Tools
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {technicalSkills.tools.map((tool, index) => (
                <div key={index} className="flex items-center justify-between p-3 bg-bg-page rounded-lg">
                  <span className="body-small font-medium">{tool.name}</span>
                  <Badge variant="secondary" className="text-xs">
                    {tool.category}
                  </Badge>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Core Strengths */}
          <Card className="team-card">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 heading-5">
                <Star className="w-5 h-5 text-brand-primary" />
                Core Strengths
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              {technicalSkills.strengths.map((strength, index) => (
                <div key={index} className="flex items-center gap-3 p-3 bg-bg-page rounded-lg">
                  <div className="w-2 h-2 bg-brand-primary rounded-full"></div>
                  <span className="body-small">{strength}</span>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>

        {/* Skills Summary */}
        <div className="mt-16 text-center">
          <div className="bg-secondary-olive p-8 rounded-lg max-w-4xl mx-auto">
            <h3 className="heading-4 mb-4">Always Learning, Always Growing</h3>
            <p className="body-medium text-text-secondary">
              My journey in programming started in Grade 8 with Java, and I've been consistently expanding 
              my skillset through self-guided learning, hands-on projects, and continuous experimentation. 
              Every challenge is an opportunity to level up!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;