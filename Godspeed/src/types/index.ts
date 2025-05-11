export interface NavItem {
  title: string;
  href: string;
}

export interface Product {
  id: number;
  title: string;
  description: string;
  features: string[];
  image: string;
  icon: string;
}

export interface TeamMember {
  id: number;
  name: string;
  role: string;
  bio: string;
  image: string;
  social: {
    twitter?: string;
    linkedin?: string;
    github?: string;
  };
}

export interface PricingPlan {
  id: number;
  name: string;
  price: string;
  description: string;
  features: string[];
  isFeatured?: boolean;
  buttonText: string;
}

export interface Testimonial {
  id: number;
  content: string;
  author: {
    name: string;
    role: string;
    company: string;
    image: string;
  };
}

export interface FAQ {
  question: string;
  answer: string;
}