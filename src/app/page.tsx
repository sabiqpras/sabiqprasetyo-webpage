import { Hero, Skills, Touch } from "@/components";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Home() {
  return (
    <main>
      <Hero />
      <Skills />
      <Touch />
    </main>
  );
}
