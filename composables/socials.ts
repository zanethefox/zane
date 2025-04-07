export interface SocialLink {
  name: string;
  url: string;
  icon: string;
}

export const socialLinks: SocialLink[] = [
  {
    name: 'Bluesky',
    url: 'https://bsky.app/profile/zanethefox.bsky.social',
    icon: 'simple-icons:bluesky'
  },
  {
    name: 'Telegram',
    url: 'https://t.me/Zanethefox',
    icon: 'simple-icons:telegram'
  },
  {
    name: 'GitHub',
    url: 'https://github.com/zanethefox',
    icon: 'simple-icons:github'
  },
  {
    name: 'Flickr',
    url: 'https://www.flickr.com/photos/zanethefox/',
    icon: 'simple-icons:flickr'
  },
  {
    name: 'Ko-fi',
    url: 'https://ko-fi.com/zanethefox',
    icon: 'simple-icons:kofi'
  }
];
