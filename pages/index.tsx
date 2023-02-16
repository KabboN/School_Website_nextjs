import Head from 'next/head'
import Layout from '../components/Layout'
import Footer from '../components/Footer'

const Home = () => (
  <Layout>
    <Head>
      <title>Home | Holy Kids School and College</title>
    </Head>
    <main className="bg-gray-200 py-16 px-4 flex flex-col justify-center items-center">
      <h1 className="text-4xl md:text-6xl font-bold text-center my-8 flex flex-col items-center">Welcome to Our School</h1>
      <p className="text-lg md:text-xl text-center py-4 flex flex-col items-center">Learn, Grow, Succeed</p>
    </main>
    <Footer />
  </Layout>
)

export default Home
