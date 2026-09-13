export interface Skill {
  name: string;
  icon: string;
  category: 'Frontend Architecture' | 'Backend & Data' | 'Engineering & Tools';
  proficiency: 'Advanced' | 'Proficient' | 'Working Knowledge';
  highlight?: string;
}

export interface Project {
  title: string;
  category: 'Full Stack' | 'Frontend Web' | 'Client Application' | 'UI/UX Design';
  description: string;
  longDescription?: string;
  features?: string[];
  role?: string;
  tags: string[];
  image: string;
  liveDemo: string;
  viewCode: string;
  featured?: boolean;
  impact?: string;
}

export interface ContactInfo {
  icon: string;
  title: string;
  content: string;
  link?: string;
  isCopyable?: boolean;
}