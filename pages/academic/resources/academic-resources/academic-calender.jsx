import React from "react";
import Link from "next/link";


const AcademicCalendar = () => (
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
    <h1 className="text-3xl font-bold text-center">Academic Calendar</h1>
    <table className="mt-10 w-full text-left table-collapse">
      <thead>
        <tr className="bg-gray-200 text-gray-700">
          <th className="p-3 font-bold">Date</th>
          <th className="p-3 font-bold">Event</th>
        </tr>
      </thead>
      <tbody>
        <tr className="bg-white">
          <td className="p-3 border border-gray-400 text-sm md:text-base">January 1</td>
          <td className="p-3 border border-gray-400 text-sm md:text-base">New Year@apos;s Day</td>
        </tr>
        <tr className="bg-gray-100">
          <td className="p-3 border border-gray-400 text-sm md:text-base">January 15</td>
          <td className="p-3 border border-gray-400 text-sm md:text-base">Martin Luther King Jr. Day</td>
        </tr>
        <tr className="bg-white">
          <td className="p-3 border border-gray-400 text-sm md:text-base">February 14</td>
          <td className="p-3 border border-gray-400 text-sm md:text-base">Valentine@apos;s Day</td>
        </tr>
        
      </tbody>
    </table>
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

export default AcademicCalendar;
