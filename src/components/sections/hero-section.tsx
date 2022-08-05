import About from "../about";
import Landing from "../landing";
import Wrapper from "../wrapper";

const HeroSection: React.FC = () => {
   return (
      <section className="p-10 bg-pattern-image">
         <Wrapper>
            <Landing />
            <About />
         </Wrapper>
      </section>
   );
};

export default HeroSection;
