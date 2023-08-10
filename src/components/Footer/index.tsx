import React from "react";
import "./footer.scss";

const Footer = () => {
  return (
    <footer className="dark:bg-primary1 bg-primary2 pt-20 mg dark:border-secondary1 border-secondary2 border-b-[20px] w-full">
      <div className="hidden lg:flex justify-center gap-x-5">
        <a
          href="https://www.github.com/sabiqpras?tab=repositories"
          target="_blank"
          rel="noreferrer noopener"
          title="GitHub"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            className="fill-primary1 dark:fill-primary2"
          >
            <path
              className="fill-primary1 dark:fill-primary2"
              d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"
            ></path>
          </svg>
        </a>
        <a
          href="https://www.linkedin.com/in/muhammad-sabiq-umar-prasetyo/"
          title="LinkedIn"
          target="_blank"
          rel="noreferrer noopener"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            className="fill-primary1 dark:fill-primary2"
          >
            <path
              className="fill-primary1 dark:fill-primary2"
              d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286h-.001ZM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065Zm1.782 13.019H3.555V9h3.564v11.452ZM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003Z"
            ></path>
          </svg>
        </a>
      </div>
      <div className="bg-primary1 dark:bg-primary2 text-center w-[90%] mt-[1%] mx-auto mb-[1%] border-none">
        {/* <hr /> */}
        <div className="bg-primary2 dark:bg-primary1 border-none outline-none">
          <p>
            © 2023 | Made with{" "}
            <a
              href="https://github.com/sabiqpras/sabiqprasetyo-webpage"
              title="Love"
              target="_blank"
              rel="noreferrer noopener"
              className="hover:text-secondary2 dark:hover:text-secondary1"
            >
              ♥
            </a>{" "}
            <span className="font-medium">Sabiq Prasetyo</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
