import Layout from "../../components/Layout";
import Footer from "../../components/Footer";
import HomeButton from "../../components/HomeButton";
import Image from "next/image";

const Curriculum = () => (
  <Layout>
    <main className="container mx-auto py-10">
      <h1 className="text-3xl font-bold text-center text-purple-500 mb-10">
        Curriculum
      </h1>
      <p className="text-lg text-gray-600 text-center mb-10">
        Our curriculum is designed to provide students with a well-rounded
        education that prepares them for success in college and beyond. With a
        focus on critical thinking, problem solving, and communication skills,
        our curriculum is both challenging and engaging.
      </p>
      <div className="flex flex-wrap justify-center">
        <div className="w-full lg:w-1/3 p-5">
          <Image
            src="/math.jpg"
            alt="Math"
            className="h-48 w-48 mx-auto rounded-lg shadow-lg"
          />
          <h2 className="text-xl font-bold text-center py-5">Math</h2>
          <p className="text-sm text-center text-gray-600">
            Our math curriculum covers a wide range of mathematical concepts and
            topics, from basic arithmetic to advanced calculus. Students learn
            how to think critically about mathematical problems and develop
            their problem-solving skills.
          </p>
        </div>
        <div className="w-full lg:w-1/3 p-5">
          <Image
            src="/science.jpg"
            alt="Science"
            className="h-48 w-48 mx-auto rounded-lg shadow-lg"
          />
          <h2 className="text-xl font-bold text-center py-5">Science</h2>
          <p className="text-sm text-center text-gray-600">
            Our science curriculum provides students with a comprehensive
            understanding of the natural world, from the smallest particles to
            the largest structures in the universe. Students learn through
            hands-on experiments and projects that help them develop their
            scientific thinking and research skills.
          </p>
        </div>
        <div className="w-full lg:w-1/3 p-5">
          <Image
            src="/english.jpg"
            alt="English"
            className="h-48 w-48 mx-auto rounded-lg shadow-lg"
          />
          <h2 className="text-xl font-bold text-center py-5">English</h2>
          <p className="text-sm text-center text-gray-600">
            Our English curriculum focuses on developing strong writing and
            communication skills, as well as an appreciation for literature.
            Students read and analyze a wide range of texts, from classic works
            of literature to contemporary fiction and non-fiction.
          </p>
        </div>
      </div>
    </main>
    <HomeButton />
    <Footer />
  </Layout>
);

export default Curriculum;
