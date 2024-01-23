import React from "react";
import { Outlet } from "react-router-dom";

function About() {
  return (
    <div>
      <h1>This is the about page</h1>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum ullam laborum
      cumque laboriosam eius explicabo ratione rem consectetur commodi sint
      consequatur, recusandae accusamus. Corrupti quam voluptatem assumenda
      laudantium illum quidem! Tempore quo incidunt sapiente blanditiis
      accusantium est. Pariatur rerum ex itaque neque. Modi asperiores eius vel
      perferendis itaque voluptatibus alias! Voluptatum sint modi facere itaque
      ipsa libero tenetur deserunt rem.
      <Outlet />
    </div>
  );
}

export default About;
