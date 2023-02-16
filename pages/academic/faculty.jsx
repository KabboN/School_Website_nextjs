import React from 'react'
import Layout from '../../components/Layout'
import styles from '../../styles/table.module.css'
import Head from 'next/head'
import HomeButton from '../../components/HomeButton'
import Footer from '../../components/Footer'
import Image from 'next/image'

const Table = () => {
  return (
    <Layout title="Gallery">
      <div className={styles.container}>
    <div className={styles.container}>
      <Head>
        <title>Gallery | Holy Kids School and College</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
    <div>
    <h1 className="text-3xl font-bold text-center text-Black-500">Teachers List</h1>
    </div>


   <div>
  <table className={styles.table}>
      <tbody>
        <tr className='border-style: none text-center'>
          <td ></td>
          <td >
            <div className='m-auto'>
            <Image alt="/" src="/assets/image (2).png" width="180" height="200" style={{ display: 'block', margin: 'auto' }} />
               <h4 className='text-1x1 font-bold p-1 text-blue-400'> ABCD</h4>
               <h3 className='font-bold'>Principal</h3>
               <h2>principal@school.com</h2>
               <h2>01XXXXXXXX</h2>
            </div>
           </td>
           <td ></td>
        </tr>
      </tbody>
  </table>
      </div>



   <div>
  <table className={styles.table}>
      <tbody>
        <tr className='border-style: none text-center'>
          <td >
          <div className='m-auto'>
            <Image alt="/" src="/assets/image (2).png" width="180" height="200" style={{ display: 'block', margin: 'auto' }} />
               <h4 className='text-1x1 font-bold p-1 text-blue-400'> ABCD</h4>
               <h3 className='font-bold'>Vice Principal</h3>
               <h2>vice_principal@school.com</h2>
               <h2>01XXXXXXXX</h2>
            </div>
          </td>
          <td ></td>
           <td >
           <div className='m-auto'>
            <Image alt="/" src="/assets/image (2).png" width="180" height="200" style={{ display: 'block', margin: 'auto' }} />
               <h4 className='text-1x1 font-bold p-1 text-blue-400'> ABCD</h4>
               <h3 className='font-bold'>Vice Principal</h3>
               <h2>vice_principal@school.com</h2>
               <h2>01XXXXXXXX</h2>
            </div>
           </td>
        </tr>
      </tbody>
  </table>
      </div>

   <div>
  <table className={styles.table}>
      <tbody>
        <tr className='border-style: none text-center'>
          <td >
          <div className='m-auto'>
            <Image alt="/" src="/assets/image (2).png" width="180" height="200" style={{ display: 'block', margin: 'auto' }} />
               <h4 className='text-1x1 font-bold p-1 text-blue-400'> ABCD</h4>
               <h3 className='font-bold'>Senior Teacher</h3>
               <h2>teacher@school.com</h2>
               <h2>01XXXXXXXX</h2>
            </div>
          </td>
          <td >
          <div className='m-auto'>
            <Image alt="/" src="/assets/image (2).png" width="180" height="200" style={{ display: 'block', margin: 'auto' }} />
               <h4 className='text-1x1 font-bold p-1 text-blue-400'> ABCD</h4>
               <h3 className='font-bold'>Senior Teacher</h3>
               <h2>teacher@school.com</h2>
               <h2>01XXXXXXXX</h2>
            </div>
          </td>
           <td >
           <div className='m-auto'>
           <Image alt="/" src="/assets/image (2).png" width="180" height="200" style={{ display: 'block', margin: 'auto' }} />
               <h4 className='text-1x1 font-bold p-1 text-blue-400'> ABCD</h4>
               <h3 className='font-bold'>Senior Teacher</h3>
               <h2>teacher@school.com</h2>
               <h2>01XXXXXXXX</h2>
            </div>
           </td>
           <td>
           <div className='m-auto'>
           <Image alt="/" src="/assets/image (2).png" width="180" height="200" style={{ display: 'block', margin: 'auto' }} />
               <h4 className='text-1x1 font-bold p-1 text-blue-400'> ABCD</h4>
               <h3 className='font-bold'>Senior Teacher</h3>
               <h2>teacher@school.com</h2>
               <h2>01XXXXXXXX</h2>
            </div>
           </td>
        </tr>
      </tbody>
  </table>
      </div>



    </div>
    </div>

    
    <HomeButton />
    <Footer />
</Layout>
 
  
  )
}

export default Table
