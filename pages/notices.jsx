import React from 'react';
import Footer from '../components/Footer';
import HomeButton from '../components/HomeButton';

const notices = [
  {
    id: 1,
    title: 'Important Announcement',
    message: 'School will be closed tomorrow due to inclement weather.',
    date: '2022-01-01'
  },
  {
    id: 2,
    title: 'Upcoming Event',
    message: 'Parent-Teacher conferences will be held on Monday, February 14th.',
    date: '2022-02-10'
  },
  {
    id: 3,
    title: 'Sports Update',
    message: 'The basketball game against Lincoln High School has been rescheduled to Friday, March 11th.',
    date: '2022-03-05'
  }
];

const Notices = () => {
  return (
    <div className="notices">
      <h1>Notices</h1>
      <ul>
        {notices.map(notice => (
          <li key={notice.id}>
            <h2>{notice.title}</h2>
            <p>{notice.message}</p>
            <p>{notice.date}</p>
          </li>
        ))}
      </ul>
    </div>
     );
};

export default Notices;
