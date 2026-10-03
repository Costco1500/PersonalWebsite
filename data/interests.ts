// Add only personal details and goals Alexander confirms. Empty lists stay hidden.
export const interests = {
  tennis: {
    title: 'On the court.',
    summary: 'Outside of computer science and mathematics, I enjoy tennis.',
    description: 'A different setting, a racket, and a ball. Tennis is one of my interests beyond research and engineering.',
    details: [] as string[],
    goals: [] as string[],
  },
  lifting: {
    title: 'Under the bar.',
    summary: 'Weightlifting is another part of my life outside the lab.',
    description: 'Alongside tennis, I enjoy spending time in the weight room. Here’s a small, hands-on illustration of loading a barbell.',
    details: [] as string[],
    goals: [] as string[],
  },
};

// Illustration settings only; these are not personal lifting records.
export const barbellConfig = { barWeight: 20, plateWeight: 10, maxPairs: 4, unit: 'kg' };
