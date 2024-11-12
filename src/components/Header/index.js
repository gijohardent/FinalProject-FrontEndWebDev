import React, { useState, useEffect } from "react";
import bg from "../../images/bg.jpg";

export default function Header() {
  const text = "Text Reveal Animation 💫";

  return (
    <div className="relative isolate overflow-hidden bg-gray-100 dark:bg-gray-900 py-32 sm:py-52 ">
      <img
        src={bg}
        className="absolute inset-0 -z-10 h-full w-full object-cover object-right md:object-center"
      ></img>
      <div className="overflow-hidden mx-auto max-w-7xl px-6 lg:px-8">
        <div className="animate-text-reveal [animation-fill-mode:backwards] px-4 mx-auto text-center py-10 lg:py-10">
          <h1 className="font-display font-bold text-pretty text-5xl text-white sm:text-6xl">
            klab.at space
          </h1>
          <p className="font-body text-pretty text-lg font-medium text-gray-200 sm:text-xl">
            a social space - a getaway - a garden
          </p>
        </div>
      </div>
    </div>
  );
}
