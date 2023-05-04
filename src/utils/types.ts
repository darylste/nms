export interface IFooterItemProps {
  name: string;
  url: string;
}

export interface IFooterColumnProps {
  title: string;
  items: IFooterItemProps[];
}

export interface INavItemProps {
  page: string;
  href: string;
}

export interface IWorkBlockProps {
  icon: string;
  iconName: string;
  title: string;
  text: string;
}

export interface IMuseumRowProps {
  orientation: 'left' | 'right';
  location: string;
  title: string;
  text: string[];
  imgUrl: string;
  imgAlt: string;
}
