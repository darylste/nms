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
  iconAlt: string;
  title: string;
  text: string;
}

export interface IGridRowProps {
  orientation: 'left' | 'right';
  location: string;
  title: string;
  shortDescription: string[];
  imgUrl: string;
  imgAlt: string;
}

export interface IOneOfThreeRowProps {
  orientation: 'left' | 'right';
  imgUrl: string;
  imgAlt: string;
  subheading: string;
  heading: string;
  text: string[];
  btnText: string;
  btnUrl: string;
}

export interface IOneOfThreeGridProps {
  content: IOneOfThreeRowProps[];
}

export interface IResultProps {
  imgUrl: string;
  imgAlt: string;
  title: string;
  location: string;
  pageUrl: string;
}

export interface ITwoColGridProps {
  orientation: 'left' | 'right';
  subheading: string;
  heading: string;
  text: string[];
  imgUrl: string;
  imgAlt: string;
}

export interface ISectionOverviewProps {
  title: string;
  text: string;
}

export interface IPricingCardProps {
  varient: 'standard' | 'cta';
  title: string;
  price: number;
  benefits: string[];
}

export interface IPricingSectionProps {
  cards: IPricingCardProps[];
}
