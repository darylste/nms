import router from 'next/router';
import { toast } from 'react-hot-toast';
import cookie from 'js-cookie';
import { resource } from 'types/resource.types';
interface IAuthApiRequest {
  resource: resource;
  method: 'POST' | 'PATCH' | 'DELETE';
  slug?: string;
  body?: BodyInit;
  redirectTo?: string;
}
export const authApiRequest = async ({
  resource,
  method,
  slug,
  body,
  redirectTo,
}: IAuthApiRequest) => {
  const token = cookie.get('token') as string;
  const url = slug
    ? `https://nms-backend.herokuapp.com/api/v1/${resource}s/${slug}`
    : `https://nms-backend.herokuapp.com/api/v1/${resource}s`;

  try {
    const rawRes = await fetch(url, {
      headers: {
        'Authorization': `Bearer ${token}`,
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      method: method,
      body: ['PATCH', 'POST'].includes(method) ? body : null,
    });

    const res = await rawRes.json();

    if (res.status === 'fail' || res.status === 'error') {
      throw new Error(res.message);
    }

    toast('Success!');

    if (!redirectTo) {
      return router.reload();
    }

    router.push(redirectTo);
  } catch (err: any) {
    toast(err.message);
    router.reload();
  }
};
