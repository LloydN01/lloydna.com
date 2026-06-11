export type Experience = {
  company: string;
  position: string;
  period: string;
  location: string;
  description: string[];
};

export const experiences: Experience[] = [
  {
    company: "Commonwealth Bank",
    position: "Software Engineer",
    period: "February 2025 – Present",
    location: "Perth, WA",
    description: [
      "Delivered full-stack features for an internal tool using React/TypeScript, Go/Gin and PostgreSQL, including custom middleware and role-based access control",
      "Deployed cloud-native APIs built with ASP.NET Core and Java Spring Boot as Docker containers to AWS ECS clusters, with authentication middleware, SLOs/SLIs monitoring and Clean Architecture",
      "Engineered enterprise-grade OAuth2/OIDC authentication integrated with CBA's SSO infrastructure, with secure token storage and refresh flows",
      "Optimised GitHub Actions CI/CD pipelines with reusable workflows and environment-based deployment stages, implementing multi-layered testing including unit, integration, contract and functional tests",
    ],
  },
  {
    company: "Visagio",
    position: "Software Developer Intern",
    period: "June 2023 – November 2024",
    location: "Perth, WA",
    description: [
      "Designed and implemented a high-performance multi-page dashboard for mining optimisation analysis using Angular, TypeScript, Python, FastAPI, NumPy and Pandas, processing and displaying hundreds of thousands of data points per visual",
      "Optimised client-side performance by improving filter response times across complex data visualisations with custom filtering logic",
      "Developed a proof-of-concept mining analysis chatbot leveraging Retrieval-Augmented Generation (RAG) to enable natural language querying of collected mining data",
    ],
  },
  {
    company: "Pacific Energy",
    position: "Data Science Summer Intern",
    period: "December 2022 – February 2023",
    location: "Kewdale, WA",
    description: [
      "Analysed and extracted crucial emissions data from raw dataset for ESG reporting to stakeholders",
      "Utilised Excel and Python for comprehensive data analysis, employing VBA, formula functions and pivot tables to identify trends in talent recruitment and OSH data",
    ],
  },
];
