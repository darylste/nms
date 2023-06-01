import router from 'next/router';
import { toast } from 'react-hot-toast';
import { resource } from 'types/resource.types';

export const createMuseum = async (
  resource: resource,
  slug: string,
  token: string,
) => {
  try {
    await fetch(`https://nms-backend.herokuapp.com/api/v1/museums/${slug}`, {
      headers: {
        'Authorization': `Bearer ${token}`,
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
    });

    toast('Museum created successfully.');
    router.reload();
  } catch (err) {
    toast('Whoops! Something went wrong... try again later.');
  }
};
