import heroImage from '../assets/images/hero_droids_studio_1795703175663.jpg';

export type AppCategory = 'Utility Applications' | 'Mobile Games';

export interface FocusCategory {
  id: string;
  category: AppCategory;
  title: string;
  summary: string;
  highlights: string[];
}

export const SITE_CONFIG = {
  brandName: 'Droids',
  heroImage,
  playStoreDeveloperUrl: 'https://play.google.com/store/apps/dev?id=5549673104415412912',
  contact: {
    email: 'droidsapk8@gmail.com',
    instagramHandle: '@droids.apps',
    instagramUrl: 'https://instagram.com/droids.apps',
  },
  copyrightYear: 2026,
} as const;

export const HERO_CONTENT = {
  kicker: 'Independent App & Game Developer',
  heading: 'Building Apps for Everyday Life.',
  description:
    'Droids creates useful mobile applications and engaging games designed to make everyday experiences simpler, smarter and more enjoyable.',
  primaryCta: 'Explore Our Apps',
} as const;

export const ABOUT_CONTENT = {
  heading: 'Thoughtful mobile software crafted with focus.',
  description:
    'Droids is an independent app development brand focused on creating practical mobile applications and entertaining games. Our goal is to build simple, accessible and user-friendly digital experiences.',
  principles: [
    {
      index: '01.',
      title: 'Practical Everyday Utility',
      body: 'Every tool is designed around a clear daily task without bloated menus or unnecessary distractions.',
    },
    {
      index: '02.',
      title: 'Accessible by Design',
      body: 'Clean typography, predictable touch targets, and legible contrast ensure comfortable use across screen sizes.',
    },
    {
      index: '03.',
      title: 'Independent Craft',
      body: 'Built directly with care for performance, responsiveness, and respectful user experiences on mobile devices.',
    },
  ],
} as const;

export const EXPLORE_APPS_CONTENT = {
  kicker: 'Google Play Developer Store',
  heading: 'Explore Our Apps',
  description: 'Discover our mobile applications and games on Google Play.',
  ctaLabel: 'Explore Droids on Google Play',
} as const;

export const FOCUS_CATEGORIES: FocusCategory[] = [
  {
    id: 'focus-utilities',
    category: 'Utility Applications',
    title: 'Utility Applications',
    summary:
      'Practical, lightweight mobile tools built to simplify daily workflows, organize information clearly, and respect your time.',
    highlights: [
      'Clean, distraction-free interfaces',
      'Fast launch and responsive performance',
      'Designed for intuitive one-handed use',
    ],
  },
  {
    id: 'focus-games',
    category: 'Mobile Games',
    title: 'Mobile Games',
    summary:
      'Engaging, approachable games crafted with crisp visuals, satisfying feedback, and straightforward mechanics anyone can pick up.',
    highlights: [
      'Responsive touch-first gameplay',
      'Balanced for quick breaks or longer play',
      'Clear visual polish without clutter',
    ],
  },
];

export const LEGAL_DOCUMENTS = {
  privacy: {
    title: 'Privacy Policy',
    updated: 'Effective 2026',
    sections: [
      {
        heading: '1. Overview',
        body: 'Droids is an independent mobile application and game developer. This Privacy Policy describes how information is handled when you visit this website or use mobile applications published under the Droids brand.',
      },
      {
        heading: '2. Website Information',
        body: 'This website serves as an informational developer website for Droids. Any details you choose to send via email are used solely to respond to your inquiry.',
      },
      {
        heading: '3. Mobile Applications & Games',
        body: 'Individual applications and games published by Droids on Google Play include specific Data Safety disclosures on their store listing prior to installation.',
      },
      {
        heading: '4. Contact',
        body: 'If you have questions regarding privacy practices, please reach out to droidsapk8@gmail.com or via Instagram @droids.apps.',
      },
    ],
  },
  terms: {
    title: 'Terms & Conditions',
    updated: 'Effective 2026',
    sections: [
      {
        heading: '1. Acceptance of Terms',
        body: 'By accessing the Droids website or using mobile applications and games published by Droids, you agree to these Terms & Conditions.',
      },
      {
        heading: '2. Use of Software & Content',
        body: 'All visual assets, branding, interface designs, and software published under the Droids name are provided for personal, non-commercial use unless otherwise stated. You agree not to reverse engineer, redistribute, or misuse any published application.',
      },
      {
        heading: '3. Availability & Updates',
        body: 'Droids is an independent publisher and may update, modify, or discontinue applications or features at any time without prior notice.',
      },
      {
        heading: '4. Contact & Disclaimer',
        body: 'This website and any applications are provided on an "as is" and "as available" basis without warranties of any kind, to the fullest extent permitted by applicable law. For questions, contact droidsapk8@gmail.com.',
      },
    ],
  },
} as const;

