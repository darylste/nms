import React, { FC, Fragment } from 'react';
import Image from 'next/image';
import { Text, Spacer } from '@atomic';
import { IEvent } from 'types';

import featuredImg from '/public/assets/images/featured.jpg';

import styles from './FeaturedSection.module.scss';
import Link from 'next/link';

interface IFeaturedSectionProps {
  events: IEvent[];
}

const FeaturedSection: FC<IFeaturedSectionProps> = ({ events = [] }) => {
  return (
    <div className={styles.featuredSection}>
      <div className={styles.left}>
        <Spacer
          top='sm'
          bottom='sm'
        >
          <Text varient='h2'>Featured Event</Text>
          <Spacer top='sm' />
          <Text varient='body'>
            At National Museums Scotland, we&apos;re dedicated to bringing
            history to life through engaging events and activities for all ages.
            Check out what&apos;s coming up below and book your tickets today!
          </Text>
          <Text varient='body'>
            From world-class exhibitions to interactive workshops and talks, we
            offer a wide range of events that are designed to inspire and
            educate. Whether you&apos;re a history buff, a science lover, or
            simply looking for a fun day out with the family, we&apos;ve got
            something for everyone.
          </Text>
          <Text varient='body'>
            Our events are carefully curated by our team of experts, who are
            passionate about sharing Scotland&apos;s rich cultural heritage with
            the world. From ancient civilisations to contemporary art, our
            events showcase the best of Scotland&apos;s past and present.
          </Text>
          <Text varient='body'>
            Be sure to check back often for the latest updates and to book your
            tickets in advance to avoid disappointment. We can&apos;t wait to
            welcome you to one of our upcoming events!
          </Text>
        </Spacer>
      </div>
      <div className={styles.right}>
        {events.map(({ _id, name, imgUrl, imgAlt, slug }, i) =>
          i < 4 ? (
            <Link
              key={_id}
              className={styles.imgContainer}
              href={`/event/${slug}`}
            >
              <Text varient='h6'>{name}</Text>
              <Image
                className={styles.eventImg}
                src={`/assets/images/${imgUrl}`}
                alt={imgAlt}
                style={{ objectFit: 'cover', width: '100%', height: '100%' }}
                fill
              />
            </Link>
          ) : null,
        )}
      </div>
    </div>
  );
};

export default FeaturedSection;
