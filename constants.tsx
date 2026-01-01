
import React from 'react';
import { 
  Users, 
  Briefcase, 
  Heart, 
  Award, 
  ShoppingBag,
  Zap
} from 'lucide-react';
import { Initiative, Testimonial, ImpactStat, TeamMember, NGOEvent } from './types';

export const INITIATIVES: Initiative[] = [
  {
    id: 'empowerment',
    title: 'Women Empowerment',
    description: 'Fostering self-reliance and legal awareness among rural women to lead independent lives.',
    icon: 'Users'
  },
  {
    id: 'skill',
    title: 'Skill Training',
    description: 'Vocational courses in tailoring, embroidery, and digital literacy for job readiness.',
    icon: 'Zap'
  },
  {
    id: 'entrepreneurship',
    title: 'Village Entrepreneurship',
    description: 'Providing micro-grants and mentorship to start local small-scale businesses.',
    icon: 'Briefcase'
  },
  {
    id: 'cultural',
    title: 'Cultural Leadership',
    description: 'Preserving traditional arts and crafts while creating modern market opportunities.',
    icon: 'Award'
  },
  {
    id: 'msme',
    title: 'MSME Awareness',
    description: 'Guiding artisans through government schemes, registrations, and banking procedures.',
    icon: 'ShoppingBag'
  },
  {
    id: 'welfare',
    title: 'Community Welfare',
    description: 'Organizing periodic health camps, sanitation drives, and educational support.',
    icon: 'Heart'
  }
];

export const IMPACT_STATS: ImpactStat[] = [
  { label: 'Women Trained', value: '12,500+' },
  { label: 'Villages Covered', value: '150+' },
  { label: 'Enterprises Started', value: '450+' },
  { label: 'Active Volunteers', value: '1,200+' }
];

export const UPCOMING_EVENTS: NGOEvent[] = [
  {
    id: 'swayam-2026',
    title: 'Swayam Exhibition 2026',
    support: 'Ministry of MSME',
    date: '16th – 19th January 2026',
    time: '12 PM onwards',
    venue: 'Janpad Panchayat Ground, Narsinghpur, Madhya Pradesh',
    locationBadge: 'Narsinghpur 2026',
    contacts: ['9907087675', '7974485194', '7489384141'],
    description: 'A platform amplifying women-led innovation, culture, and economic independence in Madhya Pradesh. This exhibition focuses on rural women skill training and community welfare.',
    image: '/assets/banner/Swam-Exhibition-Narsinghpur-2026.png'
  },
  {
    id: 'swayam-2025',
    title: 'Swayam Exhibition 2025',
    support: 'Ministry of MSME',
    date: '16th – 19th July 2025',
    venue: 'Subhash Chandra Bose Cultural Centre, Jabalpur, Madhya Pradesh',
    locationBadge: 'Jabalpur 2025',
    contacts: ['9907087675', '7489384141'],
    description: 'A milestone initiative enabling rural women entrepreneurs to showcase their skills and products under the support of Ministry of MSME. A dedicated platform for handmade products and women-led innovation.',
    image: '/assets/banner/Swam-Exhibition-Jabalpur-2025.png'
  },
  
];

export const NEWS_IMAGES = Array.from(
  { length: 46 },
  (_, i) => `/assets/images/Image-${i + 1}.jpg`
);


export const TESTIMONIALS: Testimonial[] = [
  {
  id: '1',
  name: 'Radha Devi',
  role: 'Small Business Owner',
  content: 'Joining the Mahila Mandal changed my perspective. I started a small handicraft shop with their training, and now I support my family comfortably.',
  image: '/assets/testimonial/radha-devi.jpg'
},
{
  id: '2',
  name: 'Sunita Sharma',
  role: 'Village Artisan',
  content: 'The skill training sessions gave me the confidence I lacked. I learned how to use a smartphone to sell my products online through MSME schemes.',
  image: '/assets/testimonial/sunita-sharma.jpg'
},
{
  id: '3',
  name: 'Meera Kapur',
  role: 'Community Leader',
  content: 'Our village has seen a transformation in health and education since the Mandal started its awareness drives here. Truly grateful.',
  image: '/assets/testimonial/meera-kapur.jpg'
}

];

export const TEAM: TeamMember[] = [
  {
    name: 'Dr. Kavita Verma',
    role: 'Founding President',
    image: 'https://images.unsplash.com/photo-1594744803329-e58b31de8bf5?q=80&w=400&h=400&auto=format&fit=crop'
  },
  {
    name: 'Anjali Chauhan',
    role: 'Secretary',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=400&h=400&auto=format&fit=crop'
  },
  {
    name: 'Priya Rawat',
    role: 'Treasurers',
    image: 'https://images.unsplash.com/photo-1594744803329-e58b31de8bf5?q=80&w=400&h=400&auto=format&fit=crop'
  }
];

export const GALLERY_IMAGES = [
  'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?q=80&w=800&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1509099836639-18ba1795216d?q=80&w=800&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=800&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?q=80&w=800&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1617469767053-d3b523a0b982?q=80&w=800&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?q=80&w=800&auto=format&fit=crop'
];
