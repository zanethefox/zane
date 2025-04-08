export interface Fursuiter {
  name: string;
  socialLinks: {
    bluesky?: string;
    twitter?: string;
    instagram?: string;
  };
}

export interface PortfolioItem {
  id: number;
  src: string;
  name?: string;
  date: string;
  width: number;
  height: number;
  description?: string;
  categories: string[];
  fursuiters?: Fursuiter[];
}

export const portfolioItems: PortfolioItem[] = [
  {
    id: 1,
    src: '/images/portfolio/nfc-2024/nfc-24-group-photo.jpg',
    width: 2096,
    height: 1576,
    date: '2024-02-22T13:00:00Z',
    name: 'NordicFuzzCon 2024',
    description: 'NordicFuzzCon 2024',
    categories: ['NordicFuzzCon']
  },
  {
    id: 2,
    src: '/images/portfolio/nfc-2024/nfc-24-1.jpg',
    width: 2096,
    height: 3128,
    date: '2024-02-22T12:00:00Z',
    name: 'NordicFuzzCon 2024 Portrait',
    description: 'A fursuiter at NordicFuzzCon 2024',
    categories: ['NordicFuzzCon', 'Portrait']
  },
  {
    id: 3,
    src: '/images/portfolio/nfc-2024/nfc-24-2.jpg',
    width: 2896,
    height: 2896,
    date: '2024-02-22T12:00:00Z',
    name: 'NordicFuzzCon 2024 Portrait',
    description: 'Fursuiters at NordicFuzzCon 2024',
    categories: ['NordicFuzzCon', 'Portrait']
  },
  {
    id: 4,
    src: '/images/portfolio/nfc-2024/nfc-24-3.jpg',
    width: 2896,
    height: 4322,
    date: '2024-02-22T12:00:00Z',
    name: 'NordicFuzzCon 2024 Portrait',
    description: 'Fursuiter at NordicFuzzCon 2024',
    categories: ['NordicFuzzCon', 'Portrait']
  },
  {
    id: 5,
    src: '/images/portfolio/nfc-2024/nfc-24-4.jpg',
    width: 2896,
    height: 4322,
    date: '2024-02-22T12:00:00Z',
    name: 'NordicFuzzCon 2024 Portrait',
    description: 'Fursuiter at NordicFuzzCon 2024',
    categories: ['NordicFuzzCon', 'Portrait']
  },
  {
    id: 6,
    src: '/images/portfolio/nfc-2024/nfc-24-5.jpg',
    width: 2896,
    height: 4322,
    date: '2024-02-22T12:00:00Z',
    name: 'NordicFuzzCon 2024 Portrait',
    description: 'Fursuiters at NordicFuzzCon 2024',
    categories: ['NordicFuzzCon', 'Portrait']
  },
  {
    id: 7,
    src: '/images/portfolio/nfc-2024/nfc-24-6.jpg',
    width: 2896,
    height: 4322,
    date: '2024-02-22T12:00:00Z',
    name: 'NordicFuzzCon 2024 Portrait',
    description: 'Fursuiters at NordicFuzzCon 2024',
    categories: ['NordicFuzzCon', 'Portrait']
  },
  {
    id: 8,
    src: '/images/portfolio/nfc-2024/nfc-24-7.jpg',
    width: 2896,
    height: 1930,
    date: '2024-02-22T12:00:00Z',
    name: 'NordicFuzzCon 2024 Portrait',
    description: 'Fursuiters at NordicFuzzCon 2024',
    categories: ['NordicFuzzCon', 'Portrait']
  },
  {
    id: 9,
    src: '/images/portfolio/nfc-2024/nfc-24-8.jpg',
    width: 2896,
    height: 4322,
    date: '2024-02-22T12:00:00Z',
    name: 'NordicFuzzCon 2024 Portrait',
    description: 'Fursuiter at NordicFuzzCon 2024',
    categories: ['NordicFuzzCon', 'Portrait']
  },
  {
    id: 10,
    src: '/images/portfolio/nfc-2024/nfc-24-9.jpg',
    width: 2896,
    height: 4322,
    date: '2024-02-22T12:00:00Z',
    name: 'NordicFuzzCon 2024 Portrait',
    description: 'Fursuiter at NordicFuzzCon 2024',
    categories: ['NordicFuzzCon', 'Portrait']
  },
  {
    id: 11,
    src: '/images/portfolio/wapi-2024/wapi-1.jpeg',
    width: 2896,
    height: 4322,
    date: '2024-12-20T12:00:00Z',
    name: 'Portrait of Wapi',
    description: 'Portrait of Wapi',
    categories: ['Portrait'],
    fursuiters: [
      {
        name: 'Wapi',
        socialLinks: {
          bluesky: 'https://bsky.app/profile/wapi.bsky.social'
        }
      }
    ]
  },
  {
    id: 12,
    src: '/images/portfolio/wapi-2024/wapi-2.jpeg',
    width: 2896,
    height: 4322,
    date: '2024-12-20T12:00:00Z',
    name: 'Portrait of Wapi',
    description: 'Portrait of Wapi',
    categories: ['Portrait'],
    fursuiters: [
      {
        name: 'Wapi',
        socialLinks: {
          bluesky: 'https://bsky.app/profile/wapi.bsky.social'
        }
      }
    ]
  },
  {
    id: 13,
    src: '/images/portfolio/nfc-2025/gabilhondo/gabilhondo-1.jpg',
    width: 1365,
    height: 2048,
    date: '2025-12-21T12:00:00Z',
    name: 'Portrait of Gabilhondo',
    description: 'Portrait of Gabilhondo',
    categories: ['NordicFuzzCon', 'Portrait'],
    fursuiters: [
      {
        name: 'Gabilhondo',
        socialLinks: {
          twitter: 'https://x.com/Gabilhondo1'
        }
      }
    ]
  },
  {
    id: 14,
    src: '/images/portfolio/nfc-2025/newton/newton-1.jpg',
    width: 1365,
    height: 2048,
    date: '2025-12-21T12:00:00Z',
    name: 'Portrait of Newton',
    description: 'Portrait of Newton',
    categories: ['NordicFuzzCon', 'Portrait'],
    fursuiters: [
      {
        name: 'Newton',
        socialLinks: {
          bluesky: 'https://bsky.app/profile/newtoncaribou.bsky.social'
        }
      }
    ]
  },
  {
    id: 15,
    src: '/images/portfolio/nfc-2025/shizah/shizah-1.jpg',
    width: 1365,
    height: 2048,
    date: '2025-12-21T12:00:00Z',
    name: 'Portrait of Shizah',
    description: 'Portrait of Shizah',
    categories: ['NordicFuzzCon', 'Portrait'],
    fursuiters: [
      {
        name: 'Shizah',
        socialLinks: {
          bluesky: 'https://bsky.app/profile/shizahlombax.bsky.social'
        }
      }
    ]
  },
  {
    id: 16,
    src: '/images/portfolio/nfc-2025/shizah/shizah-2.jpg',
    width: 1365,
    height: 2048,
    date: '2025-12-21T12:00:00Z',
    name: 'Portrait of Shizah',
    description: 'Portrait of Shizah',
    categories: ['NordicFuzzCon', 'Portrait'],
    fursuiters: [
      {
        name: 'Shizah',
        socialLinks: {
          bluesky: 'https://bsky.app/profile/shizahlombax.bsky.social'
        }
      }
    ]
  },
  {
    id: 17,
    src: '/images/portfolio/nfc-2025/shizah/shizah-3.jpg',
    width: 1365,
    height: 2048,
    date: '2025-12-21T12:00:00Z',
    name: 'Portrait of Shizah',
    description: 'Portrait of Shizah',
    categories: ['NordicFuzzCon', 'Portrait'],
    fursuiters: [
      {
        name: 'Shizah',
        socialLinks: {
          bluesky: 'https://bsky.app/profile/shizahlombax.bsky.social'
        }
      }
    ]
  },
  {
    id: 18,
    src: '/images/portfolio/nfc-2025/shizah/shizah-4.jpg',
    width: 2048,
    height: 1365,
    date: '2025-12-21T12:00:00Z',
    name: 'Portrait of Shizah',
    description: 'Portrait of Shizah',
    categories: ['NordicFuzzCon', 'Portrait'],
    fursuiters: [
      {
        name: 'Shizah',
        socialLinks: {
          bluesky: 'https://bsky.app/profile/shizahlombax.bsky.social'
        }
      }
    ]
  },
  {
    id: 19,
    src: '/images/portfolio/nfc-2025/wapi/wapi-1.jpg',
    width: 1365,
    height: 2047,
    date: '2025-12-22T12:00:00Z',
    name: 'Portrait of Wapi',
    description: 'Portrait of Wapi',
    categories: ['NordicFuzzCon', 'Portrait'],
    fursuiters: [
      {
        name: 'Wapi',
        socialLinks: {
          bluesky: 'https://bsky.app/profile/wapi.bsky.social'
        }
      }
    ]
  },
  {
    id: 20,
    src: '/images/portfolio/nfc-2025/wapi/wapi-2.jpg',
    width: 1365,
    height: 2047,
    date: '2025-12-22T12:00:00Z',
    name: 'Portrait of Wapi',
    description: 'Portrait of Wapi',
    categories: ['NordicFuzzCon', 'Portrait'],
    fursuiters: [
      {
        name: 'Wapi',
        socialLinks: {
          bluesky: 'https://bsky.app/profile/wapi.bsky.social'
        }
      }
    ]
  },
  {
    id: 21,
    src: '/images/portfolio/nfc-2025/wapi/wapi-3.jpg',
    width: 1365,
    height: 2047,
    date: '2025-12-22T12:00:00Z',
    name: 'Portrait of Wapi',
    description: 'Portrait of Wapi',
    categories: ['NordicFuzzCon', 'Portrait'],
    fursuiters: [
      {
        name: 'Wapi',
        socialLinks: {
          bluesky: 'https://bsky.app/profile/wapi.bsky.social'
        }
      }
    ]
  },
  {
    id: 22,
    src: '/images/portfolio/nfc-2025/wapi/wapi-4.jpg',
    width: 1365,
    height: 2047,
    date: '2025-12-22T12:00:00Z',
    name: 'Portrait of Wapi',
    description: 'Portrait of Wapi',
    categories: ['NordicFuzzCon', 'Portrait'],
    fursuiters: [
      {
        name: 'Wapi',
        socialLinks: {
          bluesky: 'https://bsky.app/profile/wapi.bsky.social'
        }
      }
    ]
  },
  {
    id: 23,
    src: '/images/portfolio/nfc-2025/wapi/wapi-5.jpg',
    width: 1365,
    height: 2047,
    date: '2025-12-22T12:00:00Z',
    name: 'Portrait of Wapi',
    description: 'Portrait of Wapi',
    categories: ['NordicFuzzCon', 'Portrait'],
    fursuiters: [
      {
        name: 'Wapi',
        socialLinks: {
          bluesky: 'https://bsky.app/profile/wapi.bsky.social'
        }
      }
    ]
  },
  {
    id: 24,
    src: '/images/portfolio/nfc-2025/wapi/wapi-6.jpg',
    width: 1365,
    height: 2047,
    date: '2025-12-22T12:00:00Z',
    name: 'Portrait of Wapi',
    description: 'Portrait of Wapi',
    categories: ['NordicFuzzCon', 'Portrait'],
    fursuiters: [
      {
        name: 'Wapi',
        socialLinks: {
          bluesky: 'https://bsky.app/profile/wapi.bsky.social'
        }
      }
    ]
  }
];
