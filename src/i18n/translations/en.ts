import type { tr } from './tr'

export const en: typeof tr = {
  common: {
    nav: {
      brand: 'Varol Apps',
      evlio: 'Evlio',
      support: 'Support',
      privacy: 'Privacy',
      terms: 'Terms',
      deleteAccount: 'Delete Account',
    },
    supportEmail: 'support@varolapps.com',
    lastUpdated: 'Last updated',
    onThisPage: 'On this page',
    needHelp: 'Need help?',
    contactSupport: 'Contact Varol Apps support for product and account questions.',
    notFound: {
      title: 'Page Not Found',
      description: 'The page you are looking for does not exist.',
      action: 'Go to Varol Apps',
    },
  },
  home: {
    seo: {
      title: 'Varol Apps | Modern Mobile Applications',
      description: 'Varol Apps develops simple, modern and useful mobile applications. Discover Evlio and upcoming apps.',
    },
    hero: {
      eyebrow: 'Independent mobile app studio',
      title: 'Modern mobile applications that make everyday life easier.',
      description:
        'Varol Apps builds simple, fast, and useful mobile applications. Our first product, Evlio, is designed to make wedding preparation more organized and less stressful.',
      primaryCta: 'Explore Evlio',
      secondaryCta: 'Get Support',
    },
    apps: {
      title: 'Apps',
      description: 'Mobile products developed under Varol Apps.',
      status: {
        active: 'Active',
        comingSoon: 'Coming soon',
      },
      details: 'View Details',
      items: {
        evlio: {
          name: 'Evlio',
          description:
            'A mobile app being developed to organize lists, shopping, and shared plans during the wedding preparation process.',
        },
      },
    },
    studio: {
      title: 'Simple, fast, and thoughtful products.',
      features: [
        {
          title: 'Minimal experience',
          description: 'We make complex processes easier to manage with clean, focused interfaces.',
        },
        {
          title: 'Mobile-first approach',
          description: 'Products are designed from the start for phone screens and real usage habits.',
        },
        {
          title: 'Long-term structure',
          description: 'Each app is built with a clean and sustainable product foundation that can grow over time.',
        },
      ],
    },
    cta: {
      title: 'Our first product, Evlio, is launching soon.',
      description: 'It is being developed to bring wedding preparation lists, shopping, and shared plans into one place.',
      button: 'Explore Evlio',
    },
  },
  evlio: {
    seo: {
      title: 'Evlio | Wedding Preparation and Trousseau Planning App',
      description:
        'Evlio is a modern mobile app that helps couples manage trousseau, shopping, tasks, and shared preparation lists in one place.',
      ogDescription: 'Manage trousseau, shopping, tasks, and shared wedding preparation lists in one place.',
    },
    hero: {
      eyebrow: 'Evlio',
      title: 'Manage wedding preparation with more clarity.',
      description:
        'Evlio brings trousseau, shopping, tasks, and shared lists into one place. It is designed to make preparation simpler, easier to track, and less stressful for couples.',
      appStore: 'Coming soon to the App Store',
      googlePlay: 'Coming soon to Google Play',
    },
    mockup: {
      title: 'Preparation',
      items: ['Trousseau list', 'Shopping', 'Shared tasks'],
    },
    features: {
      title: 'Bring the preparation process into one place.',
      items: [
        {
          title: 'Trousseau and shopping lists',
          description: 'Track what needs to be purchased, what is complete, and what is still missing.',
        },
        {
          title: 'Shared workspace',
          description: 'Manage lists together with your partner in the same preparation space.',
        },
        {
          title: 'Offline use',
          description: 'Keep accessing your lists even when you do not have an internet connection.',
        },
        {
          title: 'Synchronization',
          description: 'Your data stays up to date across supported devices.',
        },
        {
          title: 'Premium features',
          description: 'Personalize your preparation process with more advanced options.',
        },
        {
          title: 'Simple mobile experience',
          description: 'A modern phone-friendly experience instead of complex spreadsheets.',
        },
      ],
    },
    howItWorks: {
      title: 'How Evlio works',
      steps: [
        {
          title: 'Create your lists',
          description: 'Organize trousseau, shopping, or task lists based on what you need.',
        },
        {
          title: 'Track together',
          description: 'Use a shared workspace to manage the preparation process with your partner.',
        },
        {
          title: 'Complete what is missing',
          description: 'Mark completed items and quickly see what remains.',
        },
      ],
    },
    screenshots: {
      title: 'Mobile experience',
      description: 'Real screenshots will be added as the product gets closer to release.',
      items: ['Lists', 'Shared Space', 'Planning'],
    },
    faq: {
      title: 'Frequently asked questions',
      items: [
        {
          question: 'When will Evlio be released?',
          answer: 'The first version of Evlio will be published after App Store and Google Play review processes are complete.',
        },
        {
          question: 'Will Evlio be free?',
          answer: 'Evlio will be available to use for free. Some advanced features may be offered through premium options.',
        },
        {
          question: 'Can partners use it together?',
          answer: 'Yes. The shared workspace feature is intended to help couples work in the same preparation space.',
        },
        {
          question: 'Will it work offline?',
          answer: 'Evlio is being developed with offline use and synchronization in mind.',
        },
        {
          question: 'Can I delete my account?',
          answer: 'Yes. Account deletion steps are explained on the Delete Account page.',
        },
      ],
    },
    cta: {
      title: 'Built to make wedding preparation simpler.',
      description: 'Evlio will soon be available in mobile app stores.',
      support: 'Get Support',
      deleteAccount: 'Account Deletion Info',
    },
    trust: {
      title: 'Trust and support',
      description: 'Find privacy, terms, support and account deletion information for Evlio.',
      links: {
        privacy: 'Privacy Policy',
        terms: 'Terms of Use',
        support: 'Support',
        deleteAccount: 'Delete Account',
        faq: 'FAQ',
      },
    },
  },
}
