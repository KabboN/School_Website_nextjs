
import Head from 'next/head'
import Layout from '../components/Layout'
import Footer from '../components/Footer'
import HomeButton from '../components/HomeButton'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons";

const About = () => (
  <Layout>
    <Head>
      <title>About | Holy Kids School and College</title>
    </Head>
    <main className="bg-gray-200 py-16 px-4">
      <h1 className="text-4xl font-bold text-center">About Our School</h1>
      <p className="text-lg text-center py-4">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam interdum,
        ex ac convallis pellentesque, ipsum leo efficitur ligula, in gravida dui dui a metus.
      </p>
    </main>
    <HomeButton />
    <Footer />
  </Layout>
  
)

export default About
