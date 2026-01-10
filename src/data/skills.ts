export interface SkillCategory {
  name: string;
  items: string[];
}

export const skills: SkillCategory[] = [
  {
    name: 'Languages',
    items: ['Python', 'SQL', 'Go', 'R', 'Java', 'Shell Scripting'],
  },
  {
    name: 'AI/ML Frameworks',
    items: ['PyTorch', 'TensorFlow', 'Scikit-learn', 'Pandas', 'NumPy', 'NLTK'],
  },
  {
    name: 'GenAI & NLP',
    items: ['Large Language Models (LLMs)', 'Fine-Tuning', 'OpenAI API', 'Anomaly Detection', 'Ensemble Methods'],
  },
  {
    name: 'Cloud & MLOps',
    items: ['AWS', 'Azure', 'Docker', 'Kubernetes', 'CI/CD', 'Kafka', 'Dagster', 'Azure ML Studio'],
  },
  {
    name: 'APIs & Databases',
    items: ['REST', 'gRPC', 'FastAPI', 'PostgreSQL', 'NoSQL'],
  },
  {
    name: 'Developer Tools',
    items: ['Git', 'Power BI', 'Apache Spark', 'Hadoop'],
  },
];
