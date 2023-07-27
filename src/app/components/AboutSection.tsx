/* eslint-disable react/no-unescaped-entities */
import React from "react"
import Image from "next/image"

const skills = [
  { skill: "Html5" },
  { skill: "Css3" },
  { skill: "Javascript" },
  { skill: "Typescript" },
  { skill: "Python" },
  { skill: "Object - C" },
  { skill: "CSharpScript" },
  { skill: "Kotlin" },
  { skill: "C++" },
  { skill: "Java" },
  { skill: "JSON" },
  { skill: "XMl" },
  { skill: "ASP" },
  { skill: "Bablel" },
  { skill: "Python" },
  { skill: "Numpy" },
  { skill: "Panda" },
  { skill: "Keras" },
  { skill: "TensorFlow" },
  { skill: "Scikit Learn" },
  { skill: "Dart" },
  { skill: "C" },
  { skill: "C++" },
  { skill: "Php" },
  { skill: "Ruby" },
  { skill: "Swift" },
  { skill: "Tailwindcss" },
  { skill: "JQuerry" },
  { skill: "Sass" },
  { skill: "PgAdmin" },
  { skill: "Postgresql" },
  { skill: "Django" },
  { skill: "MongoDb" },
  { skill: "Mongo Atlas" },
  { skill: "Express_Js" },
  { skill: "React_Js" },
  { skill: "ReactNative" },
  { skill: "Angular_Js" },
  { skill: "ReactNative" },
  { skill: "Node_Js" },
  { skill: "Next_Js" },
  { skill: "AWS" },
  { skill: "API" },
  { skill: "RestApi" },
  { skill: "Server_less_Api" },
  { skill: "Android SDK" }
]
const experiences = [
  { skill: "Server_less_Api Development" },
  { skill: "Blockchain Development" },
  { skill: "MetaVerse Development" },
  { skill: "Game Development" },
  { skill: "Web Development" },
  { skill: "App Development" },
  { skill: "Ai Development" }
]
const web = [
  { skill: "Html5" },
  { skill: "Css3" },
  { skill: "Bootstrap" },
  { skill: "Javascript" },
  { skill: "Typescript" },
  { skill: "Tailwindcss" },
  { skill: "Chakra" },
  { skill: "JQuerry" },
  { skill: "Sass" },
  { skill: "XMl" },
  { skill: "ASP" },
  { skill: "JSON" },
  { skill: "ASP" },
  { skill: "Three_JS" },
  { skill: "React_Js" },
  { skill: "Next_Js" }
]
const design = [
  { skill: "Figma" },
  { skill: "Plasmic" },
  { skill: "Adobe Photoshop" },
  { skill: "Adobe Illustrator" },
  { skill: "Adobe Premiere Pro" },
  { skill: "Adobe Indesign" },
  { skill: "Character Animator" },
  { skill: "Adobe XD" },
  { skill: "Inkscape" },
  { skill: "Sketch" },
  { skill: "Blender" },
  { skill: "Canva" },
]
const clouds = [
  { skill: "Vercel" },
  { skill: "AWS" },
  { skill: "Azure" },
  { skill: "Heroku" },
  { skill: "Netlify" },
  { skill: "FireBase" },
  { skill: "Digital Ocean" },
  { skill: "PythonAnywhere" },
  { skill: "GitJetpack" }
]
const editor = [
  { skill: "Visual Studio Code" },
  { skill: "Android Studio" },
  { skill: "Intellij Idea" },
  { skill: "Jupiter Lab" },
  { skill: "Spider Lab" },
  { skill: "Sublime" },
  { skill: "Atom" }
]
const databases = [
  { skill: "Neon" },
  { skill: "Mongodb" },
  { skill: "Mongodb Atlas" },
  { skill: "Postgres" },
  { skill: "PostgreSQL" },
  { skill: "PgAdmin" },
  { skill: "MySql" },
  { skill: "Oracle Database" },
  { skill: "Microsoft SQL Server" },
  { skill: "Redis" },
  { skill: "SQLite" },
  { skill: "Apache Cassandra" },
  { skill: "Amazon DynamoDB" },
  { skill: "Microsoft Access" },
  { skill: "CouchDB" },
  { skill: "Amazon RDS" },
  { skill: "Microsoft Azure SQL Database" },
  { skill: "Google Cloud Platform" }
]
const frameworks = [
  { skill: "Django" },
  { skill: "Gatsby" },
  { skill: "Next" },
  { skill: "React" },
  { skill: "AngularJs" },
  { skill: "Angular" },
  { skill: "Bootstrap" },
  { skill: "jQuery" },
  { skill: "Flask" },
  { skill: "ASP.NET Core" },
  { skill: ".NET Core" },
  { skill: "React Native" },
  { skill: "Next" }
]
const mobile = [
  { skill: "ReactNative" },
  { skill: "Expo" }
]
const game = [
  { skill: "Core" },
  { skill: "Unity" }
]
const AboutSection = () => {
  return (
    <section id="about">
      <div className="my-12 pb-12 md:pt-16 md:pb-48">
        <h1 className="text-center font-bold text-4xl">
          About Me
          <hr className="w-6 h-1 mx-auto my-4 bg-teal-500 border-0 rounded"></hr>
        </h1>
        <div className="flex mb-10 flex-col space-y-10 items-stretch justify-center align-top md:space-x-10 md:space-y-0 md:p-4 md:flex-row md:text-left">
          <div className="">
            <h1 className="text-center text-2xl font-bold mb-6 md:text-left">
              Get to know me!
            </h1>
            <p>
              Hi, my name is <span className="font-bold text-teal-500"> Rana Rabees </span>and I am a
              <span className="font-bold text-lime-500">{" highly ambitious"}</span>,
              <span className="font-bold text-lime-500">{" self-motivated"}</span>, and
              <span className="font-bold text-lime-500">{" driven "}</span>
              <span className="font-bold text-lime-500"> Developer, Coder </span> and
              <span className="font-bold text-lime-500"> Programmer </span>
              working for RanaVerse.
            </p>
            <br />
            <p>
              I started my career in 2019 and have been working in the
              field ever since.
              I am passionate about creating things. My love for creation began at an early age,
              where I would often be found sketching and drawing.
              Though I haven't had much time for sketching in the
              past two years due to my studies in software development,
              I have found that my passion for design has transformed into a digital form.
            </p>
            <br />
            <p>
              My interest in web development began when I discovered my love for
              designing websites and creating intuitive user experiences.
              Since then, I have been developing modern and clean websites
              using frameworks such as
              <span className="font-bold text-lime-500">{" Next.js, React.js"}</span> and
              <span className="font-bold text-lime-500">{" Node.js"}</span> .
              I am also well-versed in <span className="font-bold text-lime-500">{" object-oriented programming, data structures and alogrithms, "}</span>
              and continuously strive to
              improve my knowledge in the field of
              <span className="font-bold text-lime-500">{" user experience design "}</span> .
            </p>
            <br />
            <p>
              As a recent graduate, I specialize in full stack development,
              with expertise in languages such as
              <span className="font-bold text-lime-500">
                {" Html5"} Css3, Javascript, Typescript, Python, Object - C, CSharpScript,
                Kotlin, C++, Java, JSON, XMl, ASP, Bablel, Python, Numpy, Panda, Keras,
                TensorFlow, Scikit Learn, Dart, C, C++, Php, Ruby, Swift, Tailwindcss,
                JQuerry, Sass SQL {"MySQL "}
              </span>
              and so many others Languages, FrameWorks, Libraries Remaining Now.
              I have a strong foundation in creating websites and focus on providing
              the best user experience through intuitive design.
            </p>
            <br />
            <p>
              I have a wide range of hobbies and passions that keep me busy.
              From Reading/Creating new blogs, Making Dynamic Websites, Building Mobile IOS Apps,
              Creating Games(2D 3D), Making YouTube videos of new
              Skills/Experiences, I am always seeking new experiences and love to keep myself
              engaged and learning new things.
            </p>
            <br />
            <p>
              I believe that you should{" "}
              <span className="font-bold text-teal-500">
                never stop growing
              </span>{" "}
              and that&#39;s what I strive to do, I have a passion for
              technology and a desire to always push the limits of what is
              possible. I am excited to see where my career takes me and am
              always open to new opportunities.
            </p>
            <br />
            <p>
              Thank you for taking the time to get to know me a little better.
              If you have any questions or are interested in working together,
              please don't hesitate to reach out. 🙂
            </p>
          </div>
        </div>
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-6">My Skills</h1>
          <div className="flex mb-10 flex-wrap flex-row justify-center z-10 md:justify-start">
            {skills.map((item, idx) => {
              return (
                <p
                  key={idx}
                  className="bg-gray-200 px-4 py-2 mr-2 mt-2 text-gray-500 rounded font-semibold"
                >
                  {item.skill}
                </p>
              )
            })}
          </div>
        </div>
        <div className="text-center ">
          <h1 className="text-2xl font-bold">⚡ Experiences</h1>
          <div className="flex md:mb-5 mb-10 flex-wrap flex-row justify-center z-10 md:justify-start">
            {experiences.map((item, idx) => {
              return (
                <p
                  key={idx}
                  className="bg-gray-200 px-4 py-2 mr-2 mt-2 text-gray-500 rounded font-semibold"
                >
                  {item.skill}
                </p>
              )
            })}
          </div>
        </div>
        <div className="flex flex-col space-y-10 items-stretch justify-center align-top md:space-x-10 md:space-y-0 md:p-4 md:flex-row md:text-left">
          <div className="text-center md:w-1/2 md:text-center">
            <h1 className="text-2xl font-bold mb-6">Web Dev Tools</h1>
            <div className="flex flex-wrap flex-row justify-center z-10 md:justify-start">
              {web.map((item, idx) => {
                return (
                  <p
                    key={idx}
                    className="bg-gray-200 px-4 py-2 mr-2 mt-2 text-gray-500 rounded font-semibold"
                  >
                    {item.skill}
                  </p>
                )
              })}
            </div>
          </div>
          <div className="text-center md:w-1/2 md:text-center">
            <h1 className="text-2xl font-bold mb-6">Design Tools</h1>
            <div className="flex flex-wrap flex-row justify-center z-10 md:justify-start">
              {design.map((item, idx) => {
                return (
                  <p
                    key={idx}
                    className="bg-gray-200 px-4 py-2 mr-2 mt-2 text-gray-500 rounded font-semibold"
                  >
                    {item.skill}
                  </p>
                )
              })}
            </div>
          </div>
        </div>
        <div className="flex flex-col space-y-10 items-stretch justify-center align-top md:space-x-10 md:space-y-0 md:p-4 md:flex-row md:text-left">
          <div className="text-center md:w-1/2 md:text-center">
            <h1 className="text-2xl font-bold mb-6"> Clouds </h1>
            <div className="flex flex-wrap flex-row justify-center z-10 md:justify-start">
              {clouds.map((item, idx) => {
                return (
                  <p
                    key={idx}
                    className="bg-gray-200 px-4 py-2 mr-2 mt-2 text-gray-500 rounded font-semibold"
                  >
                    {item.skill}
                  </p>
                )
              })}
            </div>
          </div>
          <div className="text-center md:w-1/2 md:text-center">
            <h1 className="text-2xl font-bold mb-6">Code Editor & Ides</h1>
            <div className="flex flex-wrap flex-row justify-center z-10 md:justify-start">
              {editor.map((item, idx) => {
                return (
                  <p
                    key={idx}
                    className="bg-gray-200 px-4 py-2 mr-2 mt-2 text-gray-500 rounded font-semibold"
                  >
                    {item.skill}
                  </p>
                )
              })}
            </div>
          </div>
        </div>
        <div className="flex flex-col space-y-10 items-stretch justify-center align-top md:space-x-10 md:space-y-0 md:p-4 md:flex-row md:text-left">
          <div className="text-center md:w-1/2 md:text-center">
            <h1 className="text-2xl font-bold mb-6"> Databases </h1>
            <div className="flex flex-wrap flex-row justify-center z-10 md:justify-start">
              {databases.map((item, idx) => {
                return (
                  <p
                    key={idx}
                    className="bg-gray-200 px-4 py-2 mr-2 mt-2 text-gray-500 rounded font-semibold"
                  >
                    {item.skill}
                  </p>
                )
              })}
            </div>
          </div>
          <div className="text-center md:w-1/2 md:text-center">
            <h1 className="text-2xl font-bold mb-6">FrameWorks</h1>
            <div className="flex flex-wrap flex-row justify-center z-10 md:justify-start">
              {frameworks.map((item, idx) => {
                return (
                  <p
                    key={idx}
                    className="bg-gray-200 px-4 py-2 mr-2 mt-2 text-gray-500 rounded font-semibold"
                  >
                    {item.skill}
                  </p>
                )
              })}
            </div>
          </div>
        </div>
        <div className="flex flex-col space-y-10 items-stretch justify-center align-top md:space-x-10 md:space-y-0 md:p-4 md:flex-row md:text-left">
          <div className="text-center md:w-1/2 md:text-center">
            <h1 className="text-2xl font-bold mb-6"> Mobile Dev Tools </h1>
            <div className="flex flex-wrap flex-row justify-center z-10 md:justify-start">
              {mobile.map((item, idx) => {
                return (
                  <p
                    key={idx}
                    className="bg-gray-200 px-4 py-2 mr-2 mt-2 text-gray-500 rounded font-semibold"
                  >
                    {item.skill}
                  </p>
                )
              })}
            </div>
          </div>
          <div className="text-center md:w-1/2 md:text-center">
            <h1 className="text-2xl font-bold mb-6">Game Dev Tools</h1>
            <div className="flex flex-wrap flex-row justify-center z-10 md:justify-start">
              {game.map((item, idx) => {
                return (
                  <p
                    key={idx}
                    className="bg-gray-200 px-4 py-2 mr-2 mt-2 text-gray-500 rounded font-semibold"
                  >
                    {item.skill}
                  </p>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection
