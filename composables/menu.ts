export interface MenuItem {
  title: string;
  href: string;
  icon?: string; // optional for things like social or footer links
  external?: boolean; // to add rel="noopener" etc
  children?: MenuItem[]; // for dropdowns or nested menus
}

export const mainMenu: MenuItem[] = [
  { title: 'Home', href: '/' },
  { title: 'About', href: '/about' },
  { title: 'Socials', href: '/socials' },
  { title: 'Portfolio', href: '/socials' },
  { title: 'Blog', href: '/blog' }
];
