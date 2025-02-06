import React from "react";
import "./Home.css";
import vg from "../../assets/2.webp";
import { AiFillGoogleCircle } from "react-icons/ai";
import { AiFillAmazonCircle } from "react-icons/ai";
import { AiFillYoutube } from "react-icons/ai";
import { AiFillInstagram } from "react-icons/ai";

const Home = () => {
  return (
    <div>
      <div className="home1 h-[91vh] w-full md:rounded-b-[200px] ">
        <main className="absolute h-full w-full flex flex-col md:items-end items-center justify-center px-20  md:rounded-b-200px text-white uppercase  z-10 ">
          <h1 className="md:text-8xl text-5xl font-bold">Techy Star</h1>
          <p className="md:text-2xl font-bold">solution to all your problems</p>
        </main>
      </div>

      <div className="home2 h-[120vh] bg-gray-800 md:-mt-[200px] z-1 flex flex-col md:flex-col items-center justify-center md:justify-between">
        <img src={vg} />
        <div>
          <p className="text-white md:text-xl p-5">
            We are your one and only solution to the tech problems you face
            every day. We are leading tech company whose aim is to increase the
            problem solving ability in children.
          </p>
        </div>
      </div>

      <div className="home3 h-screen bg-gray-800" id="about">
        <div className="bg-white md:h-8/12 h-full md:w-9/12 flex flex-col items-center justify-center md:p-20 p-8 md:rounded-r-[200px] space-y-5">
          <h1 className="md:text-4xl text-2xl font-semibold border-b-3 ">
            Who we are?
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis
            officiis hic illo quos sit commodi, aut magnam odio eligendi? Totam
            quis officiis fugit sunt dolores nostrum tenetur iusto est odio
            mollitia. Dolor placeat repellendus officia aspernatur dolorum
            harum. Dolorem cumque quaerat eius qui deserunt ullam laudantium
            quia tempore. Dignissimos esse sequi numquam est ipsam nemo,
            voluptas vel recusandae iste aspernatur qui quasi, commodi, atque
            ipsa dolores tempore asperiores? Dolores soluta placeat molestiae
            aperiam, ullam officia fugiat corrupti odio, suscipit ipsum cum vel
            nemo. Ratione quo tempore fugit quaerat! Facilis beatae impedit
            similique maxime praesentium sunt unde necessitatibus voluptates
            ipsa, et, numquam reiciendis eveniet? Aliquid nemo nesciunt placeat,
            qui fuga quae repellat sunt, non natus, iure ab officia rem ipsa cum
            sed cumque corporis voluptate quibusdam nostrum quod saepe
          </p>
        </div>
      </div>

      <div className="home4 h-screen bg-gray-800 flex justify-end">
        <div className="bg-blue-400 md:h-8/12 md:w-9/12 w-full flex flex-col items-center justify-center md:p-20 p-5 md:rounded-l-[200px] space-y-10">
          <h1 className="text-4xl font-semibold border-b-3 ">Brands</h1>
          <div className="brand-icons flex md:flex-row flex-col gap-18">
            <div
              className="bg-gray-200 rounded-full md:h-34 h-20 md:w-34 w-20 flex flex-col items-center justify-center"
              style={{
                animationDelay: "0.3s",
              }}
            >
              <AiFillGoogleCircle className="text-4xl" />
              <span className="md:text-xl">Google</span>
            </div>

            <div
              className="bg-gray-200 rounded-full md:h-34 h-20 md:w-34 w-20 flex flex-col items-center justify-center"
              style={{
                animationDelay: "0.6s",
              }}
            >
              <AiFillAmazonCircle className="text-4xl" />
              <span className="md:text-xl">Amazon</span>
            </div>

            <div
              className="bg-gray-200 rounded-full md:h-34 h-20 md:w-34 w-20 flex flex-col items-center justify-center"
              style={{
                animationDelay: "0.9s",
              }}
            >
              <AiFillYoutube className="text-4xl" />
              <span className="md:text-xl">Youtube</span>
            </div>

            <div
              className="bg-gray-200 rounded-full md:h-34 h-20 md:w-34 w-20 flex flex-col items-center justify-center"
              style={{
                animationDelay: "1.2s",
              }}
            >
              <AiFillInstagram className="text-4xl" />
              <span className="md:text-xl">Instagram</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
