import Head from 'next/head';
import { useRouter } from 'next/router';

function Notice() {
  const router = useRouter();
  const { id } = router.query;

  return (
    <>
      <Head>
        <title>Notice {id} | My School</title>
      </Head>
      <div>
        <h1>Notice {id}</h1>
        <p>This is the content of notice {id}.</p>
      </div>
    </>
  );
}

export default Notice;
