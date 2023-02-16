// pages/academic/curriculum.js

import Layout from '../../components/Layout'
import Link from 'next/link'
import HomeButton from '../../components/HomeButton'

const Resources = () => (
  <Layout>
    <main className="container mx-auto py-10">
      <h1 className="text-3xl font-bold text-center text-purple-500">Resources</h1>
      <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="p-5 bg-white rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold">Academic Resources</h2>
          <p className="mt-5 text-gray-600">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
            accumsan, dui sit amet tincidunt iaculis, ipsum lectus feugiat
            dolor, non volutpat metus sapien eget tellus.
          </p>
          <Link
            href="resources/academic-resources"
            className="mt-5 inline-block px-5 py-3 bg-indigo-500 text-white rounded-lg hover:bg-indigo-600">
            Learn More
          </Link>
        </div>
        <div className="p-5 bg-white rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold">Student Resources</h2>
          <p className="mt-5 text-gray-600">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
            accumsan, dui sit amet tincidunt iaculis, ipsum lectus feugiat
            dolor, non volutpat metus sapien eget tellus.
          </p>
          <Link
            href="/student-resources"
            className="mt-5 inline-block px-5 py-3 bg-indigo-500 text-white rounded-lg hover:bg-indigo-600">
            Learn More
          </Link>
        </div>
      </div>
      <HomeButton />
    </main>
  </Layout>
);

export default Resources;
