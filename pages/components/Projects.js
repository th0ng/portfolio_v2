import Image from "next/image";
import Keepaki from "../../public/Keepaki.png";
import spotaki from "../../public/spotaki.png";
import Ecommerce from "../../public/Ecommerce.png";

export default function Projects() {
  return (
    <div id="projects" className="box rounded-lg px-2 py-2">
      <h3 className="text-4xl font-sono py-5">My Projects</h3>
      {/* Projects listed by cards */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 container pt-5">
        <div className="card bg-yellow-800 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110  duration-150 ...">
          <div className="card-body">
            <h2 className="card-title font-sono ">Keepaki</h2>
            <p className="font-bold font-sono ">
              A clone of Google Keep written by me.
            </p>
            <ul className="font-sono mb-3">
              Function:
              <li>Register, login</li>
              <li>Take notes, delete unused notes</li>
            </ul>
            <a
              href="https://github.com/th0ng/Keepaki"
              target="_blank"
              className="text-yellow-600"
              rel="noreferrer"
            >
              Visit Git repos.
            </a>
            <a href="#" target="_blank" className="text-yellow-600">
              Web App released soon.
            </a>
            <div className="card-actions justify-end">
              <div className="badge badge-primary">Reactjs</div>
              <div className="badge badge-primary">Nodejs</div>
            </div>
          </div>
        </div>

        <div className="card bg-green-700 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110  duration-150 ...">
          <div className="card-body">
            <h2 className="card-title font-sono ">Spotaki</h2>
            <p className="font-bold font-sono ">
              A clone of Spotify written by me.
            </p>
            <ul className=" font-sono mb-3">
              Function:
              <li>Listen to music from Shazam.</li>
              <li>Look for songs, artists details.</li>
              <li>Look for playlist.</li>
              <li>Around you.</li>
              <li>Get top songs by genres.</li>
            </ul>
            <a
              href="https://github.com/th0ng/Spotaki"
              target="_blank"
              className="text-green-500"
              rel="noreferrer"
            >
              Visit Git repos.
            </a>
            <a
              href="https://spotaki.netlify.app"
              target="_blank"
              className="text-green-500"
              rel="noreferrer"
            >
              Visit Web App
            </a>
            <div className="card-actions justify-end">
              <div className="badge badge-primary">Reactjs</div>
              <div className="badge badge-primary">Redux</div>
              <div className="badge badge-primary">Rapid API</div>
            </div>
          </div>
        </div>

        <div className="card bg-red-800 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110  duration-150 ...">
          <div className="card-body">
            <h2 className="card-title font-sono ">Jimaki</h2>
            <p className="font-bold font-sono ">
              An web app for searching Gym exercises
            </p>
            <ul className=" font-sono mb-3">
              Function:
              <li>Homepage.</li>
              <li>Fetching gym exercises</li>
              <li>Searching for exercises for specific part of your body.</li>
            </ul>
            <a
              href="https://github.com/th0ng/jimaki"
              target="_blank"
              className="text-cyan-500"
              rel="noreferrer"
            >
              Visit Git repos.
            </a>
            <a
              href="https://jimaki.netlify.app/"
              target="_blank"
              className="text-cyan-500"
              rel="noreferrer"
            >
              Vist Web App.
            </a>
            <div className="card-actions justify-end">
              <div className="badge badge-primary">React</div>
              <div className="badge badge-primary">Rapid API</div>
              <div className="badge badge-primary">MUI</div>
            </div>
          </div>
        </div>

        <div className="card bg-purple-500 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110  duration-150 ...">
          <div className="card-body">
            <h2 className="card-title font-sono ">NFT Market</h2>
            <p className="font-bold font-sono">
              A frontend mobile app for trading NFT and its landing page.
            </p>
            <ul className="font-sono mb-3">
              Function:
              <li>Homepage.</li>
              <li>Details page.</li>
            </ul>
            <a
              href="https://github.com/th0ng/NFT-market-mobile-app"
              target="_blank"
              className="text-cyan-500"
              rel="noreferrer"
            >
              Visit Git repos.
            </a>
            <a
              href="#"
              target="_blank"
              className="text-cyan-500"
              rel="noreferrer"
            >
              Visit landing page.
            </a>
            <div className="card-actions justify-end">
              <div className="badge badge-primary">React Native</div>
              <div className="badge badge-primary">React</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
