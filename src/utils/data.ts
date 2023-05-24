import collectionsIcon from '../../public/assets/icons/collections.svg';
import eventsIcon from '../../public/assets/icons/events.svg';
import historyIcon from '../../public/assets/icons/history.svg';
import hourglassIcon from '../../public/assets/icons/hourglass.svg';
import mapIcon from '../../public/assets/icons/map.svg';
import globeIcon from '../../public/assets/icons/globe.svg';
import quotesIcon from '../../public/assets/icons/quotes.svg';

import {
  IGridRowProps,
  IOneOfThreeRowProps,
  ITwoColGridProps,
  IPricingSectionProps,
} from './types';
import { IFeature } from 'types/event.types';

export const navItems = [
  { page: 'Home', href: '/' },
  { page: 'Museums', href: '/museums' },
  { page: 'Collections', href: '/collections' },
  { page: 'Login', href: '/login' },
];

export const heroData = {
  title: "Unlock the Secrets of Scotland's Past at National Museums Scotland",
  text: "National Museums Scotland is dedicated to bringing Scotland's fascinating history and culture to life through our diverse collection of museums and events. From ancient civilisations to modern-day innovations, we offer an interactive learning experience for all ages.",
  btnText: 'Find Your Nearest Museum',
  btnUrl: '/museums',
};

export const ourWorkData = {
  title: ' What We Offer at National Museums Scotland',
  blocks: [
    {
      icon: collectionsIcon,
      iconAlt: 'book icon',
      title: 'Curating Collections',
      text: "At National Museums Scotland, we take pride in curating a diverse and extensive collection of artefacts that showcase Scotland's rich cultural and historical heritage. Our team of experts works tirelessly to acquire, preserve, and interpret these collections, ensuring that they remain accessible for generations to come.",
    },
    {
      icon: eventsIcon,
      iconAlt: 'calender icon',
      title: 'Curating Collections',
      text: "At National Museums Scotland, we take pride in curating a diverse and extensive collection of artefacts that showcase Scotland's rich cultural and historical heritage. Our team of experts works tirelessly to acquire, preserve, and interpret these collections, ensuring that they remain accessible for generations to come.",
    },
    {
      icon: historyIcon,
      iconAlt: 'scroll icon',

      title: 'Curating Collections',
      text: "At National Museums Scotland, we take pride in curating a diverse and extensive collection of artefacts that showcase Scotland's rich cultural and historical heritage. Our team of experts works tirelessly to acquire, preserve, and interpret these collections, ensuring that they remain accessible for generations to come.",
    },
  ],
};

export const featuredEventsData = {
  title: 'Featured Events',
  text: [
    'At National Museums Scotland, we&apos;re dedicated to bringing history to life through engaging events and activities for all ages. Check out what&apos;s coming up below and book your tickets today!',
    'From world-class exhibitions to interactive workshops and talks, we offer a wide range of events that are designed to inspire and educate. Whether you&apos;re a history buff, a science lover, or simply looking for a fun day out with the family, we&apos;ve got something for everyone.',
    'Our events are carefully curated by our team of experts, who are passionate about sharing Scotland&apos;s rich cultural heritage with the world. From ancient civilisations to contemporary art, our events showcase the best of Scotland&apos;s past and present.',
    'Be sure to check back often for the latest updates and to book your tickets in advance to avoid disappointment. We can&apos;t wait to welcome you to one of our upcoming events!',
  ],
  events: [
    {
      title: 'Event Name',
      imgUrl:
        'https://www.dummyimage.com/260x260/93a49b/000000.jpg&text=Placeholder',
      imgAlt: 'placeholder',
      eventUrl: '/eventOne',
    },
    {
      title: 'Event Name',
      imgUrl:
        'https://www.dummyimage.com/260x260/93a49b/000000.jpg&text=Placeholder',
      imgAlt: 'placeholder',
      eventUrl: '/eventTwo',
    },
    {
      title: 'Event Name',
      imgUrl:
        'https://www.dummyimage.com/260x260/93a49b/000000.jpg&text=Placeholder',
      imgAlt: 'placeholder',
      eventUrl: '/eventThree',
    },
    {
      title: 'Event Name',
      imgUrl:
        'https://www.dummyimage.com/260x260/93a49b/000000.jpg&text=Placeholder',
      imgAlt: 'placeholder',
      eventUrl: '/eventFour',
    },
  ],
};

export const museumsData = [
  {
    orientation: 'left',
    location: 'Royal Exchange Square, Glasgow',
    title: 'The Gallery of Modern Art',
    text: [
      "The Gallery of Modern Art (GoMA) is located in the heart of Glasgow's city centre, occupying the former premises of the city's main library. The building was transformed into a museum of contemporary art in 1996 and has since become a major cultural hub in the city. The museum's collections focus on Scottish artists, as well as works by international artists, and include paintings, sculpture, installations, and photography.",
      "GoMA offers a diverse and ever-changing program of exhibitions and events throughout the year, with something for everyone, from cutting-edge contemporary art to family-friendly activities. The museum's exhibitions are designed to engage and inspire visitors, making it an essential destination for art lovers and cultural enthusiasts.",
    ],
    imgUrl:
      'https://www.dummyimage.com/260x260/93a49b/000000.jpg&text=Placeholder',
    imgAlt: 'placeholder',
  },
  {
    orientation: 'right',
    location: 'Argyle Street, Glasgow',
    title: 'Kelvingrove Museum and Art Gallery',
    text: [
      "Located in Glasgow's West End, Kelvingrove Art Gallery and Museum is one of Scotland's most popular attractions. The museum's grand Victorian building houses one of Europe's great art collections, with over 8,000 objects on display. Visitors can explore a range of galleries showcasing art, sculpture, and artefacts from around the world, including works by Rembrandt, Dali, and Monet. ",
      "The museum's extensive collection of natural history exhibits, including life-size models of dinosaurs and animals, is sure to fascinate young and old alike. Kelvingrove also offers a program of events and activities throughout the year, including talks, workshops, and guided tours. With its stunning architecture and world-class collections, Kelvingrove is a must-visit destination for art and culture lovers.",
    ],
    imgUrl:
      'https://www.dummyimage.com/260x260/93a49b/000000.jpg&text=Placeholder',
    imgAlt: 'placeholder',
  },
  {
    orientation: 'left',
    location: 'Pollock Country Park, Glasgow',
    title: 'The Burrell Collection',
    text: [
      'The Burrell Collection is located in Pollok Country Park, on the outskirts of Glasgow. The museum houses the personal collection of shipping magnate Sir William Burrell, who amassed an incredible array of artworks and artefacts throughout his life. The collection comprises over 9,000 objects, including art, sculpture, and artefacts from around the world, ranging from ancient Egypt to contemporary art. ',
      "Visitors can explore a range of galleries showcasing everything from medieval art to Asian artefacts, as well as Sir William's collection of stained glass, furniture, and textiles. The museum is set within beautiful gardens and woodlands, which visitors can explore as part of their visit. With its stunning collection and tranquil surroundings, the Burrell Collection is a unique and unforgettable destination for art and culture lovers.",
    ],
    imgUrl:
      'https://www.dummyimage.com/260x260/93a49b/000000.jpg&text=Placeholder',
    imgAlt: 'placeholder',
  },
];

export const footerData = {
  infoText:
    "Our mission is to inspire and engage visitors with Scotland's rich history and culture, both online and in-person. Through our exhibitions, events, and educational programs, we strive to make learning about history fun and accessible to people of all ages and backgrounds. Join us on a journey of discovery and exploration, and discover the wonders of Scotland's past and present.",
  columns: [
    {
      title: 'Browse',
      items: [
        { name: 'Home', url: '/' },
        { name: 'Museums', url: '/museums' },
        { name: 'Collections', url: '/collections' },
        { name: 'Login', url: '/login' },
      ],
    },
    {
      title: 'Upcoming Events',
      items: [
        {
          name: "Ancient Discoveries: Unearthing Scotland's Hidden Treasures",
          url: '#',
        },
        {
          name: "Exploring Scotland's Industrial Heritage: From Coal Mines to Steam Engines",
          url: '#',
        },
      ],
    },
    {
      title: 'Contact',
      items: [
        { name: '398 Main Street, Glasgow, G1 2RL', url: '#' },
        { name: 'getintouch@nms.co.uk', url: '#' },
        { name: '0712 987 6543', url: '#' },
        { name: '@NationalMuseumsScot', url: '#' },
      ],
    },
  ],
};

export const CTABannerProps = {
  text: 'Stay up to date with the latest news and events sign up for our newsletter today!',
  btnText: 'Subscribe Now',
  btnUrl: '#',
};

export const ourMuseumsOverview = {
  title: 'Our Museums',
  text: "We are passionate about preserving and sharing our country's rich history with visitors from around the world. Our museums provide a window into Scotland's past, showcasing everything from ancient artefacts to modern art. We are proud to operate several museums throughout Scotland, each with a unique focus and fascinating exhibits that will leave you inspired and informed.",
};

export const oneOfThreeGridData: IOneOfThreeRowProps[] = [
  {
    orientation: 'right',
    imgUrl:
      'https://www.dummyimage.com/260x260/93a49b/000000.jpg&text=Placeholder',
    imgAlt: 'placeholder',
    subheading: 'Royal Exchange Square, Glasgow',
    heading: 'The Gallery of Modern Art',
    text: [
      "The Gallery of Modern Art (GoMA) is located in the heart of Glasgow's city centre, occupying the former premises of the city's main library. The building was transformed into a museum of contemporary art in 1996 and has since become a major cultural hub in the city. The museum's collections focus on Scottish artists, as well as works by international artists, and include paintings, sculpture, installations, and photography.",
      "GoMA offers a diverse and ever-changing program of exhibitions and events throughout the year, with something for everyone, from cutting-edge contemporary art to family-friendly activities. The museum's exhibitions are designed to engage and inspire visitors, making it an essential destination for art lovers and cultural enthusiasts.",
    ],
    btnText: 'Arrange a Visit',
    btnUrl: '#',
  },
  {
    orientation: 'left',
    imgUrl:
      'https://www.dummyimage.com/260x260/93a49b/000000.jpg&text=Placeholder',
    imgAlt: 'placeholder',
    subheading: 'Argyle Street, Glasgow',
    heading: 'Kelvingrove Museum and Art Gallery',
    text: [
      "Located in Glasgow's West End, Kelvingrove Art Gallery and Museum is one of Scotland's most popular attractions. The museum's grand Victorian building houses one of Europe's great art collections, with over 8,000 objects on display. Visitors can explore a range of galleries showcasing art, sculpture, and artefacts from around the world, including works by Rembrandt, Dali, and Monet.",
      "The museum's extensive collection of natural history exhibits, including life-size models of dinosaurs and animals, is sure to fascinate young and old alike. Kelvingrove also offers a program of events and activities throughout the year, including talks, workshops, and guided tours. With its stunning architecture and world-class collections, Kelvingrove is a must-visit destination for art and culture lovers.",
    ],
    btnText: 'Arrange a Visit',
    btnUrl: '#',
  },
  {
    orientation: 'right',
    imgUrl:
      'https://www.dummyimage.com/260x260/93a49b/000000.jpg&text=Placeholder',
    imgAlt: 'placeholder',
    subheading: 'Pollock Country Park, Glasgow',
    heading: 'The Burrell Collection',
    text: [
      'The Burrell Collection is located in Pollok Country Park, on the outskirts of Glasgow. The museum houses the personal collection of shipping magnate Sir William Burrell, who amassed an incredible array of artworks and artefacts throughout his life. The collection comprises over 9,000 objects, including art, sculpture, and artefacts from around the world, ranging from ancient Egypt to contemporary art.',
      "Visitors can explore a range of galleries showcasing everything from medieval art to Asian artefacts, as well as Sir William's collection of stained glass, furniture, and textiles. The museum is set within beautiful gardens and woodlands, which visitors can explore as part of their visit. With its stunning collection and tranquil surroundings, the Burrell Collection is a unique and unforgettable destination for art and culture lovers.",
    ],
    btnText: 'Arrange a Visit',
    btnUrl: '#',
  },
];

export const ourCollectionsOverview = {
  title: 'Our Collections',
  text: "At National Museums Scotland, we take pride in curating a diverse and extensive collection of artefacts that showcase Scotland's rich cultural and historical heritage. Our team of experts works tirelessly to acquire, preserve, and interpret these collections, ensuring that they remain accessible for generations to come. ",
};

export const collectionResultsData = [
  {
    imgUrl:
      'https://www.dummyimage.com/260x260/93a49b/000000.jpg&text=Placeholder',
    imgAlt: 'placeholder',
    title: 'Mackintosh and the Glasgow Style',
    location: 'Kelvingrove Art Gallery',
    pageUrl: '#',
  },
  {
    imgUrl:
      'https://www.dummyimage.com/260x260/93a49b/000000.jpg&text=Placeholder',
    imgAlt: 'placeholder',
    title: 'The Steven Campbell Trust Collection',
    location: 'The Gallery of Modern Art',
    pageUrl: '#',
  },
  {
    imgUrl:
      'https://www.dummyimage.com/260x260/93a49b/000000.jpg&text=Placeholder',
    imgAlt: 'placeholder',
    title: 'Sculpture and Decorative Arts',
    location: 'The Burrell Collection',
    pageUrl: '#',
  },
  {
    imgUrl:
      'https://www.dummyimage.com/260x260/93a49b/000000.jpg&text=Placeholder',
    imgAlt: 'placeholder',
    title: 'Chinese and Japanese Art',
    location: 'The Burrell Collection',
    pageUrl: '#',
  },
  {
    imgUrl:
      'https://www.dummyimage.com/260x260/93a49b/000000.jpg&text=Placeholder',
    imgAlt: 'placeholder',
    title: 'European Armour and Arms',
    location: 'Kelvingrove Art Gallery',
    pageUrl: '#',
  },
  {
    imgUrl:
      'https://www.dummyimage.com/260x260/93a49b/000000.jpg&text=Placeholder',
    imgAlt: 'placeholder',
    title: 'The Whistler Collection',
    location: 'The Gallery of Modern Art',
    pageUrl: '#',
  },
];

export const ourEventsOverview = {
  title: 'Our Events',
  text: 'We offer a range of tours and events that allow visitors to engage with our exhibits in exciting and interactive ways. Our knowledgeable guides bring the past to life through engaging talks and immersive experiences, while our workshops and demonstrations provide a hands-on learning experience for all ages.',
};

export const eventResultsData = [
  {
    imgUrl:
      'https://www.dummyimage.com/260x260/93a49b/000000.jpg&text=Placeholder',
    imgAlt: 'placeholder',
    title: 'The Future of Art in a rapidly changing world.',
    location: 'The Gallery of Modern Art',
    pageUrl: '#',
  },
  {
    imgUrl:
      'https://www.dummyimage.com/260x260/93a49b/000000.jpg&text=Placeholder',
    imgAlt: 'placeholder',
    title: 'The Art of Food: Dishes inspired our collections.',
    location: 'Kelvingrove Art Gallery',
    pageUrl: '#',
  },
  {
    imgUrl:
      'https://www.dummyimage.com/260x260/93a49b/000000.jpg&text=Placeholder',
    imgAlt: 'placeholder',
    title: 'Art After Dark: Explore the museum after hours.',
    location: 'The Burrell Collection',
    pageUrl: '#',
  },
  {
    imgUrl:
      'https://www.dummyimage.com/260x260/93a49b/000000.jpg&text=Placeholder',
    imgAlt: 'placeholder',
    title: 'Art & Nature: The link between art and nature',
    location: 'Kelvingrove Art Gallery',
    pageUrl: '#',
  },
  {
    imgUrl:
      'https://www.dummyimage.com/260x260/93a49b/000000.jpg&text=Placeholder',
    imgAlt: 'placeholder',
    title: "Art Explorers: Explore the museum's exhibitions",
    location: 'Kelvingrove Art Gallery',
    pageUrl: '#',
  },
  {
    imgUrl:
      'https://www.dummyimage.com/260x260/93a49b/000000.jpg&text=Placeholder',
    imgAlt: 'placeholder',
    title: 'Hidden Gems - A Scavenger Hunt: find lost gems',
    location: 'The Gallery of Modern Art',
    pageUrl: '#',
  },
];

export const singleMuseumIntroData: ITwoColGridProps = {
  orientation: 'left',
  subheading: 'Royal Exchange Square, Glasgow',
  heading: 'The Gallery of Modern Art',
  text: [
    "The Gallery of Modern Art (GoMA) is located in the heart of Glasgow's city centre, occupying the former premises of the city's main library. The building was transformed into a museum of contemporary art in 1996 and has since become a major cultural hub in the city. The museum's collections focus on Scottish artists, as well as works by international artists, and include paintings, sculpture, installations, and photography.",
    " GoMA offers a diverse and ever-changing program of exhibitions and events throughout the year, with something for everyone, from cutting-edge contemporary art to family-friendly activities. The museum's exhibitions are designed to engage and inspire visitors, making it an essential destination for art lovers and cultural enthusiasts.",
  ],
  imgUrl:
    'https://www.dummyimage.com/260x260/93a49b/000000.jpg&text=Placeholder',
  imgAlt: 'placeholder',
};

export const eventSectionOverview = {
  title: "Events We're Hosting",
  text: "From world-class exhibitions to interactive workshops and talks, we offer a wide range of events that are designed to inspire and educate. Whether you're a history buff, a science lover, or simply looking for a fun day out with the family, we've got something for everyone. Our events are carefully curated by our team of experts, who are passionate about sharing Scotland's rich cultural heritage with the world. From ancient civilisations to contemporary art, our events showcase the best of Scotland's past and present.",
};

export const museumEventsData = {
  overview: {
    title: "Events We're Hosting",
    text: "From world-class exhibitions to interactive workshops and talks, we offer a wide range of events that are designed to inspire and educate. Whether you're a history buff, a science lover, or simply looking for a fun day out with the family, we've got something for everyone. Our events are carefully curated by our team of experts, who are passionate about sharing Scotland's rich cultural heritage with the world. From ancient civilisations to contemporary art, our events showcase the best of Scotland's past and present.",
  },
  events: [
    {
      imgUrl:
        'https://www.dummyimage.com/260x260/93a49b/000000.jpg&text=Placeholder',
      imgAlt: 'placeholder',
      title: "Ancient Discoveries: Unearthing Scotland's Hidden Treasures",
      location: 'The Gallery of Modern Art',
      pageUrl: '/eventOne',
    },
    {
      imgUrl:
        'https://www.dummyimage.com/260x260/93a49b/000000.jpg&text=Placeholder',
      imgAlt: 'placeholder',
      title: "Scotland's Industrial Heritage: From Coal Mines to Steam Engines",
      location: 'The Gallery of Modern Art',
      pageUrl: '/eventOne',
    },
    {
      imgUrl:
        'https://www.dummyimage.com/260x260/93a49b/000000.jpg&text=Placeholder',
      imgAlt: 'placeholder',
      title:
        ' Pop-Up Exhibition: Exploring the Intersection of Art and Technology',
      location: 'The Gallery of Modern Art',
      pageUrl: '/eventOne',
    },
    {
      imgUrl:
        'https://www.dummyimage.com/260x260/93a49b/000000.jpg&text=Placeholder',
      imgAlt: 'placeholder',
      title: '“Art for All” Workshop: Creating Art with Recyclable Materials',
      location: 'The Gallery of Modern Art',
      pageUrl: '/eventOne',
    },
    {
      imgUrl:
        'https://www.dummyimage.com/260x260/93a49b/000000.jpg&text=Placeholder',
      imgAlt: 'placeholder',
      title: 'Guest Lecture: “The Evolution of Modern Art” by Dr Jones',
      location: 'The Gallery of Modern Art',
      pageUrl: '/eventOne',
    },
    {
      imgUrl:
        'https://www.dummyimage.com/260x260/93a49b/000000.jpg&text=Placeholder',
      imgAlt: 'placeholder',
      title: "Ancient Discoveries: Unearthing Scotland's Hidden Treasures",
      location: 'The Gallery of Modern Art',
      pageUrl: '/eventOne',
    },
  ],
};

export const locationSectionData = {
  cardProps: {
    list: [
      'Royal Exchange Square, Glasgow, G1 3AH',
      '0.3 Miles from Queen Street Train Station',
      '0.3 Miles from Buchanan Street Subway Stop',
      '0.6 Miles from Buchanan Bus Station',
    ],
    text: [
      'The Gallery of Modern Art sits in the centre of Glasgow and has a variety of public transport links. The Gallery is within walking distance of Glasgows Subway for those staying in the Southside or Westend of Glasgow.',
      'Those coming from further away are within walking distance from train and bus links.',
    ],
  },
  imgUrl:
    'https://www.dummyimage.com/260x260/93a49b/000000.jpg&text=Placeholder',
  imgAlt: 'placeholder',
};

export const imageGalleryData = {
  images: [
    {
      src: 'https://www.dummyimage.com/260x260/93a49b/000000.jpg&text=Placeholder',
      alt: 'placeholder',
    },
    {
      src: 'https://www.dummyimage.com/260x260/4b6858/000000.jpg&text=Placeholder',
      alt: 'placeholder',
    },
    {
      src: 'https://www.dummyimage.com/260x260/93a49b/000000.jpg&text=Placeholder',
      alt: 'placeholder',
    },
    {
      src: 'https://www.dummyimage.com/260x260/4b6858/000000.jpg&text=Placeholder',
      alt: 'placeholder',
    },

    {
      src: 'https://www.dummyimage.com/260x260/4b6858/000000.jpg&text=Placeholder',
      alt: 'placeholder',
    },
    {
      src: 'https://www.dummyimage.com/260x260/93a49b/000000.jpg&text=Placeholder',
      alt: 'placeholder',
    },
    {
      src: 'https://www.dummyimage.com/260x260/4b6858/000000.jpg&text=Placeholder',
      alt: 'placeholder',
    },
    {
      src: 'https://www.dummyimage.com/260x260/93a49b/000000.jpg&text=Placeholder',
      alt: 'placeholder',
    },
  ],
};

export const singleEventData: ITwoColGridProps = {
  orientation: 'right',
  subheading: 'Kelvingrove Art Museum',
  heading: "Ancient Discoveries: Unearthing Scotland's Hidden Treasures",
  text: [
    'Join us for an exciting journey back in time to uncover Scotland\'s hidden treasures! The Burrell Collection is proud to present "Ancient Discoveries," an exclusive event that showcases the fascinating archaeological finds that have been unearthed throughout Scotland over the years.',
    "This event offers a rare opportunity to see some of Scotland's most fascinating archaeological finds up close and to learn about the rich history of this ancient land. Don't miss out on this chance to unearth Scotland's hidden treasures at The Burrell Collection's \"Ancient Discoveries\" event.",
  ],
  imgUrl:
    'https://www.dummyimage.com/260x260/93a49b/000000.jpg&text=Placeholder',
  imgAlt: 'placeholder',
};

export const fourBlockData: IFeature[] = [
  {
    icon: 'hourglass.svg',
    iconAlt: 'placeholder',
    title: 'Journey Through Time',
    description:
      "Travel back in time and explore the rich history of Scotland. From the enigmatic carved stonesof the Picts to the intricate illuminated manuscripts of the medieval Scots, you will discover a diverse range of cultures and traditions that have shaped Scotland over the centuries. You will learn about the everyday lives, beliefs, and customs of these ancient peoples, gaining a deeper understanding of Scotland's past and how it has evolved over time.",
  },
  {
    icon: 'map.svg',
    iconAlt: 'placeholder',
    title: 'Uncover Hidden Treasures',
    description:
      "Get the opportunity to see some of Scotland's most fascinating archaeological finds up close. Marvel at the intricate designs and mysterious symbols on the carved stones of the Picts, and discover the exquisite metalwork and jewellery of the Vikings. You will also see Roman artefacts that shed light on the interaction between the Romans and the indigenous peoples of Scotland, as well as other treasures that offer a glimpse into Scotland's rich past.",
  },
  {
    icon: 'hourglass.svg',
    iconAlt: 'placeholder',
    title: 'Dig into archaeology',
    description:
      "Travel back in time and explore the rich history of Scotland. From the enigmatic carved stones of the Picts to the intricate illuminated manuscripts of the medieval Scots, you will discover a diverse range of cultures and traditions that have shaped Scotland over the centuries. You will learn about the everyday lives, beliefs, and customs of these ancient peoples, gaining a deeper understanding of Scotland's past and how it has evolved over time.",
  },
  {
    icon: 'globe.svg',
    iconAlt: 'placeholder',
    title: 'Explore the Wider World',
    description:
      "Gain a deeper understanding of Scotland's place in the wider world, and how its history has been shaped by interactions with other cultures and civilisations. Learn about the trade and exchange that took place between the ancient Scots and other cultures, as well as the conflicts and alliances that shaped Scotland's history. You will also see how Scotland's own unique culture and traditions have influenced and been influenced by other cultures, creating a rich and diverse tapestry of history and heritage.",
  },
];

export const pricingSectionData: IPricingSectionProps = {
  cards: [
    {
      varient: 'standard',
      title: 'Standard',
      price: 14.99,
      benefits: ['Its great', 'Amazing Experience', 'Educational'],
    },
    {
      varient: 'cta',
      title: 'Standard',
      price: 14.99,
      benefits: ['Its great', 'Amazing Experience', 'Educational'],
    },
  ],
};

export const reviewSectionData = {
  img: 'https://www.dummyimage.com/260x260/93a49b/000000.jpg&text=Placeholder',
  imgAlt: 'placeholder',
  icon: quotesIcon,
  iconAlt: 'placeholder',
  text: [
    ' I recently attended the "Ancient Discoveries" event at The Burrell Collection, and I was absolutely blown away. The event was a fascinating journey through Scotland\'s ancient history, and I learned so much about the country\'s rich and complex past.',
    "The event was divided into two parts. The first part was a guided tour of the museum's collection of ancient artefacts. The tour guide was incredibly knowledgeable and passionate about her work, and she did a wonderful job of bringing the history of each artefact to life. The second part of the event was a lecture by a leading archaeologist on the topic of Scotland's ancient history. The lecture was informative and engaging, and it gave me a deeper understanding of the country's past.",
  ],
  author: 'Mary Jones',
};
