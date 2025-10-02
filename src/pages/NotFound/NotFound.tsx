import styles from './NotFound.module.css'
import { Link } from 'react-router-dom'
import { FiHome, FiArchive, FiUser, FiSend } from 'react-icons/fi'

// Data for quick navigation links
const quickLinks = [
  { href: '/', Icon: FiHome, text: 'Home' },
  { href: '/projects', Icon: FiArchive, text: 'Projects' },
  { href: '/about', Icon: FiUser, text: 'About' },
  { href: '/contact', Icon: FiSend, text: 'Contact' },
];

export default function NotFound() {
  return (
    <section className={styles.wrap} aria-label="Page Not Found">
      <div className="container">
        <div className={styles.terminalWindow}>
          <div className={styles.titleBar}>
            <div className={styles.dots}>
              <span className={`${styles.dot} ${styles.red}`}></span>
              <span className={`${styles.dot} ${styles.yellow}`}></span>
              <span className={`${styles.dot} ${styles.green}`}></span>
            </div>
            <span className={styles.title}>bash</span>
          </div>
          <div className={styles.terminalBody}>
            <p className={styles.line}>
              <span className={styles.prompt}>user@portfolio:~$</span> cat /pages{window.location.pathname}
            </p>
            <p className={`${styles.line} ${styles.error}`}>
              cat: /pages{window.location.pathname}: No such file or directory
            </p>
            <p className={styles.line}>
              <span className={styles.prompt}>user@portfolio:~$</span> It looks like you've found a broken link.
            </p>
            
            <div className={styles.quickNav}>
              <p className={styles.line}>Here are some helpful places to go instead:</p>
              <ul className={styles.linkList}>
                {quickLinks.map(link => (
                  <li key={link.href}>
                    <Link to={link.href}>
                      <link.Icon />
                      {link.text}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}