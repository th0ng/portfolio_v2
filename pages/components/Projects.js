import Image from "next/image";
import Keepaki from "../../public/Keepaki.png";
import spotaki from "../../public/spotaki.png";
import Ecommerce from "../../public/Ecommerce.png";

export default function Projects() {
  return (
    <>
      <h3 className="text-4xl font-burtons py-5 text-purple-400">My Projects</h3>
          {/* Projects listed by cards */}
          <div class="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-5">

          <div className="card image-full transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110  duration-300 ...">
              <figure>
                  <Image src={Keepaki} layout="fill" objectFit="cover" alt="Keepaki" className="rounded-2xl blur-sm"/>
              </figure>
              <div className="card-body">
                <h2 className="card-title font-burtons text-purple-400">Keepaki</h2>
                <p className="font-bold font-mono text-white">A clone of Google Keep written by me.</p>
                <ul className="text-white mb-3">Function:
                  <li>Register, login</li>
                  <li>Take notes, delete unused notes</li>
                </ul>
                <a href="https://github.com/th0ng/Keepaki" target="_blank" className="text-purple-400" rel="noreferrer">Visit Git repos.</a>
                <a href="#" target="_blank" className="text-purple-400">Web App released soon.</a>
                <div className="card-actions justify-end">
                  <div className="badge badge-primary">Reactjs</div>
                  <div className="badge badge-primary">Nodejs</div>
                </div>
              </div>
          </div>

          <div className="card bg-base-100 shadow-xl image-full transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110  duration-300 ...">
              <figure>
                  <Image src={spotaki} layout="fill" objectFit="cover" alt="Spotaki" className="rounded-2xl blur-sm"/>
              </figure>
              <div className="card-body">
                <h2 className="card-title font-burtons text-purple-400">Spotaki</h2>
                <p className="font-bold font-mono text-white">A clone of Spotify written by me.</p>
                <ul className="text-white mb-3">Function:
                  <li>Listen to music from Shazam.</li>
                  <li>Look for songs, artists details.</li>
                  <li>Look for playlist.</li>
                  <li>Around you.</li>
                  <li>Get top songs by genres.</li>
                </ul>
                <a href="https://github.com/th0ng/Spotaki" target="_blank" className="text-purple-400" rel="noreferrer">Visit Git repos.</a>
                <a href="https://spotaki.netlify.app" target="_blank" className="text-purple-400" rel="noreferrer">Visit Web App</a>
                <div className="card-actions justify-end">
                <div className="badge badge-primary">Reactjs</div>
                <div className="badge badge-primary">Redux</div>
                <div className="badge badge-primary">Rapid API</div>
                </div>
              </div>
          </div>

          <div className="card bg-base-100 shadow-xl image-full transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110  duration-300 ...">
              <figure>
                  <Image src={Ecommerce} layout="fill" objectFit="cover" alt="Ecommerce" className="rounded-2xl blur-sm"/>
              </figure>
              <div className="card-body">
                <h2 className="card-title font-burtons text-purple-400">Ecommerce</h2>
                <p className="font-bold font-mono text-white">An Ecommerce web application.</p>
                <ul className="text-white mb-3">Function:
                  <li>Selling products (Headphones).</li>
                </ul>
                <a href="https://github.com/th0ng/" target="_blank" className="text-cyan-500" rel="noreferrer">Visit Git repos.</a>
                <a href="#" target="_blank" className="text-cyan-500">Web app released soon.</a>
                <div className="card-actions justify-end">
                <div className="badge badge-primary">Reactjs</div>
                <div className="badge badge-primary">Sanity</div>
                </div>
              </div>
          </div>
          </div>
    </>
  )
};