import { BotMessageSquare } from "lucide-react";
import { BatteryCharging } from "lucide-react";
import { Fingerprint } from "lucide-react";
import { ShieldHalf } from "lucide-react";
import { PlugZap } from "lucide-react";
import { GlobeLock } from "lucide-react";
import {
  Briefcase,
  Code,
  DollarSign,
  BarChart,
  Server,
  Puzzle,
  Database,
  LifeBuoy,
  FileText,
  Facebook,
  Instagram,
  Twitter,
  Linkedin,
} from "lucide-react";

import user1 from "../assets/profile-pictures/user1.jpg";
import user2 from "../assets/profile-pictures/user2.jpg";
import user3 from "../assets/profile-pictures/user3.jpg";
import user4 from "../assets/profile-pictures/user4.jpg";
import user5 from "../assets/profile-pictures/user5.jpg";
import user6 from "../assets/profile-pictures/user6.jpg";

export const navItems = [
  { label: "Home", href: "#home" },
  { label: "Services", href: "#services" },
  { label: "About Us", href: "#about-us" },
  { label: "Contact", href: "#contact" },
];

export const testimonials = [
  {
    user: "John Doe",
    company: "Stellar Solutions",
    image: user1,
    text: "I am extremely satisfied with the services provided. The team was responsive, professional, and delivered results beyond my expectations.",
  },
  {
    user: "Jane Smith",
    company: "Blue Horizon Technologies",
    image: user2,
    text: "I couldn't be happier with the outcome of our project. The team's creativity and problem-solving skills were instrumental in bringing our vision to life",
  },
  {
    user: "David Johnson",
    company: "Quantum Innovations",
    image: user3,
    text: "Working with this company was a pleasure. Their attention to detail and commitment to excellence are commendable. I would highly recommend them to anyone looking for top-notch service.",
  },
  {
    user: "Ronee Brown",
    company: "Fusion Dynamics",
    image: user4,
    text: "Working with the team at XYZ Company was a game-changer for our project. Their attention to detail and innovative solutions helped us achieve our goals faster than we thought possible. We are grateful for their expertise and professionalism!",
  },
  {
    user: "Michael Wilson",
    company: "Visionary Creations",
    image: user5,
    text: "I am amazed by the level of professionalism and dedication shown by the team. They were able to exceed our expectations and deliver outstanding results.",
  },
  {
    user: "Emily Davis",
    company: "Synergy Systems",
    image: user6,
    text: "The team went above and beyond to ensure our project was a success. Their expertise and dedication are unmatched. I look forward to working with them again in the future.",
  },
];

export const features = [
  {
    icon: <BotMessageSquare />,
    text: "Drag-and-Drop Interface",
    description:
      "Easily design and arrange your VR environments with a user-friendly drag-and-drop interface.",
  },
  {
    icon: <Fingerprint />,
    text: "Multi-Platform Compatibility",
    description:
      "Build VR applications that run seamlessly across multiple platforms, including mobile, desktop, and VR headsets.",
  },
  {
    icon: <ShieldHalf />,
    text: "Built-in Templates",
    description:
      "Jumpstart your VR projects with a variety of built-in templates for different types of applications and environments.",
  },
  {
    icon: <BatteryCharging />,
    text: "Real-Time Preview",
    description:
      "Preview your VR application in real-time as you make changes, allowing for quick iterations and adjustments.",
  },
  {
    icon: <PlugZap />,
    text: "Collaboration Tools",
    description:
      "Work together with your team in real-time on VR projects, enabling seamless collaboration and idea sharing.",
  },
  {
    icon: <GlobeLock />,
    text: "Analytics Dashboard",
    description:
      "Gain valuable insights into user interactions and behavior within your VR applications with an integrated analytics dashboard.",
  },
];

export const checklistItems = [
  {
    title: "Finance",
    description:
      "Improving the performance of our clients’ finance organizations.",
  },
  {
    title: "Technology",
    description:
      "modernising and integrating their mainstream IT and by deploying digital solutions to scale for a successful digital future.",
  },
  {
    title: "Grants and Proposals",
    description:
      "Our robust, programmatic structure of industry-leading Strategic and Solution Partners provides the right solution and the right team to deliver critical technological business outcomes for our clientelle.",
  },
];

export const pricingOptions = [
  {
    title: "Free",
    price: "$0",
    features: [
      "Private board sharing",
      "5 Gb Storage",
      "Web Analytics",
      "Private Mode",
    ],
  },
  {
    title: "Pro",
    price: "$10",
    features: [
      "Private board sharing",
      "10 Gb Storage",
      "Web Analytics (Advance)",
      "Private Mode",
    ],
  },
  {
    title: "Enterprise",
    price: "$200",
    features: [
      "Private board sharing",
      "Unlimited Storage",
      "High Performance Network",
      "Private Mode",
    ],
  },
];

export const resourcesLinks = [
  { href: "#", text: "Home" },
  { href: "#", text: "About us" },
  { href: "#", text: "Services" },
  { href: "#", text: "Contact" },
];

export const platformLinks = [
  { href: "#", text: "Features" },
  { href: "#", text: "Supported Devices" },
  { href: "#", text: "System Requirements" },
  { href: "#", text: "Downloads" },
  { href: "#", text: "Release Notes" },
];

export const communityLinks = [
  { icon: <Facebook color="orange" />, href: "#", text: "Facebook" },
  { icon: <Linkedin color="orange" />, href: "#", text: "LinkedIn" },
  { icon: <Twitter color="orange" />, href: "#", text: "X" },
  { icon: <Instagram color="orange" />, href: "#", text: "Instagram" },
];

export const services = [
  {
    icon: <Briefcase />,
    text: "Business Solutions",
    description: "Tailored strategies to enhance business efficiency and growth.",
  },
  {
    icon: <Code />,
    text: "IT Consulting",
    description: "Expert guidance on IT infrastructure, strategy, and innovation.",
  },
  {
    icon: <Code />,
    text: "Software Development",
    description: "Custom-built software solutions to meet your business needs.",
  },
  {
    icon: <DollarSign />,
    text: "Finance Modelling",
    description: "Financial analysis and modelling to optimize your decision-making.",
  },
  {
    icon: <BarChart />,
    text: "Data Solutions",
    description: "Comprehensive data services for analysis and insight generation.",
  },
  {
    icon: <Puzzle />,
    text: "API Integration",
    description: "Seamless integration of APIs to connect your systems efficiently.",
  },
  {
    icon: <LifeBuoy />,
    text: "Application Maintenance",
    description: "Ongoing support and maintenance for business-critical applications.",
  },
  {
    icon: <Database />,
    text: "Database Solutions",
    description: "Robust database management to ensure reliable data handling.",
  },
  {
    icon: <FileText />,
    text: "Grants and Proposal Writing",
    description: "Expert writing services for grants and business proposals to secure funding.",
  },
];

