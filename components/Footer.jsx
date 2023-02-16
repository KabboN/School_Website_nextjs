import Link from 'next/link';

const Footer = () => (
  <footer className="bg-sky-500 py-10">
    <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
      <div>
        <h3 className="text-white font-bold text-xl mb-4">Address</h3>
        <p className="text-gray-200 text-sm leading-loose">Dhaka, Bangladesh</p>
      </div>
      <div>
        <h3 className="text-white font-bold text-xl mb-4">Contact Information</h3>
        <ul className="text-gray-200 text-sm leading-loose">
          <li>
            Mobile: 
            <Link href="tel:+8801 XXXXXXXX" className="ml-2 hover:text-white">
              01XXXXXXXX
            </Link>, 
            <Link href="tel:+8801XXXXXXXX" className="ml-2 hover:text-white">
              01XXXXXXXX
            </Link>
          </li>
          <li>
            E-mail: 
            <Link href="mailto:principal@hksc.edu.bd" className="ml-2 hover:text-white">
              principal@school.edu.bd
            </Link>
          </li>
        </ul>
      </div>
      <div>
        <h3 className="text-white font-bold text-xl mb-4">Location</h3>
        <div className="google-map">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3651.614554538148!2d90.26609681536032!3d23.870930992023!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755a44c60c16f33%3A0x2dcd62c7e46b9b08!2sHoly%20Kids%20School%20and%20College!5e0!3m2!1sen!2sbd!4v1645019948346!5m2!1sen!2sbd"
            frameBorder="0"
            scrolling="no"
            marginHeight="0"
            marginWidth="0"
          />
        </div>
      </div>
    </div>
    <div className="text-center mt-8 text-gray-200 text-sm">
      &copy; {new Date().getFullYear()} XYZ School and College. All rights reserved.
    </div>
  </footer>
);

export default Footer;
