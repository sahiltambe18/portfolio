import {
  About,
  Tech,
  Navbar,
  Hero,
  Works,
  Feedbacks,
  Contact,
} from "../components";

export default function Home() {
  return (
    <div className="relative z-0 bg-primary">
      <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
        <Navbar />
        <Hero />
      </div>
      <About />
      <Tech />
      <Works />
      <Feedbacks />
      <div className="relative z-0">
        <Contact />
      </div>
    </div>
  );
}
