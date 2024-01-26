import About from "@/components/home/About";
import CompanyBenefits from "@/components/home/CompanyBenefits";
import HelpAndDonate from "@/components/home/HelpAndDonate";
import HelpNow from "@/components/home/HelpNow";
import HelpingHand from "@/components/home/HelpingHand";
import Hero from "@/components/home/Hero";
import LatestNews from "@/components/home/LatestNews";
import Testimonials from "@/components/home/Testimonials";
import UpcomingEvents from "@/components/home/UpcomingEvents";
import WhoWeAre from "@/components/home/WhoWeAre";

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <HelpAndDonate />
      <CompanyBenefits />
      <WhoWeAre />
      {/* <UpcomingEvents /> */}
      <Testimonials />
      {/* <HelpingHand /> */}
      {/* <HelpNow /> */}
      <LatestNews />
    </main>
  );
}
