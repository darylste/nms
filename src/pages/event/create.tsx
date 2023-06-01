import { FC } from 'react';
import Head from 'next/head';
import { Footer, Header, Button, Text, Input } from '@atomic';
import { Formik } from 'formik';
import { navItems, footerData } from '../../utils/data';
import { authApiRequest } from 'utils/authApiRequest';
import { IMuseum } from 'types';

import styles from '../../styles/Home.module.scss';
import { EventSchemaCreate } from 'types/event.types';

interface ICreateEventPageProps {
  museums: IMuseum[];
}

const CreateEventPage: FC<ICreateEventPageProps> = ({ museums }) => {
  const initialValues = {
    name: '',
    hostMuseum: museums[0]._id,
    imgUrl: '',
    imgAlt: '',
    dateTime: '',
    description: '',
    standardAdultPrice: '',
    standardChildPrice: '',
    premiumAdultPrice: '',
    premiumChildPrice: '',
    standardBenefits: '',
    premiumBenefits: '',
  };

  const museumOptions = museums.map(museum => {
    return {
      name: `Hosted at: ${museum.name}`,
      value: museum._id,
    };
  });

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
        initialValues={initialValues}
        validationSchema={EventSchemaCreate}
        onSubmit={values => {
          console.log('hello');
          setTimeout(async () => {
            await authApiRequest({
              resource: 'event',
              method: 'POST',
              body: JSON.stringify(values),
              redirectTo: '/admin?tab=events',
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
            <Text varient='h3'>Create Event</Text>
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
                name='hostMuseum'
                type='select'
                options={museumOptions}
                placeholder='Host Museum'
                value={values.hostMuseum}
                onBlur={handleBlur as any}
                onChange={handleChange as any}
              />
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
                name='description'
                type='text'
                placeholder='Description'
                value={values.description}
                onBlur={handleBlur as any}
                onChange={handleChange as any}
              />
              {touched.description && errors.description && (
                <div className='error-msg'>{errors.description}</div>
              )}
            </div>
            <div className={styles.imputContainer}>
              <Input
                name='standardAdultPrice'
                type='number'
                placeholder='Standard Adult Price'
                value={values.standardAdultPrice}
                onBlur={handleBlur as any}
                onChange={handleChange as any}
              />
              {touched.standardAdultPrice && errors.standardAdultPrice && (
                <div className='error-msg'>{errors.standardAdultPrice}</div>
              )}
            </div>
            <div className={styles.imputContainer}>
              <Input
                name='standardChildPrice'
                type='number'
                placeholder='Standard Child Price'
                value={values.standardChildPrice}
                onBlur={handleBlur as any}
                onChange={handleChange as any}
              />
              {touched.standardChildPrice && errors.standardChildPrice && (
                <div className='error-msg'>{errors.standardChildPrice}</div>
              )}
            </div>
            <div className={styles.imputContainer}>
              <Input
                name='premiumAdultPrice'
                type='number'
                placeholder='Premium Adult Price'
                value={values.premiumAdultPrice}
                onBlur={handleBlur as any}
                onChange={handleChange as any}
              />
              {touched.premiumAdultPrice && errors.premiumAdultPrice && (
                <div className='error-msg'>{errors.premiumAdultPrice}</div>
              )}
            </div>
            <div className={styles.imputContainer}>
              <Input
                name='premiumChildPrice'
                type='number'
                placeholder='Premium Child Price'
                value={values.premiumChildPrice}
                onBlur={handleBlur as any}
                onChange={handleChange as any}
              />
              {touched.premiumChildPrice && errors.premiumChildPrice && (
                <div className='error-msg'>{errors.premiumChildPrice}</div>
              )}
            </div>

            <div className={styles.imputContainer}>
              <Button
                varient='form'
                isSubmitting={isSubmitting}
                fullWidth
              >
                {isSubmitting ? 'Loading...' : 'Create Event'}
              </Button>
            </div>
          </form>
        )}
      </Formik>
      <Footer {...footerData} />
    </div>
  );
};

export default CreateEventPage;

export const getServerSideProps = async (context: any) => {
  const token = context.req.cookies.token;
  const user = JSON.parse(context.req.cookies.user || null);
  const isAdmin = user?.role === 'admin';
  const fetchMuseums = await fetch(
    `https://nms-backend.herokuapp.com/api/v1/museums`,
  );
  const museums = await fetchMuseums.json();

  if (!museums.data) {
    return {
      notFound: true,
    };
  }

  if (!token || !isAdmin) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      museums: museums.data.museums,
    },
  };
};
