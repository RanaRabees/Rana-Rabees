import React from "react"
import Image from "next/image"
import Link from "next/link"
import SlideUp from "../../lib/SlideUp"
import { BsGithub, BsArrowUpRightSquare } from "react-icons/bs"

const projects = [
  {
    name: "Icecream Shop",
    description: "A Icecream Shop using Figma, PLasmic, Next.Js, and Tailwind-Css.",
    image: "/ice.png",
    github: "https://github.com/RanaRabees/Ice-Creams-Shop",
    link: "https://ice-creams-shop.vercel.app/",
  },
  {
    name: "All In One Shopping Mart",
    description: "An e-commerce app using Next.Js, React.Js and Tailwind-Css.",
    image: "/shop.png",
    github: "https://github.com/RanaRabees/All-In-One-Shopping-Mart",
    link: "https://a-i-o-shopping-mart.vercel.app/",
  },
  {
    name: "Latest Education System",
    description: "An Fullstack - Ecommerce - Site using Next.Js, React.Js and Tailwind-Css.",
    image: "/edu.png",
    github: "https://github.com/RanaRabees/All-In-One-Shopping-Mart",
    link: "https://latest-education-system.vercel.app/",
  },
]

const ProjectsSection = () => {
  return (
    <section id="projects">
      <h1 className="my-10 text-center font-bold text-4xl">
        Projects
        <hr className="w-6 h-1 mx-auto my-4 bg-teal-500 border-0 rounded"></hr>
      </h1>

      <div className="flex flex-col space-y-28">
        {projects.map((project, idx) => {
          return (
            <div key={idx}>
              {/* <SlideUp offset="-300px 0px -300px 0px"> */}
                <div className="flex flex-col animation-delay-1 animate-slideUpCubiBezier md:flex-row md:space-x-12">
                  <div className=" md:w-1/2">
                    <Link target="_blank" href={project.link}>
                      <Image
                        src={project.image}
                        alt=""
                        width={1000}
                        height={1000}
                        className="rounded-xl shadow-xl contrast-50 hover:contrast-100 transition-all"
                      />
                    </Link>
                  </div>
                  <div className="mt-8 md:w-1/2">
                    <h1 className="text-4xl font-bold mb-6">{project.name}</h1>
                    <p className="text-xl leading-7 mb-4 text-neutral-600 dark:text-neutral-400">
                      {project.description}
                    </p>
                    <div className="flex flex-row align-bottom space-x-4">
                      <Link href={project.github} target="_blank">
                        <BsGithub
                          size={30}
                          className="hover:-translate-y-1 transition-transform cursor-pointer"
                        />
                      </Link>
                      <Link href={project.link} target="_blank">
                        <BsArrowUpRightSquare
                          size={30}
                          className="hover:-translate-y-1 transition-transform cursor-pointer"
                        />
                      </Link>
                    </div>
                  </div>
                </div>
              {/* </SlideUp> */}
            </div>
          )
        })}

      </div>
    </section>
  )
}

export default ProjectsSection
