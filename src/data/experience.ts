export interface Experience {
  company: string;
  title: string;
  location: string;
  period: string;
  highlights: string[];
}

export const experience: Experience[] = [
  {
    company: 'Verituity',
    title: 'Machine Learning Engineer',
    location: 'McLean, VA',
    period: '2022 - Present',
    highlights: [
      'Architected and deployed 25+ production-grade ML models for identity verification and fraud detection, securing $7B+ in transactions',
      'Engineered scalable APIs (REST, gRPC) to serve model predictions, integrating AI into core enterprise backend systems',
      'Developed GenAI solution by fine-tuning LLM for context-based anomaly detection, achieving 100% machine-readable JSON output',
      'Implemented cloud-native MLOps workflow using Docker, Kafka, and Dagster on AWS/Azure, reducing retraining time by 80%+',
      'Collaborated with cross-functional teams to translate business requirements into AI-driven features',
    ],
  },
];
