import React, { useState } from 'react';
import styles from './IcebreakerGenerator.module.css';

function IcebreakerGenerator() {
  const [icebreaker, setIcebreaker] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

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

  return (
    <div className={styles.generator}>
      <h2>AI Icebreaker Generator</h2>
      <button onClick={handleClick} disabled={isLoading} className={styles.button}>
        {isLoading ? 'Generating...' : 'Generate Icebreaker'}
      </button>
      {error && <p style={{ color: 'red' }}>Error: {error}</p>}
      {icebreaker && (
        <div className={styles.result}>
          <h3>Here's an icebreaker for you:</h3>
          <p>{icebreaker}</p>
        </div>
      )}
    </div>
  );
}

export default IcebreakerGenerator;
