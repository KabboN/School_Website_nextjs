import React, { useState } from 'react';
import Head from 'next/head';
import styles from '../styles/ImageGallary.module.css';
import Layout from '../components/Layout';
import HomeButton from '../components/HomeButton';
import Footer from '../components/Footer';

const events = [
  {
    name: 'Event 1',
    images: [
      'https://picsum.photos/id/1005/300/200',
      'https://picsum.photos/id/1006/300/200',
      'https://picsum.photos/id/1007/300/200',
    ],
  },
  {
    name: 'Event 2',
    images: [
      'https://picsum.photos/id/1008/300/200',
      'https://picsum.photos/id/1009/300/200',
      'https://picsum.photos/id/1010/300/200',
    ],
  },
  {
    name: 'Event 3',
    images: [
      'https://picsum.photos/id/1011/300/200',
      'https://picsum.photos/id/1012/300/200',
      'https://picsum.photos/id/1013/300/200',
    ],
  },
];

const GalleryPage = () => {
  const [selectedEvent, setSelectedEvent] = useState(0);
  const [selectedImage, setSelectedImage] = useState(0);
  const [zoom, setZoom] = useState(false);

  const handleZoom = (index) => {
    setSelectedImage(index);
    setZoom(!zoom);
  };

  return (
    <Layout title="Gallery">
      <Head>
        <title>Gallery | Holy Kids School and College</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <div className={styles.container}>
        <div className={styles.topContainer}>
          {events.map((event, index) => (
            <div key={index} className={styles.event}>
              <img
                src={event.images[selectedImage]}
                alt={event.name}
                className={styles.image}
              />
              <h2>{event.name}</h2>
            </div>
          ))}
        </div>
        <div className={styles.bottomContainer}>
          {events.map((event, index) => (
            <div
              key={index}
              className={`${styles.event} ${
                selectedEvent === index ? styles.selectedEvent : ''
              }`}
              onClick={() => setSelectedEvent(index)}
            >
              <h2>{event.name}</h2>
              <div className={styles.imagesContainer}>
                {event.images.map((image, i) => (
                  <img
                    key={i}
                    src={image}
                    alt={event.name}
                    className={styles.thumbnail}
                    onClick={() => handleZoom(i)}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
        {zoom && (
          <div className={styles.zoomContainer}>
            <img
              src={events[selectedEvent].images[selectedImage]}
              alt={events[selectedEvent].name}
              className={styles.zoomImage}
              onClick={handleZoom}
            />
            <button className={styles.closeButton} onClick={handleZoom}>
              X
            </button>
          </div>
        )}
      </div>
      <HomeButton />
      <Footer />
    </Layout>
  );
};

export default GalleryPage;
