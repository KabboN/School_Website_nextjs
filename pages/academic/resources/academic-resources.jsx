import React from "react";
import Link from "next/link";
import Layout from "../../../components/Layout";

const AcademicResources = () => (
  <Layout>
    <div className="container mx-auto px-4 lg:px-8 py-10">
      <h1 className="text-3xl font-bold text-center mb-10">Academic Resources</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
        <div className="p-5 bg-white rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold mb-5">Academic Calendar</h2>
          <p className="text-gray-600">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed accumsan, dui sit amet tincidunt iaculis, ipsum lectus feugiat dolor, non volutpat metus sapien eget tellus.
          </p>
          <Link
            href="../resources/academic-resources/academic-calender"
            className="inline-block mt-5 py-3 px-5 bg-indigo-500 text-white rounded-lg hover:bg-indigo-600"
          >
            Learn More
          </Link>
        </div>
        <div className="p-5 bg-white rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold mb-5">Academic Programs</h2>
          <p className="text-gray-600">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed accumsan, dui sit amet tincidunt iaculis, ipsum lectus feugiat dolor, non volutpat metus sapien eget tellus.
          </p>
          <Link
            href="../resources/academic-resources/academic-programs"
            className="inline-block mt-5 py-3 px-5 bg-indigo-500 text-white rounded-lg hover:bg-indigo-600"
          >
            Learn More
          </Link>
        </div>
      </div>
    </div>
    <footer className="bg-gray-200 py-4">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center">
          <Link href="/" className="text-indigo-500 hover:text-indigo-700">
            Home
          </Link>
        </div>
      </div>
    </footer>
  </Layout>
);

export default AcademicResources;
