import { BsInstagram, BsFacebook, BsTwitter, BsLinkedin } from "react-icons/bs";
import dummyImg from '../assets/Ziarat Logo-08.png 21-09-27-834.png'

export const navLinks = [
  {
    id: "why",
    title: "Why Ziarat",
  },
  {
    id: "partnership",
    title: "Partnership",
  },
  {
    id: "customers",
    title: "Customers",
  },
  {
    id: "faq",
    title: "F.A.Q",
  },
  {
    id: "when",
    title: "When",
  },
  {
    id: "hiring",
    title: "Hiring",
  },
];

export const socialLinks = [
  { id: 'insta', icon: <BsInstagram />, url: "https://www.instagram.com/" },
  { id: 'fb', icon: <BsFacebook />, url: "https://www.facebook.com/" },
  { id: 'tw', icon: <BsTwitter />, url: "https://www.twitter.com/" },
  { id: 'linIn', icon: <BsLinkedin />, url: "https://www.linkedin.com/" },
];



export const features = [
  { id: 'f1', img: dummyImg, title: 'Lorem Ipsum', description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.' },
  { id: 'f2', img: dummyImg, title: 'Lorem Ipsum', description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.' },
  { id: 'f3', img: dummyImg, title: 'Lorem Ipsum', description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.' },
  { id: 'f4', img: dummyImg, title: 'Lorem Ipsum', description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.' },
];


export const partnershipData = [
  {
    id: 'p1', img: dummyImg, title: 'Lorem Ipsum',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.',
    buttonText: 'Contact the Team'
  },
  {
    id: 'p2', img: dummyImg, title: 'Lorem Ipsum',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.',
    buttonText: 'Notify Me'
  },
];

interface AccordionItem {
  id: number;
  question: string;
  answer: string;
}

export const faqData: AccordionItem[] = [
  {
    id: 1,
    question: "What is Lorem Ipsum?",
    answer: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  },
  {
    id: 2,
    question: "Why do we use it?",
    answer: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
  },
  {
    id: 3,
    question: "Where does it come from?",
    answer: "Contrary to popular belief, Lorem Ipsum is not simply random text.",
  },
  {
    id: 4,
    question: "Where can I get some?",
    answer: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.",
  },
  {
    id: 5,
    question: "Is it safe?",
    answer: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  },
];

export const footerLinks = [{
  title: "Lorem Ipsum",
  links: [
    {
      name: "Content",
      link: "https://www.hoobank.com/content/",
    },
    {
      name: "How it Works",
      link: "https://www.hoobank.com/how-it-works/",
    },
    {
      name: "Create",
      link: "https://www.hoobank.com/create/",
    },
    {
      name: "Explore",
      link: "https://www.hoobank.com/explore/",
    },
    {
      name: "Terms & Services",
      link: "https://www.hoobank.com/terms-and-services/",
    },
  ],

},
{
  title: "Lorem Ipsum",
  links: [
    {
      name: "Content",
      link: "https://www.hoobank.com/content/",
    },
    {
      name: "How it Works",
      link: "https://www.hoobank.com/how-it-works/",
    },
    {
      name: "Create",
      link: "https://www.hoobank.com/create/",
    },
    {
      name: "Explore",
      link: "https://www.hoobank.com/explore/",
    },
    {
      name: "Terms & Services",
      link: "https://www.hoobank.com/terms-and-services/",
    },
  ],

},
{
  title: "Lorem Ipsum",
  links: [
    {
      name: "Content",
      link: "https://www.hoobank.com/content/",
    },
    {
      name: "How it Works",
      link: "https://www.hoobank.com/how-it-works/",
    },

  ],

},
]


export interface ModalProps {
  isOpen: boolean;
  handleOpen: (buttonText: string) => void
  heading: string;
  showCheckbox?: boolean;
  buttonText?: string

}





