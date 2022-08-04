import About from "../about";
import Landing from "../landing";

const HeroSection: React.FC = () => {
   return (
      <section className="p-10 bg-pattern-image">
         <div className="max-w-screen-2xl mx-auto">
            <Landing />
            <About />
         </div>
      </section>
   );
};

export default HeroSection;
