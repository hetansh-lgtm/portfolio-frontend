import { useEffect, useState } from 'react';
import { fetchProjects } from '@/lib/api'; // Use our API function
import type { Project } from '@/lib/types'; // Use the shared type
import ProjectCard from '@/components/ProjectCard/ProjectCard';

export default function ProjectsTeaser() {
  const [items, setItems] = useState<Project[]>([]);

  useEffect(() => {
    // This function will run once when the component mounts
    const loadProjects = async () => {
      try {
        const allProjects = await fetchProjects();
        // Take the first 3 projects from the API response
        setItems(allProjects.slice(0, 3));
      } catch (error) {
        console.error("Failed to load project teaser:", error);
        // If the API fails, show no projects
        setItems([]);
      }
    };

    loadProjects();
  }, []); // The empty array ensures this effect runs only once

  // If there are no items (either loading, empty DB, or an error),
  // don't render anything on the homepage.
  if (!items.length) {
    return null;
  }

  return (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '24px' }}>
      {items.map(p => <ProjectCard key={p.id ?? p.title} project={p} />)}
    </div>
  );
}