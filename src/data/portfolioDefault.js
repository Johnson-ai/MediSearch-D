import { defaultAnatomyContent } from './anatomy.js';
// Public starter content: do not publish unverified education, clinical titles, awards or registration numbers.
export const defaultPortfolio = {
  site: {
    name: 'Abigael Akossou', shortName: 'AA', eyebrow: 'Clinical sciences • Nursing • Human care',
    role: 'Building a career in nursing & healthcare',
    headline: 'Where science meets compassionate care.',
    intro: 'A professional space dedicated to clinical learning, meaningful patient care and the development of modern nursing practice. Explore my journey, education and work.',
    aboutHeading: 'Care begins with understanding.',
    about: 'This section is ready for Abigael to share her own professional story, interests, values and approach to compassionate patient care.',
    location: '', email: '', telephone: '', linkedin: '', website: '',
    portraitUrl: '', cvUrl: '', heroNote: 'Focused on learning, care and clinical excellence.',
    footerLine: 'Nursing portfolio · Clinical learning · Human-centred care.',
    studyFeatureTitle: 'Clinical learning, reimagined.',
    studyFeatureDescription: 'Explore clinical study notes, nursing examinations, flashcards, medical references and study tools.',
    contactHeading: "Let's connect.", contactIntro: 'For professional inquiries, collaboration or a conversation.',
    contactMessage: 'Open to meaningful connections.',
    valuesStrip: 'HEALTHCARE | LEARNING | COMPASSION | PROFESSIONAL GROWTH',
    showContact: true, showStudy: true,
    seoTitle: 'Abigael Akossou | Professional Portfolio',
    seoDescription: 'Portfolio and nursing study resources of Abigael Akossou.'
  },
  anatomy: defaultAnatomyContent,
  strengths: [
    { title: 'Patient-centred perspective', description: 'Add a personal statement about the care principles and values that guide your practice.' },
    { title: 'Evidence-informed learning', description: 'Describe your interests, research and approach to developing clinical knowledge.' },
    { title: 'Professional development', description: 'Highlight your professional growth, training and future aspirations.' },
  ],
  // Entries are dated YYYY-MM so they can be grouped on the public /progress journal.
  updates: [],
  education: [],
  experience: [],
  certifications: [],
  skills: [],
  projects: [],
  achievements: [],
  study: {
    eyebrow: 'Study library',
    title: 'A dedicated space for nursing study.',
    description: 'Clinical reference, exam preparation and learning tools collected in one accessible place. AI content is educational and must be independently checked before clinical use.'
  }
};
