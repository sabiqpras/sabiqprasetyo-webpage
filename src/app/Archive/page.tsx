import "../../components/style/customAnimation.scss";
export default function About() {
  return (
    <section id="archive" className=" overflow-hidden">
      <div
        className={`bg-[url('/image/section-bglight.jpg')] dark:bg-[url('/image/section-bg.jpg')] bg-cover px-6 py-5`}
      >
        <div className="enterSlapAR dark:bg-primary1 bg-primary2 h-full border-primary1 dark:border-primary2 border-2 py-3 px-6">
          <h1 className="enterBouncingAR font-Expose text-6xl text-center">Check out My Projects!</h1>
          <div className="mt-8 flex flex-col gap-y-4">
            <div className="dark:bg-primary2 bg-primary1 text-primary2 dark:text-primary1 px-10 py-5">
              <div className="md:flex md:justify-between">
                <div>
                  <h2 className="font-Optima text-xl">Poso Insurance Landing Page</h2>
                  <p>ReactJS, TailwindCSS</p>
                </div>
                <div className="flex justify-between font-Expose mt-5 text-2xl text-primary1 dark:text-primary2 md:gap-x-4">
                  <a
                    href="https://github.com/sabiqpras/poso"
                    target="_blank"
                    rel="noreferrer noopener"
                    title="Code"
                  >
                    <p className="dark:bg-primary1 bg-primary2 px-3">Code</p>
                  </a>
                  <a
                    href="https://poso.vercel.app/"
                    target="_blank"
                    rel="noreferrer noopener"
                    title="Live Demo"
                  >
                    <p className="dark:bg-primary1 bg-primary2 px-3">Live Demo</p>
                  </a>
                </div>
              </div>
            </div>
            <div className="dark:bg-primary2 bg-primary1 text-primary2 dark:text-primary1 px-10 py-5">
              <div className="md:flex md:justify-between">
                <div>
                  <h2 className="font-Optima text-xl">Secrets App with Authentication</h2>
                  <p>EJS, Vanilla CSS, Bootstrap, ExpressJS, Bcrypt, Passport, Mongoose</p>
                </div>
                <div className="flex justify-between font-Expose mt-5 text-2xl text-primary1 dark:text-primary2 md:gap-x-4">
                  <a
                    href="https://github.com/sabiqpras/secrets-app-with-authentication"
                    target="_blank"
                    rel="noreferrer noopener"
                    title="Code"
                  >
                    <p className="dark:bg-primary1 bg-primary2 px-3">Code</p>
                  </a>
                </div>
              </div>
            </div>
            <div className="dark:bg-primary2 bg-primary1 text-primary2 dark:text-primary1 px-10 py-5">
              <div className="md:flex md:justify-between">
                <div>
                  <h2 className="font-Optima text-xl">My To Do List with Database</h2>
                  <p>EJS, VanillaCSS, ExpressJS, Mongoose</p>
                </div>
                <div className="flex justify-between font-Expose mt-5 text-2xl text-primary1 dark:text-primary2 md:gap-x-4">
                  <a
                    href="https://github.com/sabiqpras/my-to-do-list"
                    target="_blank"
                    rel="noreferrer noopener"
                    title="Code"
                  >
                    <p className="dark:bg-primary1 bg-primary2 px-3">Code</p>
                  </a>
                  <a
                    href="https://pear-lonely-jay.cyclic.app/"
                    target="_blank"
                    rel="noreferrer noopener"
                    title="Live Demo"
                  >
                    <p className="dark:bg-primary1 bg-primary2 px-3">Live Demo</p>
                  </a>
                </div>
              </div>
            </div>
            <div className="dark:bg-primary2 bg-primary1 text-primary2 dark:text-primary1 px-10 py-5">
              <div className="md:flex md:justify-between">
                <div>
                  <h2 className="font-Optima text-xl">Adidas Newsletter with Mailchimp</h2>
                  <p>Vanilla Javascriot, Vanilla CSS, ExpressJS, Mailchimp API</p>
                </div>
                <div className="flex justify-between font-Expose mt-5 text-2xl text-primary1 dark:text-primary2 md:gap-x-4">
                  <a
                    href="https://github.com/sabiqpras/not-adidas-newsletter"
                    target="_blank"
                    rel="noreferrer noopener"
                    title="Code"
                  >
                    <p className="dark:bg-primary1 bg-primary2 px-3">Code</p>
                  </a>
                </div>
              </div>
            </div>
            <div className="dark:bg-primary2 bg-primary1 text-primary2 dark:text-primary1 px-10 py-5">
              <div className="md:flex md:justify-between">
                <div>
                  <h2 className="font-Optima text-xl">Simon Says Game</h2>
                  <p>Vanilla Javascript, Vanilla CSS</p>
                </div>
                <div className="flex justify-between font-Expose mt-5 text-2xl text-primary1 dark:text-primary2 md:gap-x-4">
                  <a
                    href="https://github.com/sabiqpras/simon-game"
                    target="_blank"
                    rel="noreferrer noopener"
                    title="Code"
                  >
                    <p className="dark:bg-primary1 bg-primary2 px-3">Code</p>
                  </a>
                  <a
                    href="https://simon-game-nine-rho.vercel.app/"
                    target="_blank"
                    rel="noreferrer noopener"
                    title="Live Demo"
                  >
                    <p className="dark:bg-primary1 bg-primary2 px-3">Live Demo</p>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
