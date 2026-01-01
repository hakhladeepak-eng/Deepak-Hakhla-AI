
import { SectionId, NavItem } from './types';

export const NAVIGATION_ITEMS: NavItem[] = [
  { id: SectionId.Hero, label: 'Deepak Hakhla' },
  { id: SectionId.About, label: 'About' },
  { id: SectionId.CurrentWork, label: 'Current Work' },
  { id: SectionId.Agents, label: 'AI Agents' },
  { id: SectionId.Automation, label: 'AI Automation' },
  { id: SectionId.Web, label: 'Web & Systems' },
  { id: SectionId.Video, label: 'Video Projects' },
  { id: SectionId.FAQ, label: 'FAQs' },
  { id: SectionId.Contact, label: 'Contact' },
];

export const PROJECTS = {
  agents: [
    { title: 'Nexus Voice Assistant', description: 'Real-time conversational AI voice agent with low-latency response architecture.' },
    { title: 'OmniSupport Agent', description: 'Automated multi-channel customer support system using advanced LLM reasoning.' }
  ],
  automation: [
    { title: 'Enterprise ETL Pipeline', description: 'Serverless workflow automating 10k+ daily document classifications.' },
    { title: 'Smart Inventory Sync', description: 'Cross-platform automation linking logistics with AI-driven forecasting.' }
  ],
  video: [
    { id: 'v1', title: 'The Future of AI Agents', url: 'https://player.vimeo.com/external/370331493.sd.mp4?s=2907314705973909e41c357378ff261ca24466f3&profile_id=164&oauth2_token_id=57447761' },
    { id: 'v2', title: 'Automating Workflows at Scale', url: 'https://player.vimeo.com/external/370467553.sd.mp4?s=33088b9F0014D882A3A9A7453C966144B4C5356E&profile_id=164&oauth2_token_id=57447761' },
    { id: 'v3', title: 'Voice AI Integration Demo', url: 'https://player.vimeo.com/external/403730514.sd.mp4?s=d02a0a38f3E38E33B765B62227D666F880C79796&profile_id=164&oauth2_token_id=57447761' }
  ]
};

export const FAQS = [
  { question: "What industries do you specialize in?", answer: "I primarily work with high-growth tech startups, e-commerce giants, and professional service firms looking to integrate AI into their core operations." },
  { question: "How long does a typical AI integration take?", answer: "Project timelines vary depending on complexity, but a standard automation workflow usually takes 2-4 weeks from discovery to deployment." },
  { question: "Do you offer post-deployment support?", answer: "Yes, all my systems come with a dedicated support period to ensure the AI models and workflows are performing optimally as data scales." }
];
