import styles from './Footer.module.css'

export default function Footer() {
  const lastUpdated = new Date().toISOString().split('T')[0]
  return (
    <footer className={styles.footer} role="contentinfo">
      <div className="container">
        <div className={styles.meta}>
          <span>© {new Date().getFullYear()} Hetansh Patel </span>
          <span>Last updated: {lastUpdated}</span>
        </div>
      </div>
    </footer>
  )
}
