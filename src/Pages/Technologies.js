/*import React from "react";
import { techStackDetails } from "../Details";

function Technologies() {
  const {
    html,
    css,
    js,
    react,
    redux,
    tailwind,
    bootstrap,
    sass,
    vscode,
    git,
    github,
    npm,
    postman,
    figma,
  } = techStackDetails;
  return (
    <main className="container mx-auto max-width pt-10 pb-20 ">
      <section>
        <h1 className="text-2xl text-dark-heading dark:text-light-heading md:text-4xl xl:text-5xl xl:leading-tight font-bold">
          Tech Stack
        </h1>
        <p className="text-content py-2 lg:max-w-3xl">
          Technologies I've been working with recently
        </p>
      </section>
      <section className="grid grid-cols-4 md:grid-cols-5 lg:grid-cols-6 items-center gap-10 pt-6">
        <img src={html} title="html" alt="" />
        <img src={css} title="CSS" alt="" />
        <img src={js} title="JavaScript" alt="" />
        <img src={react} title="React" alt="" />
        <img src={redux} title="Redux" alt="" />
        <img src={tailwind} title="Tailwind CSS" alt="" />
        <img src={bootstrap} title="Bootstrap" alt="" />
        <img src={sass} title="SASS" alt="" />
      </section>
      <section>
        <h1 className="text-2xl pt-10 text-dark-heading dark:text-light-heading md:text-4xl xl:text-5xl xl:leading-tight font-bold">
          Tools
        </h1>
      </section>
      <section className="grid grid-cols-4 md:grid-cols-5 lg:grid-cols-6 items-center gap-10 pt-6">
        <img src={vscode} title="Visual Studio Code" alt="" />
        <img src={git} title="Git" alt="Git" />
        <img src={github} title="Github" alt="Github" />
        <img src={figma} title="Figma" alt="Figma" />
        <img src={npm} title="NPM" alt="NPM" />
        <img src={postman} title="Postman" alt="Postman" />
      </section>
    </main>
  );
}

export default Technologies;*/
import React, { useState } from "react";
import { techStackDetails } from "../Details";

function Technologies() {
  const [activeTab, setActiveTab] = useState("Frontend");

  const tabs = {
    Frontend: [
      { name: "HTML", icon: techStackDetails.html },
      { name: "CSS", icon: techStackDetails.css },
      { name: "JavaScript", icon: techStackDetails.js },
      { name: "React", icon: techStackDetails.react },
      //{ name: "Redux", icon: techStackDetails.redux },
      //{ name: "Tailwind", icon: techStackDetails.tailwind },
      { name: "Bootstrap", icon: techStackDetails.bootstrap },
      //{ name: "SASS", icon: techStackDetails.sass },
    ],
    Backend: [
      { name: "C", icon: techStackDetails.C },
      { name: "Data Structure", icon: techStackDetails.ds },
      { name: "MongoDB", icon: techStackDetails.mongodb },
      { name: "Java", icon: techStackDetails.java },
      { name: "Spring Boot", icon: techStackDetails.springboot },
    ],
    Other: [
      { name: "Git", icon: techStackDetails.git },
      { name: "GitHub", icon: techStackDetails.github },
      //{ name: "Postman", icon: techStackDetails.postman },
      { name: "Spring tool suite", icon: techStackDetails.sts },
      { name: "VSCode", icon: techStackDetails.vscode },
      { name: "NPM", icon: techStackDetails.npm },
    ],
  };

  return (
    <main className="container mx-auto max-width pt-10 pb-20">
      <section>
        <h1 className="text-2xl text-dark-heading dark:text-light-heading md:text-4xl xl:text-5xl font-bold">
          My Skills
        </h1>
        <p className="text-content py-2 lg:max-w-3xl">
          Technologies and tools I work with
        </p>
        <div className="flex gap-4 py-4">
          {Object.keys(tabs).map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-4 py-2 rounded-full font-medium ${
                activeTab === tab
                  ? "bg-orange-500 text-white shadow-md"
                  : "bg-gray-200 text-black"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
      </section>

      <section className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 pt-6">
        {tabs[activeTab].map((skill, index) => (
          <div
            key={index}
            className="bg-gray-50 dark:bg-dark-secondary rounded-lg p-4 shadow flex flex-col items-center"
          >
            <img src={skill.icon} alt={skill.name} className="w-10 h-10 mb-2" />
            <p className="font-medium text-dark-heading dark:text-light-heading">
              {skill.name}
            </p>
          </div>
        ))}
      </section>
    </main>
  );
}

export default Technologies;
