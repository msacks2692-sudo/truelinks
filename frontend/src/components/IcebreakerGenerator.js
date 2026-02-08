import React, { useState } from 'react';
import styles from './IcebreakerGenerator.module.css';

function IcebreakerGenerator() {
  const [icebreaker, setIcebreaker] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [copySuccess, setCopySuccess] = useState(false);

  const handleClick = async () => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await fetch('/api/generate-icebreaker', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        // In the future, we would send user data here
        // body: JSON.stringify({ interests: ['skiing', 'painting'] }),
      });

      if (!response.ok) {
        throw new Error('Something went wrong');
      }

      const data = await response.json();
      setIcebreaker(data.icebreaker);
    } catch (err) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(icebreaker);
      setCopySuccess(true);
      setTimeout(() => setCopySuccess(false), 2000);
    } catch (err) {
      console.error('Failed to copy text: ', err);
    }
  };

  return (
    <div className={styles.generator}>
      <h2>AI Icebreaker Generator</h2>
      <button
        onClick={handleClick}
        disabled={isLoading}
        aria-busy={isLoading}
        className={styles.button}
      >
        {isLoading ? 'Generating...' : 'Generate Icebreaker'}
      </button>
      {error && <p role="alert" style={{ color: 'red' }}>Error: {error}</p>}
      {icebreaker && (
        <div className={styles.result} aria-live="polite">
          <h3>Here's an icebreaker for you:</h3>
          <p>{icebreaker}</p>
          <button
            className={styles.copyButton}
            onClick={handleCopy}
            aria-label="Copy icebreaker to clipboard"
          >
            {copySuccess ? (
              <span className={styles.feedback}>Copied!</span>
            ) : (
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M16 1H4C2.9 1 2 1.9 2 3V17H4V3H16V1ZM19 5H8C6.9 5 6 5.9 6 7V21C6 22.1 6.9 23 8 23H19C20.1 23 21 22.1 21 21V7C21 5.9 20.1 5 19 5ZM19 21H8V7H19V21Z" fill="currentColor"/>
              </svg>
            )}
          </button>
        </div>
      )}
    </div>
  );
}

export default IcebreakerGenerator;
