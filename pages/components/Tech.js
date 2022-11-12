import {AiOutlineHtml5, AiFillGithub} from "react-icons/ai";
import {DiCss3, DiJavascript, DiReact, DiNpm, DiHeroku} from "react-icons/di";
import {SiTailwindcss, SiVuedotjs, SiExpress, SiMongodb, SiPostgresql, SiTypescript, SiDocker, SiNetlify, SiWebpack, SiPostman} from "react-icons/si";
import {FaNode, FaAws} from "react-icons/fa";

export default function Tech() {
  return (
    <>
      <h3 className="text-4xl font-burtons pt-5 text-purple-400">Tech I Use</h3>
      <h3 className="text-2xl font-burtons pt-3">For building client-side applications</h3>
      <div className="carousel carousel-center rounded-box">
        <div className="carousel-item mr-3 hover:scale-110 cursor-pointer">
          <AiOutlineHtml5 className="text-9xl mr-3"/>
        </div> 
        <div className="carousel-item mr-3 hover:scale-110 cursor-pointer">
          <DiCss3 className="text-9xl"/>
        </div> 
        <div className="carousel-item mr-3 hover:scale-110 cursor-pointer">
          <SiTailwindcss className="text-9xl"/>
        </div> 
        <div className="carousel-item mr-3 hover:scale-110 cursor-pointer">
          <DiJavascript className="text-9xl"/>
        </div> 
        <div className="carousel-item mr-3 hover:scale-110 cursor-pointer">
          <DiReact className="text-9xl"/>
        </div> 
        <div className="carousel-item mr-3 hover:scale-110 cursor-pointer">
          <SiVuedotjs className="text-9xl"/>
        </div> 
      </div>


      <h3 className="text-2xl font-burtons pt-3">For building backend applications</h3>
      <div className="carousel carousel-center rounded-box ">
        <div className="carousel-item mr-3 hover:scale-110 cursor-pointer">
          <FaNode className="text-9xl"/>
        </div> 
        <div className="carousel-item mr-3 hover:scale-110 cursor-pointer">
          <SiExpress className="text-9xl"/>
        </div> 
        <div className="carousel-item mr-3 hover:scale-110 cursor-pointer">
          <SiMongodb className="text-9xl"/>
        </div> 
        <div className="carousel-item mr-3 hover:scale-110 cursor-pointer">
          <SiPostgresql className="text-9xl"/>
        </div> 
        <div className="carousel-item mr-3 hover:scale-110 cursor-pointer">
          <SiTypescript className="text-9xl"/>
        </div> 
      </div>


      <h3 className="text-2xl font-burtons pt-3">Others...and more!</h3>
      <div className="carousel carousel-center rounded-box">
        <div className="carousel-item mr-3 hover:scale-110 cursor-pointer">
          <DiNpm className="text-9xl"/>
        </div> 
        <div className="carousel-item mr-3 hover:scale-110 cursor-pointer">
          <AiFillGithub className="text-9xl"/>
        </div> 
        <div className="carousel-item mr-3 hover:scale-110 cursor-pointer">
          <SiDocker className="text-9xl"/>
        </div> 
        <div className="carousel-item mr-3 hover:scale-110 cursor-pointer">
          <FaAws className="text-9xl"/>
        </div> 
        <div className="carousel-item mr-3 hover:scale-110 cursor-pointer">
          <SiNetlify className="text-9xl"/>
        </div> 
        <div className="carousel-item mr-3 hover:scale-110 cursor-pointer">
          <DiHeroku className="text-9xl"/>
        </div>
        <div className="carousel-item mr-3 hover:scale-110 cursor-pointer">
          <SiWebpack className="text-9xl"/>
        </div>
        <div className="carousel-item mr-3 hover:scale-110 cursor-pointer">
          <SiPostman className="text-9xl"/>
        </div>
      </div>
    </>
  )
};