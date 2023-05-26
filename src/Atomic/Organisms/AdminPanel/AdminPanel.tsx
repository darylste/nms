import React, { FC, useState } from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';
import cookie from 'js-cookie';
import * as yup from 'yup';

import userIcon from '/public/assets/icons/user.svg';
import museumIcon from '/public/assets/icons/museum.svg';
import imagesIcon from '/public/assets/icons/images.svg';
import calendarIcon from '/public/assets/icons/calendar.svg';
import editIcon from '/public/assets/icons/edit.svg';
import deleteIcon from '/public/assets/icons/delete.svg';

import styles from './AdminPanel.module.scss';
import { Input, Spacer, Text } from 'Atomic/Atoms';
import { ICollection, IEvent, IMuseum } from 'types';
import { Formik } from 'formik';

interface IAdminPanelProps {
  museums: IMuseum[];
  events: IEvent[];
  collections: ICollection[];
}

interface IUpdateBody {
  name?: string;
  location?: string;
  image?: string;
  alternativeText?: string;
}

interface IInitialFormValues {
  name: string;
  location: string;
  img: string;
  imgAlt: string;
}

const AdminPanel: FC<IAdminPanelProps> = ({ museums, events, collections }) => {
  const [errorMessage, setErrorMessage] = useState<string | undefined>(
    undefined,
  );
  const router = useRouter();
  const initialValues: IInitialFormValues = {
    name: '',
    location: '',
    img: '',
    imgAlt: '',
  };

  const museumSchema = yup.object().shape({
    name: yup.string().min(5).max(150).required(),
    location: yup.string().min(5).max(150).required(),
    img: yup.string().min(5).max(150).required(),
    imgAlt: yup.string().min(5).max(100).required(),
  });

  const handleUpdate = async (
    resourse: string,
    body: IUpdateBody,
    slug: string,
  ) => {
    try {
      const token = cookie.get('token');
      const updatedDoc = await fetch(
        `http://localhost:3000/api/v1/${resourse}/${slug}`,
        {
          headers: {
            'Authorization': `Bearer ${token}`,
            'Accept': 'application/json',
            'Content-Type': 'application/json',
          },
          method: 'PATCH',
          body: JSON.stringify(body),
        },
      );
      console.log(updatedDoc);
      alert(`User was updated! : ${JSON.stringify(updatedDoc)}`);
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <section className={styles.adminPanel}>
      <div className={styles.sidebar}>
        <div className={styles.tab}>
          <Image
            src={museumIcon}
            alt='museum icon'
            height={25}
            width={25}
          />
          <Spacer left='2xs' />
          Museums
        </div>
        <div className={styles.tab}>
          <Image
            src={calendarIcon}
            alt='calendar icon'
            height={25}
            width={25}
          />
          <Spacer left='2xs' />
          Events
        </div>
        <div className={styles.tab}>
          <Image
            src={imagesIcon}
            alt='images icon'
            height={25}
            width={25}
          />
          <Spacer left='2xs' />
          Collections
        </div>
        <div className={styles.tab}>
          <Image
            src={userIcon}
            alt='user icon'
            height={25}
            width={25}
          />
          <Spacer left='2xs' />
          Users
        </div>
      </div>
      <div className={styles.main}>
        <div className={styles.museumSection}>
          <div className={styles.sectionTitleContainer}>
            <Text varient='h3'>Museums</Text>
          </div>
          <Spacer top='rg' />
          <div className={styles.highlights}>
            <div className={styles.statBox}></div>
            <div className={styles.statBox}></div>
            <div className={styles.statBox}></div>
            <div className={styles.statBox}></div>
          </div>
          <div className={styles.table}>
            <div className={`${styles.divTable} ${styles.greyGridTable}`}>
              <div className={styles.divTableHeading}>
                <div className={styles.divTableRow}>
                  <div className={styles.divTableHead}>Name</div>
                  <div className={styles.divTableHead}>Location</div>
                  <div className={styles.divTableHead}>Image</div>
                  <div className={styles.divTableHead}>Alternative Text</div>
                  <div className={styles.divTableHead}>Edit</div>
                  <div className={styles.divTableHead}>Delete</div>
                </div>
              </div>
              <div className={styles.divTableBody}>
                {museums.map((museum, i) => (
                  <div
                    key={i}
                    className={styles.divTableRow}
                  >
                    <div className={styles.divTableCell}>{museum.name}</div>
                    <div className={styles.divTableCell}>{museum.location}</div>
                    <div className={styles.divTableCell}>{museum.imgUrl}</div>
                    <div className={styles.divTableCell}>{museum.imgAlt}</div>
                    <div className={styles.divTableCell}>
                      <Image
                        onClick={() =>
                          handleUpdate(
                            'museums',
                            {
                              name: 'The Daryl Collection',
                            },
                            museum.slug,
                          )
                        }
                        src={editIcon}
                        alt='edit icon'
                        width={15}
                        height={15}
                      />
                    </div>
                    <div className={styles.divTableCell}>
                      <Image
                        src={deleteIcon}
                        alt='delete icon'
                        width={15}
                        height={15}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        {/* <div className={styles.eventsSections}>
          <div className={styles.sectionTitleContainer}>
            <Text varient='h3'>Events</Text>
          </div>
          <Spacer top='rg' />
          <div className={styles.highlights}>
            <div className={styles.statBox}></div>
            <div className={styles.statBox}></div>
            <div className={styles.statBox}></div>
            <div className={styles.statBox}></div>
          </div>
          <div className={styles.table}>
            <div className={`${styles.divTable} ${styles.greyGridTable}`}>
              <div className={styles.divTableHeading}>
                <div className={styles.divTableRow}>
                  <div className={styles.divTableHead}>Name</div>
                  <div className={styles.divTableHead}>Host Museum</div>
                  <div className={styles.divTableHead}>Image</div>
                  <div className={styles.divTableHead}>Alternative Text</div>
                  <div className={styles.divTableHead}>
                    Standard Adult Price
                  </div>
                  <div className={styles.divTableHead}>Premium Adult Price</div>
                  <div className={styles.divTableHead}>Edit</div>
                  <div className={styles.divTableHead}>Delete</div>
                </div>
              </div>
              <div className={styles.divTableBody}>
                {events.map((event, i) => (
                  <div
                    key={i}
                    className={styles.divTableRow}
                  >
                    <div className={styles.divTableCell}>{event.name}</div>
                    <div className={styles.divTableCell}>
                      {event.hostMuseum.name}
                    </div>
                    <div className={styles.divTableCell}>{event.imgUrl}</div>
                    <div className={styles.divTableCell}>{event.imgAlt}</div>
                    <div className={styles.divTableCell}>
                      £{event.standardAdultPrice}
                    </div>
                    <div className={styles.divTableCell}>
                      £{event.premiumAdultPrice}
                    </div>
                    <div className={styles.divTableCell}>
                      <Image
                        src={editIcon}
                        alt='edit icon'
                        width={15}
                        height={15}
                      />
                    </div>
                    <div className={styles.divTableCell}>
                      <Image
                        src={deleteIcon}
                        alt='delete icon'
                        width={15}
                        height={15}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div> */}
        {/* <div className={styles.collectionsSection}>
          <div className={styles.sectionTitleContainer}>
            <Text varient='h3'>Collections</Text>
          </div>
          <Spacer top='rg' />
          <div className={styles.highlights}>
            <div className={styles.statBox}></div>
            <div className={styles.statBox}></div>
            <div className={styles.statBox}></div>
            <div className={styles.statBox}></div>
          </div>
          <div className={styles.table}>
            <div className={`${styles.divTable} ${styles.greyGridTable}`}>
              <div className={styles.divTableHeading}>
                <div className={styles.divTableRow}>
                  <div className={styles.divTableHead}>Name</div>
                  <div className={styles.divTableHead}>Host Museum</div>
                  <div className={styles.divTableHead}>Edit</div>
                  <div className={styles.divTableHead}>Delete</div>
                </div>
              </div>
              <div className={styles.divTableBody}>
                {collections.map((collection, i) => (
                  <div
                    key={i}
                    className={styles.divTableRow}
                  >
                    <div className={styles.divTableCell}>{collection.name}</div>
                    <div className={styles.divTableCell}>
                      {collection.hostMuseum.name}
                    </div>

                    <div className={styles.divTableCell}>
                      <Image
                        src={editIcon}
                        alt='edit icon'
                        width={15}
                        height={15}
                      />
                    </div>
                    <div className={styles.divTableCell}>
                      <Image
                        src={deleteIcon}
                        alt='delete icon'
                        width={15}
                        height={15}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div> */}
        {/* <div className={styles.usersSection}>
          <div className={styles.sectionTitleContainer}>
            <Text varient='h3'>Users</Text>
          </div>
          <Spacer top='rg' />
          <div className={styles.highlights}>
            <div className={styles.statBox}></div>
            <div className={styles.statBox}></div>
            <div className={styles.statBox}></div>
            <div className={styles.statBox}></div>
          </div>
          <div className={styles.table}>
            <div className={`${styles.divTable} ${styles.greyGridTable}`}>
              <div className={styles.divTableHeading}>
                <div className={styles.divTableRow}>
                  <div className={styles.divTableHead}>Name</div>
                  <div className={styles.divTableHead}>Host Museum</div>
                  <div className={styles.divTableHead}>Edit</div>
                  <div className={styles.divTableHead}>Delete</div>
                </div>
              </div>
              <div className={styles.divTableBody}>
                {collections.map((collection, i) => (
                  <div
                    key={i}
                    className={styles.divTableRow}
                  >
                    <div className={styles.divTableCell}>{collection.name}</div>
                    <div className={styles.divTableCell}>
                      {collection.hostMuseum.name}
                    </div>

                    <div className={styles.divTableCell}>
                      <Image
                        src={editIcon}
                        alt='edit icon'
                        width={15}
                        height={15}
                      />
                    </div>
                    <div className={styles.divTableCell}>
                      <Image
                        src={deleteIcon}
                        alt='delete icon'
                        width={15}
                        height={15}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div> */}
      </div>

      <Formik
        initialValues={initialValues}
        validationSchema={museumSchema}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(async () => {
            try {
              const res = await fetch(
                'http://127.0.0.1:3000/api/v1/museums/the-burrell-collection',
                {
                  method: 'POST',
                  headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                  },
                  body: JSON.stringify(values),
                },
              );
              const data = await res.json();
              if (data.status === 'fail') {
                setErrorMessage(data.message);
              } else {
                cookie.set('token', data.token);
                router.push('/');
              }
            } catch (err: any) {
              setErrorMessage(err.message);
            } finally {
              setSubmitting(false);
            }
          }, 400);
        }}
      ></Formik>
    </section>
  );
};

export default AdminPanel;
