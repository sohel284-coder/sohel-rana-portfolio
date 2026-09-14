export const profile = {
  name: "Sohel Rana",
  email: "srana.cse151@gmail.com",
  github: "https://github.com/sohel284-coder",
  linkedin: "https://linkedin.com/in/sohel-rana",
};
export const projects = [
  {
    name: "EduNova",
    number: "02",
    category: "AI-powered learning",
    status: "In development",
    description:
      "I’m building a learning platform around books: helping readers find answers in their material and generate questions for practice.",
    detail:
      "The direction is RAG-based book assistance and language-model question generation, with FastAPI, PostgreSQL, and role-based access. These features are still in development.",
    tags: ["FastAPI", "PostgreSQL", "RAG", "LLMs"],
  },
  {
    name: "Mail2Record",
    number: "03",
    category: "Email → structured data",
    status: "Built",
    description:
      "Purchase orders and shipment details often arrive buried in email. I built a workflow that turns that information into records people can review.",
    detail:
      "I used Django and local language models for extraction, with Excel and CSV exports for the reviewed records. Human review remains part of the workflow.",
    tags: ["Django", "Local LLMs", "Excel / CSV"],
  },
  {
    name: "WorkTracker",
    number: "04",
    category: "Tasks & realistic timelines",
    status: "Built · In active use",
    description:
      "An interruption changes more than today’s task. I built—and actively use—a tool that keeps finish dates in step with how work actually happens.",
    detail:
      "The scheduling logic accounts for pause/resume, off-days, and task interruptions, then recalculates finish dates as the timeline changes.",
    tags: ["Django", "Workflow logic", "Scheduling"],
  },
];
export const contributions = [
  {
    title: "Configurable workflows",
    text: "I build Django/DRF services and REST APIs, dynamic eForms, Master Tables, and business rules. My work includes approval routing, task assignment, delegation, and process tracking.",
  },
  {
    title: "Documents & interfaces",
    text: "I extend uploads, metadata, versioning, sharing, and Elasticsearch search, alongside JavaScript/jQuery form builders and dashboards. Celery and Redis handle background work.",
  },
  {
    title: "Integrations & production",
    text: "I work on REST, XML, and JSON integrations, role-based access, LDAP/SSO, and VAPT remediation. I also troubleshoot production issues and collaborate with DevOps on deployments and migrations.",
  },
  {
    title: "Applied AI",
    text: "I contribute AI-assisted document processing and structured extraction, connecting language-model capabilities to the platform’s document workflows.",
  },
];
export const skills = [
  {
    title: "Backend and APIs",
    primary: true,
    text: "Python · Django · Django REST Framework · REST APIs",
    note: "Enterprise application services and integrations.",
    more: "FastAPI · Flask · Celery · Redis · Third-party APIs · XML / JSON",
  },
  {
    title: "Frontend and mobile",
    text: "JavaScript · jQuery · Vue.js",
    note: "Forms, dashboards, and document interfaces; contributions to Flutter mobile features.",
    more: "HTML5 · CSS3 · Bootstrap · Flutter · Dart",
  },
  {
    title: "Data and search",
    text: "PostgreSQL · MySQL · Elasticsearch",
    note: "Relational application data and document search.",
    more: "SQLite · ChromaDB",
  },
  {
    title: "Applied AI",
    text: "RAG · LLM integration · OCR · Structured extraction",
    note: "Document extraction and a growing focus on book assistance and question generation.",
    more: "OpenAI API · Embeddings · Vector databases · LangChain · LangGraph · Hugging Face · Function calling",
  },
  {
    title: "Deployment and security",
    text: "Docker · Nginx · LDAP / SSO",
    note: "Application deployment support, enterprise access, and VAPT remediation.",
    more: "DigitalOcean · Gunicorn · CI/CD · Ubuntu",
  },
];
