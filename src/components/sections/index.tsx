import { useState } from "react";
import Navigation from "../navigation";
import Contact from "./contact";
import Hero from "./hero";
import Projects from "./projects";
import Services from "./services";

export default function Home() {
   const [openMobileNav, setOpenMobileNav] = useState(false);

   return (
      <>
         <Navigation openMobileNav={openMobileNav} setOpenMobileNav={setOpenMobileNav} />
         <main>
            <Hero />
            <Services />
            <Projects />
         </main>
         <Contact />
      </>
   );
}
