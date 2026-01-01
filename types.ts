
export interface Initiative {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  content: string;
  image: string;
}

export interface ImpactStat {
  label: string;
  value: string;
}

export interface TeamMember {
  name: string;
  role: string;
  image: string;
}

export interface NGOEvent {
  id: string;
  title: string;
  support: string;
  date: string;
  time?: string;
  venue: string;
  locationBadge: string;
  contacts: string[];
  description: string;
  image: string;
}
