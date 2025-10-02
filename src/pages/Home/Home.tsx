import { useState, useEffect } from 'react'
import styles from './Home.module.css'
import { Link } from 'react-router-dom'
import ProjectsTeaser from '@/pages/Projects/ProjectsTeaser'
import { FiCode, FiCloud, FiDatabase } from 'react-icons/fi' // Example icons
import me from './me.jpg'

const ROLES = [
  'Software Engineer',
  'Frontend Developer',
  'Cloud Native Enthusiast',
  'Problem Solver',
];

const SKILLS = [
  {
    Icon: FiCode,
    title: 'Frontend Development',
    text: 'Building responsive, accessible, and delightful user interfaces with TypeScript and React.',
  },
  {
    Icon: FiCloud,
    title: 'Cloud & DevOps',
    text: 'Leveraging cloud-native tools and CI/CD pipelines to build and deploy scalable applications.',
  },
  {
    Icon: FiDatabase,
    title: 'Backend & APIs',
    text: 'Designing robust server-side logic and RESTful APIs, primarily with Python and Node.js.',
  },
];

export default function Home() {
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex(prevIndex => (prevIndex + 1) % ROLES.length);
    }, 2000); // Change role every 2 seconds
    return () => clearInterval(interval); // Cleanup on unmount
  }, []);

  return (
    <>
      <section className={styles.hero} aria-label="Intro">
        <div className="container">
          <div className={styles.heroInner}>
            <div className={styles.heroText}>
              <div className={styles.statusIndicator}>
                <span className={styles.statusDot}></span>
                Available for new opportunities
              </div>
              <h1>
                Hi, I'm <span className={styles.name}>Your Name</span>.
                <br />
                I'm a <span className={`${styles.dynamicText} typing-effect`}>{ROLES[roleIndex]}</span>
              </h1>
              <p>
                Based in East Cobb, I craft high-performance web applications that are reliable, scalable, and provide a great user experience.
              </p>
              <div className={styles.cta}>
                <Link to='/experience' className='btn'>Experience</Link>
                <Link to="/projects" className="btn">View My Work</Link>
                <a href="https://github.com/Hetansh3700" target="_blank" rel="noreferrer" className={styles.secondaryBtn}>GitHub</a>
              </div>
            </div>
            <div className={styles.heroImageWrapper}>
              <div className={styles.hexWrapper}>
                <img src={me} alt="A professional headshot of Your Name" className={styles.heroImage} />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.section} aria-label="Core Technologies">
        <div className="container">
          <h2 className={styles.sectionTitle}>Core Technologies</h2>
          <div className={styles.skillsGrid}>
            {SKILLS.map(skill => (
              <div className={`data-card ${styles.skillCard}`} key={skill.title}>
                <skill.Icon size={28} className={styles.skillIcon} />
                <h3>{skill.title}</h3>
                <p>{skill.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.section} aria-label="Featured Projects">
        <div className="container">
          <h2 className={styles.sectionTitle}>Featured Projects</h2>
          <ProjectsTeaser />
          <div style={{marginTop: '24px', textAlign: 'center'}}>
            <Link to="/projects" className={styles.secondaryBtn}>See all projects →</Link>
          </div>
        </div>
      </section>
    </>
  );
}