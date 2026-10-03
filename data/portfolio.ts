export type Poster = {
  id: string;
  title: string;
  institution: string;
  area: string;
  image: string;
  pdf: string;
  width: number;
  height: number;
};

export type ResearchExperience = {
  id: string;
  institution: string;
  role: string;
  period: string;
  location?: string;
  posterId?: string;
  focus: string;
  bullets: string[];
  topics: string[];
  metric?: { value: string; label: string };
};

export const posters: Poster[] = [
  { id: 'lake-munson', title: 'Machine Learning–Based Forecasting of Chlorophyll-a in Lake Munson Under Extreme Drawdown Conditions Using Gradient Boosting Regression', institution: 'Florida State University', area: 'Gradient Boosting · Water Quality', image: '/images/research/lake-munson-gradient-boosting-preview.webp', pdf: '/posters/lake-munson-gradient-boosting.pdf', width: 1479, height: 2000 },
  { id: 'quanteval', title: 'QuantEval: Automated Quantitative Evaluation of NSF Proposals', institution: 'National High Magnetic Field Laboratory', area: 'NLP · Scientific Review', image: '/images/research/quanteval-preview.webp', pdf: '/posters/quanteval.pdf', width: 2000, height: 1600 },
  { id: 'fault-detection', title: 'Incorporating AI into In-Situ Process Monitoring for Fault Detection', institution: 'FAMU-FSU College of Engineering', area: 'AI for Engineering · Manufacturing', image: '/images/research/ai-fault-detection-preview.webp', pdf: '/posters/ai-fault-detection.pdf', width: 2000, height: 1334 },
];

export const researchExperiences: ResearchExperience[] = [
  {
    id: 'dsgt', institution: 'Data Science @ Georgia Tech', role: 'Project Lead, Transformer Research · Sports Analytics Member', period: 'September 2026 — Present', location: 'Atlanta, Georgia',
    focus: 'Studying how compact language models learn from limited text.',
    bullets: ['Trained a character-level Transformer in PyTorch on 100K WikiText-103 lines, lowering training loss from 7.56 to approximately 2.27 within 1,000 steps. Analyzed repetitive outputs to guide subsequent experiments.', 'Reduced depth from 6 to 4 layers and embedding width from 512 to 256 to establish a small-model baseline for model-data scaling.', 'Investigating R-Drop consistency regularization and auxiliary multi-token prediction with a research mentor to improve generalization under data scarcity.', 'Built Python pipelines to scrape, clean, and load sports statistics into SQL, cutting preparation time from 5 hours to 1 hour per cycle.'],
    topics: ['PyTorch', 'Transformers', 'R-Drop', 'Model Evaluation', 'Python', 'SQL'], metric: { value: '80%', label: 'less sports-data preparation time' },
  },
  {
    id: 'humsense', institution: 'WebDev @ Georgia Tech', role: 'Machine Learning Developer, HumSense', period: 'September 2026 — Present', location: 'Atlanta, Georgia',
    focus: 'Connecting audio classification with editable musical notation.',
    bullets: ['Improved audio-classification macro-F1 from 0.72 to 0.82 (13.9%) through preprocessing, augmentation, and threshold tuning.', 'Integrated Spotify Basic Pitch for audio-to-MIDI conversion and editable sheet music.'],
    topics: ['Audio Classification', 'Data Augmentation', 'Basic Pitch', 'MIDI'], metric: { value: '0.82', label: 'audio-classification macro-F1' },
  },
  {
    id: 'liu-lab', institution: 'Georgia Institute of Technology', role: 'Undergraduate Researcher, Liu Lab', period: 'August 2026 — Present', location: 'Atlanta, Georgia',
    focus: 'Physics-guided learning for wildfire-smoke forecasting.',
    bullets: ['Developing wildfire-smoke forecasting and validation pipelines using GOES imagery, environmental observations, and physics-guided learning.'],
    topics: ['GOES Imagery', 'Remote Sensing', 'Physics-Guided Learning', 'Validation'],
  },
  {
    id: 'ye-lab', institution: 'Florida State University', role: 'Undergraduate Researcher, Ye Lab', period: 'June 2025 — August 2026', location: 'Tallahassee, Florida', posterId: 'lake-munson',
    focus: 'Testing whether water-quality models generalize to future observations and unseen lakes.',
    bullets: ['Curated 1.04M+ water-quality records into 1,012 station-date samples and 43 predictors through leakage-controlled preprocessing and feature screening for a first-author manuscript.', 'Benchmarked Random Forest, XGBoost, and LSTM using random, temporal, and spatial validation; achieved a best random-cross-validation RMSE of 10.55.'],
    topics: ['XGBoost', 'Random Forest', 'LSTM', 'Data Curation', 'Spatial Validation'], metric: { value: '1.04M+', label: 'water-quality records curated' },
  },
  {
    id: 'maglab', institution: 'National High Magnetic Field Laboratory', role: 'Machine Learning Intern', period: 'August 2024 — August 2026', location: 'Tallahassee, Florida', posterId: 'quanteval',
    focus: 'Making scientific proposal review structured, traceable, and auditable.',
    bullets: ['Fine-tuned SciBERT on 1,056 annotated proposals, achieving approximately 95% field-extraction accuracy and converting unstructured research text into structured fields for downstream review.', 'Built source-linked LLM feedback for 100+ reviewers, connecting recommendations to supporting proposal text.'],
    topics: ['SciBERT', 'NLP', 'LLMs', 'Information Extraction', 'Model Evaluation'], metric: { value: '~95%', label: 'field-extraction accuracy' },
  },
];

// Earlier work supplied for the portfolio, retained separately from the current resume.
export const earlierExperiences: ResearchExperience[] = [
  {
    id: 'nanogpt', institution: 'Research Collaboration with Google Researcher', role: 'Research Assistant', period: 'May 2026 — Present',
    focus: 'Tokenization and scaling strategies for NanoGPT-scale language models.',
    bullets: ['Collaborating with a researcher at Google to optimize tokenization methods for NanoGPT-scale language models.', 'Testing vocabulary, tokenization, and model-scaling strategies to improve training efficiency and reproduce NanoGPT SlowRun results on smaller models.'],
    topics: ['NanoGPT', 'Tokenization', 'Language Models', 'Training Efficiency'],
  },
  {
    id: 'roblox', institution: 'Roblox', role: 'Game Developer', period: 'August 2024 — May 2026', location: 'Tallahassee, Florida',
    focus: 'Gameplay systems and commissioned development for published Roblox experiences.',
    bullets: ['Developed and published Roblox experiences totaling 600,000+ visits, building and maintaining complex gameplay systems.', 'Commissioned to develop vehicle physics, user interfaces, multiplayer interactions, and gameplay logic for multiple games.'],
    topics: ['Game Development', 'Vehicle Physics', 'Multiplayer'], metric: { value: '600K+', label: 'visits across published experiences' },
  },
  {
    id: 'acee', institution: 'FAMU-FSU College of Engineering', role: 'Research Assistant / ACEE Intern', period: 'June 2022 — August 2024', location: 'Tallahassee, Florida', posterId: 'fault-detection',
    focus: 'Machine learning, signal processing, and AI-based manufacturing fault detection.',
    bullets: ['Built deep-learning and image-processing models for detecting 3D-printing defects.', 'Used acoustic signals for classification and fault detection in in-situ process monitoring.', 'Coauthored and presented IEEE research.', 'Designed a VR circuitry game and presented engineering research to sponsors including Google and Intel.', 'Participated in STEM outreach.'],
    topics: ['Deep Learning', 'Signal Processing', 'Computer Vision', 'Additive Manufacturing', '3D Printing', 'AI for Engineering'],
  },
];

export const featuredResearch = [
  { title: 'Gradient boosting for Lake Munson water quality', institution: 'Florida State University · Ye Lab', year: '2025—2026', posterId: 'lake-munson', description: 'Gradient boosting regression models chlorophyll-a during extreme drawdown conditions using Lake Munson water-quality observations from 2020–2025. The poster presents five-fold cross-validation, feature importance, and the challenges of sparse, irregular sampling. Related work across 11 Leon County lakes is available as a preprint.', tags: ['Gradient Boosting', 'Chlorophyll-a', 'Water Quality', 'Cross-Validation'], href: 'https://www.preprints.org/manuscript/202609.1068/v1' },
  { title: 'QuantEval: Automated Quantitative Evaluation of NSF Proposals', institution: 'National High Magnetic Field Laboratory', year: '2024—2026', posterId: 'quanteval', description: 'SciBERT fine-tuned on 1,056 annotated proposals achieved approximately 95% field-extraction accuracy. Source-linked LLM feedback connected recommendations to evidence for 100+ reviewers.', tags: ['NLP', 'SciBERT', 'LLMs', 'Information Extraction', 'Scientific Review'] },
  { title: 'AI-Based In-Situ Process Monitoring for Fault Detection', institution: 'FAMU-FSU College of Engineering', year: '2022—2024', posterId: 'fault-detection', description: 'Research applying machine learning and acoustic-signal analysis to identify faults during additive manufacturing.', tags: ['Machine Learning', 'Deep Learning', 'Signal Processing', 'Manufacturing', 'Computer Vision'] },
];

type Publication = {
  authors: string;
  highlight: string;
  authorship: string;
  title: string;
  venue: string;
  year: string;
  doi?: string;
  href: string;
  preprint?: boolean;
  posted?: string;
};

export const publications: Publication[] = [
  { authors: 'Alexander Wang and Ming Ye', highlight: 'Alexander Wang', authorship: 'First author', title: 'Evaluating Three Machine Learning Methods for Simulating Chlorophyll-a in Data-Scarce Lakes of Leon County, Florida', venue: 'Preprints.org', year: '2026', href: 'https://www.preprints.org/manuscript/202609.1068/v1', preprint: true, posted: '14 September 2026 · Version 1' },
  { authors: 'H. Bsrat, A. Wang, and H. Chi', highlight: 'A. Wang', authorship: 'Co-author', title: 'Harnessing Quantum Machine Learning to Forecast Human Movement Patterns During Natural Disasters.', venue: 'IEEE INTCEC', year: '2025', doi: '10.1109/INTCEC65580.2025.11256138', href: 'https://ieeexplore.ieee.org/document/11256138' },
  { authors: 'Alexander Wang et al.', highlight: 'Alexander Wang', authorship: 'First author', title: 'Enhancing 3D Printing Infill Quality through Advanced Machine Learning.', venue: 'IEEE ECAI', year: '2024', doi: '10.1109/ECAI61503.2024.10607535', href: 'https://ieeexplore.ieee.org/document/10607535/' },
];

export const projects = [
  { title: 'SideQuest', period: 'September 2026', category: 'iOS', context: 'HackGT', description: 'From group chat to a plan everyone can act on.', technologies: ['Swift', 'SwiftUI', 'Messages', 'MapKit', 'EventKit'], bullets: ['Built a native iOS group-planning prototype with three plan options and voting from sample chat context.', 'Integrated venue directions, calendar event creation, and final-plan sharing.'], links: [{ label: 'GitHub', href: 'https://github.com/Costco1500/MKASideQuestFINAL' }, { label: 'Watch demo', href: 'https://costco1500.github.io/MKASideQuestFINAL/#demo' }] },
  { title: 'CropCare', period: '2024', category: 'Machine learning', context: 'Congressional App Challenge · FL-02 Winner', description: 'Plant-disease detection, from a leaf photo to care tips.', technologies: ['Python', 'TensorFlow / Keras', 'Streamlit', 'DenseNet121', 'Xception'], bullets: ['Co-developed a plant-disease detection app in a four-person team.', 'Integrated a DenseNet121/Xception ensemble with leaf-image uploads, prediction scores, and care tips in Streamlit.'], links: [{ label: 'GitHub', href: 'https://github.com/Costco1500/CropCare' }, { label: 'Award & demo', href: 'https://www.congressionalappchallenge.us/24-fl02/' }] },
  { title: 'PillPOW', period: 'December 2025', category: 'Web', context: 'Earlier project · Congressional App Challenge Winner', description: 'Accessible medication reminders for older adults.', technologies: ['HTML5', 'CSS3', 'JavaScript', 'Web Speech API'], bullets: ['Designed medication lists, dosage interfaces, real-time clock functionality, and medication tracking.', 'Added voice-enabled interactions.'], links: [{ label: 'Award & demo', href: 'https://www.congressionalappchallenge.us/25-FL02/' }] },
];

export const awards = [
  { title: 'Congressional App Challenge Winner', detail: 'Florida District 02', year: '2025', href: 'https://www.congressionalappchallenge.us/25-FL02/' },
  { title: 'Congressional App Challenge Winner', detail: 'Florida District 02', year: '2024', href: 'https://www.congressionalappchallenge.us/24-FL02/' },
  { title: 'Academic and Career Excellence in Engineering (ACEE) Award', detail: '', year: 'September 2023' },
];

export const skills = {
  Languages: ['Python', 'SQL', 'Java', 'JavaScript', 'Swift', 'MATLAB', 'HTML / CSS'],
  'ML & Data': ['PyTorch', 'TensorFlow', 'scikit-learn', 'XGBoost', 'Pandas', 'NumPy', 'Data Curation', 'Preprocessing', 'Model Evaluation'],
  'Tools & Platforms': ['Git', 'Docker', 'AWS', 'Azure', 'Weights & Biases', 'Streamlit', 'SwiftUI'],
};

export const education = {
  institution: 'Georgia Institute of Technology', location: 'Atlanta, Georgia', degree: 'B.S. Computer Science and Mathematics', period: 'Expected May 2029', gpa: '4.0 / 4.0', coursework: ['Linear Algebra', 'Introduction to Computing', 'Introduction to Object-Oriented Programming'],
};
