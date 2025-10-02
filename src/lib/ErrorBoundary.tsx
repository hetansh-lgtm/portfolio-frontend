import { Component, ReactNode } from 'react'
import styles from './ErrorBoundary.module.css' // We'll create this CSS file

type Props = { children: ReactNode }
type State = { hasError: boolean; message?: string }

export default class ErrorBoundary extends Component<Props, State> {
  state: State = { hasError: false, message: '' }

  static getDerivedStateFromError(error: unknown): State {
    // Update state so the next render will show the fallback UI.
    return { hasError: true, message: String(error) }
  }

  componentDidCatch(error: unknown, errorInfo: unknown) {
    // You can also log the error to an error reporting service
    console.error('ErrorBoundary caught an error:', error, errorInfo)
  }

  // ADDED: A method to reset the component's state
  handleReset = () => {
    this.setState({ hasError: false, message: '' })
  }

  render() {
    if (this.state.hasError) {
      // You can render any custom fallback UI
      return (
        <div className={styles.wrap}>
          <div className={`data-card ${styles.errorCard}`}>
            <h1 className={styles.title}>
              <span className={styles.prompt}>error:</span> App has crashed.
            </h1>
            <p className={styles.message}>
              An unexpected error occurred. You can try to reload the page or click the button below.
            </p>
            {this.state.message && (
              <pre className={styles.details}>{this.state.message}</pre>
            )}
            <div className={styles.actions}>
              <button className="btn" onClick={this.handleReset}>
                Try Again
              </button>
              <a href="/" className={styles.homeLink}>Go Home</a>
            </div>
          </div>
        </div>
      )
    }

    return this.props.children
  }
}