import ebike from './assets/IMG_0134.jpg'
import github from './assets/github.png'
import feedback from './assets/feedback.png'
import atunlo from './assets/atunlo.png'
import transfy from './assets/transfy.png'
import foodApp from './assets/foodApp.jpeg'
import mandate from './assets/firstmandate.png'
import emisri from './assets/emisri.png'
import centel from './assets/centel.png'
import { AiFillHtml5 } from 'react-icons/ai'
import {
  SiCss3,
  SiFramer,
  SiTailwindcss,
  SiStyledcomponents,
  SiFirebase,
} from 'react-icons/si'
import { BsGithub } from 'react-icons/bs'
import { DiJavascript1 } from 'react-icons/di'
import { GrReactjs } from 'react-icons/gr'
import Sass from './assets/download.png'
import { SiRedux } from 'react-icons/si'
import { GrGraphQl } from 'react-icons/gr'

export const projects = [
  {
    img: centel,
    text: 'CentelHR is your all-in-one HR command center. Effortlessly manage payroll, ensure compliance, streamline HR processes, and track every Naira—all from a single, intuitive platform.',
    demo: 'https://centelhr.com/',
  },
  {
    img: emisri,
    text: 'Emisri is a high-scale bulk messaging platform built to redefine customer engagement. Leveraging Commtech, it goes beyond basic messaging with features like essage personalization, URL shortening, flash messages etc.',
    demo: 'https://home.emisri.com/',
  },
  {
    img: mandate,
    text: 'A property management dashboard empowering landlords, property managers, and tenants with centralized control. (Web application - currently in progress)',
    demo: 'https://first-mandate-components.vercel.app/',
  },
  {
    img: github,
    text: 'Explored the Github API to search different Github Developers.',
    demo: 'https://github-finder-app-rose-two.vercel.app/',
  },
  {
    img: atunlo,
    text: 'Atunlo is an initiative focused on solving the climate change problem in Nigeria by providing incentives to community members for the collection and recycling pf plastics',
    demo: 'https://atunlo.vercel.app/',
  },
  {
    img: transfy,
    text: 'A user form validation built with React and Firebase',
    demo: 'https://transfy-authentification.vercel.app/',
  },
  {
    img: foodApp,
    text: 'An e-commerce food application, ',
    demo: 'https://ecommerce-food-app.vercel.app/',
  },

  {
    img: feedback,
    text: 'A user feedback application, ',
    demo: 'https://feedback-application-iota.vercel.app/',
  },
  {
    img: ebike,
    text: 'An ebike landing page built with React and TailwindCSS',
    demo: 'https://ebike-landing-page.vercel.app/',
  },
]

export const skillsData = [
  {
    icon: <GrReactjs className='icon' />,
    name: 'React',
  },
  {
    icon: <DiJavascript1 className='icon' />,
    name: 'Javascript',
  },
  {
    icon: <SiRedux className='icon' />,
    name: 'Redux and Redux Toolkit',
  },
  {
    icon: <GrReactjs className='icon' />,
    name: 'Tanstack React Query',
  },
  {
    icon: <GrGraphQl className='icon' />,
    name: `Integrate backend APIs`,
  },

  {
    icon: <SiTailwindcss className='icon' />,
    name: 'Tailwind',
  },
  {
    icon: <AiFillHtml5 className='icon' />,
    name: 'HTML5',
  },

  {
    icon: <SiCss3 className='icon' />,
    name: 'CSS3',
  },

  {
    icon: <SiStyledcomponents className='icon' />,
    name: 'Styled Components',
  },
  {
    icon: <img src={Sass} alt='Sass' />,
    name: 'Sassy Cascading Style Sheets',
  },

  {
    icon: <SiFramer className='icon' />,
    name: 'Framer motion',
  },
  {
    icon: <BsGithub className='icon' />,
    name: 'Git & Github',
  },
  {
    icon: <SiFirebase className='icon' />,
    name: 'Firebase',
  },
]
