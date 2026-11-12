// Content for the hero: the rotating tagline and the interactive thread graph.

// Finishes the sentence "I build apps for …", cycling every few seconds.
export const HERO_TAGLINES = [
  "warehouse floors stuck in 1997.",
  "cases that won’t stay cold.",
  "whatever idea won’t leave me alone.",
];

/*
 * Nodes in the thread graph.
 *   homeX / homeY    resting position as a fraction of the graph's width / height
 *   driftAmount      how far (px) the node bobs while idle
 *   driftSpeed       how fast it bobs
 *   driftPhase       offsets the bob so nodes don't move in sync
 *   parallaxDepth    how far (px) it shifts as the pointer moves
 *   isMajor          major nodes get the big serif label and a bigger dot
 */
export const THREAD_NODES = [
  {
    id: "h1",
    label: "H1",
    kind: "the day job",
    caption: "SAP warehouse screens, finally dragged out of 1997.",
    homeX: 0.26, homeY: 0.16,
    driftAmount: 10, driftSpeed: 0.5, driftPhase: 0.0, parallaxDepth: 26,
    isMajor: true,
  },
  {
    id: "stringTheory",
    label: "StringTheory",
    kind: "made by me",
    caption: "A corkboard for the cases you can’t stop thinking about.",
    homeX: 0.68, homeY: 0.2,
    driftAmount: 12, driftSpeed: 0.42, driftPhase: 1.3, parallaxDepth: 34,
    isMajor: true,
  },
  {
    id: "emberAndAsh",
    label: "Ember & Ash",
    kind: "my company",
    caption: "My own LLC. Where the side projects grow up.",
    homeX: 0.74, homeY: 0.58,
    driftAmount: 9, driftSpeed: 0.37, driftPhase: 2.1, parallaxDepth: 20,
    isMajor: true,
  },
  {
    id: "havensight",
    label: "Havensight",
    kind: "since 2021",
    caption: "Senior engineer. SAP mobile for some very large companies.",
    homeX: 0.12, homeY: 0.38,
    driftAmount: 8, driftSpeed: 0.46, driftPhase: 3.0, parallaxDepth: 14,
  },
  {
    id: "techLead",
    label: "Tech Lead",
    kind: "the other half of the job",
    caption: "Running a small team and turning junior devs into dangerous ones.",
    homeX: 0.88, homeY: 0.4,
    driftAmount: 7, driftSpeed: 0.5, driftPhase: 3.6, parallaxDepth: 12,
  },
  {
    id: "flutter",
    label: "Flutter",
    kind: "weapon of choice",
    caption: "If I’m building it for me, it’s Flutter.",
    homeX: 0.46, homeY: 0.4,
    driftAmount: 11, driftSpeed: 0.55, driftPhase: 4.2, parallaxDepth: 18,
  },
  {
    id: "react",
    label: "React",
    kind: "full stack",
    caption: "When it lives in a browser. Front end to back end, no hand-offs.",
    homeX: 0.24, homeY: 0.6,
    driftAmount: 9, driftSpeed: 0.47, driftPhase: 1.9, parallaxDepth: 15,
  },
  {
    id: "ai",
    label: "AI",
    kind: "build · develop · deploy",
    caption: "I build with it, ship features on it and deploy with it. Every single day.",
    homeX: 0.5, homeY: 0.72,
    driftAmount: 9, driftSpeed: 0.4, driftPhase: 5.1, parallaxDepth: 12,
  },
  {
    id: "homelab",
    label: "~/homelab",
    kind: "self-hosted",
    caption: "Docker Compose, a dashboard, and more containers than I’ll admit to.",
    homeX: 0.84, homeY: 0.86,
    driftAmount: 8, driftSpeed: 0.44, driftPhase: 2.7, parallaxDepth: 16,
  },
  {
    id: "ohioState",
    label: "Ohio State",
    kind: "alum & fan",
    caption: "Graduated a Buckeye. Never stopped being one. O-H!",
    homeX: 0.12, homeY: 0.84,
    driftAmount: 7, driftSpeed: 0.48, driftPhase: 0.8, parallaxDepth: 10,
  },
  {
    id: "family",
    label: "Family",
    kind: "husband · dad · dog guy",
    caption: "Husband. Dad. The dog’s favorite person (allegedly).",
    homeX: 0.36, homeY: 0.92,
    driftAmount: 8, driftSpeed: 0.42, driftPhase: 4.6, parallaxDepth: 14,
  },
];

// Pairs of node ids joined by a thread.
export const THREAD_CONNECTIONS = [
  ["h1", "havensight"],
  ["h1", "flutter"],
  ["h1", "techLead"],
  ["h1", "ai"],
  ["stringTheory", "flutter"],
  ["stringTheory", "emberAndAsh"],
  ["stringTheory", "ai"],
  ["flutter", "react"],
  ["react", "ai"],
  ["react", "havensight"],
  ["ai", "homelab"],
  ["emberAndAsh", "homelab"],
  ["emberAndAsh", "family"],
  ["family", "ohioState"],
  ["havensight", "ohioState"],
];
