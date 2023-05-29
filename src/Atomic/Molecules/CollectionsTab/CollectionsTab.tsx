import React, { FC, useState } from 'react';
import { authApiRequest } from 'utils/authApiRequest';
import { Text, Spacer, Button, Input } from '@atomic';
import { ICollection, IMuseum } from 'types';
import { Formik } from 'formik';
import deleteIcon from '/public/assets/icons/delete.svg';
import Image from 'next/image';

import styles from './CollectionsTab.module.scss';

interface ICollectionsTabProps {
  collections: ICollection[];
  museums: IMuseum[];
}

const CollectionsTab: FC<ICollectionsTabProps> = ({ collections }) => {
  return (
    <div className={styles.collections}>
      <div className={styles.sectionTitleContainer}>
        <Text varient='h3'>Collections</Text>
      </div>
      <Spacer top='rg' />
      <div className={styles.table}>
        <div className={styles.tableHead}>
          <div className={styles.tableRow}>
            <div className={styles.tableTitle}>
              <Text varient='body'>Name</Text>
            </div>
            <div className={styles.tableTitle}>
              <Text varient='body'>Host Museum</Text>
            </div>
            <div className={styles.tableTitle}>
              <Text varient='body'>Image</Text>
            </div>
            <div className={styles.tableTitle}>
              <Text varient='body'>Image Alternative Text</Text>
            </div>
            <div className={styles.tableTitle}>
              <Text varient='body'>Description</Text>
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
          {collections.map(collection => {
            return (
              <Formik
                key={collection.name}
                initialValues={collection}
                onSubmit={values => {
                  setTimeout(async () => {
                    authApiRequest({
                      resource: 'collection',
                      slug: collection.slug,
                      method: 'PATCH',
                      body: JSON.stringify(values),
                    });
                  }, 400);
                }}
              >
                {({ values, handleChange, handleBlur, handleSubmit }) => (
                  <form
                    className={`${styles.form}, ${styles.tableRow}`}
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
                    </div>
                    <div className={styles.tableCell}>
                      <input
                        name='location'
                        type='text'
                        onChange={handleChange as any}
                        onBlur={handleBlur as any}
                        value={values.hostMuseum.name}
                      />
                    </div>
                    <div className={styles.tableCell}>
                      <input
                        name='imgUrl'
                        type='text'
                        onChange={handleChange as any}
                        onBlur={handleBlur as any}
                        value={values.imgUrl}
                      />
                    </div>
                    <div className={styles.tableCell}>
                      <input
                        name='imgAlt'
                        type='text'
                        onChange={handleChange as any}
                        onBlur={handleBlur as any}
                        value={values.imgAlt}
                      />
                    </div>
                    <div className={styles.tableCell}>
                      <input
                        name='description'
                        type='text'
                        onChange={handleChange as any}
                        onBlur={handleBlur as any}
                        value={values.description}
                      />
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
                            resource: 'collection',
                            slug: collection.slug,
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
        href='/collection/create'
      >
        Create Collection
      </Button>
    </div>
  );
};

export default CollectionsTab;
