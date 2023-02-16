import Head from 'next/head'
import Layout from '../components/Layout'
import Link from 'next/link'
import Footer from '../components/Footer'
import HomeButton from '../components/HomeButton'

const Academic = () => (
  <Layout>
    <Head>
      <title>Academic | Holy Kids School and College</title>
    </Head>
    <main className="bg-gray-200 py-16 px-4">
      <h1 className="text-4xl font-bold text-center">Academic Program</h1>
      <p className="text-lg text-center py-4">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam interdum,
        ex ac convallis pellentesque, ipsum leo efficitur ligula, in gravida dui dui a metus.
      </p>
      <div className="flex flex-wrap justify-center">
        <Link href='/academic/curriculum' className="inline-flex items-center justify-center bg-blue-500 hover:bg-blue-600 text-white font-bold py-4 px-6 rounded-full m-4 transition-colors duration-300">
          Curriculum
        </Link>
        <Link href='/academic/faculty' className="inline-flex items-center justify-center bg-blue-500 hover:bg-blue-600 text-white font-bold py-4 px-6 rounded-full m-4 transition-colors duration-300">
          Faculty
        </Link>
        <Link href='/academic/resources' className="inline-flex items-center justify-center bg-blue-500 hover:bg-blue-600 text-white font-bold py-4 px-6 rounded-full m-4 transition-colors duration-300">
          Resources
        </Link>
      </div>
    </main>
    <HomeButton />
    <Footer />
  </Layout>
)

export default Academic
