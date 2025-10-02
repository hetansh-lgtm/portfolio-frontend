import styles from './SkillsPage.module.css';
// Using multiple icon sets to get the best icon for each technology
import {
  SiTypescript, SiReact, SiPython, SiDjango, SiPostgresql, SiDocker, SiVite, SiCss3, SiGit, SiNodedotjs, SiAmazon} from 'react-icons/si';
import { FaServer } from 'react-icons/fa';
import { VscTerminalCmd } from 'react-icons/vsc';

// --- Structured Skills Data ---
const skillCategories = [
  {
    title: 'Frontend',
    skills: [
      { name: 'TypeScript', Icon: SiTypescript },
      { name: 'React', Icon: SiReact },
      { name: 'Vite', Icon: SiVite },
      { name: 'CSS3', Icon: SiCss3 },
    ],
  },
  {
    title: 'Backend',
    skills: [
      { name: 'Python', Icon: SiPython },
      { name: 'Django', Icon: SiDjango },
      { name: 'Node.js', Icon: SiNodedotjs },
      { name: 'PostgreSQL', Icon: SiPostgresql },
    ],
  },
  {
    title: 'Cloud & DevOps',
    skills: [
      { name: 'AWS', Icon: SiAmazon },
      { name: 'Docker', Icon: SiDocker },
      { name: 'REST APIs', Icon: FaServer },
      { name: 'CI/CD', Icon: VscTerminalCmd },
    ],
  },
  {
    title: 'Developer Tools',
    skills: [
      { name: 'Git & GitHub', Icon: SiGit },
    ],
  },
];

export default function SkillsPage() {
  return (
    <section className={styles.wrap} aria-label="Skills & Technologies">
      <div className="container">
        <div className={styles.header}>
          <h1>Skills & Technologies</h1>
          <p>
            A detailed look at the tools and technologies I use to build modern applications.
          </p>
        </div>
        <div className={styles.skillsGrid}>
          {skillCategories.map((category) => (
            <div className={`data-card ${styles.categoryCard}`} key={category.title}>
              <h2 className={styles.categoryTitle}>{category.title}</h2>
              <ul className={styles.skillList}>
                {category.skills.map((skill) => (
                  <li className={styles.skillItem} key={skill.name}>
                    <skill.Icon className={styles.skillIcon} />
                    <span>{skill.name}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}