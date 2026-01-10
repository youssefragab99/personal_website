export interface Education {
  degree: string;
  school: string;
  location: string;
  graduation: string;
  details: string[];
}

export const education: Education[] = [
  {
    degree: 'Master of Science in Business Analytics',
    school: 'The George Washington University',
    location: 'Washington, DC',
    graduation: 'May 2022',
    details: ['Concentration: Business Analytics'],
  },
  {
    degree: 'Bachelor of Business Administration',
    school: 'The George Washington University',
    location: 'Washington, DC',
    graduation: 'May 2021',
    details: ['Concentration: Business Analytics, Marketing', 'Minor: Statistics'],
  },
];
