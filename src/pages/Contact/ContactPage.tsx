import styles from './ContactPage.module.css'
import { FiMail, FiLinkedin, FiGithub } from 'react-icons/fi'

// --- Data for your contact methods ---
// Add or remove items here to easily update the page
const contactMethods = [
  {
    Icon: FiMail,
    title: 'Send an Email',
    description: "The best way to reach me for any professional inquiries, collaborations, or questions.",
    buttonText: 'hetansh2000@gmail.com',
    href: 'mailto:hetansh2000@gmail.com?subject=Inquiry from your Portfolio',
  },
  {
    Icon: FiLinkedin,
    title: 'Connect on LinkedIn',
    description: "Connect with me to view my professional profile and network.",
    buttonText: 'View Profile',
    href: 'https://www.linkedin.com/in/hetanshpatel3700/',
  },
  {
    Icon: FiGithub,
    title: 'Follow on GitHub',
    description: "View my code, projects, and contributions to the open-source community.",
    buttonText: 'View GitHub',
    href: 'https://github.com/Hetansh3700',
  },
];

export default function ContactPage() {
  return (
    <section className={styles.wrap} aria-label="Contact">
      <div className="container">
        <div className={styles.header}>
          <h1 className="typing-effect">Let's Connect.</h1>
          <p>
            I'm always open to discussing new projects, creative ideas, or opportunities to be part of an amazing team. Choose your preferred method to get in touch.
          </p>
        </div>

        <div className={styles.contactGrid}>
          {contactMethods.map((method) => (
            <div className={`data-card ${styles.contactCard}`} key={method.title}>
              <method.Icon className={styles.icon} size={32} />
              <h2 className={styles.title}>{method.title}</h2>
              <p className={styles.description}>{method.description}</p>
              <a href={method.href} target="_blank" rel="noopener noreferrer" className={`btn ${styles.ctaButton}`}>
                {method.buttonText}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}