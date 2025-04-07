export interface PortfolioItem {
  id: number;
  src: string;
  name?: string;
  width: number;
  height: number;
  description?: string;
  categories: string[];
}

export const portfolioItems: PortfolioItem[] = [
  {
    id: 1,
    src: '/images/portfolio/nfc-2024/nfc-24-group-photo.jpg',
    width: 2096,
    height: 1576,
    name: 'NordicFuzzCon 2024',
    description: 'NordicFuzzCon 2024',
    categories: ['NordicFuzzCon', 'Conventions']
  },
  {
    id: 2,
    src: '/images/portfolio/nfc-2024/nfc-24-1.jpg',
    width: 2096,
    height: 3128,
    name: 'NordicFuzzCon 2024 Portrait',
    description: 'A fursuiter at NordicFuzzCon 2024',
    categories: ['NordicFuzzCon', 'Conventions', 'Portrait']
  }
];
