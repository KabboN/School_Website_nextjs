import Head from 'next/head';
import React from 'react';
import styles from '../styles/contact-us.module.css';
import Layout from '../components/Layout';
import HomeButton from '../components/HomeButton';

function Contact() {
  return (
    <Layout>
      <Head>
        <title>Contact Us | Holy Kids School and College</title>
      </Head>
      <div className={styles.container}>
        <div className={styles.addressContainer}>
          <h2>Address:</h2>
          <p>123 Main Street</p>
          <p>Anytown, USA</p>
        </div>
        <div className={styles.formContainer}>
          <div className={styles.contact}>
          <h2>Contact Us:</h2> 
          </div>
          <form className={styles.form}>
            <div className={styles.inputContainer}>
              <label htmlFor="name">Name:</label>
              <input type="text" id="name" name="name" />
            </div>
            <div className={styles.inputContainer}>
              <label htmlFor="Mobile">Mobile:</label>
              <input type="Mobile" id="Mobile" name="Mobile" />
            </div>
            <div className={styles.inputContainer}>
              <label htmlFor="email">Email:</label>
              <input type="email" id="email" name="email" />
            </div>
            <div className={styles.inputContainer}>
              <label htmlFor="message">Message:</label>
              <textarea id="message" name="message"></textarea>
            </div>
            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
      <HomeButton />
    </Layout>
  );
}

export default Contact;
