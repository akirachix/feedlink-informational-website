
import TeamSection from "./components/Team";
import BuiltSection from "./components/Explore";
import FAQ from "./components/FAQ";
import Contacts from "./components/Contacts";
import HeroSection from "./components/Hero";
import ImpactSection from "./components/Impacts";
export default function Home() {
  return (
    <div>
        <HeroSection />
        <ImpactSection />
       <BuiltSection/>
       <TeamSection/>
        <FAQ/>
      <Contacts/>
      
    </div>
 

  );
}


