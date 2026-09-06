export type Poster = {
  id: string;
  title: string;
  institution: string;
  area: string;
  image: string;
  width: number;
  height: number;
};

export const posters: Poster[] = [
  { id: 'lake-munson', title: 'Spatiotemporal Forecasting of Chlorophyll-a in an Extreme Drawdown Lake', institution: 'Florida State University', area: 'Scientific ML · Environmental Modeling', image: '/images/research/lake-munson-lstm-pinn.png', width: 483, height: 362 },
  { id: 'quanteval', title: 'QuantEval: Automated Quantitative Evaluation of NSF Proposals', institution: 'National High Magnetic Field Laboratory', area: 'NLP · Scientific Review', image: '/images/research/quanteval-maglab.png', width: 480, height: 384 },
  { id: 'fault-detection', title: 'Incorporating AI into In-Situ Process Monitoring for Fault Detection', institution: 'FAMU-FSU College of Engineering', area: 'AI for Engineering · Manufacturing', image: '/images/research/additive-manufacturing-fault-detection.png', width: 504, height: 336 },
];

export const researchExperiences = [
  {
    institution: 'Florida State University Young Scholars Program', role: 'Research Student', period: 'June 2025 — Present', location: 'Tallahassee, Florida', posterId: 'lake-munson',
    focus: 'Machine learning and environmental modeling for water-quality forecasting.',
    bullets: ['Developed an LSTM-PINN deep learning model to forecast chlorophyll-a levels.', 'Analyzed Lake Munson and the effects of an extreme lake drawdown.', 'Investigated environmental drivers of water-quality decline using county-level monitoring data.', 'Converted model results and environmental data into lake-restoration recommendations.', 'Presented the research at a University of Florida conference.'],
    topics: ['LSTM', 'Physics-Informed Neural Networks', 'Scientific ML', 'Environmental Modeling', 'Time-Series Forecasting', 'Water Quality'],
  },
  {
    institution: 'National High Magnetic Field Laboratory', role: 'Extern / Researcher', period: 'August 2024 — Present', location: 'Tallahassee, Florida', posterId: 'quanteval',
    focus: 'Natural language processing and AI-assisted scientific proposal evaluation.',
    bullets: ['Developed and deployed a custom-tuned SciBERT / LLM platform for research-proposal evaluation.', 'Worked with proposal criteria including broader impacts and intellectual merit.', 'Analyzed accepted-proposal data and investigated how NLP models can assist scientific review.', 'Presented the system and findings to MagLab researchers at a research symposium.'],
    topics: ['SciBERT', 'Transformers', 'Natural Language Processing', 'Large Language Models', 'Scientific AI', 'Machine Learning'],
  },
  {
    institution: 'FAMU-FSU College of Engineering', role: 'Research Assistant / ACEE Intern', period: 'June 2022 — August 2024', location: 'Tallahassee, Florida', posterId: 'fault-detection',
    focus: 'Machine learning, signal processing, and AI-based manufacturing fault detection.',
    bullets: ['Built deep-learning and image-processing models for detecting 3D-printing defects.', 'Used acoustic signals for classification and fault detection in in-situ process monitoring.', 'Coauthored and presented IEEE research.', 'Designed a VR circuitry game and presented engineering research to sponsors including Google and Intel.', 'Participated in STEM outreach.'],
    topics: ['Deep Learning', 'Signal Processing', 'Computer Vision', 'Additive Manufacturing', '3D Printing', 'AI for Engineering'],
  },
];

export const featuredResearch = [
  { title: 'Spatiotemporal Forecasting of Chlorophyll-a in an Extreme Drawdown Lake', institution: 'Florida State University', year: '2025', posterId: 'lake-munson', description: 'Research applying a hybrid LSTM and physics-informed neural network framework to chlorophyll-a forecasting and environmental analysis in Lake Munson.', tags: ['Scientific ML', 'Environmental Modeling', 'LSTM', 'PINN', 'Time-Series Forecasting'] },
  { title: 'QuantEval: Automated Quantitative Evaluation of NSF Proposals', institution: 'National High Magnetic Field Laboratory', year: '2024—Present', posterId: 'quanteval', description: 'Research exploring NLP and transformer-based methods for assisting quantitative evaluation of scientific research proposals.', tags: ['NLP', 'SciBERT', 'Transformers', 'LLMs', 'Scientific Review'] },
  { title: 'AI-Based In-Situ Process Monitoring for Fault Detection', institution: 'FAMU-FSU College of Engineering', year: '2022—2024', posterId: 'fault-detection', description: 'Research applying machine learning and acoustic-signal analysis to identify faults during additive manufacturing.', tags: ['Machine Learning', 'Deep Learning', 'Signal Processing', 'Manufacturing', 'Computer Vision'] },
];

export const publications = [
  { authors: 'Alexander Wang et al.', highlight: 'Alexander Wang', title: 'Enhancing 3D Printing Infill Quality through Advanced Machine Learning.', venue: 'IEEE ECAI', year: '2024', doi: '10.1109/ECAI61503.2024.10607535', href: 'https://ieeexplore.ieee.org/abstract/document/10607535' },
  { authors: 'H. Bsrat, A. Wang, and H. Chi', highlight: 'A. Wang', title: 'Harnessing Quantum Machine Learning to Forecast Human Movement Patterns During Natural Disasters.', venue: 'IEEE INTCEC', year: '2025', doi: '10.1109/INTCEC65580.2025.11256138', href: 'https://ieeexplore.ieee.org/document/11256138/' },
];

export const projects = [
  { title: 'CropCare', period: 'December 2024', technologies: ['Python', 'TensorFlow', 'Streamlit', 'Pandas', 'NumPy', 'Altair', 'Matplotlib'], bullets: ['Full-stack plant-disease detection application using convolutional neural networks.', 'Processes plant-health data and visualizes disease trends.', 'Presented through the Congressional App Challenge and before members of Congress.'], href: 'https://www.congressionalappchallenge.us/24-FL02/' },
  { title: 'PillPOW', period: 'December 2025', technologies: ['HTML5', 'CSS3', 'JavaScript', 'Web Speech API'], bullets: ['Medication reminder and tracking application designed for older adults.', 'Includes medication lists, dosage interfaces, real-time clock functionality, and medication tracking.', 'Supports voice-enabled interactions.'], href: 'https://www.congressionalappchallenge.us/25-FL02/' },
];

export const awards = [
  { title: 'Congressional App Challenge Winner', detail: 'Florida District 02', year: '2025', href: 'https://www.congressionalappchallenge.us/25-FL02/' },
  { title: 'Congressional App Challenge Winner', detail: 'Florida District 02', year: '2024', href: 'https://www.congressionalappchallenge.us/24-FL02/' },
  { title: 'Academic and Career Excellence in Engineering (ACEE) Award', detail: '', year: 'September 2023' },
];

export const skills = {
  Languages: ['Python', 'JavaScript', 'HTML5 / CSS3', 'MATLAB'],
  'Machine Learning / AI': ['PyTorch', 'PyTorch Lightning', 'TensorFlow', 'CNNs', 'LSTMs', 'PINNs', 'Transformers', 'SciBERT', 'NLP', 'Computer Vision'],
  'Libraries & Tools': ['NumPy', 'Pandas', 'Altair', 'Matplotlib', 'Streamlit', 'Web Speech API'],
};

export const education = {
  institution: 'Georgia Institute of Technology', location: 'Atlanta, Georgia', degree: 'B.S. in Mathematics and Computing', period: 'January 2026 — May 2029', coursework: ['Linear Algebra', 'Introduction to Computing', 'Introduction to Object-Oriented Programming'],
};
