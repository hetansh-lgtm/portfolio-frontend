import styles from './ProjectsPage.module.css';
import type { Project } from '@/lib/types';
import ProjectCard from '@/components/ProjectCard/ProjectCard';

// Mock Data: Replace this with your API call when ready
const mockProjects: Project[] = [
  {
    id: 1,
    title: 'Project Alpha',
    image: 'https://placehold.co/600x400/272822/F92672?text=Alpha',
    description: 'A full-stack web application for managing tasks and team collaboration, built with a modern tech stack.',
    technologies: [{ name: 'React' }, { name: 'TypeScript' }, { name: 'Node.js' }, { name: 'PostgreSQL' }],
    live_link: '#',
    github_link: '#',
  },
  {
    id: 2,
    title: 'Project Beta',
    image: 'https://placehold.co/600x400/272822/A6E22E?text=Beta',
    description: 'A responsive portfolio website template designed for developers, featuring a clean and modern UI.',
    technologies: [{ name: 'Vite' }, { name: 'CSS Modules' }, { name: 'React Router' }],
    live_link: '#',
    github_link: '#',
  },
  {
    id: 3,
    title: 'Project Gamma',
    image: 'https://placehold.co/600x400/272822/66D9EF?text=Gamma',
    description: 'An e-commerce storefront with a custom CMS, built using a headless architecture.',
    technologies: [{ name: 'Next.js' }, { name: 'GraphQL' }, { name: 'Stripe API' }],
    live_link: '#',
    github_link: '#',
  },
];

export default function ProjectsPage() {
  const items = mockProjects; // Using mock data directly

  return (
    <section className={styles.wrap} aria-label="Projects">
      <div className="container">
        <div className={styles.header}>
          <h1>Projects</h1>
          <p>A collection of my work, from full-stack applications to smaller personal projects.</p>
        </div>
        
        {items.length ? (
          <div className={styles.grid}>
            {items.map(p => <ProjectCard key={p.id ?? p.title} project={p} />)}
          </div>
        ) : (
          <div className={styles.emptyState}>
            <h2>More projects coming soon!</h2>
            <p>I'm currently working on some exciting things. Check back later to see my latest work.</p>
          </div>
        )}
      </div>
    </section>
  );
}

// import { useEffect, useState } from 'react';
// import styles from './ProjectsPage.module.css';
// import { fetchProjects } from '@/lib/api';
// import type { Project } from '@/lib/types';
// import ProjectCard from '@/components/ProjectCard/ProjectCard';

// export default function ProjectsPage() {
//   const [items, setItems] = useState<Project[]>([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState<string | null>(null);

//   useEffect(() => {
//     // This function runs once when the component is first rendered
//     const loadProjects = async () => {
//       try {
//         const projects = await fetchProjects();
//         setItems(projects);
//       } catch (err) {
//         setError(err instanceof Error ? err.message : 'An unknown error occurred');
//       } finally {
//         setLoading(false);
//       }
//     };

//     loadProjects();
//   }, []); // The empty array means this effect only runs on mount

//   return (
//     <section className={styles.wrap} aria-label="Projects">
//       <div className="container">
//         <div className={styles.header}>
//           <h1>Projects</h1>
//           <p>A collection of my work, from full-stack applications to smaller personal projects that showcase my skills.</p>
//         </div>
        
//         {loading && <p className={styles.feedback}>Loading projects…</p>}

//         {error && <p role="alert" className={styles.feedbackError}>{error}</p>}

//         {!loading && !error && (
//           items.length > 0 ? (
//             <div className={styles.grid}>
//               {items.map(p => (
//                 <ProjectCard key={p.id ?? p.title} project={p} />
//               ))}
//             </div>
//           ) : (
//             <div className={styles.emptyState}>
//               <h2>More projects coming soon!</h2>
//               <p>I'm currently working on some exciting things. Check back later to see my latest work, which will be added to the database.</p>
//             </div>
//           )
//         )}
//       </div>
//     </section>
//   );
// }