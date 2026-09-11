export const site = {
  name: 'Kay Yen Wong',
  alternateNames: ['Kay Wong', 'KayYen Wong', 'Kayyen Wong'],
  title: 'Notes on machine learning',
  description: 'Notes on machine learning, open source, the web, and whatever rabbit hole I\'m currently falling into. Occasionally my own research subject.',
  intro: 'Power user turned ML Engineer. I write about Machine Learning, the internet, and occasionally using too much compute to investigate my own problems.',
  github: 'https://github.com/kay-wong', // Full profile URL; empty hides the link.
  email: 'kayyenwong@gmail.com',
  location: 'London, UK',
  linkedin: 'https://www.linkedin.com/in/kayyenwong/', // Full LinkedIn profile URL.
  career: [
    { period: 'Current', title: 'Machine Learning Engineer', description: 'Reddit' },
    { period: 'Aug 2021 - Apr 2025', title: 'Senior Machine Learning Engineer', description: 'Tumblr' },
    { period: 'Dec 2020 - May 2021', title: 'Research Engineer', description: 'Wikimedia Foundation' },
    { period: 'Feb 2018 - Jan 2020', title: 'Machine Learning Engineer', description: 'Accenture' },
  ],
  focus: 'Machine learning, recommender systems, open source, the web, and assorted technical rabbit holes.',
  defaultImage: '/social-default.png',
  defaultImageAlt: 'Kay Yen Wong — notes on machine learning and the web',
  disqusShortname: import.meta.env.PUBLIC_DISQUS_SHORTNAME || '',
};
