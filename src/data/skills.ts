export type SkillCategory = {
  category: string;
  skills: string[];
};

export const skillCategories: SkillCategory[] = [
  {
    category: "Frontend",
    skills: ["React", "Next.js", "Angular", "TypeScript"],
  },
  {
    category: "Backend",
    skills: ["Go/Gin", "C#/ASP.NET Core", "Python/FastAPI", "Node.js"],
  },
  {
    category: "DevOps",
    skills: ["Docker", "AWS", "GitHub Actions"],
  },
  {
    category: "Data",
    skills: ["PostgreSQL", "SQLite"],
  },
  {
    category: "AI/Tooling",
    skills: ["RAG", "MCP", "LLM Integration", "AI Agents"],
  },
];
