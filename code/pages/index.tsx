import Head from "next/head";
import { BsFillMoonStarsFill } from "react-icons/bs";
import { FaFacebook, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import Image from "next/image";
import myPic from "../public/dev-ed-wave.png";
import design from "../public/design.png";
import code from "../public/code.png";
import consulting from "../public/consulting.png";
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
          <div className="text-center p-5">
            <h2 className="text-4xl py-2 text-teal-600 font-medium">
              Abdullah Assoli
            </h2>
            <h3 className="text-2xl py-2">Software Engineer</h3>
            <p className="text-md py-5 leading-8 text-gray-800">
              An ambitious and driven individual. Thrive in a goal-oriented
              environment where I can constantly challenge myself personally and
              professionally.
            </p>
          </div>
          <div className="text-5xl flex justify-center gap-16 text-gray-600 py-2">
            <FaFacebook />
            <FaInstagram />
            <FaLinkedinIn />
          </div>
          <div className="relative mx-auto overflow-hidden bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 mx-auto mt-20">
            <Image
              alt="my picture"
              layout="fill"
              objectFit="cover"
              src={myPic}
            />
          </div>
        </section>
        {/* second page */}
        <section>
          <div>
            <h3 className="text-3xl py-1">Services I Offer</h3>
            <p className="text-md py-2 leading-8 text-gray-800">
              I am always looking for an{" "}
              <span className="text-teal-500"> opportunity </span>to do better
              and grow. These characteristics have helped me achieve
              <span className="text-teal-500"> success</span>
            </p>
            <p className="text-md py-2 leading-8 text-gray-800">
              I offer from a wide range of services, including programing and
              web development services also teaching
            </p>
          </div>
          <div>
            <div className="text-center shadow-lg p-10 rounded-xl my-10">
              <div className="flex justify-center">
                <Image src={design} alt="" width="100" height="1000" />
              </div>
              <h3 className="text-lg font-medium pt-8 pb-2">
                Beautiful Designs
              </h3>
              <p className="py-2">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa
                consectetur nam architecto magnam.
              </p>
              <h4 className="py-4 text-teal-600">Design tools I use</h4>
              <p className="text-gray-800 py-1">Photoshop</p>
              <p className="text-gray-800 py-1">Illustrator</p>
              <p className="text-gray-800 py-1">Figma</p>
            </div>
            <div className="text-center shadow-lg p-10 rounded-xl my-10">
              <div className="flex justify-center">
                <Image src={consulting} alt="" width="100" height="1000" />
              </div>
              <h3 className="text-lg font-medium pt-8 pb-2">
                Beautiful Designs
              </h3>
              <p className="py-2">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa
                consectetur nam architecto magnam.
              </p>
              <h4 className="py-4 text-teal-600">Design tools I use</h4>
              <p className="text-gray-800 py-1">Photoshop</p>
              <p className="text-gray-800 py-1">Illustrator</p>
              <p className="text-gray-800 py-1">Figma</p>
            </div>
            <div className="text-center shadow-lg p-10 rounded-xl my-10">
              <div className="flex justify-center">
                <Image src={code} alt="" width="100" height="1000" />
              </div>
              <h3 className="text-lg font-medium pt-8 pb-2">
                Beautiful Designs
              </h3>
              <p className="py-2">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa
                consectetur nam architecto magnam.
              </p>
              <h4 className="py-4 text-teal-600">Design tools I use</h4>
              <p className="text-gray-800 py-1">Photoshop</p>
              <p className="text-gray-800 py-1">Illustrator</p>
              <p className="text-gray-800 py-1">Figma</p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
