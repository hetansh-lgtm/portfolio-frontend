import { NavLink } from 'react-router-dom';
import styles from './CommandPalette.module.css';
// --- UPDATED: Swapped FiStar for FiBriefcase ---
import { FiHome, FiUser, FiCode, FiBriefcase, FiMail, FiFileText, FiStar } from 'react-icons/fi';

// The Command interface remains useful for organizing our data
interface Command {
  path: string;
  label: string;
  icon: React.ComponentType<{ size: number }>;
  type: 'link' | 'action';
  action?: () => void;
}

// The list of commands with the updated Experience link
const ALL_COMMANDS: Command[] = [
  { path: '/', label: 'Home', type: 'link', icon: FiHome },
  { path: '/about', label: 'About', type: 'link', icon: FiUser },
  { path: '/projects', label: 'Projects', type: 'link', icon: FiCode },
  { path: '/skills', label: 'Skills', type: 'link', icon: FiStar },
  { path: '/experience', label: 'Experience', type: 'link', icon: FiBriefcase },
  { path: '/contact', label: 'Contact', type: 'link', icon: FiMail },
  {
    path: '/resume',
    label: 'Resume',
    type: 'action',
    icon: FiFileText,
    action: () => {
      window.open('/resume.pdf', '_blank');
    },
  },
];

export default function CommandPalette() {
  // No more state or effects needed for open/close functionality!
  // It's all handled by CSS now.

  return (
    <nav className={styles.dock}>
      <ul className={styles.menuList}>
        {ALL_COMMANDS.map((command) => (
          <li key={command.path}>
            {command.type === 'link' ? (
              <NavLink
                to={command.path}
                className={({ isActive }) =>
                  `${styles.menuItem} ${isActive ? styles.active : ''}`
                }
                title={command.label} // Tooltip for accessibility
              >
                <span className={styles.icon}><command.icon size={22} /></span>
                <span className={styles.label}>{command.label}</span>
              </NavLink>
            ) : (
              <a
                href={command.path}
                onClick={(e) => {
                  e.preventDefault();
                  command.action?.();
                }}
                className={styles.menuItem}
                title={command.label}
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className={styles.icon}><command.icon size={22} /></span>
                <span className={styles.label}>{command.label}</span>
              </a>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
}