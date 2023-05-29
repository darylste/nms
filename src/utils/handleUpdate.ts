import cookie from 'js-cookie';

interface IUpdateBody {
  name?: string;
  location?: string;
  image?: string;
  alternativeText?: string;
}

export const handleUpdate = async (
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
