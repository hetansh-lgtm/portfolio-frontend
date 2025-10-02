import styles from './ProjectCard.module.css';
import { FiExternalLink, FiGithub } from 'react-icons/fi';
import type { Project } from '@/lib/types'; // Assuming your types are in src/lib/types.ts

export default function ProjectCard({ project }: { project: Project }) {
  // Use the project's title as a fallback if the ID doesn't exist yet
  const uniqueId = project.id ?? project.title;

  return (
    <article className={styles.card} aria-labelledby={`proj-${uniqueId}`}> 
      <div className={styles.imageWrapper}>
        {project.image && <img className={styles.thumb} src={project.image} alt={`${project.title} screenshot`} loading="lazy" />}
      </div>
      
      <div className={styles.body}>
        <header className={styles.header}>
          <h3 id={`proj-${uniqueId}`} className={styles.title}>{project.title}</h3>
          <div className={styles.actions}>
            {project.github_link && (
              <a href={project.github_link} target="_blank" rel="noreferrer" title="View Code on GitHub">
                <FiGithub size={20} />
              </a>
            )}
            {project.live_link && (
              <a href={project.live_link} target="_blank" rel="noreferrer" title="View Live Site">
                <FiExternalLink size={20} />
              </a>
            )}
          </div>
        </header>

        {project.description && <p className={styles.desc}>{project.description}</p>}
        
        {project.technologies && project.technologies.length > 0 && (
          <ul className={styles.techList} aria-label="Technologies used">
            {project.technologies.map((t) => <li key={t.name}>{t.name}</li>)}
          </ul>
        )}
      </div>
    </article>
  );
}