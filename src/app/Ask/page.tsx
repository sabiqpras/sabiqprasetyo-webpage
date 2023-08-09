import { GreetingBox } from "@/components";
import "../../components/style/customAnimation.scss";
export default function About() {
  return (
    <section className="overflow-hidden">
      <div className={`bg-[url('/image/askbg.jpg')] bg-cover h-screen relative`}>
        <div className="relative w-full h-full">
          <div
            className={`absolute top-0 bottom-0 my-auto bg-[url('/image/contactbglight.png')] dark:bg-[url('/image/contactbg.png')] w-screen h-screen bg-cover`}
          >
            <div className="h-full flex flex-col justify-center items-center md:items-end pb-16">
              <div className="w-full md:w-[450px] lg:w-[600px] xl:w-[900px] md:pt-24 lg:pt-36 ">
                <h1 className="font-Expose text-center text-primary2 text-5xl md:text-6xl enterBouncingAS1">
                  Contact Me!
                </h1>
                <GreetingBox
                  style="text-primary2 font-Optima text-md md:text-lg"
                  content="Feel free to reach out to me if you have any questions, suggestions, or just want to say hello! I'm always excited to connect with new people."
                />
                <a href="mailto:sabiqprasetyo1989@gmail.com?subject=Business%20Topic&body=Hello%2C%20I've%20visited%20your%20webpage%20and%20I'd%20like%20to...">
                  <h2 className="font-Expose text-center text-4xl md:text-5xl text-primary2 ringing">
                    <span className="xl:hover:bg-primary1">Email Me!</span>
                  </h2>
                </a>
              </div>
            </div>
          </div>
        </div>
        <img
          className="absolute z-[4] bottom-0 w-44 sm:w-[210px] md:w-[320px] lg:w-[430px] hidden dark:block enterSlapAS"
          src="/image/phone.png"
          alt=""
        />
        <img
          className="absolute z-[4] bottom-0 w-44 sm:w-[210px] md:w-[320px] lg:w-[430px] dark:hidden enterSlapAS"
          src="/image/phonelight.png"
          alt=""
        />
      </div>
    </section>
  );
}
