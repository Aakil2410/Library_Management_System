'use client'
// pages/signin.tsx

import { useState } from 'react';
import { useSty }

const SignInPage: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !password) {
      setError('Please enter both email and password');
    } else {
      // Your login logic here
      console.log('Email:', email);
      console.log('Password:', password);
    }
  };

  return (
    <div className={styles.container}>
      <h1>Sign In</h1>
      <form onSubmit={handleSubmit} className={styles.form}>
        <div className={styles.inputGroup}>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className={styles.inputGroup}>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        {error && <p className={styles.error}>{error}</p>}
        <button type="submit">Sign In</button>
      </form>
    </div>
  );
};

export default SignInPage;
