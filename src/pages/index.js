import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";

import heart from "../images/heart.png"
import alien from "../images/alien.png"
import leaf from "../images/leaf.png"
import bird from "../images/bird.png"


function IndexPage() {
  return (
    <Layout>
      <SEO
        keywords={[`gatsby`, `tailwind`, `react`, `tailwindcss`]}
        title="Home"
      />

      <section className="transform -rotate-45 text-center w-full">

<div className="grid grid-cols-3 grid-rows-4 gap-1">
  <div></div>
  <div className="bg-red-600"></div>
  <div></div>

  <div></div>
  <div className="bg-red-600">
  <img
          alt="A Heart"
          className="mx-auto"
          src={heart}
        />
  </div>
  <div></div>

  <div className="bg-red-600">
  <img
          alt="An Bird"
          className="mx-auto"
          src={bird}
        />
  </div>
  <div className="bg-red-600">        <img
          alt="An Alien"
          className="mx-auto"
          src={alien}
        /></div>
  <div className="bg-red-600">
  <img
          alt="An Leaf"
          className="mx-auto"
          src={leaf}
        />
  </div>

  <div></div>
  <div className="bg-red-600"></div>
  <div></div>
</div>
      </section>
      
    </Layout>
  );
}

export default IndexPage;
