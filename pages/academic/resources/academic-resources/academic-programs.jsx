import React from "react";
import Link from "next/link";

const AcademicProgram = () => (
  <div className="min-h-screen flex flex-col">
    <header className="py-4 shadow-md">
      <div className="container mx-auto px-4">
        <Link
          href="/"
          className="text-2xl font-bold text-gray-800 hover:text-gray-600 transition duration-300">
          
           XYZ School and College
          
        </Link>
      </div>
    </header>
    <main className="flex-grow container mx-auto p-10">
      <h1 className="text-3xl font-bold text-center">Academic Programs</h1>
      <div className="mt-10 grid grid-cols-1 lg:grid-cols-3 gap-10">
        <div className="p-5 bg-white rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold">Elementary Education</h2>
          <p className="mt-5 text-gray-600">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
            accumsan, dui sit amet tincidunt iaculis, ipsum lectus feugiat
            dolor, non volutpat metus sapien eget tellus.
          </p>
          <Link
            href="/elementary-education"
            className="mt-5 inline-block px-5 py-3 bg-indigo-500 text-white rounded-lg hover:bg-indigo-600">
            Learn More
          </Link>
        </div>
        <div className="p-5 bg-white rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold">Secondary Education</h2>
          <p className="mt-5 text-gray-600">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
            accumsan, dui sit amet tincidunt iaculis, ipsum lectus feugiat
            dolor, non volutpat metus sapien eget tellus.
          </p>
          <Link
            href="/secondary-education"
            className="mt-5 inline-block px-5 py-3 bg-indigo-500 text-white rounded-lg hover:bg-indigo-600">
            Learn More
          </Link>
        </div>
        <div className="p-5 bg-white rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold">Higher Education</h2>
          <p className="mt-5 text-gray-600">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
            accumsan, dui sit amet tincidunt iaculis, ipsum lectus feugiat
            dolor, non volutpat metus sapien eget tellus.
          </p>
          <Link
            href="/higher-education"
            className="mt-5 inline-block px-5 py-3 bg-indigo-500 text-white rounded-lg hover:bg-indigo-600">
            Learn More
          </Link>
        </div>
      </div>
    </main>
    <footer className="py-4 bg-gray-800 text-gray-300">
      <div className="container mx-auto flex justify-between items-center">
        <p>&copy; 2023 XYZ School and Collegge</p>
        <Link
          href="/"
          className="text-lg font-bold hover:text-gray-400 transition duration-300">
          
            Home
          
        </Link>
      </div>
    </footer>
  </div>
);

export default AcademicProgram;
