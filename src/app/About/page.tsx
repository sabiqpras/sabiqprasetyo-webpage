import "../../components/style/customAnimation.scss";

export default function About() {
  return (
    <div>
      <section id="aboutMe" className="overflow-hidden">
        <div className="flex justify-center enterBouncingAM1">
          <img
            className="dark:hidden object-cover object-center h-[880px]"
            src="/image/academylight.png"
            alt="school"
          />
          <img
            className="hidden dark:block object-cover object-center h-[880px]"
            src="/image/academydark.png"
            alt="school"
          />
        </div>
        <div className="relative z-[4] -mt-[499px]">
          <div className={`bg-[url('/image/skills_bg.png')] w-full h-[900px] bg-cover enterSlapAM`}>
            <h1 className="enterBouncingAM2 font-Expose text-6xl text-center text-primary2 absolute -top-28 sm:-top-14 md:-top-12 lg:-top-9 xl:-top-1 left-0 right-0 mx-auto">
              Get to Know Me Better!
            </h1>
            <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-5 md:gap-y-14 pt-24 sm:pt-28 md:pt-48 lg:pt-56 xl:pt-72 px-3">
              <div className=" text-primary2 flex flex-col items-center">
                <h2 className="font-Expose text-5xl md:text-6xl text-center">Web Frontend</h2>
                <p className="font-Hatty text-lg md:text-xl text-center">ReactJS and NextJs</p>
              </div>
              <div className="text-primary2 flex flex-col items-center">
                <h2 className="font-Expose text-5xl md:text-6xl text-center">Web Backend</h2>
                <p className="font-Hatty text-lg md:text-xl text-center">ExpressJS and NextJS</p>
              </div>

              <div className="text-primary2 flex flex-col items-center">
                <h2 className="font-Expose text-5xl md:text-6xl text-center">Web Styling</h2>
                <p className="font-Hatty text-lg md:text-xl text-center">
                  TailwindCSS, Sass, MaterialUI, ChakraUI, AntDesign
                </p>
              </div>

              <div className="text-primary2 flex flex-col items-center">
                <h2 className="font-Expose text-5xl md:text-6xl text-center">Database</h2>
                <p className="font-Hatty text-lg md:text-xl text-center">
                  PostgreSQL and MongoDB &#40;Non SQL&#41;
                </p>
              </div>

              <div className="text-primary2 flex flex-col items-center">
                <h2 className="font-Expose text-5xl md:text-6xl text-center">Development tools</h2>
                <p className="font-Hatty ttext-lg md:text-xl text-center">Git, GitHub, and Notion</p>
              </div>

              <div className="text-primary2 flex flex-col items-center">
                <h2 className="font-Expose text-5xl md:text-6xl text-center">Languages</h2>
                <p className="font-Hatty text-lg md:text-xl text-center">English and Indonesia</p>
              </div>
            </div>
            <div className="w-full flex justify-center mt-8 md:mt-12 lg:mt-24 xl:mt-32 ringing">
              <a
                href="https://drive.google.com/file/d/1gYIqAISpieiKxfUDTBhHqNPFDoRGUZju/view?usp=drive_link"
                title="Download Sabiq's Resume"
                target="_blank"
                rel="noreferrer noopener"
              >
                <h2 className="dark:bg-primary1 bg-primary2 px-4 py-2 font-Expose text-5xl">
                  Download Resume
                </h2>
              </a>
            </div>
          </div>
        </div>
        <div className="relative -z-[5] -mt-48">
          <img
            className="dark:hidden object-cover object-center h-64 w-full"
            src="/image/section-bglight.jpg"
            alt="school"
          />
          <img
            className="hidden dark:block object-cover object-center h-64 w-full"
            src="/image/section-bg.jpg"
            alt="school"
          />
        </div>
      </section>
    </div>
  );
}
