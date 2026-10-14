import projectImage1 from '../assets/project-1.svg'
import projectImage2 from '../assets/project-2.svg'
import projectImage3 from '../assets/project-3.svg'
import projectImage4 from '../assets/project-4.svg'

// Projects shown in the portfolio grid.
// TODO: replace with your own projects.

export const projects = [
  {
    id: 1,
    title: 'Weather Dashboard',
    description:
      'A weather app that shows the forecast for any city using a free API, with a five-day outlook and unit switching.',
    image: projectImage1,
    imageAlt: 'Screenshot placeholder of the Weather Dashboard project',
    tech: ['React', 'Bootstrap', 'REST API'],
    github: 'https://github.com/alexcarter-dev/weather-dashboard',
    demo: 'https://weather-dashboard-demo.vercel.app',
    details:
      'This was my first project that talked to a real API. I fetch the data with fetch(), handle the loading and error states, and store the last searched city in localStorage so it survives a page refresh. The layout is fully responsive: the forecast cards stack on mobile and sit in a row on desktop. I also added a simple unit toggle between Celsius and Fahrenheit.',
  },
  {
    id: 2,
    title: 'Task Manager',
    description:
      'A small to-do application with drag-free reordering, filters and data saved in the browser.',
    image: projectImage2,
    imageAlt: 'Screenshot placeholder of the Task Manager project',
    tech: ['React', 'Bootstrap', 'localStorage'],
    github: 'https://github.com/alexcarter-dev/task-manager',
    demo: 'https://task-manager-demo.vercel.app',
    details:
      'The Task Manager keeps everything in localStorage, so no backend is needed. You can add, complete and delete tasks, and filter the list with All / Active / Done buttons. I built it while learning about controlled forms and conditional rendering, and it is the project I use to practise writing clean component code.',
  },
  {
    id: 3,
    title: 'Company Landing Page',
    description:
      'A responsive marketing page for a fake local company, built as a practise project from a Figma design.',
    image: projectImage3,
    imageAlt: 'Screenshot placeholder of the Company Landing Page project',
    tech: ['HTML', 'CSS', 'Bootstrap'],
    github: 'https://github.com/alexcarter-dev/company-landing',
    demo: 'https://company-landing-demo.vercel.app',
    details:
      'I received a simple Figma file and rebuilt it pixel by pixel with Bootstrap grid utilities. The page includes a sticky navigation bar, a hero section, a pricing table and a contact form. The goal of this project was to get comfortable with flexbox, the grid system and writing custom CSS only where Bootstrap was not enough.',
  },
  {
    id: 4,
    title: 'Network Toolkit',
    description:
      'A set of small browser tools for students: a subnet calculator, a DNS lookup explainer and a header inspector.',
    image: projectImage4,
    imageAlt: 'Screenshot placeholder of the Network Toolkit project',
    tech: ['React', 'Bootstrap', 'Networking'],
    github: 'https://github.com/alexcarter-dev/network-toolkit',
    demo: 'https://network-toolkit-demo.vercel.app',
    details:
      'Built during my networking course, this app calculates subnet masks and broadcast addresses from an IP address and shows the result step by step. It helped me connect two of my interests, front-end development and computer networks, and it is the project I am most proud of explaining in interviews.',
  },
]
