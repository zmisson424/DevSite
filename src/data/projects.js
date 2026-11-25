// Content for "My company & apps".

import stringTheoryLogo from "../assets/string-theory/logo.png";

export const EMBER_AND_ASH = {
  meta: "Ember and Ash LLC · founder · 2026 – now",
  summary:
    "My LLC for publishing and distributing software, from small utilities to full apps.",
};

/*
 * Apps published through Ember & Ash, newest first. Add a new app by adding an entry here.
 *   name       plainPart is set upright, italicPart in italics (e.g. "String" + "Theory")
 *   logo       app icon shown above the name
 *   mockupId   which device mockup to show; see APP_MOCKUPS in MyCompany/AppEntry.jsx
 *   links      store, web and marketing links; isComingSoon shows the label without a link
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
    logo: stringTheoryLogo,
    mockupId: "stringTheoryPhone",
    links: [
      { label: "stringtheoryboard.com ↗", url: "https://stringtheoryboard.com" },
      { label: "App Store", isComingSoon: true },
      { label: "Google Play", isComingSoon: true },
      { label: "Web app", isComingSoon: true },
    ],
  },
];
