export type ResumeEntry = {
  workplace: string;
  period: string;
  title: string;
  location: string;
  description?: string;
  highlights?: string[];
};

export const RESUME_ENTRIES: ResumeEntry[] = [
  {
    workplace: 'Patentstyret',
    period: '2024 - Present',
    title: 'Software Developer',
    location: 'Oslo, Norway',
  },
  {
    workplace: 'Cloudberries',
    period: '2021 - 2024',
    title: 'Senior Consultant',
    location: 'Oslo, Norway',
  },
  {
    workplace: 'Politiets IT-Enhet',
    period: '2018 - 2021',
    title: 'System developer',
    location: 'Oslo, Norway',
  },
];
