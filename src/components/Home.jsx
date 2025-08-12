import Klaklik from "../assets/img/klaklik.png";
import Movieland from "../assets/img/movieland.png";
import Circle from "../assets/img/circle.png";
import Portfolio from "../assets/img/portfolio.png";
import { Link } from "react-router";
import Js from "../assets/img/js.png";
import ReactJsImg from "../assets/img/react.png";
import HtmlCss from "../assets/img/htmlcss.png";
import DW from "../assets/img/dw.png";

import ScrollReveal from "scrollreveal";
import { useEffect, useState } from "react";

const Home = () => {
  const [activeSection, setActiveSection] = useState("about");

  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        rootMargin: "-50% 0px -50% 0px", // fokus deteksi di tengah layar
        threshold: 0,
      }
    );

    sections.forEach((section) => observer.observe(section));
    return () => sections.forEach((section) => observer.unobserve(section));

    ScrollReveal().reveal(".sr-bottom", {
      duration: 1000,
      origin: "bottom",
      distance: "50px",
      easing: "ease-in-out",
      reset: false, // true kalau mau efek muncul terus saat scroll balik atas
    });

    ScrollReveal().reveal(".sr-right", {
      duration: 1000,
      origin: "right",
      distance: "50px",
      easing: "ease-in-out",
      reset: false, // true kalau mau efek muncul terus saat scroll balik atas
    });

    ScrollReveal().reveal(".sr-top", {
      duration: 1000,
      origin: "top",
      distance: "50px",
      easing: "ease-in-out",
      reset: false, // true kalau mau efek muncul terus saat scroll balik atas
    });

    ScrollReveal().reveal(".sr-left", {
      duration: 1000,
      origin: "left",
      distance: "50px",
      easing: "ease-in-out",
      reset: false, // true kalau mau efek muncul terus saat scroll balik atas
    });
  }, []);

  return (
    <>
      <body className="font-courier bg-zinc-900 leading-relaxed text-zinc-400 antialiased selection:bg-cyan-300 selection:text-cyan-900 relative">
        <div
          className="pointer-events-none fixed inset-0 z-30 transition duration-300 lg:absolute"
          style={{
            background:
              "radial-gradient(600px circle at 0px 0px, rgba(255, 255, 255, 0.06), transparent 80%)",
          }}
        ></div>
        <div className="mx-auto min-h-screen max-w-[1350px] px-6 py-12 font-sans md:px-12 md:py-20 lg:px-24 lg:py-0">
          <div className="lg:flex lg:justify-between lg:gap-4">
            <header className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-[45%] lg:flex-col lg:justify-between lg:py-24">
              <div>
                <h1 className="sr-bottom text-4xl font-bold tracking-tight text-slate-200 sm:text-5xl">
                  <a href="/">
                    <p>Aris Kiflan</p>
                    <p>Makarim</p>
                  </a>
                </h1>
                <h2 className="sr-right mt-3 text-lg font-medium tracking-tight text-slate-200 sm:text-xl">
                  Frontend Developer
                </h2>
                <p className="sr-left mt-4 max-w-xs leading-normal">
                  I am Passionate about Web Development
                </p>

                {/* <nav
                  className="nav hidden lg:block"
                  aria-label="In-page jump links"
                >
                  <ul className="mt-16 w-max">
                    <li>
                      <a
                        className="group flex items-center py-3 active"
                        href="#about"
                      >
                        <span className="nav-indicator mr-4 h-px w-8 bg-slate-600 transition-all group-hover:w-16 group-hover:bg-slate-200 group-focus-visible:w-16 group-focus-visible:bg-slate-200 motion-reduce:transition-none"></span>
                        <span className="sr-bottom nav-text text-xs font-bold uppercase tracking-widest text-slate-500 group-hover:text-slate-200 group-focus-visible:text-slate-200">
                          About
                        </span>
                      </a>
                    </li>
                    <li>
                      <a
                        className="group flex items-center py-3 "
                        href="#experience"
                      >
                        <span className="nav-indicator mr-4 h-px w-8 bg-slate-600 transition-all group-hover:w-16 group-hover:bg-slate-200 group-focus-visible:w-16 group-focus-visible:bg-slate-200 motion-reduce:transition-none"></span>
                        <span className="sr-bottom nav-text text-xs font-bold uppercase tracking-widest text-slate-500 group-hover:text-slate-200 group-focus-visible:text-slate-200">
                          Experience
                        </span>
                      </a>
                    </li>
                    <li>
                      <a
                        className="group flex items-center py-3 "
                        href="#projects"
                      >
                        <span className="nav-indicator mr-4 h-px w-8 bg-slate-600 transition-all group-hover:w-16 group-hover:bg-slate-200 group-focus-visible:w-16 group-focus-visible:bg-slate-200 motion-reduce:transition-none"></span>
                        <span className="sr-bottom nav-text text-xs font-bold uppercase tracking-widest text-slate-500 group-hover:text-slate-200 group-focus-visible:text-slate-200">
                          Projects
                        </span>
                      </a>
                    </li>
                    <li>
                      <a
                        className="group flex items-center py-3 "
                        href="#certificate"
                      >
                        <span className="nav-indicator mr-4 h-px w-8 bg-slate-600 transition-all group-hover:w-16 group-hover:bg-slate-200 group-focus-visible:w-16 group-focus-visible:bg-slate-200 motion-reduce:transition-none"></span>
                        <span className="sr-bottom nav-text text-xs font-bold uppercase tracking-widest text-slate-500 group-hover:text-slate-200 group-focus-visible:text-slate-200">
                          Certificate
                        </span>
                      </a>
                    </li>
                  </ul>
                </nav> */}

                <nav
                  className="nav hidden lg:block"
                  aria-label="In-page jump links"
                >
                  <ul className="mt-16 w-max">
                    <li>
                      <a
                        href="#about"
                        className={`group flex items-center py-3 ${
                          activeSection === "about" ? "active" : ""
                        }`}
                      >
                        <span
                          className={`nav-indicator mr-4 h-px transition-all motion-reduce:transition-none ${
                            activeSection === "about"
                              ? "w-16 bg-slate-200"
                              : "w-8 bg-slate-600 group-hover:w-16 group-hover:bg-slate-200"
                          }`}
                        ></span>
                        <span
                          className={`nav-text text-xs font-bold uppercase tracking-widest ${
                            activeSection === "about"
                              ? "text-slate-200"
                              : "text-slate-500 group-hover:text-slate-200"
                          }`}
                        >
                          About
                        </span>
                      </a>
                    </li>

                    <li>
                      <a
                        href="#experience"
                        className={`group flex items-center py-3 ${
                          activeSection === "experience" ? "active" : ""
                        }`}
                      >
                        <span
                          className={`nav-indicator mr-4 h-px transition-all motion-reduce:transition-none ${
                            activeSection === "experience"
                              ? "w-16 bg-slate-200"
                              : "w-8 bg-slate-600 group-hover:w-16 group-hover:bg-slate-200"
                          }`}
                        ></span>
                        <span
                          className={`nav-text text-xs font-bold uppercase tracking-widest ${
                            activeSection === "experience"
                              ? "text-slate-200"
                              : "text-slate-500 group-hover:text-slate-200"
                          }`}
                        >
                          Experience
                        </span>
                      </a>
                    </li>

                    <li>
                      <a
                        href="#projects"
                        className={`group flex items-center py-3 ${
                          activeSection === "projects" ? "active" : ""
                        }`}
                      >
                        <span
                          className={`nav-indicator mr-4 h-px transition-all motion-reduce:transition-none ${
                            activeSection === "projects"
                              ? "w-16 bg-slate-200"
                              : "w-8 bg-slate-600 group-hover:w-16 group-hover:bg-slate-200"
                          }`}
                        ></span>
                        <span
                          className={`nav-text text-xs font-bold uppercase tracking-widest ${
                            activeSection === "projects"
                              ? "text-slate-200"
                              : "text-slate-500 group-hover:text-slate-200"
                          }`}
                        >
                          Projects
                        </span>
                      </a>
                    </li>

                    <li>
                      <a
                        href="#certificate"
                        className={`group flex items-center py-3 ${
                          activeSection === "certificate" ? "active" : ""
                        }`}
                      >
                        <span
                          className={`nav-indicator mr-4 h-px transition-all motion-reduce:transition-none ${
                            activeSection === "certificate"
                              ? "w-16 bg-slate-200"
                              : "w-8 bg-slate-600 group-hover:w-16 group-hover:bg-slate-200"
                          }`}
                        ></span>
                        <span
                          className={`nav-text text-xs font-bold uppercase tracking-widest ${
                            activeSection === "certificate"
                              ? "text-slate-200"
                              : "text-slate-500 group-hover:text-slate-200"
                          }`}
                        >
                          Certificate
                        </span>
                      </a>
                    </li>
                  </ul>
                </nav>
              </div>
              <ul class="flex items-center mt-8" aria-label="Social media">
                <li class="mr-5 text-xs shrink-0">
                  <a
                    class="block hover:text-zinc-200"
                    target="_blank"
                    rel="noreferrer noopener"
                    aria-label="GitHub"
                    title="GitHub"
                    href="https://github.com/ariskiflan"
                  >
                    <span className="sr-only">GitHub</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 16 16"
                      fill="currentColor"
                      class="h-6 w-6"
                      aria-hidden="true"
                    >
                      <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"></path>
                    </svg>
                  </a>
                </li>
                {/* <li class="mr-5 text-xs shrink-0">
                  <a
                    class="block hover:text-zinc-200"
                    target="_blank"
                    rel="noreferrer noopener"
                    aria-label="Discord"
                    title="Discord"
                    href="https://discordapp.com/users/998541525317332994"
                  >
                    <span class="sr-only">Discord</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 50 50"
                      class="h-6 w-6"
                      fill="currentColor"
                    >
                      <path d="M 41.625 10.769531 C 37.644531 7.566406 31.347656 7.023438 31.078125 7.003906 C 30.660156 6.96875 30.261719 7.203125 30.089844 7.589844 C 30.074219 7.613281 29.9375 7.929688 29.785156 8.421875 C 32.417969 8.867188 35.652344 9.761719 38.578125 11.578125 C 39.046875 11.867188 39.191406 12.484375 38.902344 12.953125 C 38.710938 13.261719 38.386719 13.429688 38.050781 13.429688 C 37.871094 13.429688 37.6875 13.378906 37.523438 13.277344 C 32.492188 10.15625 26.210938 10 25 10 C 23.789063 10 17.503906 10.15625 12.476563 13.277344 C 12.007813 13.570313 11.390625 13.425781 11.101563 12.957031 C 10.808594 12.484375 10.953125 11.871094 11.421875 11.578125 C 14.347656 9.765625 17.582031 8.867188 20.214844 8.425781 C 20.0625 7.929688 19.925781 7.617188 19.914063 7.589844 C 19.738281 7.203125 19.34375 6.960938 18.921875 7.003906 C 18.652344 7.023438 12.355469 7.566406 8.320313 10.8125 C 6.214844 12.761719 2 24.152344 2 34 C 2 34.175781 2.046875 34.34375 2.132813 34.496094 C 5.039063 39.605469 12.972656 40.941406 14.78125 41 C 14.789063 41 14.800781 41 14.8125 41 C 15.132813 41 15.433594 40.847656 15.621094 40.589844 L 17.449219 38.074219 C 12.515625 36.800781 9.996094 34.636719 9.851563 34.507813 C 9.4375 34.144531 9.398438 33.511719 9.765625 33.097656 C 10.128906 32.683594 10.761719 32.644531 11.175781 33.007813 C 11.234375 33.0625 15.875 37 25 37 C 34.140625 37 38.78125 33.046875 38.828125 33.007813 C 39.242188 32.648438 39.871094 32.683594 40.238281 33.101563 C 40.601563 33.515625 40.5625 34.144531 40.148438 34.507813 C 40.003906 34.636719 37.484375 36.800781 32.550781 38.074219 L 34.378906 40.589844 C 34.566406 40.847656 34.867188 41 35.1875 41 C 35.199219 41 35.210938 41 35.21875 41 C 37.027344 40.941406 44.960938 39.605469 47.867188 34.496094 C 47.953125 34.34375 48 34.175781 48 34 C 48 24.152344 43.785156 12.761719 41.625 10.769531 Z M 18.5 30 C 16.566406 30 15 28.210938 15 26 C 15 23.789063 16.566406 22 18.5 22 C 20.433594 22 22 23.789063 22 26 C 22 28.210938 20.433594 30 18.5 30 Z M 31.5 30 C 29.566406 30 28 28.210938 28 26 C 28 23.789063 29.566406 22 31.5 22 C 33.433594 22 35 23.789063 35 26 C 35 28.210938 33.433594 30 31.5 30 Z"></path>
                    </svg>
                  </a>
                </li> */}
                <li class="mr-5 text-xs shrink-0">
                  <a
                    class="block hover:text-zinc-200"
                    target="_blank"
                    rel="noreferrer noopener"
                    aria-label="LinkedIn"
                    title="LinkedIn"
                    href="https://www.linkedin.com/in/ariskiflanm/"
                  >
                    <span class="sr-only">LinkedIn</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      class="h-6 w-6"
                      aria-hidden="true"
                    >
                      <path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19a.66.66 0 000 .14V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z"></path>
                    </svg>
                  </a>
                </li>
                <li class="mr-5 text-xs shrink-0">
                  <a
                    class="block hover:text-zinc-200"
                    target="_blank"
                    rel="noreferrer noopener"
                    aria-label="Gmail"
                    title="Gmail"
                    href="mailto:ariskiflan98@gmail.com"
                  >
                    <span class="sr-only">Gmail</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="h-6 w-6"
                      fill="currentColor"
                      viewBox="0 0 50 50"
                    >
                      <path d="M12 23.403V23.39 10.389L11.88 10.3h-.01L9.14 8.28C7.47 7.04 5.09 7.1 3.61 8.56 2.62 9.54 2 10.9 2 12.41v3.602L12 23.403zM38 23.39v.013l10-7.391V12.41c0-1.49-.6-2.85-1.58-3.83-1.46-1.457-3.765-1.628-5.424-.403L38.12 10.3 38 10.389V23.39zM14 24.868l10.406 7.692c.353.261.836.261 1.189 0L36 24.868V11.867L25 20l-11-8.133V24.868zM38 25.889V41c0 .552.448 1 1 1h6.5c1.381 0 2.5-1.119 2.5-2.5V18.497L38 25.889zM12 25.889L2 18.497V39.5C2 40.881 3.119 42 4.5 42H11c.552 0 1-.448 1-1V25.889z"></path>
                    </svg>
                  </a>
                </li>
                {/* <li class="mr-5 text-xs shrink-0">
                  <a
                    class="block hover:text-zinc-200"
                    target="_blank"
                    rel="noreferrer noopener"
                    aria-label="Telegram"
                    title="Telegram"
                    href="https://t.me/itsme_snykk"
                  >
                    <span class="sr-only">Telegram</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="h-6 w-6"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M 20.302734 2.984375 C 20.013769 2.996945 19.748583 3.080055 19.515625 3.171875 C 19.300407 3.256634 18.52754 3.5814726 17.296875 4.0976562 C 16.06621 4.61384 14.435476 5.2982348 12.697266 6.0292969 C 9.2208449 7.4914211 5.314238 9.1361259 3.3125 9.9785156 C 3.243759 10.007156 2.9645852 10.092621 2.65625 10.328125 C 2.3471996 10.564176 2.0039062 11.076462 2.0039062 11.636719 C 2.0039062 12.088671 2.2295201 12.548966 2.5019531 12.8125 C 2.7743861 13.076034 3.0504903 13.199244 3.28125 13.291016 C 3.9563403 13.559857 6.0424892 14.392968 6.9492188 14.755859 C 7.2668647 15.707799 8.0129251 17.950071 8.1875 18.501953 L 8.1855469 18.501953 C 8.3275588 18.951162 8.4659791 19.243913 8.6582031 19.488281 C 8.7543151 19.610465 8.8690398 19.721184 9.0097656 19.808594 C 9.0637596 19.842134 9.1235454 19.868148 9.1835938 19.892578 C 9.191962 19.896131 9.2005867 19.897012 9.2089844 19.900391 L 9.1855469 19.894531 C 9.2029579 19.901531 9.2185841 19.911859 9.2363281 19.917969 C 9.2652427 19.927926 9.2852873 19.927599 9.3242188 19.935547 C 9.4612233 19.977694 9.5979794 20.005859 9.7246094 20.005859 C 10.26822 20.005859 10.601562 19.710938 10.601562 19.710938 L 10.623047 19.695312 L 12.970703 17.708984 L 15.845703 20.367188 C 15.897113 20.439837 16.308174 20.998047 17.261719 20.998047 C 17.829844 20.998047 18.280978 20.718791 18.568359 20.423828 C 18.855741 20.128866 19.034757 19.82706 19.115234 19.417969 L 19.115234 19.414062 L 19.115234 19.412109 C 19.171124 19.121728 21.931641 5.265625 21.931641 5.265625 L 21.925781 5.2890625 C 22.01148 4.9067181 22.036735 4.5369631 21.935547 4.1601562 C 21.834358 3.7833495 21.561271 3.4156252 21.232422 3.2226562 C 20.903572 3.0296874 20.591699 2.9718046 20.302734 2.984375 z M 19.908203 5.1738281 C 19.799749 5.7182284 17.343164 18.059965 17.183594 18.878906 L 14.328125 16.240234 C 13.59209 15.559749 12.44438 15.535812 11.679688 16.181641 L 10.222656 17.414062 L 11 14.375 C 11 14.375 16.362547 8.9468594 16.685547 8.6308594 C 16.945547 8.3778594 17 8.2891719 17 8.2011719 C 17 8.0841719 16.939781 8 16.800781 8 C 16.675781 8 16.506016 8.1197812 16.416016 8.1757812 C 15.267511 8.8918132 10.350132 11.694224 7.96875 13.048828 C 7.8792978 12.995267 7.7913128 12.939666 7.6933594 12.900391 C 6.9119785 12.587666 5.4101276 11.985551 4.53125 11.634766 C 6.6055146 10.76177 10.161156 9.2658083 13.472656 7.8730469 C 15.210571 7.142109 16.840822 6.4570977 18.070312 5.9414062 C 19.108158 5.5060977 19.649538 5.2807035 19.908203 5.1738281 z M 17.152344 19.023438 C 17.152344 19.023438 17.154297 19.023438 17.154297 19.023438 C 17.154234 19.023761 17.152444 19.03095 17.152344 19.03125 C 17.154024 19.022709 17.151187 19.029588 17.152344 19.023438 z"></path>
                    </svg>
                  </a>
                </li> */}
                <li class="mr-5 text-xs shrink-0">
                  <a
                    class="block hover:text-zinc-200"
                    target="_blank"
                    rel="noreferrer noopener"
                    aria-label="Instagram"
                    title="Instagram"
                    href="https://www.instagram.com/arskflnm/"
                  >
                    <span class="sr-only">Instagram</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 1000 1000"
                      fill="currentColor"
                      class="h-6 w-6"
                      aria-hidden="true"
                    >
                      <path d="M295.42,6c-53.2,2.51-89.53,11-121.29,23.48-32.87,12.81-60.73,30-88.45,57.82S40.89,143,28.17,175.92c-12.31,31.83-20.65,68.19-23,121.42S2.3,367.68,2.56,503.46,3.42,656.26,6,709.6c2.54,53.19,11,89.51,23.48,121.28,12.83,32.87,30,60.72,57.83,88.45S143,964.09,176,976.83c31.8,12.29,68.17,20.67,121.39,23s70.35,2.87,206.09,2.61,152.83-.86,206.16-3.39S799.1,988,830.88,975.58c32.87-12.86,60.74-30,88.45-57.84S964.1,862,976.81,829.06c12.32-31.8,20.69-68.17,23-121.35,2.33-53.37,2.88-70.41,2.62-206.17s-.87-152.78-3.4-206.1-11-89.53-23.47-121.32c-12.85-32.87-30-60.7-57.82-88.45S862,40.87,829.07,28.19c-31.82-12.31-68.17-20.7-121.39-23S637.33,2.3,501.54,2.56,348.75,3.4,295.42,6m5.84,903.88c-48.75-2.12-75.22-10.22-92.86-17-23.36-9-40-19.88-57.58-37.29s-28.38-34.11-37.5-57.42c-6.85-17.64-15.1-44.08-17.38-92.83-2.48-52.69-3-68.51-3.29-202s.22-149.29,2.53-202c2.08-48.71,10.23-75.21,17-92.84,9-23.39,19.84-40,37.29-57.57s34.1-28.39,57.43-37.51c17.62-6.88,44.06-15.06,92.79-17.38,52.73-2.5,68.53-3,202-3.29s149.31.21,202.06,2.53c48.71,2.12,75.22,10.19,92.83,17,23.37,9,40,19.81,57.57,37.29s28.4,34.07,37.52,57.45c6.89,17.57,15.07,44,17.37,92.76,2.51,52.73,3.08,68.54,3.32,202s-.23,149.31-2.54,202c-2.13,48.75-10.21,75.23-17,92.89-9,23.35-19.85,40-37.31,57.56s-34.09,28.38-57.43,37.5c-17.6,6.87-44.07,15.07-92.76,17.39-52.73,2.48-68.53,3-202.05,3.29s-149.27-.25-202-2.53m407.6-674.61a60,60,0,1,0,59.88-60.1,60,60,0,0,0-59.88,60.1M245.77,503c.28,141.8,115.44,256.49,257.21,256.22S759.52,643.8,759.25,502,643.79,245.48,502,245.76,245.5,361.22,245.77,503m90.06-.18a166.67,166.67,0,1,1,167,166.34,166.65,166.65,0,0,1-167-166.34"></path>
                    </svg>
                  </a>
                </li>
              </ul>
            </header>

            <main className="pt-24 lg:w-[55%] lg:py-24" id="content">
              <section
                id="about"
                className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
              >
                <div class="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-zinc-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
                  <h2 class="sr-top text-lg font-bold uppercase tracking-widest text-zinc-200 lg:sr-only">
                    About
                  </h2>
                </div>

                <div>
                  <p class="sr-right mb-4">
                    Passionate Frontend Developer with 1+ year of professional
                    experience and a Bachelor’s Degree in Computer Science.
                    Graduate of PT Dumbways Indonesia Teknologi Fullstack
                    Developer Bootcamp with expertise in JavaScript, TypeScript,
                    and modern web frameworks. Skilled in building clean,
                    user-friendly, and high-performance interfaces. Adaptive to
                    new technologies, experienced in cross-functional
                    collaboration, and capable of working independently or in a
                    team environment.
                  </p>

                  <p className="sr-left">
                    I am currently seeking opportunities to leverage my skills
                    in a dynamic and innovative company. If you are looking for
                    a dedicated and skilled Frontend Developer, please don't
                    hesitate to reach me out.
                  </p>

                  <p className="sr-right">
                    Here are a few technologies I’ve been working with recently:
                  </p>

                  <ul class="sr-left grid grid-cols-2 gap-x-1 gap-y-0 p-0 mt-2 list-none overflow-hidden max-w-sm lg:max-w-md">
                    <li class="relative pl-[30px] before:content-['▹'] before:absolute before:left-0 before:text-green-200">
                      Javascript
                    </li>
                    <li class="relative pl-[30px] before:content-['▹'] before:absolute before:left-0 before:text-green-200">
                      Typescript
                    </li>
                    <li class="relative pl-[30px] before:content-['▹'] before:absolute before:left-0 before:text-green-200">
                      React.Js
                    </li>
                    <li class="relative pl-[30px] before:content-['▹'] before:absolute before:left-0 before:text-green-200">
                      Vue.Js
                    </li>
                    <li class="relative pl-[30px] before:content-['▹'] before:absolute before:left-0 before:text-green-200">
                      Tailwind
                    </li>
                    <li class="relative pl-[30px] before:content-['▹'] before:absolute before:left-0 before:text-green-200">
                      Git
                    </li>
                  </ul>
                </div>
              </section>

              <section
                id="experience"
                className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
              >
                <div class="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-zinc-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
                  <h2 class="sr-top text-lg font-bold uppercase tracking-widest text-zinc-200 lg:sr-only">
                    Experience
                  </h2>
                </div>

                <div>
                  <ol class="group/list">
                    <li class="sr-right mb-12">
                      <div class="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
                        <div class="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-zinc-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>
                        <header
                          class="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-zinc-500 sm:col-span-2"
                          aria-label="2024 to Present"
                        >
                          Sep 2024 - Sep 2025
                        </header>
                        <div class="z-10 sm:col-span-6 space-y-1">
                          <h3 class="font-medium leading-snug text-zinc-200">
                            Frontend Developer
                          </h3>
                          <div class="font-semibold text-sm leading-snug text-zinc-300">
                            <span>PT. MNC Pictures (Klaklik)</span>
                            <span> - </span>
                            <span>Contract</span>
                          </div>
                          <div class="mt-2">
                            <ul class="p-0 m-0 list-none">
                              <li class="relative pl-[30px] mb-[5px] before:content-['▹'] before:absolute before:left-0 before:text-green-200">
                                Maintaining and developing new features for
                                Klaklik, an e-novel and e-comic platform, as
                                well as Klaklik Dashboard, a platform for
                                creators to publish their comics and novels.
                              </li>
                              <li class="relative pl-[30px] mb-[5px] before:content-['▹'] before:absolute before:left-0 before:text-green-200">
                                Developing and integrating the eBook+ feature on
                                RCTI+, adapting it from Klaklik.
                              </li>
                              <li class="relative pl-[30px] mb-[5px] before:content-['▹'] before:absolute before:left-0 before:text-green-200">
                                Ensuring application stability and security
                                through regular maintenance and debugging while
                                optimizing performance and UI/UX to enhance user
                                experience.
                              </li>
                            </ul>
                          </div>
                          <ul
                            class="mt-2 flex flex-wrap justify-end"
                            aria-label="Technologies used"
                          >
                            <li class="mr-1.5 mt-2">
                              <div class="flex items-center rounded-full bg-cyan-400/10 px-3 py-1 text-xs font-medium leading-5 text-cyan-300">
                                Vue.Js
                              </div>
                            </li>
                            <li class="mr-1.5 mt-2">
                              <div class="flex items-center rounded-full bg-cyan-400/10 px-3 py-1 text-xs font-medium leading-5 text-cyan-300">
                                Vuex
                              </div>
                            </li>
                            <li class="mr-1.5 mt-2">
                              <div class="flex items-center rounded-full bg-cyan-400/10 px-3 py-1 text-xs font-medium leading-5 text-cyan-300">
                                Javascript
                              </div>
                            </li>
                            <li class="mr-1.5 mt-2">
                              <div class="flex items-center rounded-full bg-cyan-400/10 px-3 py-1 text-xs font-medium leading-5 text-cyan-300">
                                Css
                              </div>
                            </li>
                            <li class="mr-1.5 mt-2">
                              <div class="flex items-center rounded-full bg-cyan-400/10 px-3 py-1 text-xs font-medium leading-5 text-cyan-300">
                                Firebase
                              </div>
                            </li>
                            <li class="mr-1.5 mt-2">
                              <div class="flex items-center rounded-full bg-cyan-400/10 px-3 py-1 text-xs font-medium leading-5 text-cyan-300">
                                Hls.Js
                              </div>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </li>

                    <li class="sr-left mb-12">
                      <div class="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
                        <div class="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-zinc-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>
                        <header
                          class="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-zinc-500 sm:col-span-2"
                          aria-label="2024 to Present"
                        >
                          Mar 2022 - Mar 2022
                        </header>
                        <div class="z-10 sm:col-span-6 space-y-1">
                          <h3 class="font-medium leading-snug text-zinc-200">
                            Programmer Internship
                          </h3>
                          <div class="font-semibold text-sm leading-snug text-zinc-300">
                            <span>Mie Ayam MasBro</span>
                            <span> - </span>
                            <span>Internship</span>
                          </div>
                          <div class="mt-2">
                            <ul class="p-0 m-0 list-none">
                              <li class="relative pl-[30px] mb-[5px] before:content-['▹'] before:absolute before:left-0 before:text-green-200">
                                Designed and developed user interface for
                                dekstop applications using NetBeans and Java
                                GUI.
                              </li>
                              <li class="relative pl-[30px] mb-[5px] before:content-['▹'] before:absolute before:left-0 before:text-green-200">
                                Create monthly dining table booking report using
                                IReport plugin.
                              </li>
                              <li class="relative pl-[30px] mb-[5px] before:content-['▹'] before:absolute before:left-0 before:text-green-200">
                                Create a dining table booking database in my
                                SQL.
                              </li>
                            </ul>
                          </div>
                          <ul
                            class="mt-2 flex flex-wrap justify-end"
                            aria-label="Technologies used"
                          >
                            <li class="mr-1.5 mt-2">
                              <div class="flex items-center rounded-full bg-cyan-400/10 px-3 py-1 text-xs font-medium leading-5 text-cyan-300">
                                Java
                              </div>
                            </li>
                            <li class="mr-1.5 mt-2">
                              <div class="flex items-center rounded-full bg-cyan-400/10 px-3 py-1 text-xs font-medium leading-5 text-cyan-300">
                                Netbeans
                              </div>
                            </li>
                            <li class="mr-1.5 mt-2">
                              <div class="flex items-center rounded-full bg-cyan-400/10 px-3 py-1 text-xs font-medium leading-5 text-cyan-300">
                                MySql
                              </div>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </li>
                  </ol>

                  <div className="sr-top mt-12">
                    <a
                      className="inline-flex items-baseline leading-tight text-zinc-200 hover:text-cyan-300 focus-visible:text-cyan-300 font-semibold group/link text-base"
                      target="_blank"
                      rel="noreferrer noopener"
                      aria-label="View Full Résumé (opens in a new tab)"
                      href="/resume.pdf"
                    >
                      <span>
                        View Full Résumé
                        <span class="inline-block">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            class="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px"
                            aria-hidden="true"
                          >
                            <path
                              fill-rule="evenodd"
                              d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
                              clip-rule="evenodd"
                            ></path>
                          </svg>
                        </span>
                      </span>
                    </a>
                  </div>
                </div>
              </section>

              <section
                id="projects"
                className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
              >
                <div class="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-zinc-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
                  <h2 class="sr-top text-lg font-bold uppercase tracking-widest text-zinc-200 lg:sr-only">
                    Projects
                  </h2>
                </div>

                <div>
                  <ul className="group/list">
                    <li className="sr-right mb-12">
                      <div className="group relative grid gap-4 pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
                        <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-zinc-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>

                        <div class="z-10 sm:order-2 sm:col-span-6">
                          <h3>
                            <a
                              class="inline-flex items-baseline font-medium leading-tight text-zinc-200 hover:text-cyan-300 focus-visible:text-cyan-300  group/link text-base"
                              target="_blank"
                              rel="noreferrer noopener"
                              aria-label="Build a Microservices Library Management (opens in a new tab)"
                              href="https://www.klaklik.com/"
                            >
                              <span class="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span>
                              <span>
                                Klaklik
                                <span class="inline-block">
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                    class="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px"
                                    aria-hidden="true"
                                  >
                                    <path
                                      fill-rule="evenodd"
                                      d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
                                      clip-rule="evenodd"
                                    ></path>
                                  </svg>
                                </span>
                              </span>
                            </a>
                          </h3>
                          <p class="mt-2 text-sm leading-normal">
                            An application that provides fiction content in the
                            form of eNovels and eComics across various genres.
                          </p>
                          {/* <div class="relative mt-2 inline-flex items-center text-sm font-medium text-zinc-300 hover:text-cyan-300 focus-visible:text-cyan-300 space-x-3">
                        <div class="inline-flex items-center">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            class="mr-1 h-3 w-3"
                            aria-hidden="true"
                          >
                            <path
                              fill-rule="evenodd"
                              d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z"
                              clip-rule="evenodd"
                            ></path>
                          </svg>
                          <span>1</span>
                        </div>
                        <div class="inline-flex items-center">
                          <svg
                            aria-hidden="true"
                            viewBox="0 0 16 16"
                            version="1.1"
                            data-view-component="true"
                            class="mr-1 h-3 w-3"
                            fill="currentColor"
                          >
                            <path d="M5 5.372v.878c0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75v-.878a2.25 2.25 0 1 1 1.5 0v.878a2.25 2.25 0 0 1-2.25 2.25h-1.5v2.128a2.251 2.251 0 1 1-1.5 0V8.5h-1.5A2.25 2.25 0 0 1 3.5 6.25v-.878a2.25 2.25 0 1 1 1.5 0ZM5 3.25a.75.75 0 1 0-1.5 0 .75.75 0 0 0 1.5 0Zm6.75.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm-3 8.75a.75.75 0 1 0-1.5 0 .75.75 0 0 0 1.5 0Z"></path>
                          </svg>
                          <span>0</span>
                        </div>
                      </div> */}
                          <ul
                            class="mt-2 flex flex-wrap"
                            aria-label="Technologies used:"
                          >
                            <li class="mr-1.5 mt-2">
                              <div class="flex items-center rounded-full bg-cyan-400/10 px-3 py-1 text-xs font-medium leading-5 text-cyan-300">
                                Javascript
                              </div>
                            </li>
                            <li class="mr-1.5 mt-2">
                              <div class="flex items-center rounded-full bg-cyan-400/10 px-3 py-1 text-xs font-medium leading-5 text-cyan-300">
                                Vue.Js
                              </div>
                            </li>
                            <li class="mr-1.5 mt-2">
                              <div class="flex items-center rounded-full bg-cyan-400/10 px-3 py-1 text-xs font-medium leading-5 text-cyan-300">
                                Css
                              </div>
                            </li>
                            <li class="mr-1.5 mt-2">
                              <div class="flex items-center rounded-full bg-cyan-400/10 px-3 py-1 text-xs font-medium leading-5 text-cyan-300">
                                Vuex
                              </div>
                            </li>
                            <li class="mr-1.5 mt-2">
                              <div class="flex items-center rounded-full bg-cyan-400/10 px-3 py-1 text-xs font-medium leading-5 text-cyan-300">
                                Hls.Js
                              </div>
                            </li>
                          </ul>
                        </div>

                        <img
                          alt="Snapshot Klaklik"
                          loading="lazy"
                          width="200"
                          height="48"
                          decoding="async"
                          data-nimg="1"
                          className="rounded border-2 border-zinc-200/10 transition group-hover:border-zinc-200/30 sm:order-1 sm:col-span-2 sm:translate-y-1"
                          src={Klaklik}
                          style={{ color: "transparent" }}
                        />
                      </div>
                    </li>

                    <li className="sr-left mb-12">
                      <div className="group relative grid gap-4 pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
                        <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-zinc-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>

                        <div class="z-10 sm:order-2 sm:col-span-6">
                          <h3>
                            <a
                              class="inline-flex items-baseline font-medium leading-tight text-zinc-200 hover:text-cyan-300 focus-visible:text-cyan-300  group/link text-base"
                              target="_blank"
                              rel="noreferrer noopener"
                              aria-label="Build a Microservices Library Management (opens in a new tab)"
                              href="https://test.movielandlido.com/"
                            >
                              <span class="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span>
                              <span>
                                MNC Movieland
                                <span class="inline-block">
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                    class="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px"
                                    aria-hidden="true"
                                  >
                                    <path
                                      fill-rule="evenodd"
                                      d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
                                      clip-rule="evenodd"
                                    ></path>
                                  </svg>
                                </span>
                              </span>
                            </a>
                          </h3>
                          <p class="mt-2 text-sm leading-normal">
                            Movieland is one of the Special Economic Zones (SEZ)
                            of the Creative Economy Hub located in MNC Lido
                            City, Bogor. This area serves as the largest film
                            and television series production center in Southeast
                            Asia, integrated with various facilities and
                            equipment of international standards.
                          </p>

                          <ul
                            class="mt-2 flex flex-wrap"
                            aria-label="Technologies used:"
                          >
                            <li class="mr-1.5 mt-2">
                              <div class="flex items-center rounded-full bg-cyan-400/10 px-3 py-1 text-xs font-medium leading-5 text-cyan-300">
                                Html
                              </div>
                            </li>
                            <li class="mr-1.5 mt-2">
                              <div class="flex items-center rounded-full bg-cyan-400/10 px-3 py-1 text-xs font-medium leading-5 text-cyan-300">
                                Css
                              </div>
                            </li>
                            <li class="mr-1.5 mt-2">
                              <div class="flex items-center rounded-full bg-cyan-400/10 px-3 py-1 text-xs font-medium leading-5 text-cyan-300">
                                Javascript
                              </div>
                            </li>
                            <li class="mr-1.5 mt-2">
                              <div class="flex items-center rounded-full bg-cyan-400/10 px-3 py-1 text-xs font-medium leading-5 text-cyan-300">
                                Blade
                              </div>
                            </li>
                            <li class="mr-1.5 mt-2">
                              <div class="flex items-center rounded-full bg-cyan-400/10 px-3 py-1 text-xs font-medium leading-5 text-cyan-300">
                                PHP
                              </div>
                            </li>
                          </ul>
                        </div>

                        <img
                          alt="Snapshot Movieland"
                          loading="lazy"
                          width="200"
                          height="48"
                          decoding="async"
                          data-nimg="1"
                          className="rounded border-2 border-zinc-200/10 transition group-hover:border-zinc-200/30 sm:order-1 sm:col-span-2 sm:translate-y-1"
                          src={Movieland}
                          style={{ color: "transparent" }}
                        />
                      </div>
                    </li>

                    {/* <li className="mb-12">
                      <div className="group relative grid gap-4 pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
                        <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-zinc-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>

                        <div class="z-10 sm:order-2 sm:col-span-6">
                          <h3>
                            <a
                              class="inline-flex items-baseline font-medium leading-tight text-zinc-200 hover:text-cyan-300 focus-visible:text-cyan-300  group/link text-base"
                              target="_blank"
                              rel="noreferrer noopener"
                              aria-label="Build a Microservices Library Management (opens in a new tab)"
                              href="https://github.com/ariskiflan/portfolio-aris"
                            >
                              <span class="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span>
                              <span>
                                Portfolio Website
                                <span class="inline-block">
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                    class="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px"
                                    aria-hidden="true"
                                  >
                                    <path
                                      fill-rule="evenodd"
                                      d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
                                      clip-rule="evenodd"
                                    ></path>
                                  </svg>
                                </span>
                              </span>
                            </a>
                          </h3>
                          <p class="mt-2 text-sm leading-normal">
                            Portfolio Website build with React.Js, and Tailwind.
                          </p>

                          <ul
                            class="mt-2 flex flex-wrap"
                            aria-label="Technologies used:"
                          >
                            <li class="mr-1.5 mt-2">
                              <div class="flex items-center rounded-full bg-cyan-400/10 px-3 py-1 text-xs font-medium leading-5 text-cyan-300">
                                React.Js
                              </div>
                            </li>
                            <li class="mr-1.5 mt-2">
                              <div class="flex items-center rounded-full bg-cyan-400/10 px-3 py-1 text-xs font-medium leading-5 text-cyan-300">
                                Tailwind
                              </div>
                            </li>
                          </ul>
                        </div>

                        <img
                          alt="Snapshot Movieland"
                          loading="lazy"
                          width="200"
                          height="48"
                          decoding="async"
                          data-nimg="1"
                          className="rounded border-2 border-zinc-200/10 transition group-hover:border-zinc-200/30 sm:order-1 sm:col-span-2 sm:translate-y-1"
                          src={Portfolio}
                          style={{ color: "transparent" }}
                        />
                      </div>
                    </li> */}

                    <li className="sr-right mb-12">
                      <div className="group relative grid gap-4 pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
                        <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-zinc-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>

                        <div class="z-10 sm:order-2 sm:col-span-6">
                          <h3>
                            <a
                              class="inline-flex items-baseline font-medium leading-tight text-zinc-200 hover:text-cyan-300 focus-visible:text-cyan-300  group/link text-base"
                              target="_blank"
                              rel="noreferrer noopener"
                              aria-label="Build a Microservices Library Management (opens in a new tab)"
                              href="https://github.com/ariskiflan/fe-thread-app"
                            >
                              <span class="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span>
                              <span>
                                Circle App
                                <span class="inline-block">
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                    class="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px"
                                    aria-hidden="true"
                                  >
                                    <path
                                      fill-rule="evenodd"
                                      d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
                                      clip-rule="evenodd"
                                    ></path>
                                  </svg>
                                </span>
                              </span>
                            </a>
                          </h3>
                          <p class="mt-2 text-sm leading-normal">
                            Circle App is a web-based social media application
                            inspired by Twitter. It is built with React,
                            Express, and styled using Chakra UI. Circle App
                            allows users to easily share updates, connect with
                            others, upload images and text, and follow their
                            favorite accounts. users can also engage in
                            interaction by likes, comments, and replying to
                            posts.
                          </p>

                          <ul
                            class="mt-2 flex flex-wrap"
                            aria-label="Technologies used:"
                          >
                            <li class="mr-1.5 mt-2">
                              <div class="flex items-center rounded-full bg-cyan-400/10 px-3 py-1 text-xs font-medium leading-5 text-cyan-300">
                                React.js
                              </div>
                            </li>
                            <li class="mr-1.5 mt-2">
                              <div class="flex items-center rounded-full bg-cyan-400/10 px-3 py-1 text-xs font-medium leading-5 text-cyan-300">
                                Typescript
                              </div>
                            </li>
                            <li class="mr-1.5 mt-2">
                              <div class="flex items-center rounded-full bg-cyan-400/10 px-3 py-1 text-xs font-medium leading-5 text-cyan-300">
                                Redux
                              </div>
                            </li>
                            <li class="mr-1.5 mt-2">
                              <div class="flex items-center rounded-full bg-cyan-400/10 px-3 py-1 text-xs font-medium leading-5 text-cyan-300">
                                Chakra UI
                              </div>
                            </li>
                            <li class="mr-1.5 mt-2">
                              <div class="flex items-center rounded-full bg-cyan-400/10 px-3 py-1 text-xs font-medium leading-5 text-cyan-300">
                                Express.Js
                              </div>
                            </li>
                            <li class="mr-1.5 mt-2">
                              <div class="flex items-center rounded-full bg-cyan-400/10 px-3 py-1 text-xs font-medium leading-5 text-cyan-300">
                                Prisma
                              </div>
                            </li>
                            <li class="mr-1.5 mt-2">
                              <div class="flex items-center rounded-full bg-cyan-400/10 px-3 py-1 text-xs font-medium leading-5 text-cyan-300">
                                Postgre SQL
                              </div>
                            </li>
                          </ul>
                        </div>

                        <img
                          alt="Snapshot Circle App"
                          loading="lazy"
                          width="200"
                          height="48"
                          decoding="async"
                          data-nimg="1"
                          className="rounded border-2 border-zinc-200/10 transition group-hover:border-zinc-200/30 sm:order-1 sm:col-span-2 sm:translate-y-1"
                          src={Circle}
                          style={{ color: "transparent" }}
                        />
                      </div>
                    </li>
                  </ul>

                  <div className="sr-top mt-12">
                    <Link
                      className="inline-flex items-center leading-tight text-zinc-200 font-semibold group"
                      aria-label="View Full Project Archive"
                      to="/project"
                    >
                      <span>
                        <span class="border-b border-transparent pb-px transition group-hover:border-cyan-300 motion-reduce:transition-none">
                          View Full Project Archive
                        </span>
                        <span class="whitespace-nowrap">
                          <span class="border-b border-transparent pb-px transition group-hover:border-cyan-300 motion-reduce:transition-none"></span>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            class="ml-1 inline-block h-4 w-4 rotate-[45deg] shrink-0 -translate-y-px transition-transform group-hover:translate-x-2 group-focus-visible:translate-x-2 motion-reduce:transition-none"
                            aria-hidden="true"
                          >
                            <path
                              fill-rule="evenodd"
                              d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
                              clip-rule="evenodd"
                            ></path>
                          </svg>
                        </span>
                      </span>
                    </Link>
                  </div>
                </div>
              </section>

              <section
                id="certificate"
                class="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
                aria-label="Blog posts"
              >
                <div class="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-zinc-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
                  <h2 class="sr-top text-lg font-bold uppercase tracking-widest text-zinc-200 lg:sr-only">
                    Certificate
                  </h2>
                </div>

                <div>
                  <ul className="group/list">
                    <li class="sr-right mb-12">
                      <div class="group relative grid grid-cols-8 gap-4 transition-all sm:items-center sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
                        <div class="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-zinc-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>
                        <img
                          alt="Accessibility icon"
                          loading="lazy"
                          width="200"
                          height="48"
                          decoding="async"
                          data-nimg="1"
                          class="aspect-video z-10 col-span-2 rounded border-2 border-slate-200/10 transition group-hover:border-slate-200/30 sm:col-span-2"
                          style={{ color: "transparent" }}
                          src={ReactJsImg}
                        />
                        <div class="z-10 col-span-6">
                          <p class="-mt-1 text-sm font-semibold leading-6">
                            2024
                          </p>
                          <h3 class="-mt-1">
                            <a
                              class="inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-teal-300 focus-visible:text-teal-300  group/link text-base"
                              href="/certificate-reactjs-udemy.pdf"
                              target="_blank"
                              rel="noreferrer noopener"
                              aria-label="5 Common Accessibility Pitfalls and How to Avoid Them (opens in a new tab)"
                            >
                              <span class="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span>
                              <span>
                                <span class="inline-block">
                                  React - The Completed Guide 2024 (Incl.
                                  Next.Js, Redux)
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                    class="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px"
                                    aria-hidden="true"
                                  >
                                    <path
                                      fill-rule="evenodd"
                                      d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
                                      clip-rule="evenodd"
                                    ></path>
                                  </svg>
                                </span>
                              </span>
                            </a>
                          </h3>
                        </div>
                      </div>
                    </li>

                    <li class="sr-left mb-12">
                      <div class="group relative grid grid-cols-8 gap-4 transition-all sm:items-center sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
                        <div class="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-zinc-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>
                        <img
                          alt="Accessibility icon"
                          loading="lazy"
                          width="200"
                          height="48"
                          decoding="async"
                          data-nimg="1"
                          class="aspect-video z-10 col-span-2 rounded border-2 border-slate-200/10 transition group-hover:border-slate-200/30 sm:col-span-2"
                          style={{ color: "transparent" }}
                          src={DW}
                        />
                        <div class="z-10 col-span-6">
                          <p class="-mt-1 text-sm font-semibold leading-6">
                            2024
                          </p>
                          <h3 class="-mt-1">
                            <a
                              class="inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-teal-300 focus-visible:text-teal-300  group/link text-base"
                              href="/certificate-dumbways.pdf"
                              target="_blank"
                              rel="noreferrer noopener"
                              aria-label="5 Common Accessibility Pitfalls and How to Avoid Them (opens in a new tab)"
                            >
                              <span class="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span>
                              <span>
                                <span class="inline-block">
                                  Fullstack Developer Bootcamp By PT. Dumbways
                                  Indonesia Teknologi
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                    class="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px"
                                    aria-hidden="true"
                                  >
                                    <path
                                      fill-rule="evenodd"
                                      d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
                                      clip-rule="evenodd"
                                    ></path>
                                  </svg>
                                </span>
                              </span>
                            </a>
                          </h3>
                        </div>
                      </div>
                    </li>

                    <li class="sr-right mb-12">
                      <div class="group relative grid grid-cols-8 gap-4 transition-all sm:items-center sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
                        <div class="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-zinc-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>
                        <img
                          alt="Accessibility icon"
                          loading="lazy"
                          width="200"
                          height="48"
                          decoding="async"
                          data-nimg="1"
                          class="aspect-video z-10 col-span-2 rounded border-2 border-slate-200/10 transition group-hover:border-slate-200/30 sm:col-span-2"
                          style={{ color: "transparent" }}
                          src={Js}
                        />
                        <div class="z-10 col-span-6">
                          <p class="-mt-1 text-sm font-semibold leading-6">
                            2024
                          </p>
                          <h3 class="-mt-1">
                            <a
                              class="inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-teal-300 focus-visible:text-teal-300  group/link text-base"
                              href="/certificate-javascript-udemy.pdf"
                              target="_blank"
                              rel="noreferrer noopener"
                              aria-label="5 Common Accessibility Pitfalls and How to Avoid Them (opens in a new tab)"
                            >
                              <span class="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span>
                              <span>
                                <span class="inline-block">
                                  The Completed Javascript Course 2024: From
                                  Zero to Expert!
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                    class="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px"
                                    aria-hidden="true"
                                  >
                                    <path
                                      fill-rule="evenodd"
                                      d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
                                      clip-rule="evenodd"
                                    ></path>
                                  </svg>
                                </span>
                              </span>
                            </a>
                          </h3>
                        </div>
                      </div>
                    </li>

                    <li class="sr-left mb-12">
                      <div class="group relative grid grid-cols-8 gap-4 transition-all sm:items-center sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
                        <div class="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-zinc-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>
                        <img
                          alt="Accessibility icon"
                          loading="lazy"
                          width="200"
                          height="48"
                          decoding="async"
                          data-nimg="1"
                          class="aspect-video z-10 col-span-2 rounded border-2 border-slate-200/10 transition group-hover:border-slate-200/30 sm:col-span-2"
                          style={{ color: "transparent" }}
                          src={HtmlCss}
                        />
                        <div class="z-10 col-span-6">
                          <p class="-mt-1 text-sm font-semibold leading-6">
                            2023
                          </p>
                          <h3 class="-mt-1">
                            <a
                              class="inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-teal-300 focus-visible:text-teal-300  group/link text-base"
                              href="/certificate-html-css-udemy.pdf"
                              target="_blank"
                              rel="noreferrer noopener"
                              aria-label="5 Common Accessibility Pitfalls and How to Avoid Them (opens in a new tab)"
                            >
                              <span class="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span>
                              <span>
                                <span class="inline-block">
                                  Build responsive Real-word Websites With HTML
                                  And CSS
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                    class="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px"
                                    aria-hidden="true"
                                  >
                                    <path
                                      fill-rule="evenodd"
                                      d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
                                      clip-rule="evenodd"
                                    ></path>
                                  </svg>
                                </span>
                              </span>
                            </a>
                          </h3>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </section>

              <section>
                <div className="sr-bottom scroll-pt-10 lg:scroll-pt-24 text-sm">
                  <div className="relative transition-all opacity-100 text-zinc-300">
                    <div className="absolute -inset-x-4 -inset-y-4 z-0  rounded-lg transition motion-reduce:transition-none  block bg-black/20 shadow-[inset_0_1px_0_0_rgba(rgba(160, 188, 227, 1))] drop-shadow-xl"></div>
                    <p className="before:content-['“'] before:text-cyan-400 before:text-2xl before:mr-1 after:content-['”'] after:text-cyan-400 after:text-2xl after:ml-1">
                      Is there anything I can assist you with? My inbox and
                      social media are always open—please don’t hesitate to
                      reach out. I'll do my best.
                    </p>
                  </div>
                </div>

                <div className="text-center space-y-4 my-16 lg:my-20">
                  <p className="sr-top text-gray text-xs md:text-sm">
                    warm greetings from me:
                  </p>
                  <h3 className="sr-bottom font-great-vibes text-2xl md:text-3xl lg:text-4xl inline-block border-b border-primary">
                    ArisKiflan
                  </h3>
                </div>

                <footer className="sr-bottom max-w-lg pb-16 text-sm text-zinc-500 sm:pb-0">
                  <p>
                    Inspired by{" "}
                    <a
                      className="font-bold text-highlight hover:text-cyan-300 focus-visible:text-cyan-300"
                      target="_blank"
                      rel="noreferrer noopener"
                      aria-label="advertising agency (opens in a new tab)"
                      href="https://brittanychiang.com/"
                    >
                      Brittany Chiang's Website
                    </a>
                    . Loosely designed in{" "}
                    <a
                      className="font-bold text-highlight hover:text-cyan-300 focus-visible:text-cyan-300"
                      target="_blank"
                      rel="noreferrer noopener"
                      aria-label="advertising agency (opens in a new tab)"
                      href="https://www.figma.com/"
                    >
                      Figma
                    </a>{" "}
                    and coded in{" "}
                    <a
                      className="font-bold text-highlight hover:text-cyan-300 focus-visible:text-cyan-300"
                      target="_blank"
                      rel="noreferrer noopener"
                      aria-label="advertising agency (opens in a new tab)"
                      href="https://code.visualstudio.com/"
                    >
                      Visual Studio Code
                    </a>
                    . Built with{" "}
                    <a
                      className="font-bold text-highlight hover:text-cyan-300 focus-visible:text-cyan-300"
                      target="_blank"
                      rel="noreferrer noopener"
                      aria-label="advertising agency (opens in a new tab)"
                      href="https://react.dev/blog/2023/03/16/introducing-react-dev"
                    >
                      React.js
                    </a>{" "}
                    and{" "}
                    <a
                      className="font-bold text-highlight hover:text-cyan-300 focus-visible:text-cyan-300"
                      target="_blank"
                      rel="noreferrer noopener"
                      aria-label="advertising agency (opens in a new tab)"
                      href="https://tailwindcss.com/"
                    >
                      Tailwind CSS
                    </a>
                    , deployed with{" "}
                    <a
                      className="font-bold text-highlight hover:text-cyan-300 focus-visible:text-cyan-300"
                      target="_blank"
                      rel="noreferrer noopener"
                      aria-label="advertising agency (opens in a new tab)"
                      href="https://www.netlify.com/"
                    >
                      Netlify
                    </a>
                  </p>
                </footer>
              </section>
            </main>
          </div>
        </div>
      </body>
    </>
  );
};

export default Home;
