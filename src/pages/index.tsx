import Head from 'next/head';
import styles from '../styles/Home.module.scss';

import Header from '../Atomic/Organisms/Header/Header';
import Hero from '../Atomic/Organisms/Hero/Hero';
import OurWork from '../Atomic/Organisms/OurWork/OurWork';

import collectionsIcon from '../../public/assets/icons/collections.svg';
import eventsIcon from '../../public/assets/icons/events.svg';
import historyIcon from '../../public/assets/icons/history.svg';
import FeaturedEvents from '../Atomic/Organisms/FeaturedEvents/FeaturedEvents';
import NewsletterSignup from '../Atomic/Molecules/NewsletterSignup/NewsletterSignup';
import OurMuseums from '../Atomic/Organisms/OurMuseums/OurMuseums';
import Footer from '../Atomic/Organisms/Footer/Footer';
interface IMuseumRowProps {
  orientation: 'left' | 'right';
  location: string;
  title: string;
  text: string[];
  imgUrl: string;
  imgAlt: string;
}

interface IFooterItemProps {
  name: string;
  url: string;
}

interface IFooterColumnProps {
  title: string;
  items: IFooterItemProps[];
}
interface IFooterProps {
  infoText: string;
  columns: IFooterColumnProps[];
}

export default function Home() {
  const items = [
    { page: 'Home', href: 'www.google.com' },
    { page: 'Museums', href: 'www.google.com' },
    { page: 'Collections', href: 'www.google.com' },
    { page: 'Login', href: 'www.google.com' },
  ];

  const ourWorkData = {
    title: ' What We Offer at National Museums Scotland',
    blocks: [
      {
        icon: collectionsIcon,
        iconName: 'book icon',
        title: 'Curating Collections',
        text: "At National Museums Scotland, we take pride in curating a diverse and extensive collection of artefacts that showcase Scotland's rich cultural and historical heritage. Our team of experts works tirelessly to acquire, preserve, and interpret these collections, ensuring that they remain accessible for generations to come.",
      },
      {
        icon: eventsIcon,
        iconName: 'calender icon',
        title: 'Curating Collections',
        text: "At National Museums Scotland, we take pride in curating a diverse and extensive collection of artefacts that showcase Scotland's rich cultural and historical heritage. Our team of experts works tirelessly to acquire, preserve, and interpret these collections, ensuring that they remain accessible for generations to come.",
      },
      {
        icon: historyIcon,
        iconName: 'scroll icon',

        title: 'Curating Collections',
        text: "At National Museums Scotland, we take pride in curating a diverse and extensive collection of artefacts that showcase Scotland's rich cultural and historical heritage. Our team of experts works tirelessly to acquire, preserve, and interpret these collections, ensuring that they remain accessible for generations to come.",
      },
    ],
  };

  const featuredEventsData = {
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

  const museumsData: IMuseumRowProps[] = [
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

  const footerData: IFooterProps = {
    infoText:
      "Our mission is to inspire and engage visitors with Scotland's rich history and culture, both online and in-person. Through our exhibitions, events, and educational programs, we strive to make learning about history fun and accessible to people of all ages and backgrounds. Join us on a journey of discovery and exploration, and discover the wonders of Scotland's past and present.",
    columns: [
      {
        title: 'Browse',
        items: [
          { name: 'Home', url: '#' },
          { name: 'Museums', url: '#' },
          { name: 'Collections', url: '#' },
          { name: 'Login', url: '#' },
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

  return (
    <div className={styles.container}>
      <Head>
        <title>National Museums Scotland - Home Page</title>
        <meta
          name='description'
          content='Generated by create next app'
        />
        <link
          rel='icon'
          href='/favicon.ico'
        />
      </Head>
      <Header navItems={items} />
      <Hero />
      <OurWork {...ourWorkData} />
      <FeaturedEvents {...featuredEventsData} />
      <NewsletterSignup />
      <OurMuseums museums={museumsData} />
      <Footer {...footerData} />
    </div>
  );
}
