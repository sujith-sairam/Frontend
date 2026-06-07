import { Injectable } from '@angular/core';
import { CareerGoal, InterviewQuestion, LearningTask, MarketSkill, Project, Skill, SkillGap, UserProfile } from '../models/career.model';

@Injectable({ providedIn: 'root' })
export class MockDataService {
  getProfile(): UserProfile {
    return {
      name: 'Avery Chen',
      currentRole: 'Frontend Engineer',
      experienceLevel: 'Intermediate',
      currentSkills: ['Angular', 'TypeScript', 'Tailwind', 'Accessibility'],
      targetSalaryLpa: 18,
    };
  }

  getCareerGoal(): CareerGoal {
    return {
      targetRole: 'Senior Product Engineer',
      targetSalaryLpa: 24,
      timeline: '8 weeks',
      focusAreas: ['System design', 'AI product fluency', 'Leadership communication'],
    };
  }

  getSkills(): Skill[] {
    return [
      { name: 'Angular', level: 'Advanced', category: 'Frontend', confidence: 88 },
      { name: 'TypeScript', level: 'Advanced', category: 'Frontend', confidence: 85 },
      { name: 'Tailwind', level: 'Intermediate', category: 'UI', confidence: 72 },
      { name: 'Accessibility', level: 'Intermediate', category: 'Quality', confidence: 68 },
      { name: 'System Design', level: 'Beginner', category: 'Architecture', confidence: 42 },
    ];
  }

  getSkillGaps(): SkillGap[] {
    return [
      { skill: 'System Design', priority: 'High', reason: 'Top target roles demand scalable architecture thinking.', impact: 'Raises readiness score and interview confidence.' },
      { skill: 'AI Product Fluency', priority: 'High', reason: 'Market demand is accelerating for AI-enabled product builds.', impact: 'Improves relevance for modern product teams.' },
      { skill: 'Testing Strategies', priority: 'Medium', reason: 'Quality and reliability are core expectations for senior roles.', impact: 'Strengthens shipping confidence and code review quality.' },
    ];
  }

  getMarketSkills(): MarketSkill[] {
    return [
      { name: 'System Design', demand: 'High', trend: 'Rising sharply' },
      { name: 'AI Integration', demand: 'High', trend: 'Fast growth' },
      { name: 'Testing & Reliability', demand: 'Medium', trend: 'Steady demand' },
      { name: 'Communication', demand: 'High', trend: 'Consistent demand' },
    ];
  }

  getLearningRoadmap(): LearningTask[] {
    return [
      { week: 'Week 1', focus: 'Architecture foundations', tasks: ['Map a scalable frontend architecture', 'Review 3 real-world system design patterns'], hours: '6 hrs' },
      { week: 'Week 2', focus: 'AI product concepts', tasks: ['Build an AI-assisted feature idea', 'Compare prompt design patterns'], hours: '5 hrs' },
      { week: 'Week 3', focus: 'Quality & reliability', tasks: ['Set up test strategies for UI flows', 'Add accessibility audits to your checklist'], hours: '6 hrs' },
      { week: 'Week 4', focus: 'Interview readiness', tasks: ['Practice scenario answers', 'Refine your career narrative'], hours: '4 hrs' },
    ];
  }

  getProjects(): Project[] {
    return [
      { title: 'AI Skill Coach Dashboard', outcome: 'Show skill gaps, roadmap progress, and readiness trends in one view.', skills: ['Angular', 'AI Integration', 'Data Viz'], difficulty: 'Advanced' },
      { title: 'Learning Sprint Tracker', outcome: 'Track weekly milestones and project outcomes for your growth plan.', skills: ['TypeScript', 'Analytics', 'UX'], difficulty: 'Growth' },
      { title: 'Interview Replay Lab', outcome: 'Practice answers with structured feedback and scenario prompts.', skills: ['Communication', 'Reflection', 'Storytelling'], difficulty: 'Starter' },
    ];
  }

  getInterviewQuestions(): InterviewQuestion[] {
    return [
      { prompt: 'Tell me about a time you improved a user journey with measurable impact.', focus: 'Impact and ownership', level: 'Behavioral' },
      { prompt: 'How would you design a scalable onboarding dashboard for 100k weekly users?', focus: 'System design', level: 'Technical' },
      { prompt: 'Describe how you would explain an AI feature to a skeptical stakeholder.', focus: 'Communication', level: 'Scenario' },
    ];
  }
}
