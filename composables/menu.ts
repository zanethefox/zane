export interface MenuItem {
  title: string;
  href: string;
  icon?: string; // optional for things like social or footer links
  external?: boolean; // to add rel="noopener" etc
  children?: MenuItem[]; // for dropdowns or nested menus
}

export const mainMenu: MenuItem[] = [
  { title: 'Home', href: '/' },
  { title: 'Portfolio', href: '/portfolio' },
  { title: 'Socials', href: '/socials' },
  { title: 'Ref sheet', href: '/ref-sheet' },
  { title: 'Contact', href: '/contact' }
];
