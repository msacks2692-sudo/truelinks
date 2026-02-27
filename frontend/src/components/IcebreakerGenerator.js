import React, { useState } from 'react';
import styles from './IcebreakerGenerator.module.css';

function IcebreakerGenerator() {
  const [icebreaker, setIcebreaker] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [isCopied, setIsCopied] = useState(false);

  const handleClick = async () => {
    setIsLoading(true);
    setError(null);
    setIsCopied(false);
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

  const handleCopy = () => {
    if (!icebreaker) return;
    navigator.clipboard.writeText(icebreaker).then(() => {
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 2000);
    });
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
            onClick={handleCopy}
            className={styles.copyButton}
            aria-label={isCopied ? "Copied to clipboard" : "Copy icebreaker to clipboard"}
          >
            {isCopied ? "Copied!" : "Copy"}
          </button>
        </div>
      )}
    </div>
  );
}

export default IcebreakerGenerator;
