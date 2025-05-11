import { NavItem, Product, TeamMember, PricingPlan, Testimonial, FAQ } from '../types';
import { 
  Code, 
  Cloud, 
  Layout, 
  Puzzle, 
  Users 
} from 'lucide-react';

export const navItems: NavItem[] = [
  { title: 'Home', href: '/' },
  { title: 'Products', href: '/products' },
  { title: 'About', href: '/about' },
  { title: 'Team', href: '/team' },
  { title: 'Pricing', href: '/pricing' },
];

export const products: Product[] = [
  {
    id: 1,
    title: '4th Generation Meta Framework',
    description: 'Empower younger engineers to build production-ready backends and agentic workflows 10x faster with guardrails. Develop with confidence, accelerate delivery, and maintain high-quality standards effortlessly.',
    features: [
      'Rapid backend development',
      'Built-in guardrails for quality assurance',
      'Agentic workflow acceleration',
      'Production-ready output'
    ],
    image: 'https://images.pexels.com/photos/7988079/pexels-photo-7988079.jpeg',
    icon: 'Code'
  },
  {
    id: 2,
    title: 'Unified Cloud Delivery Platform',
    description: 'Easily set up lightweight environments or handle scalable loads over K3s/K8s on any supported cloud. Get a frictionless deployment experience while keeping infrastructure lean, efficient, and cloud-agnostic.',
    features: [
      'Frictionless deployment',
      'Support for K3s/K8s',
      'Multi-cloud compatibility',
      'Lightweight and efficient infrastructure'
    ],
    image: 'https://images.pexels.com/photos/8088448/pexels-photo-8088448.jpeg',
    icon: 'Cloud'
  },
  {
    id: 3,
    title: 'AI enabled Web-based Studio',
    description: 'After revolutionizing backend development with our meta-framework, we\'re now bringing the same power to a UI-based studio —enabling faster development with AI-powered project creation, automated code reviews, real-time debugging, and seamless local-to-cloud workflow management.',
    features: [
      'AI-powered project creation',
      'Automated code reviews',
      'Real-time debugging',
      'Seamless workflow management'
    ],
    image: 'https://images.pexels.com/photos/92904/pexels-photo-92904.jpeg',
    icon: 'Layout'
  },
  {
    id: 4,
    title: 'Pre-built Integrations and Project templates',
    description: 'Leverage ready-made templates and integrations for distributed backends and multi-agent AI applications—built in collaboration with the developer community. Reduce setup time and focus on innovation.',
    features: [
      'Community-built templates',
      'Pre-built integrations',
      'Support for distributed backends',
      'Multi-agent AI application templates'
    ],
    image: 'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg',
    icon: 'Puzzle'
  },
  {
    id: 5,
    title: 'Teams Dashboard',
    description: 'Manage projects, sprints and feedback in one place. Streamline workflows, enhance collaboration and ensure smooth execution from development to deployment.',
    features: [
      'Centralized project management',
      'Sprint tracking',
      'Feedback collection',
      'Streamlined workflows'
    ],
    image: 'https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg',
    icon: 'Users'
  }
];

export const getIconComponent = (iconName: string) => {
  switch (iconName) {
    case 'Code':
      return Code;
    case 'Cloud':
      return Cloud;
    case 'Layout':
      return Layout;
    case 'Puzzle':
      return Puzzle;
    case 'Users':
      return Users;
    default:
      return Code;
  }
};

export const teamMembers: TeamMember[] = [
  {
    id: 1,
    name: 'Ayush Ghai',
    role: 'Chief Alchemist',
    bio: 'An IIT-Kanpur alumnus, techie and serial founder, Ayush serves as a motivational speaker, life coach and startup coach, driven by a mission to build a better future through community and social impact initiatives.',
    image: 'https://via.placeholder.com/150',
    social: {
      twitter: 'https://twitter.com',
      linkedin: 'https://www.linkedin.com/in/ayush-ghai-896541136/',
      github: 'https://github.com'
    }
  },
  {
    id: 2,
    name: 'Akshar Ghai',
    role: 'Backstage Brain',
    bio: 'As CEO of Almamet India, where he established and scaled the company to profitability, he provides invaluable behind-the-scenes strategic advisory on core business aspects at Godspeed.',
    image: 'https://via.placeholder.com/150',
    social: {
      twitter: 'https://twitter.com',
      linkedin: 'https://www.linkedin.com/in/akshar-ghai-68b19516/',
      github: 'https://github.com'
    }
  },
  {
    id: 3,
    name: 'Alexander Rhomberg',
    role: 'Angel with a ChequeBook',
    bio: 'Alexander Rhomberg, co-founder of Almamet GMBH, brings 40 years of experience building and scaling multinational businesses to his role as Godspeeds angel investor and advisor.',
    image: 'https://via.placeholder.com/150',
    social: {
      twitter: 'https://twitter.com',
      linkedin: 'https://linkedin.com',
      github: 'https://github.com'
    }
  },
  {
    id: 4,
    name: 'Tanvir Walia',
    role: 'The Startup Sherpa',
    bio: 'With an MBA from Harvard Business School and a B.Tech from IIT Kanpur, Tanvir Walia is the Head of Startups for Singapore and ASEAN Growth Markets at AWS. As a startup mentor, he brings a wealth of experience in business development, marketing, and growth hacking to Godspeed.',
    image: 'https://via.placeholder.com/150',
    social: {
      twitter: 'https://twitter.com',
      linkedin: 'https://www.linkedin.com/in/tanvirwalia/',
      github: 'https://github.com'
    }
  },
  {
    id: 5,
    name: 'Vidit Chaudhary',
    role: 'Chief Do-O',
    bio: 'A 15-year veteran of the startup world, bringing meticulous process orientation and a results-driven approach to Godspeed operations.',
    image: 'https://via.placeholder.com/150',
    social: {
      twitter: 'https://twitter.com',
      linkedin: 'https://https://www.linkedin.com/in/vidit-chaudhary/linkedin.com',
      github: 'https://github.com'
    }
  },
  {
    id: 6,
    name: 'Ashutosh Tripathi',
    role: 'Devx Spell Caster',
    bio: 'A seasoned senior developer renowned for his mentorship skills, guiding junior team members toward success.',
    image: 'https://via.placeholder.com/150',
    social: {
      twitter: 'https://twitter.com',
      linkedin: 'https://www.linkedin.com/in/itszero8/',
      github: 'https://github.com'
    }
  },
  {
    id: 7,
    name: 'Rajat Tripathi',
    role: 'AI Hacker',
    bio: 'A problem-solving expert, Rajat consistently finds innovative solutions to even the most complex development challenges.',
    image: 'https://via.placeholder.com/150',
    social: {
      twitter: 'https://twitter.com',
      linkedin: 'https://www.linkedin.com/in/codemuse/',
      github: 'https://github.com'
    }
  },
  {
    id: 8,
    name: 'Sakshi Arora',
    role: 'Scrum Boss',
    bio: 'Dedicated to development and task management, she ensures seamless product delivery by excelling in product testing and maintaining a keen eye for detail.',
    image: 'https://via.placeholder.com/150',
    social: {
      twitter: 'https://twitter.com',
      linkedin: 'https://www.linkedin.com/in/sakshi-arora-36a350109/',
      github: 'https://github.com'
    }
  },
  {
    id: 9,
    name: 'Yaswanth Bonumaddi',
    role: 'Quantum Coder',
    bio: 'A highly creative developer with a knack for elegant code solutions, specializing in optimizing application performance.',
    image: 'https://via.placeholder.com/150',
    social: {
      twitter: 'https://twitter.com',
      linkedin: 'https://www.linkedin.com/in/yaswanthbonumaddi/',
      github: 'https://github.com'
    }
  },
  {
    id: 10,
    name: 'Pushpendra Singh ',
    role: 'Dev Engagement Sorcerer',
    bio: 'An exceptional communicator and community builder, fostering thriving partnerships with developers worldwide.',
    image: 'https://via.placeholder.com/150',
    social: {
      twitter: 'https://twitter.com',
      linkedin: 'https://www.linkedin.com/in/kuntalpushpendra/',
      github: 'https://github.com'
    }
  },
  {
    id: 11,
    name: 'Dharuv Manchanda',
    role: 'Full Stack Hustler',
    bio: 'For Dharuv, coding is not just a job—it is a passion. This budding full-stack developer rings energy and enthusiasm to every project.',
    image: 'https://via.placeholder.com/150',
    social: {
      twitter: 'https://twitter.com',
      linkedin: 'https://www.linkedin.com/in/dharuvmanchanda/',
      github: 'https://github.com'
    }
  },
  {
    id: 12,
    name: 'Sanjay Kapoor',
    role: 'Nourishing Caretaker',
    bio: 'An exceptional communicator and community builder, fostering thriving partnerships with developers worldwide.',
    image: 'https://via.placeholder.com/150',
    social: {
      twitter: 'https://twitter.com',
      linkedin: 'https://www.linkedin.com',
      github: 'https://github.com'
    }
  }
];

export const pricingPlans: PricingPlan[] = [
  {
    id: 1,
    name: 'Starter',
    price: '$49',
    description: 'Perfect for individuals and small teams getting started with Godspeed.',
    features: [
      'Meta Framework (Community Edition)',
      'Basic cloud deployment',
      'Community support',
      '1 environment',
      'Basic templates'
    ],
    buttonText: 'Get Started',
  },
  {
    id: 2,
    name: 'Professional',
    price: '$199',
    description: 'Everything you need for professional development teams.',
    features: [
      'Meta Framework (Pro Edition)',
      'Unified Cloud Platform',
      'Web-based Studio (Basic)',
      'Email support',
      '3 environments',
      'All templates and integrations'
    ],
    isFeatured: true,
    buttonText: 'Start Free Trial',
  },
  {
    id: 3,
    name: 'Enterprise',
    price: 'Custom',
    description: 'Tailored solutions for large organizations with complex needs.',
    features: [
      'Meta Framework (Enterprise)',
      'Advanced Cloud Platform with custom integrations',
      'Web-based Studio (Full)',
      'Teams Dashboard with analytics',
      'Unlimited environments',
      'Dedicated support',
      'Custom training and onboarding'
    ],
    buttonText: 'Contact Sales',
  }
];

export const testimonials: Testimonial[] = [
  {
    id: 1,
    content: "Godspeed Systems transformed our development process. We're shipping features 3x faster with better quality than before.",
    author: {
      name: "Jordan Lee",
      role: "VP of Engineering",
      company: "TechForward",
      image: "https://images.pexels.com/photos/1516680/pexels-photo-1516680.jpeg"
    }
  },
  {
    id: 2,
    content: "The guardrails in the Meta Framework have been a game-changer for our junior developers. They're confidently building production-ready code in record time.",
    author: {
      name: "Taylor Martin",
      role: "CTO",
      company: "Innovate Inc",
      image: "https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg"
    }
  },
  {
    id: 3,
    content: "We reduced our infrastructure costs by 40% while improving performance. The cloud platform is efficient and truly cloud-agnostic.",
    author: {
      name: "Casey Wong",
      role: "DevOps Lead",
      company: "DataFlow",
      image: "https://images.pexels.com/photos/1181391/pexels-photo-1181391.jpeg"
    }
  },
];

export const faqs: FAQ[] = [
  {
    question: "What makes Godspeed different from other frameworks?",
    answer: "Godspeed is built from the ground up to empower developers with guardrails that ensure quality while accelerating development. Our meta-framework approach allows for 10x faster development without sacrificing code quality or scalability."
  },
  {
    question: "Is Godspeed suitable for small teams?",
    answer: "Absolutely! Godspeed is designed to scale with your needs. Small teams can start with our Starter plan and grow into more advanced features as needed. The built-in guardrails are especially valuable for smaller teams that need to maintain high standards with limited resources."
  },
  {
    question: "How does the cloud platform work with existing infrastructure?",
    answer: "Our Unified Cloud Delivery Platform is designed to be non-intrusive and compatible with your existing infrastructure. It can deploy to any major cloud provider and works alongside your current systems, allowing for gradual adoption."
  },
  {
    question: "Do I need to be an AI expert to use the AI-enabled Studio?",
    answer: "Not at all. We've designed our AI tools to be accessible to all developers. The AI handles the complexity behind the scenes, providing useful suggestions, automating repetitive tasks, and helping with code reviews without requiring any AI expertise from your team."
  },
  {
    question: "Can Godspeed handle enterprise-scale applications?",
    answer: "Yes, Godspeed was built with enterprise needs in mind. Our largest customers run mission-critical systems serving millions of users. The Enterprise plan includes additional features specifically designed for large-scale deployments, complex compliance requirements, and enterprise integration needs."
  },
  {
    question: "How long does it take to get started with Godspeed?",
    answer: "Most teams can start building with Godspeed within a day. Our quick-start templates and comprehensive documentation make the onboarding process smooth. Enterprise customers receive dedicated onboarding support to ensure a successful implementation."
  },
];

export const companyStats = [
  { value: "10x", label: "Faster Development" },
  { value: "40%", label: "Cost Reduction" },
  { value: "500+", label: "Happy Customers" },
  { value: "99.9%", label: "Uptime" }
];

export const companyValues = [
  {
    title: "Developer First",
    description: "We build tools that developers love to use. Every feature and decision is made with the developer experience in mind."
  },
  {
    title: "Quality Without Compromise",
    description: "We believe speed and quality aren't mutually exclusive. Our guardrails ensure high standards while accelerating development."
  },
  {
    title: "Open Collaboration",
    description: "We work closely with the developer community, incorporating feedback and building in the open whenever possible."
  },
  {
    title: "Continuous Innovation",
    description: "Technology never stands still, and neither do we. We're constantly pushing the boundaries of what's possible."
  }
];