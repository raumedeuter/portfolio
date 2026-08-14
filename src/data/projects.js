import lifestyleAbout from '../assets/images/lifestyle-about.png';

export const projects = [
  {
    id: 'habakkuk',
    title: 'theHabakkuk2:2',
    description: 'An e-commerce web app selling journals, built for a friend.',
    stack: ['React', 'Tailwind CSS'],
    image: lifestyleAbout, // path to a screenshot, add later
    demo: 'https://thehabakkuk2-2.vercel.app',
    featured: true,
  },
  {
    id: 'piratech',
    title: 'Piratech Technologies',
    description: 'A responsive corporate website for a tech company, focused on load-time and engagement.',
    stack: ['HTML', 'CSS', 'JavaScript'],
    image: 'piratech', // path to a screenshot, add later
    demo: 'https://piratechnigeria.com',
    featured: true,
  },
    {
    id: 'selah',
    title: 'Selah',
    description: 'A hobby project which involved a Bible verse and Sanint Quote generator',
    stack: ['HTML', 'CSS', 'JavaScript'],
    image: '',
    demo: 'https://theselah.vercel.app',
    featured: true,
  },
  // add the rest here as you decide featured status
]