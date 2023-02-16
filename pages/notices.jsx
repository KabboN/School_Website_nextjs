import Head from 'next/head';
import { useState, useEffect } from 'react';

function Notices() {
  const [notices, setNotices] = useState([]);

  useEffect(() => {
    async function fetchNotices() {
      const response = await fetch('../pages/api/notices.jsx');
      const data = await response.json();
      console.log(data); // log the response data
      setNotices(data);
    }
  
    fetchNotices();
  }, []);

  return (
    <>
      <Head>
        <title>Notices | My School</title>
      </Head>
      <div>
        <h1>Notices</h1>
        <ul>
          {notices.map((notice) => (
            <li key={notice.id}>
              <a href={`/notices/${notice.id}`}>{notice.title}</a>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default Notices;
