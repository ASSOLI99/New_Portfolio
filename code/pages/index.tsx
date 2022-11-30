import Head from "next/head";
import { BsFillMoonStarsFill } from "react-icons/bs";
import { FaFacebook, FaInstagram, FaLinkedinIn } from "react-icons/fa";
export default function Home() {
  return (
    <div>
      <Head>
        <title>Abdullah Portfolio</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="bg-white px-10">
        <section className="min-h-screen">
          <nav className="py-10 mb-12 flex justify-between">
            <h1 className="text-xl font-burtons">ABDULLAH</h1>
            <ul className="flex items-center">
              <li>
                <BsFillMoonStarsFill className="text-2xl cursor-pointer" />
              </li>
              <li>
                <a
                  href="#"
                  className="bg-gradient-to-r from-cyan-500 to-teal-500 text-white py-2 px-4 rounded ml-8"
                >
                  Resume
                </a>
              </li>
            </ul>
          </nav>
          <div>
            <h2>Abdullah Assoli</h2>
            <h3>Software Engineer</h3>
            <p>
              An ambitious and driven individual. Thrive in a goal-oriented
              environment where I can constantly challenge myself personally and
              professionally. I am always looking for an opportunity to do
              better and grow. These characteristics have helped me achieve
              success.
            </p>
            
          </div>
        </section>
      </main>
    </div>
  );
}
