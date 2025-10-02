import styles from './ExperiencePage.module.css'


const workExperience = [
  {
    role: 'Software Engineer',
    company: 'Dell Technologies',
    dates: 'Feb 2024 - Present',
    description: [
      
    ],
    technologies: ['TypeScript', 'React', 'Python', 'Django', 'PostgreSQL', 'Docker', 'CI/CD', 'REST APIs'],
  },
  {
    role: 'Software Engineer Intern',
    company: 'Dell Technologies',
    dates: 'May 2023 - Aug 2023',
    description: [
        'Enhanced Java Spring REST end points to facilitate Swagger UI/OpenApi document generation.',
        'Upgraded components of CI/CD frameworks such as Maven and Gradle.',
        'Created a new Kubernetes cluster deployment and a new Nginx web server.',
        'Implemented authentication to Swagger UI and utilized ingress to control HTTP and HTTPS traffic.',
        'Familiar with Jenkins build and deploy pipeline.'
    ],
    technologies: ['Java', 'Springboot', 'Docker', 'Kubernetes', 'Agile'],
  },
];

export default function ExperiencePage() {
  return (
    <section className={styles.wrap} aria-label="Work Experience and Skills">
      <div className="container">
        <div className={styles.header}>
          <h1>Experience & Skills</h1>
          <p>
            Here's a timeline of my professional journey and the technologies I've mastered along the way.
          </p>
        </div>
        
        <div className={styles.timeline}>
          {workExperience.map((job, index) => (
            <div className={styles.job} key={index}>
              <div className={styles.jobHeader}>
                <h2 className={styles.role}>{job.role}</h2>
                <p className={styles.company}>{job.company}</p>
                <p className={styles.dates}>{job.dates}</p>
              </div>
              <ul className={styles.description}>
                {job.description.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
              <div className={styles.techList}>
                {job.technologies.map(tech => (
                  <span key={tech} className={styles.badge}>{tech}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}