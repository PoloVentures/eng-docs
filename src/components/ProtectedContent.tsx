import React, { useState, useEffect, ReactNode } from 'react';
import styles from './ProtectedContent.module.css';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

interface ProtectedContentProps {
  children: ReactNode;
}

const STORAGE_KEY = 'questy_docs';

export default function ProtectedContent({ children }: ProtectedContentProps) {
  const { siteConfig } = useDocusaurusContext();
  const correctPassword = (siteConfig.customFields?.authPassword as string);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  useEffect(() => {
    // Check if already authenticated in this session
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored === 'true') {
      setIsAuthenticated(true);
    }
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === correctPassword) {
      setIsAuthenticated(true);
      localStorage.setItem(STORAGE_KEY, 'true');
      setError('');
    } else {
      setError('Incorrect password');
      setPassword('');
    }
  };

  if (!isAuthenticated) {
    return (
      <div className={styles.loginContainer}>
        <div className={styles.loginBox}>
          <h2>Protected Content</h2>
          <p>This section requires authentication</p>
          <form onSubmit={handleSubmit}>
            <input
              type="password"
              placeholder="Enter password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className={styles.input}
            />
            <button type="submit" className={styles.button}>
              Unlock
            </button>
          </form>
          {error && <p className={styles.error}>{error}</p>}
        </div>
      </div>
    );
  }

  return <>{children}</>;
}
