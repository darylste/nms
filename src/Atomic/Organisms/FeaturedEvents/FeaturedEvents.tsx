import React, { FC, Fragment, ReactNode } from 'react';

import styles from './FeaturedEvents.module.scss';
import Text from '../../Atoms/Text/Text';
import Spacer from '../../Atoms/Spacer/Spacer';
import Image from 'next/image';

interface IEvents {
  title: string;
  imgUrl: string;
  imgAlt: string;
  eventUrl: string;
}

interface IFeaturedEventsProps {
  title: string;
  text: string[];
  events: IEvents[];
}

const FeaturedEvents: FC<IFeaturedEventsProps> = ({ title, text, events }) => {
  return (
    <div className={styles.featuredEvents}>
      <div className={styles.left}>
        <Spacer
          top='sm'
          bottom='sm'
        >
          <Text varient='h2'>{title}</Text>
          <Spacer top='sm' />
          {text.map((paragraph, i) => (
            <Fragment key={i}>
              <Text varient='body'>{paragraph}</Text>
              <Spacer top='xs' />
            </Fragment>
          ))}
        </Spacer>
      </div>
      <div className={styles.right}>
        {events.map(({ title, imgUrl, imgAlt, eventUrl }, i) => (
          <a
            key={i}
            className={styles.imgContainer}
            href={eventUrl}
          >
            <Image
              src={imgUrl}
              alt={imgAlt}
              fill
            />
            <Text varient='h5'>TEXT</Text>
          </a>
        ))}
      </div>
    </div>
  );
};

export default FeaturedEvents;
