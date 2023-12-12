import React from "react";
import { Link } from "react-router-dom";
import "./text.css";

function NavBar() {
  return (
    <div class=" bg-gray-50">
      <header>
        <div class="relative z-20 border-b">
          <div class="px-6 md:px-12 lg:container lg:mx-auto lg:px-6 lg:py-4">
            <div class="flex items-center justify-between">
              <div class="relative z-20">
                <h1 className="fill" data-text="Netixsol">
                  Netixsol
                </h1>
              </div>

              <div class="flex items-center justify-end border-l lg:border-l-0">
                <input
                  type="checkbox"
                  name="hamburger"
                  id="hamburger"
                  class="peer"
                  hidden
                />
                <label
                  for="hamburger"
                  class="peer-checked:hamburger block relative z-20 p-6 -mr-6 cursor-pointer lg:hidden"
                >
                  <div
                    aria-hidden="true"
                    class="m-auto h-0.5 w-6 rounded bg-sky-900 transition duration-300"
                  ></div>
                  <div
                    aria-hidden="true"
                    class="m-auto mt-2 h-0.5 w-6 rounded bg-sky-900 transition duration-300"
                  ></div>
                </label>

                <div class="peer-checked:translate-x-0 fixed inset-0 w-[calc(100%-4.5rem)] translate-x-[-100%]  border-r shadow-xl transition duration-300 lg:border-r-0 lg:w-auto lg:static lg:shadow-none lg:translate-x-0">
                  <div class="flex flex-col h-full justify-between lg:items-center lg:flex-row">
                    <ul class="px-6 pt-32 text-slate-700 space-y-8 md:px-12 lg:space-y-0 lg:flex lg:space-x-12 lg:pt-0 text-xl font-bold">
                      <li>
                        <Link
                          to={"/"}
                          class="group relative before:absolute before:inset-x-0 before:bottom-0 before:h-2 before:origin-right before:scale-x-0 before:bg-cyan-100 before:transition before:duration-200 hover:before:origin-left hover:before:scale-x-100"
                        >
                          <span class="relative group-hover:text-cyan-800">
                            Task Manager
                          </span>
                        </Link>
                      </li>
                    </ul>

                    <div class="border-t py-8 px-6 md:px-12 md:py-16 lg:border-t-0 lg:border-l lg:py-0 lg:pr-0 lg:pl-6">
                      <Link
                        to="/signin"
                        class="block px-6 py-3 rounded-full bg-gradient-to-r from-sky-600 to-cyan-400 text-center text-white"
                      >
                        Login
                      </Link>
                    </div>
                    <div class="border-t py-8 px-6 md:px-12 md:py-16 lg:border-t-0 lg:border-l lg:py-0 lg:pr-0 lg:pl-6">
                      <Link
                        to="/signup"
                        class="block px-6 py-3 rounded-full bg-gradient-to-r from-sky-600 to-cyan-400 text-center text-white"
                      >
                        Register
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}

export default NavBar;
