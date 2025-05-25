import React, { useState, useEffect } from "react";
import { backend, frontend, tools } from "../assets/assets.js";

function useIsLargeScreen() {
  const [isLarge, setIsLarge] = useState(window.innerWidth >= 1024);
  useEffect(() => {
    const onResize = () => setIsLarge(window.innerWidth >= 1024);
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);
  return isLarge;
}

function Skills() {
  const [activeTab, setActiveTab] = useState("frontend");

  const isLargeScreen = useIsLargeScreen();

  return (
    <section
      id="skills"
      className="lg:min-h-[90vh] sm:min-h-auto px-44 py-12 flex flex-col items-center justify-center"
    >
      <h1 className="text-[orange] text-center mb-24 relative text-3xl font-bold after:absolute after:w-[62px] after:h-[5px] after:bg-[orange] after:-bottom-[6px] lg:after:right-3 after:right-28 after:rounded-custom-tow after:transform after:rotate-[-3deg] tracking-wide w-[300px] lg:w-fit">
        My Skills
      </h1>
      <div className="flex flex-col items-center justify-center">
        <div className="flex gap-5 mb-10">
          <button
            onClick={() => setActiveTab("frontend")}
            className={`lg:text-lg font-medium rounded-md text-gray-700 hover:bg-orange-200 lg:px-6 px-5 lg:py-3 py-2 cursor-pointer ${
              activeTab === "frontend" ? "border border-orange-300" : ""
            }`}
          >
            <span>Frontend</span>
          </button>
          <button
            onClick={() => setActiveTab("backend")}
            className={`lg:text-lg font-medium rounded-md text-gray-700 hover:bg-orange-200 lg:px-6 px-5 lg:py-3 py-2 cursor-pointer ${
              activeTab === "backend" ? "border border-orange-300" : ""
            }`}
          >
            <span>Backend</span>
          </button>
          <button
            onClick={() => setActiveTab("tools")}
            className={`lg:text-lg font-medium rounded-md text-gray-700 hover:bg-orange-200 lg:px-6 px-5 lg:py-3 py-2 cursor-pointer ${
              activeTab === "tools" ? "border border-orange-300" : ""
            }`}
          >
            <span>Tools</span>
          </button>
        </div>

        {/* Tab content */}
        {activeTab === "frontend" && (
          <div>
            <div className="grid grid-cols-3 grid-rows-7 lg:grid-cols-5 lg:grid-rows-4 gap-1 mt-10">
              {frontend.map(
                ({
                  id,
                  name,
                  icon,
                  color,
                  colStarting,
                  rowStarting,
                  colStart,
                  rowStart,
                }) => {
                  const Icon = icon;

                  return (
                    <div
                      key={id}
                      style={{
                        gridColumnStart: isLargeScreen ? colStart : colStarting,
                        gridColumnEnd:
                          (isLargeScreen ? colStart : colStarting) + 1,
                        gridRowStart: isLargeScreen ? rowStart : rowStarting,
                        gridRowEnd:
                          (isLargeScreen ? rowStart : rowStarting) + 1,
                      }}
                      className="flex items-center justify-center lg:gap-3 gap-2 lg:text-xl text-sm bg-orange-200 lg:px-4 px-1 py-2 rounded-md"
                    >
                      <Icon className={color} />
                      <span className="text-gray-700">{name}</span>
                    </div>
                  );
                }
              )}
            </div>
          </div>
        )}

        {activeTab === "backend" && (
          <div>
            <div className="grid grid-cols-3 gap-1 mt-10">
              {backend.map(({ id, icon, name, color, colStart, rowStart }) => {
                const Icon = icon;

                return (
                  <div
                    key={id}
                    style={{
                      gridColumnStart: colStart,
                      gridColumnEnd: colStart + 1,
                      gridRowStart: rowStart,
                      gridRowEnd: rowStart + 1,
                    }}
                    className="flex items-center justify-center lg:gap-3 gap-2 lg:text-xl text-sm bg-orange-200 lg:px-4 px-2 py-2 rounded-md"
                  >
                    <Icon className={color} />
                    <span className="text-gray-700">{name}</span>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {activeTab === "tools" && (
          <div>
            <div className="grid grid-cols-3 gap-1 mt-10">
              {tools.map(({ id, icon, name, color, colStart, rowStart }) => {
                const Icon = icon;

                return (
                  <div
                    key={id}
                    style={{
                      gridColumnStart: colStart,
                      gridColumnEnd: colStart + 1,
                      gridRowStart: rowStart,
                      gridRowEnd: rowStart + 1,
                    }}
                    className="flex items-center justify-center lg:gap-3 gap-2 lg:text-xl text-sm bg-orange-200 lg:px-4 px-2 py-2 rounded-md"
                  >
                    <Icon className={color} />
                    <span className="text-gray-700">{name}</span>
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

export default Skills;
