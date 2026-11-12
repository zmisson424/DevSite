/*
 * The skills toolbox for "What I know".
 * isFeatured groups get the larger heading.
 * keywords are extra search terms that should match a skill (e.g. "ts" finds TypeScript).
 */
export const SKILL_GROUPS = [
  {
    label: "Languages",
    blurb: "what I write in",
    isFeatured: true,
    skills: [
      { name: "TypeScript", keywords: "ts" },
      { name: "JavaScript", keywords: "js es6" },
      { name: "Dart", keywords: "flutter" },
      { name: "Kotlin", keywords: "android" },
      { name: "Swift", keywords: "ios apple" },
      { name: "Java", keywords: "android" },
      { name: "C#", keywords: "csharp dotnet .net" },
      { name: "C++", keywords: "cpp" },
      { name: "Python", keywords: "scripts" },
      { name: "SQL", keywords: "mysql postgres database" },
      { name: "HTML & CSS", keywords: "html5 css3" },
    ],
  },
  {
    label: "AI",
    blurb: "build · develop · deploy",
    isFeatured: true,
    skills: [
      { name: "Claude", keywords: "anthropic llm" },
      { name: "Claude Code", keywords: "anthropic agent coding" },
      { name: "ChatGPT", keywords: "openai gpt llm" },
      { name: "OpenAI API", keywords: "gpt llm" },
      { name: "Gemini", keywords: "google llm" },
      { name: "Vertex AI", keywords: "google gcp" },
      { name: "Google AI Studio", keywords: "gemini" },
      { name: "GitHub Copilot", keywords: "coding assistant" },
      { name: "MCP servers", keywords: "model context protocol agents tools" },
      { name: "Prompt engineering", keywords: "llm" },
      { name: "TensorFlow", keywords: "ml machine learning" },
      { name: "ML Kit", keywords: "firebase ml machine learning" },
    ],
  },
  {
    label: "Cloud & services",
    blurb: "where it runs",
    isFeatured: true,
    skills: [
      { name: "AWS", keywords: "amazon s3 ec2 lambda" },
      { name: "Google Cloud", keywords: "gcp" },
      { name: "Azure", keywords: "microsoft app service" },
      { name: "Firebase", keywords: "firestore auth functions" },
      { name: "DigitalOcean", keywords: "droplets" },
      { name: "Node.js & Express", keywords: "node api rest backend" },
      { name: "Docker", keywords: "containers compose" },
      { name: "Stripe", keywords: "payments billing subscriptions" },
      { name: "Parse", keywords: "parse server" },
      { name: "Firestore", keywords: "nosql database" },
    ],
  },
  {
    label: "Mobile",
    blurb: "apps in pockets and on scanners",
    skills: [
      { name: "Flutter", keywords: "dart cross-platform" },
      { name: "iOS", keywords: "apple iphone app store" },
      { name: "Android", keywords: "google play" },
      { name: "Ionic & Capacitor", keywords: "hybrid" },
      { name: "SAP MDK", keywords: "mobile development kit offline" },
    ],
  },
  {
    label: "Web",
    blurb: "apps in browsers",
    skills: [
      { name: "React", keywords: "reactjs frontend" },
      { name: "Redux Toolkit", keywords: "state" },
      { name: "Angular", keywords: "" },
      { name: "Vite", keywords: "build" },
      { name: "Tailwind CSS", keywords: "tailwind" },
      { name: "Vitest & Storybook", keywords: "testing" },
    ],
  },
  {
    label: "SAP & enterprise",
    blurb: "the day job",
    skills: [
      { name: "SAP UI5", keywords: "ui5 openui5" },
      { name: "SAP Fiori", keywords: "fiori design" },
      { name: "ABAP", keywords: "sap backend" },
      { name: "SAP BTP", keywords: "business technology platform cloud foundry" },
      { name: "IM · SRM · EWM", keywords: "warehouse inventory management" },
      { name: "MTAR builds", keywords: "mta deploy" },
    ],
  },
  {
    label: "How I work",
    blurb: "the parts that aren’t code",
    skills: [
      { name: "System design", keywords: "architecture" },
      { name: "Metadata-driven platforms", keywords: "low code generator" },
      { name: "Leading teams", keywords: "lead mentoring tech lead" },
      { name: "CI/CD & GitHub Actions", keywords: "pipelines" },
      { name: "Git", keywords: "github version control" },
      { name: "Linux", keywords: "homelab" },
      { name: "Jira & Confluence", keywords: "agile scrum" },
    ],
  },
];
