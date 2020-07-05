import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";
import ReactPlayer from 'react-player'

// import heart from "../images/heart.png"
// import alien from "../images/alien.png"
// import leaf from "../images/leaf.png"
// import bird from "../images/bird.png"
import comingsoon from "../images/comingsoon.png"
import facebook from "../images/facebook.png"
import instagram from "../images/instagram.png"
import whichtouch from "../videos/which-touch-do-we-feel-when-we-can-no-longer-touch.mp4"
import whichtouchthumb from "../images/whichtouch-thumb.png"

function IndexPage() {
  return (
    <Layout>
      <SEO
        keywords={[`gatsby`, `tailwind`, `react`, `tailwindcss`]}
        title="Home"
      />

<section className="flex flex-wrap items-center justify-around">
<img
          alt="Luv 'til it Hurts is coming soon!"
          src={comingsoon}
        />
</section>
<section className="flex flex-wrap items-center justify-around max-w-2xl p-4 mx-auto md:p-8">
  
<div className="flex flex-wrap items-center justify-around w-1/2"> 
<a href="https://www.facebook.com/luvtilithurts/"  ><img
          alt="Luv 'til it Hurts on Facebook"
          src={facebook}
        />
        </a>

<a href="https://www.instagram.com/luvtilithurts" >
<img
          alt="Luv 'til it Hurts on Instagram"
          src={instagram}
        />
        </a></div>
</section>
<section className="flex flex-col items-center">
<ReactPlayer url={whichtouch} light={whichtouchthumb} controls playing width={840} height={480}/>
<div className="w-9/12 text-white">Alberto Pereira Jr., “Which touch do we feel when we can no longer touch?”, video-performance produced for “Luv ‘til It Hurts: Experiences from Egypt & Brazil”, featured in the HIV2020 online exhibition </div>
</section>


      {/* <section className="transform -rotate-45 text-center w-full">
        <div className="grid grid-cols-3 grid-rows-4 gap-1">
          <div></div>
          <div className="bg-red-600"></div>
          <div></div>

          <div></div>
          <div className="bg-red-600">
            <img alt="A Heart" className="mx-auto" src={heart} />
          </div>
          <div></div>

          <div className="bg-red-600">
            <img alt="An Bird" className="mx-auto" src={bird} />
          </div>
          <div className="bg-red-600">
            {" "}
            <img alt="An Alien" className="mx-auto" src={alien} />
          </div>
          <div className="bg-red-600">
            <img alt="An Leaf" className="mx-auto" src={leaf} />
          </div>

          <div></div>
          <div className="bg-red-600"></div>
          <div></div>
        </div>
      </section> */}
    </Layout>
  );
}

export default IndexPage;
