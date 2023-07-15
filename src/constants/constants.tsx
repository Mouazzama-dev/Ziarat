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
  { id: 'f1', img: dummyImg, title: 'Fast transactions', description: 'One of the prominent competitive advantage is fast transaction with high scalability' },
  { id: 'f2', img: dummyImg, title: 'Low transaction fees', description: 'By merging zk-rollups with state channels, transaction fees are significantly reduced, offering users a cost-effective solution for conducting transactions.' },
  { id: 'f3', img: dummyImg, title: 'High scalability', description: 'The combination of zk-rollups and state channels results in exceptional scalability, allowing for a significant increase in transaction processing capacity and accommodating a large number of transactions simultaneously.' },
];


export const partnershipData = [
  {
    id: 'p1', img: dummyImg, title: 'Partnership',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.',
    buttonText: 'Contact the Team'
  },
  {
    id: 'p2', img: dummyImg, title: 'Customers',
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
    question: "What is Ziarat, and how does it differ from traditional blockchain solutions?",
    answer: "Ziarat is a groundbreaking protocol that combines state channels and zk-rollups to enhance scalability, privacy, and reduce transaction costs compared to traditional blockchain solutions",
  },
  {
    id: 2,
    question: "What are the privacy features of Ziarat?",
    answer: "Ziarat incorporates zero-knowledge proofs from zk-rollups, ensuring transaction validity without revealing sensitive data, thereby safeguarding user confidentiality.",
  },
  {
    id: 3,
    question: "Will Ziarat have a token?",
    answer: "We are actively working on the tokenomics of Ziarat, to drive the platform's economy and ensure early builders are supported.",
  },
  {
    id: 4,
    question: "Can Ziarat be used for a variety of applications?",
    answer: "Yes, Ziarat's flexible design caters to diverse use cases, from frequent and fast interactions to less frequent settlement scenarios, making it suitable for a wide range of applications.",
  },
  {
    id: 5,
    question: "Will Ziarat be open-source?",
    answer: "Yes, Ziarat will be  an open-source protocol, promoting transparency and community collaboration.",
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
]


export interface ModalProps {
  isOpen: boolean;
  handleOpen: (buttonText: string) => void
  heading: string;
  showCheckbox?: boolean;
  buttonText?: string

}





