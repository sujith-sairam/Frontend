export interface UserProfile {
  name: string;
  currentRole: string;
  experienceLevel: 'Beginner' | 'Intermediate' | 'Advanced';
  currentSkills: string[];
  targetSalaryLpa: number;
}

export interface CareerGoal {
  targetRole: string;
  targetSalaryLpa: number;
  timeline: string;
  focusAreas: string[];
}

export interface Skill {
  name: string;
  level: 'Beginner' | 'Intermediate' | 'Advanced';
  category: string;
  confidence: number;
}

export interface SkillGap {
  skill: string;
  priority: 'High' | 'Medium' | 'Low';
  reason: string;
  impact: string;
}

export interface MarketSkill {
  name: string;
  demand: 'High' | 'Medium' | 'Low';
  trend: string;
}

export interface LearningTask {
  week: string;
  focus: string;
  tasks: string[];
  hours: string;
}

export interface Project {
  title: string;
  outcome: string;
  skills: string[];
  difficulty: 'Starter' | 'Growth' | 'Advanced';
}

export interface InterviewQuestion {
  prompt: string;
  focus: string;
  level: 'Behavioral' | 'Technical' | 'Scenario';
}
