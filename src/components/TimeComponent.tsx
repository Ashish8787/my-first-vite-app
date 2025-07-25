import React, { useEffect, useState } from 'react';

function CountdownTimer() {
  const [timeLeft, setTimeLeft] = useState(60);
  const [isPaused, setIsPaused] = useState(false);
  const [isFinished, setIsFinished] = useState(false);

  useEffect(() => {
    let timer;

    if (!isPaused && timeLeft > 0) {
      timer = setInterval(() => {
        setTimeLeft((prev) => prev - 1);
      }, 1000);
    }

    if (timeLeft === 0 && !isFinished) {
      alert("⏰ Time's up!"); // 🔊 Alert once
      setIsFinished(true);
    }

    return () => clearInterval(timer);
  }, [timeLeft, isPaused]);

  const handlePauseResume = () => {
    setIsPaused((prev) => !prev);
  };

  const handleRestart = () => {
    setTimeLeft(60);
    setIsPaused(false);
    setIsFinished(false);
  };

  return (
    <div style={{ padding: 20 }}>
      <h2>⌛ Countdown Timer: {timeLeft} sec</h2>
      <button onClick={handlePauseResume}>
        {isPaused ? '▶️ Resume' : '⏸️ Pause'}
      </button>
      <button onClick={handleRestart} style={{ marginLeft: 10 }}>
        🔁 Restart
      </button>
      {isFinished && <p>✅ Timer completed!</p>}
    </div>
  );
}

export default CountdownTimer;
