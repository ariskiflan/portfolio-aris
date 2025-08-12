import { Link } from "react-router";
import ScrollReveal from "scrollreveal";
import { useEffect, useState } from "react";

const Project = () => {
  const [pos, setPos] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    setPos({
      x: e.clientX + window.scrollX,
      y: e.clientY + window.scrollY,
    });
  };

  useEffect(() => {
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
          onMouseMove={handleMouseMove}
          className="font-courier bg-zinc-900 leading-relaxed text-zinc-400 antialiased selection:bg-cyan-300 selection:text-cyan-900 relative"
        >
          <div
            className="pointer-events-none fixed inset-0 z-30 transition duration-300 lg:absolute"
            style={{
              background: `radial-gradient(600px circle at ${pos.x}px ${pos.y}px, rgba(255, 255, 255, 0.06), transparent 80%)`,
            }}
          ></div>

          <div className="mx-auto min-h-screen max-w-[1350px] px-6 py-12 font-sans md:px-12 md:py-20 lg:px-24 lg:py-0">
            <div className="lg:py-24">
              <Link
                className="sr-top group mb-2 inline-flex items-center font-semibold leading-tight text-cyan-300"
                to="/"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="mr-1 h-4 w-4 rotate-[225deg] transition-transform group-hover:-translate-x-2"
                  aria-hidden="true"
                >
                  <path
                    fill-rule="evenodd"
                    d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
                Aris Kiflan Makarim
              </Link>
              <h1 className="sr-bottom text-4xl font-bold tracking-tight text-zinc-200 sm:text-5xl">
                All Projects
              </h1>
              <table
                id="content"
                className="mt-12 w-full border-collapse text-left "
              >
                <thead className="sr-right sticky top-0 z-10 border-b border-zinc-300/10 bg-zinc-900/75 px-6 py-5 backdrop-blur">
                  <tr>
                    <th className="py-4 pr-8 text-sm font-semibold text-zinc-200">
                      Year
                    </th>
                    <th className="py-4 pr-8 text-sm font-semibold text-zinc-200">
                      Project
                    </th>
                    {/* <th className="hidden py-4 pr-8 text-sm font-semibold text-zinc-200 lg:table-cell">
                    Made at
                  </th> */}
                    <th className="hidden py-4 pr-8 text-sm font-semibold text-zinc-200 lg:table-cell">
                      Built with
                    </th>
                    <th className="hidden py-4 pr-8 text-sm font-semibold text-zinc-200 sm:table-cell">
                      Link
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="sr-left border-b border-zinc-300/10 last:border-none">
                    <td className="py-4 pr-4 align-top text-sm">
                      <div className="translate-y-px">2025</div>
                    </td>
                    <td className="py-4 pr-4 align-top font-semibold leading-snug text-zinc-200">
                      <div>
                        <div className="block sm:hidden">
                          <a
                            className="inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-cyan-300 focus-visible:text-cyan-300  sm:hidden group/link text-base"
                            target="_blank"
                            rel="noreferrer noopener"
                            aria-label="Emerson Collective (opens in a new tab)"
                            href="https://github.com/snykk/microservices-library-management"
                          >
                            <span>
                              Portfolio Website
                              <span className="inline-block">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  viewBox="0 0 20 20"
                                  fill="currentColor"
                                  className="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-0.5"
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
                        <div className="hidden sm:block">Portfolio website</div>
                      </div>
                    </td>
                    {/* <td className="hidden py-4 pr-4 align-top text-sm lg:table-cell">
                    <div className="translate-y-px whitespace-nowrap"></div>
                  </td> */}
                    <td className="hidden py-4 pr-4 align-top lg:table-cell">
                      <ul className="flex -translate-y-1.5 flex-wrap">
                        <li className="my-1 mr-1.5">
                          <div className="flex items-center rounded-full bg-cyan-400/10 px-3 py-1 text-xs font-medium leading-5 text-cyan-300 ">
                            React.Js
                          </div>
                        </li>
                        <li className="my-1 mr-1.5">
                          <div className="flex items-center rounded-full bg-cyan-400/10 px-3 py-1 text-xs font-medium leading-5 text-cyan-300 ">
                            Tailwind
                          </div>
                        </li>
                        <li className="my-1 mr-1.5">
                          <div className="flex items-center rounded-full bg-cyan-400/10 px-3 py-1 text-xs font-medium leading-5 text-cyan-300 ">
                            Javascript
                          </div>
                        </li>
                        <li className="my-1 mr-1.5">
                          <div className="flex items-center rounded-full bg-cyan-400/10 px-3 py-1 text-xs font-medium leading-5 text-cyan-300 ">
                            Scrollreveal.Js
                          </div>
                        </li>
                      </ul>
                    </td>
                    <td className="hidden py-4 align-top sm:table-cell">
                      <ul className="translate-y-1">
                        <li className="mb-1 flex items-center">
                          <a
                            className="inline-flex items-baseline font-medium leading-tight  hover:text-cyan-300  text-slate-400  focus-visible:text-cyan-300 group/link text-sm"
                            target="_blank"
                            rel="noreferrer noopener"
                            aria-label="emersoncollective.com (opens in a new tab)"
                            href="https://github.com/ariskiflan/portfolio-aris"
                          >
                            <span>
                              https://github.com/ariskiflan/portfolio-aris
                              <span className="inline-block">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  viewBox="0 0 20 20"
                                  fill="currentColor"
                                  className="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-0.5"
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
                        </li>
                      </ul>
                    </td>
                  </tr>

                  <tr className="sr-right border-b border-zinc-300/10 last:border-none">
                    <td className="py-4 pr-4 align-top text-sm">
                      <div className="translate-y-px">2022</div>
                    </td>
                    <td className="py-4 pr-4 align-top font-semibold leading-snug text-zinc-200">
                      <div>
                        <div className="block sm:hidden">
                          <a
                            className="inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-cyan-300 focus-visible:text-cyan-300  sm:hidden group/link text-base"
                            target="_blank"
                            rel="noreferrer noopener"
                            aria-label="Emerson Collective (opens in a new tab)"
                            href="https://github.com/snykk/microservices-library-management"
                          >
                            <span>
                              Omnifood
                              <span className="inline-block">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  viewBox="0 0 20 20"
                                  fill="currentColor"
                                  className="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-0.5"
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
                        <div className="hidden sm:block">Omnifood</div>
                      </div>
                    </td>
                    {/* <td className="hidden py-4 pr-4 align-top text-sm lg:table-cell">
                    <div className="translate-y-px whitespace-nowrap"></div>
                  </td> */}
                    <td className="hidden py-4 pr-4 align-top lg:table-cell">
                      <ul className="flex -translate-y-1.5 flex-wrap">
                        <li className="my-1 mr-1.5">
                          <div className="flex items-center rounded-full bg-cyan-400/10 px-3 py-1 text-xs font-medium leading-5 text-cyan-300 ">
                            HTML
                          </div>
                        </li>
                        <li className="my-1 mr-1.5">
                          <div className="flex items-center rounded-full bg-cyan-400/10 px-3 py-1 text-xs font-medium leading-5 text-cyan-300 ">
                            CSS
                          </div>
                        </li>
                        <li className="my-1 mr-1.5">
                          <div className="flex items-center rounded-full bg-cyan-400/10 px-3 py-1 text-xs font-medium leading-5 text-cyan-300 ">
                            Javascript
                          </div>
                        </li>
                      </ul>
                    </td>
                    <td className="hidden py-4 align-top sm:table-cell">
                      <ul className="translate-y-1">
                        <li className="mb-1 flex items-center">
                          <a
                            className="inline-flex items-baseline font-medium leading-tight  hover:text-cyan-300  text-slate-400  focus-visible:text-cyan-300 group/link text-sm"
                            target="_blank"
                            rel="noreferrer noopener"
                            aria-label="emersoncollective.com (opens in a new tab)"
                            href="https://omnifood-aris.netlify.app/"
                          >
                            <span>
                              https://omnifood-aris.netlify.app/
                              <span className="inline-block">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  viewBox="0 0 20 20"
                                  fill="currentColor"
                                  className="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-0.5"
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
                        </li>
                      </ul>
                    </td>
                  </tr>

                  <tr className="sr-left border-b border-zinc-300/10 last:border-none">
                    <td className="py-4 pr-4 align-top text-sm">
                      <div className="translate-y-px">2022</div>
                    </td>
                    <td className="py-4 pr-4 align-top font-semibold leading-snug text-zinc-200">
                      <div>
                        <div className="block sm:hidden">
                          <a
                            className="inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-cyan-300 focus-visible:text-cyan-300  sm:hidden group/link text-base"
                            target="_blank"
                            rel="noreferrer noopener"
                            aria-label="Emerson Collective (opens in a new tab)"
                            href="https://github.com/snykk/microservices-library-management"
                          >
                            <span>
                              Holux
                              <span className="inline-block">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  viewBox="0 0 20 20"
                                  fill="currentColor"
                                  className="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-0.5"
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
                        <div className="hidden sm:block">Holux</div>
                      </div>
                    </td>
                    {/* <td className="hidden py-4 pr-4 align-top text-sm lg:table-cell">
                    <div className="translate-y-px whitespace-nowrap"></div>
                  </td> */}
                    <td className="hidden py-4 pr-4 align-top lg:table-cell">
                      <ul className="flex -translate-y-1.5 flex-wrap">
                        <li className="my-1 mr-1.5">
                          <div className="flex items-center rounded-full bg-cyan-400/10 px-3 py-1 text-xs font-medium leading-5 text-cyan-300 ">
                            HTML
                          </div>
                        </li>
                        <li className="my-1 mr-1.5">
                          <div className="flex items-center rounded-full bg-cyan-400/10 px-3 py-1 text-xs font-medium leading-5 text-cyan-300 ">
                            CSS
                          </div>
                        </li>
                        <li className="my-1 mr-1.5">
                          <div className="flex items-center rounded-full bg-cyan-400/10 px-3 py-1 text-xs font-medium leading-5 text-cyan-300 ">
                            Javascript
                          </div>
                        </li>
                      </ul>
                    </td>
                    <td className="hidden py-4 align-top sm:table-cell">
                      <ul className="translate-y-1">
                        <li className="mb-1 flex items-center">
                          <a
                            className="inline-flex items-baseline font-medium leading-tight  hover:text-cyan-300  text-slate-400  focus-visible:text-cyan-300 group/link text-sm"
                            target="_blank"
                            rel="noreferrer noopener"
                            aria-label="emersoncollective.com (opens in a new tab)"
                            href="https://real-state-aris.netlify.app/"
                          >
                            <span>
                              https://real-state-aris.netlify.app/
                              <span className="inline-block">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  viewBox="0 0 20 20"
                                  fill="currentColor"
                                  className="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-0.5"
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
                        </li>
                      </ul>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </body>
    </>
  );
};

export default Project;
