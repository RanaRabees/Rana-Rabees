import AboutSection from "@/src/app/components/AboutSection"
import HeroSection from "@/src/app/components/HeroSection"
import ProjectsSection from "@/src/app/components/ProjectsSection"
import Contact from "./components/Contact"
import { sql } from "@vercel/postgres";
import { db, usersTable } from "../lib/drizzle";

export default async function Home() {
  const { rows } = await sql`SELECT * from users`;

  return (
    <main className="mx-auto max-w-3xl px-4 sm:px-6 md:max-w-5xl ">
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
      {rows.map((row) => (
        <div key={row.id} className="flex flex-col">
          <p className="bold font-semibold">Email : {row.email}</p>
          <p className="font-base">Password : {row.password}</p>
        </div>
      ))}
      <Contact />
    </main>
  )
}
