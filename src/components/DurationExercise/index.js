import React, { useState, useEffect } from 'react';
import '../../index.css';

function DurationExercise({ name }) {
    const [seconds, setSeconds] = useState(0);
    const [isRunning, setIsRunning] = useState(false);

    useEffect(() => {
        let timer;
        if (isRunning) {
            timer = setInterval(() => {
                setSeconds((prevSeconds) => prevSeconds + 1);
            }, 1000);
        } else {
            clearInterval(timer);
        }

        return () => clearInterval(timer);
    }, [isRunning]);

    const formatTime = (timeInSeconds) => {
        const minutes = Math.floor(timeInSeconds / 60);
        const seconds = timeInSeconds % 60;
        return `${minutes < 10 ? '0' + minutes : minutes}:${seconds < 10 ? '0' + seconds : seconds}`;
    };

    return (
        <div className="duration-container">
            <h2 className="exercise-title">{name}</h2>
            <p className="timer-display">Time: {formatTime(seconds)}</p>
            <div className="duration-buttons">
                {!isRunning && <button onClick={() => setIsRunning(true)}>Start</button>}
                {isRunning && <button onClick={() => setIsRunning(false)}>Stop</button>}
                <button onClick={() => { setIsRunning(false); setSeconds(0); }}>Reset</button>
            </div>
        </div>
    );
}

export default DurationExercise;
