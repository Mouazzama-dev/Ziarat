import { BsTwitter, BsDiscord } from "react-icons/bs";
import { FaLinkedinIn } from 'react-icons/fa'

import magnifying from '../assets/magnified.png'
import settings from '../assets/settings.png';
import rocket from '../assets/rocket.png';
import Q1 from '../assets/Q1.png';
import Q2 from '../assets/Q2.png';
import Q3 from '../assets/Q3.png';
import Q4 from '../assets/Q4.png';


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
    id: 'https://forms.gle/YBsekvs3hjWjzu6J7',
    title: "Hiring",
    hasForm: true
  },
];

export const socialLinks = [

  { id: 'discord', icon: <BsDiscord />, url: "https://discord.gg/5T9gTvMgR7" },
  { id: 'twitter', icon: <BsTwitter />, url: "https://twitter.com/ziarat_info" },
  { id: 'linkedIn', icon: <FaLinkedinIn />, url: "https://www.linkedin.com/company/ziaratofficial/" },
];



export const features = [
  { id: 'f1', image: magnifying, title: 'Fast transactions', description: 'One of the prominent competitive advantage is fast transaction with high scalability' },
  { id: 'f2', image: settings, title: 'Low transaction fees', description: 'By merging zk-rollups with state channels, transaction fees are significantly reduced, offering users a cost-effective solution for conducting transactions.' },
  { id: 'f3', image: rocket, title: 'High scalability', description: 'The combination of zk-rollups and state channels results in exceptional scalability, allowing for a significant increase in transaction processing capacity and accommodating a large number of transactions simultaneously.' },
];


export const partnershipData = [
  {
    id: 'p1', title: 'Partnership',
    description: 'If you  are building on Ethereum and looking for the scalable platform to run on or making tools or dApps.',
    buttonText: 'Contact the Team'
  },
  {
    id: 'p2', title: 'Customers',
    description: 'If you are interested in using the protocol and participating in its life.',
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
    question: "Will Ziarat be open-source?",
    answer: "Yes, Ziarat will be  an open-source protocol, promoting transparency and community collaboration.",
  },
];

export const footerLinks = [
  {
    id: 1,
    name: "Terms & Conditions",
    link: "https://docs.google.com/document/d/1fJZF2PUqSx2v_ZCwLtyXNBm9XrnFWeF0/view",
  },
  {
    id: 2,
    name: "Privacy Policy",
    link: "https://docs.google.com/document/d/16FGMZX5IitmEbs_9WSQ6LNTZ_oUndDcK/view",
  },
  {
    id: 3,
    name: "Legal Disclaimer",
    link: "https://drive.google.com/file/d/1BILK5RYozLmAFKxMfWop3kDf2TsAIKB5/view",
  },
  {
    id: 4,
    name: "Cookie Policy",
    link: "https://docs.google.com/document/d/1FSHj5RcvNqa9jgM5RGu3mUZe4JEfj8oA/view",
  },
]

export const roadmaps = [
  {
    image: Q1,
    roadmap: ["Initial Concept", "Developement of Ziarat web App", "Partners onboarding", "Alpha Version of Ziarat", "Gitbook (Ziarat SDK documentation)", "Hiring Developement Team"]
  },
  {
    image: Q2,
    roadmap: ["Beta version of Ziarat", "Airdrop", "Strategic Partnership & Collaboration", "Testnet Alpha launch", "Development of Ziarat wallet", "Grants Program launch"]
  },
  {
    image: Q3,
    roadmap: ["Testnet Beta launch", "Integration of Ziarat to other Wallets", "Listing on Exchanges", "Staking", "Ziarat Governance token"]
  },
  {
    image: Q4,
    roadmap: ["Ziarat Mainnet Release", "Bug bounties launch", "Ziarat mainnet validator onboarding"]
  }
];


export interface ModalProps {
  isOpen: boolean;
  handleOpen: (buttonText: string) => void
  heading: string;
  showCheckbox?: boolean;
  buttonText?: string

}





