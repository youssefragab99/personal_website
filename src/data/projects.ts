export interface Project {
  name: string;
  tech: string[];
  description: string[];
}

export const projects: Project[] = [
  {
    name: 'Production-Grade AI Fraud Detection System',
    tech: ['Python', 'FastAPI', 'gRPC', 'Docker', 'PostgreSQL', 'AWS'],
    description: [
      'Designed and deployed ML models for real-time fraud and identity risk prediction with 90%+ accuracy',
      'Built scalable API endpoints for seamless integration into enterprise platform',
      'Engineered automated model execution system using Kafka and Dagster',
    ],
  },
  {
    name: 'Generative AI for Anomaly Detection',
    tech: ['Python', 'LLM Fine-Tuning', 'OpenAI API', 'PostgreSQL'],
    description: [
      'Fine-tuned LLM to identify anomalies in platform financial data',
      'Created powerful tool for intelligent automation and decision support',
      'Engineered Python package to enforce structured JSON responses',
    ],
  },
  {
    name: 'MLOps Automation Pipeline',
    tech: ['Python', 'Scikit-learn', 'Azure ML Studio', 'Docker', 'CI/CD'],
    description: [
      'Built end-to-end automated pipeline for feature engineering, model training, and experimentation',
      'Leveraged Docker and CI/CD for reproducible model lifecycle management',
      'Decreased time-to-retrain and deploy by 80%+',
    ],
  },
];
