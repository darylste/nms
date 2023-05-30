import { FC } from 'react';
import Head from 'next/head';
import { Footer, Header, Button, Text, Input } from '@atomic';
import { Formik } from 'formik';
import { navItems, footerData } from '../../utils/data';

import styles from '../../styles/Home.module.scss';
import { IMuseum } from 'types';
import { authApiRequest } from 'utils/authApiRequest';
import { MuseumSchemaCreate } from 'types/museum.types';

interface ISingleEventPageProps {
  museum: IMuseum;
}

const CreateMuseumPage: FC<ISingleEventPageProps> = () => {
  const createFormInitialValues = {
    name: '',
    location: '',
    imgUrl: '',
    imgAlt: '',
    shortDescription: '',
    longDescription: '',
  };
  return (
    <div className={styles.container}>
      <Head>
        <title>National Museums Scotland - Specific Event Page</title>
        <meta
          name='description'
          content='Create event'
        />
        <link
          rel='icon'
          href='/favicon.ico'
        />
      </Head>
      <Header navItems={navItems} />

      <Formik
        initialValues={createFormInitialValues}
        validationSchema={MuseumSchemaCreate}
        onSubmit={values => {
          setTimeout(async () => {
            authApiRequest({
              resource: 'museum',
              method: 'POST',
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
          isSubmitting,
          handleSubmit,
        }) => (
          <form
            className='form'
            onSubmit={handleSubmit}
          >
            <Text varient='h3'>Create Museum</Text>
            <div className={styles.imputContainer}>
              <Input
                name='name'
                type='text'
                placeholder='Name'
                value={values.name}
                onBlur={handleBlur as any}
                onChange={handleChange as any}
              />
              {touched.name && errors.name && (
                <div className='error-msg'>{errors.name}</div>
              )}
            </div>
            <div className={styles.imputContainer}>
              <Input
                name='location'
                type='text'
                placeholder='Location'
                value={values.location}
                onBlur={handleBlur as any}
                onChange={handleChange as any}
              />
              {touched.location && errors.location && (
                <div className='error-msg'>{errors.location}</div>
              )}
            </div>
            <div className={styles.imputContainer}>
              <Input
                name='imgUrl'
                type='text'
                placeholder='Image Url'
                value={values.imgUrl}
                onBlur={handleBlur as any}
                onChange={handleChange as any}
              />
              {touched.imgUrl && errors.imgUrl && (
                <div className='error-msg'>{errors.imgUrl}</div>
              )}
            </div>
            <div className={styles.imputContainer}>
              <Input
                name='imgAlt'
                type='text'
                placeholder='Image Alternative Text'
                value={values.imgAlt}
                onBlur={handleBlur as any}
                onChange={handleChange as any}
              />
              {touched.imgAlt && errors.imgAlt && (
                <div className='error-msg'>{errors.imgAlt}</div>
              )}
            </div>
            <div className={styles.imputContainer}>
              <Input
                name='shortDescription'
                type='text'
                placeholder='Short Description'
                value={values.shortDescription}
                onBlur={handleBlur as any}
                onChange={handleChange as any}
              />
              {touched.shortDescription && errors.shortDescription && (
                <div className='error-msg'>{errors.shortDescription}</div>
              )}
            </div>
            <div className={styles.imputContainer}>
              <Input
                name='longDescription'
                type='text'
                placeholder='Long Description'
                value={values.longDescription}
                onBlur={handleBlur as any}
                onChange={handleChange as any}
              />
              {touched.longDescription && errors.longDescription && (
                <div className='error-msg'>{errors.longDescription}</div>
              )}
            </div>
            <div className={styles.imputContainer}>
              <Button
                varient='form'
                isSubmitting={isSubmitting}
                fullWidth
              >
                Create
              </Button>
            </div>
          </form>
        )}
      </Formik>
      <Footer {...footerData} />
    </div>
  );
};

export default CreateMuseumPage;

export const getServerSideProps = async (context: any) => {
  const token = context.req.cookies.token;
  const user = JSON.parse(context.req.cookies.user || null);
  const isAdmin = user?.role === 'admin';

  if (!token || !isAdmin) {
    return {
      notFound: true,
    };
  }

  return {
    props: {},
  };
};
