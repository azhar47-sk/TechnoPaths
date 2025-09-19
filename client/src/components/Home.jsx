import { useEffect, useState } from "react";
import { getProjects } from "../services/projectService";

export default function Home() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getProjects();
        setProjects(data);
      } catch (error) {
        console.error("Error fetching projects:", error);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Projects</h1>
      <ul>
        {projects.map((p) => (
          <li key={p._id} className="mb-2 p-2 border rounded">
            {p.title} – {p.description}
          </li>
        ))}
      </ul>
    </div>
  );
}
