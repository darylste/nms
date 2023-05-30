import React, { FC, useState } from 'react';
import { authApiRequest } from 'utils/authApiRequest';
import { Text, Spacer, Button, Input } from '@atomic';
import { IMuseum } from 'types';
import { Formik } from 'formik';
import deleteIcon from '/public/assets/icons/delete.svg';
import Image from 'next/image';
import { MuseumSchemaUpdate } from 'types/museum.types';

import styles from './MuseumTab.module.scss';

interface IMuseumTabProps {
  museums: IMuseum[];
}

const MuseumTab: FC<IMuseumTabProps> = ({ museums }) => {
  return (
    <div className={styles.museumSection}>
      <div className={styles.sectionTitleContainer}>
        <Text varient='h3'>Museums</Text>
      </div>
      <Spacer top='rg' />
      <div className={styles.table}>
        <div className={styles.tableHead}>
          <div className={styles.tableRow}>
            <div className={styles.tableTitle}>
              <Text varient='body'>Name</Text>
            </div>
            <div className={styles.tableTitle}>
              <Text varient='body'>Location</Text>
            </div>
            <div className={styles.tableTitle}>
              <Text varient='body'>Image</Text>
            </div>
            <div className={styles.tableTitle}>
              <Text varient='body'>Image Alternative Text</Text>
            </div>
            <div className={styles.tableTitle}>
              <Text varient='body'>Update</Text>
            </div>
            <div className={styles.tableTitle}>
              <Text varient='body'>Delete</Text>
            </div>
          </div>
        </div>
        <div className={styles.tableBody}>
          {museums.map(museum => {
            return (
              <Formik
                key={museum.name}
                initialValues={museum}
                validationSchema={MuseumSchemaUpdate}
                onSubmit={values => {
                  setTimeout(async () => {
                    authApiRequest({
                      resource: 'museum',
                      slug: museum.slug,
                      method: 'PATCH',
                      body: JSON.stringify(values),
                    });
                  }, 400);
                }}
              >
                {({
                  values,
                  touched,
                  errors,
                  handleChange,
                  handleBlur,
                  handleSubmit,
                }) => (
                  <form
                    className={`${styles.form} ${styles.tableRow}`}
                    onSubmit={handleSubmit}
                  >
                    <div className={styles.tableCell}>
                      <input
                        name='name'
                        type='text'
                        onChange={handleChange as any}
                        onBlur={handleBlur as any}
                        value={values.name}
                      />
                      {touched.name && errors.name && (
                        <div className='error-msg'>{errors.name}</div>
                      )}
                    </div>
                    <div className={styles.tableCell}>
                      <input
                        name='location'
                        type='text'
                        onChange={handleChange as any}
                        onBlur={handleBlur as any}
                        value={values.location}
                      />
                      {touched.location && errors.location && (
                        <div className='error-msg'>{errors.location}</div>
                      )}
                    </div>
                    <div className={styles.tableCell}>
                      <input
                        name='imgUrl'
                        type='text'
                        onChange={handleChange as any}
                        onBlur={handleBlur as any}
                        value={values.imgUrl}
                      />
                      {touched.imgUrl && errors.imgUrl && (
                        <div className='error-msg'>{errors.imgUrl}</div>
                      )}
                    </div>
                    <div className={styles.tableCell}>
                      <input
                        name='imgAlt'
                        type='text'
                        onChange={handleChange as any}
                        onBlur={handleBlur as any}
                        value={values.imgAlt}
                      />
                      {touched.imgAlt && errors.imgAlt && (
                        <div className='error-msg'>{errors.imgAlt}</div>
                      )}
                    </div>
                    <div className={styles.tableCell}>
                      <button type='submit'>Update</button>
                    </div>
                    <div className={styles.tableCell}>
                      <Image
                        src={deleteIcon}
                        alt='delete icon'
                        width={20}
                        height={20}
                        onClick={() =>
                          authApiRequest({
                            resource: 'museum',
                            slug: museum.slug,
                            method: 'DELETE',
                          })
                        }
                      />
                    </div>
                  </form>
                )}
              </Formik>
            );
          })}
        </div>
      </div>
      <Spacer top='sm' />
      <Button
        varient='cta'
        href='/museum/create'
      >
        Create Museum
      </Button>
    </div>
  );
};

export default MuseumTab;
