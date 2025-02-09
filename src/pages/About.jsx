import React from "react";
import MainImage from "../images/avatar2.png";

function About() {
  return (
    <section
      id="about"
      className="flex lg:flex-row flex-col items-center justify-evenly px-44 min-h-[75vh] bg-orange-200 py-7"
    >
      <div className="w-[250px] mb-5 lg:mb-0">
        <img src={MainImage} alt={MainImage} className="w-full rounded-lg" />
      </div>
      <div className="lg:w-[600px] md:w-[500px] w-[300px] md:mb-5 mb-5 lg:mb-0">
        <h4 className="mb-4 lg:mb-5 text-center lg:text-left text-[#333] font-extrabold relative lg:text-3xl text-2xl lg:w-fit tracking-wider after:absolute lg:after:w-1/2 after:h-[6px] after:bg-orange-500 after:-bottom-2 after:left-0 after:rounded-md">
          About Me
        </h4>
        <h1 className="mb-4 text-white font-bold text-3xl text-center lg:text-left lg:text-5xl tracking-wide">
          I'm Frontend Developer
        </h1>
        <p className="leading-[1.5] text-center tracking-wide lg:text-justify text-[#414141] text-[18px]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
          posuere mauris nec vulputate rutrum. Donec molestie augue ut ante
          tincidunt egestas. Proin velit dolor, lacinia eu pellentesque ut,
          cursus ac enim. Mauris vitae purus turpis. Pellentesque molestie, ante
          ac eleifend lobortis, felis tellus elementum ligula, ut commodo odio
          ante nec nisl. Orci varius natoque penatibus et magnis dis parturient
          montes, nascetur ridiculus mus. Donec tincidunt est erat, sed
          hendrerit quam mollis id. Vestibulum eu imperdiet libero.
        </p>
      </div>
    </section>
  );
}

export default About;
