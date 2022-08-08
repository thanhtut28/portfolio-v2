import { useState } from "react";
import Navigation from "../navigation";
import Hero from "./hero";
import Projects from "./projects";
import Services from "./services";

export default function Home() {
   const [openMobileNav, setOpenMobileNav] = useState(false);

   return (
      <>
         <Navigation openMobileNav={openMobileNav} setOpenMobileNav={setOpenMobileNav} />

         <Hero />
         <Services />
         <Projects />
      </>
   );
}
