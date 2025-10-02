import styles from './AboutPage.module.css'
import { FiZap, FiSmile } from 'react-icons/fi'
import { IoAccessibilitySharp } from 'react-icons/io5'
import me from './me.jpg'
// Data for the value cards for easy management
const values = [
  {
    Icon: FiZap,
    title: 'Fast',
    description: 'I build snappy, performant web experiences that load quickly and feel responsive.',
  },
  {
    Icon: IoAccessibilitySharp, // Changed from FiAccessibility
    title: 'Accessible',
    description: 'My work is inclusive and built to be usable by everyone, regardless of ability.',
  },
  {
    Icon: FiSmile,
    title: 'Delightful',
    description: 'I focus on the small details that create a user experience that is intuitive and enjoyable.',
  },
];

export default function AboutPage() {
  return (
    <section className={styles.wrap} aria-label="About me">
      <div className="container">
        <div className={styles.grid}>
          {/* --- Left Column: Text Content --- */}
          <div className={styles.textColumn}>
            <h1 className="typing-effect">Crafting Code, Creating Solutions.</h1>
            <p className={styles.lead}>
              I’m a software engineer based in the Greater Atlanta Area, specializing in TypeScript, Python, and cloud-native web applications.
            </p>
            <div className={styles.bio}>
              <p>
                From a young age, I've been fascinated by how things work, which led me to the world of software development. For me, coding is the ultimate creative medium—a way to solve real-world problems and build useful, beautiful things from scratch.
              </p>
              <p>
                My goal is to build products that are not only technically robust but also genuinely improve people's lives. I thrive in collaborative environments where I can learn from my peers and contribute to a shared vision.
              </p>
            </div>

            <div className={styles.valuesSection}>
              <h3>What I Value</h3>
              <div className={styles.valuesGrid}>
                {values.map(value => (
                  <div className={styles.valueCard} key={value.title}>
                    <value.Icon size={24} className={styles.valueIcon} />
                    <div>
                      <h4>{value.title}</h4>
                      <p>{value.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* --- Right Column: Image --- */}
          <div className={styles.imageColumn}>
            <div className={styles.imageWrapper}>
              {/* IMPORTANT: Replace this with your own professional photo! */}
              <img 
                src={me}
                alt="A professional headshot of the site owner" 
                className={styles.aboutImage}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}