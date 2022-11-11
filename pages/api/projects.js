import { useState, useEffect } from "react";

const Projects = () => {
  const [data, setData] = useState(null);
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch("http://localhost:3001/")
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        setLoading(false);
      });
  }, []);

  return (
    <section className="pt-5">
      <h3 className="text-4xl font-burtons pt-5">My Projects</h3>
      <span>Projects gonna be listed here.</span>
    </section>
  );
};

export default Projects;
