// Content for "My company & apps".

export const EMBER_AND_ASH = {
  // TODO: fill in the year Ember and Ash LLC was founded.
  meta: "Ember and Ash LLC · founder · [YEAR] – now",
  summary:
    "My LLC for publishing and distributing software, from small utilities to full apps.",
};

/*
 * Apps published through Ember & Ash, newest first. Add a new app by adding an entry here.
 *   name       plainPart is set upright, italicPart in italics (e.g. "String" + "Theory")
 *   mockupId   which device mockup to show; see APP_MOCKUPS in MyCompany/AppEntry.jsx
 *   links      store and web listings
 */
export const PUBLISHED_APPS = [
  {
    id: "stringTheory",
    name: { plainPart: "String", italicPart: "Theory" },
    eyebrow: "my first stand-alone app · iOS, Android, web",
    pitch:
      "A corkboard for the case you can't stop thinking about. Pin the evidence, pull the string, and see if your theory holds up.",
    howItWasBuilt:
      "Solo-built in Flutter, from canvas rendering, AI-assisted import and subscriptions to store releases and support.",
    mockupId: "stringTheoryPhone",
    // TODO: replace the "#" placeholders with the real store listings.
    links: [
      { label: "App Store", url: "#" },
      { label: "Google Play", url: "#" },
      { label: "Web ↗", url: "#" },
    ],
  },
];
