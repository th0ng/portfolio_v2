import Link from "next/link";

import {AiOutlineHtml5, AiFillGithub} from "react-icons/ai";
import {DiCss3, DiJavascript, DiReact, DiNpm, DiHeroku} from "react-icons/di";
import {SiTailwindcss, SiVuedotjs, SiExpress, SiMongodb, SiPostgresql, SiTypescript, SiDocker, SiNetlify, SiWebpack, SiPostman} from "react-icons/si";
import {FaNode, FaAws} from "react-icons/fa";

export default function Tech() {
  return (
    <div className="box rounded-lg bg-base-200 px-2 pb-5">
      <h3 className="text-4xl font-sono pt-5 text-purple-400">Tech I Use</h3>
      <h3 className="text-2xl font-sono pt-3">For building client-side applications</h3>
      <div className="carousel carousel-center rounded-box">
        <div className="carousel-item mr-3 hover:scale-110 cursor-pointer">
          <Link href="https://developer.mozilla.org/en-US/docs/Web/HTML" target="_blank">
            <AiOutlineHtml5 color="#B2C8DF" className="text-9xl mr-3"/>
          </Link>
        </div> 
        <div className="carousel-item mr-3 hover:scale-110 cursor-pointer">
          <Link href="https://developer.mozilla.org/en-US/docs/Web/CSS" target="_blank">
            <DiCss3 color="#B2C8DF" className="text-9xl"/>
          </Link>
        </div> 
        <div className="carousel-item mr-3 hover:scale-110 cursor-pointer">
          <Link href="https://tailwindcss.com/" target="_blank">
            <SiTailwindcss color="#B2C8DF" className="text-9xl"/>
          </Link>
        </div> 
        <div className="carousel-item mr-3 hover:scale-110 cursor-pointer">
          <Link href="https://www.javascript.com/" target="_blank">
            <DiJavascript color="#B2C8DF" className="text-9xl"/>
          </Link>
        </div> 
        <div className="carousel-item mr-3 hover:scale-110 cursor-pointer">
          <Link href="https://reactjs.org/" target="_blank">
            <DiReact color="#B2C8DF" className="text-9xl"/>
          </Link>
        </div> 
        <div className="carousel-item mr-3 hover:scale-110 cursor-pointer">
          <Link href="https://vuejs.org/" target="_blank">
            <SiVuedotjs color="#B2C8DF" className="text-9xl"/>
          </Link>
        </div> 
      </div>


      <h3 className="text-2xl font-sono pt-3">For building backend applications</h3>
      <div className="carousel carousel-center rounded-box ">
        <div className="carousel-item mr-3 hover:scale-110 cursor-pointer">
          <Link href="https://nodejs.org/en/" target="_blank">
            <FaNode color="#B2C8DF" className="text-9xl"/>
          </Link>
        </div> 
        <div className="carousel-item mr-3 hover:scale-110 cursor-pointer">
          <Link href="https://expressjs.com/" target="_blank">
            <SiExpress color="#B2C8DF" className="text-9xl"/>
          </Link>
        </div> 
        <div className="carousel-item mr-3 hover:scale-110 cursor-pointer">
          <Link href="https://www.mongodb.com/" target="_blank">
            <SiMongodb color="#B2C8DF" className="text-9xl"/>
          </Link>
        </div> 
        <div className="carousel-item mr-3 hover:scale-110 cursor-pointer">
          <Link href="https://www.postgresql.org/" target="_blank">
            <SiPostgresql color="#B2C8DF" className="text-9xl"/>
          </Link>
        </div> 
        <div className="carousel-item mr-3 hover:scale-110 cursor-pointer">
          <Link href="https://www.typescriptlang.org/" target="_blank">
            <SiTypescript color="#B2C8DF" className="text-9xl"/>
          </Link>
        </div> 
      </div>


      <h3 className="text-2xl font-sono pt-3">Others...and more!</h3>
      <div className="carousel carousel-center rounded-box">
        <div className="carousel-item mr-3 hover:scale-110 cursor-pointer">
          <Link href="https://www.npmjs.com/" target="_blank">
            <DiNpm color="#B2C8DF" className="text-9xl"/>
          </Link>
        </div> 
        <div className="carousel-item mr-3 hover:scale-110 cursor-pointer">
          <Link href="https://github.com/" target="_blank">
            <AiFillGithub color="#B2C8DF" className="text-9xl"/>
          </Link>
        </div> 
        <div className="carousel-item mr-3 hover:scale-110 cursor-pointer">
          <Link href="https://www.docker.com/" target="_blank">
            <SiDocker color="#B2C8DF" className="text-9xl"/>
          </Link>
        </div> 
        <div className="carousel-item mr-3 hover:scale-110 cursor-pointer">
          <Link href="https://aws.amazon.com/" target="_blank">
            <FaAws color="#B2C8DF" className="text-9xl"/>
          </Link>
        </div> 
        <div className="carousel-item mr-3 hover:scale-110 cursor-pointer">
          <Link href="https://www.netlify.com/" target="_blank">
            <SiNetlify color="#B2C8DF" className="text-9xl"/>
          </Link>
        </div> 
        <div className="carousel-item mr-3 hover:scale-110 cursor-pointer">
          <Link href="https://www.heroku.com/">
            <DiHeroku color="#B2C8DF" className="text-9xl"/>
          </Link>
        </div>
        <div className="carousel-item mr-3 hover:scale-110 cursor-pointer">
          <Link href="https://webpack.js.org/">
            <SiWebpack color="#B2C8DF" className="text-9xl"/>
          </Link>
        </div>
        <div className="carousel-item mr-3 hover:scale-110 cursor-pointer">
          <Link href="https://www.postman.com/" target="_blank">
            <SiPostman color="#B2C8DF" className="text-9xl"/>
          </Link>
        </div>
      </div>
    </div>
  )
};