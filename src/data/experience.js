// Content for "The day job" and "Before that".

export const HAVENSIGHT = {
  dates: "2021 – now · full time",
  company: "Havensight",
  role: "Senior Software Engineer",
  summary:
    "Havensight makes the mobile side of SAP work for some of the world's largest companies. I design, build and ship the apps warehouse crews rely on, mostly with UI5 and SAP MDK.",
};

export const H1_PRODUCT = {
  eyebrow: "a Havensight product · launching 2026",
  name: "H1",
  fullName: "Havensight Inventory 1",
  summary:
    "SAP runs the world's warehouses, but the screens people use look like 1997. H1 lets a company design its own modern app, then drops it straight onto their SAP system.",
  // Revealed by "+ the longer story".
  details: [
    { title: "The portal.", text: "Clients design their own screens, flows and plugins." },
    {
      title: "The generator.",
      text: "Metadata goes in and a cross-platform app comes out, built on UI5 Web Components.",
    },
    { title: "The build.", text: "One package that deploys to IM, SRM or EWM on the customer's own SAP." },
  ],
  closingLine: "It's what's turning a consulting firm into a software company.",
};

// Older roles, newest first. Each row steps a little further right on wide screens.
export const PAST_ROLES = [
  {
    // TODO: fill in the year Bizi ended.
    dates: "2023 — [END]",
    company: "Bizi",
    role: "Project Manager · part time",
    summary: "Ran the build of a website, marketing and analytics platform for the self-employed.",
    stack: ["React", "Flutter", "Firebase", "DigitalOcean"],
  },
  {
    dates: "2019 — 2021",
    company: "BlueQueue",
    role: "Mobile Developer · part time",
    summary: "Built the consumer app: products, coupons, how-to videos and reviews in one feed.",
    stack: ["Flutter", "Firebase", "DigitalOcean"],
  },
  {
    dates: "2018 — 2021",
    company: "TappShare",
    role: "Full Stack Developer",
    summary:
      "Where it started. Campaigns over SMS, WhatsApp and iMessage, with my first real users and my first 2 a.m. outage.",
    stack: ["React", "Flutter", "Parse", "AWS", "Firebase"],
  },
];
