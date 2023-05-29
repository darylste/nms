import router from 'next/router';
import { toast } from 'react-hot-toast';
import cookie from 'js-cookie';
import { resource } from 'types/resource.types';

interface IAuthApiRequest {
  resource: resource;
  method: 'POST' | 'PATCH' | 'DELETE';
  slug?: string;
  body?: BodyInit;
}
export const authApiRequest = async ({
  resource,
  method,
  slug,
  body,
}: IAuthApiRequest) => {
  const token = cookie.get('token') as string;
  const url = slug
    ? `http://localhost:3000/api/v1/${resource}s/${slug}`
    : `http://localhost:3000/api/v1/${resource}s`;

  try {
    await fetch(url, {
      headers: {
        'Authorization': `Bearer ${token}`,
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      method: method,
      body: ['PATCH', 'POST'].includes(method) ? body : null,
    });

    toast('Success!');
    router.reload();
  } catch (err) {
    toast('Whoops! Something went wrong... try again later.');
  }
};
