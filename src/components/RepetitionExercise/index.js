import React, { useState } from 'react';
import '../../index.css';

function RepetitionExercise({ name }) {
    const [count, setCount] = useState(0);

    return (
        <div className="repetition-container">
            <h2 className="exercise-title">{name}</h2>
            <p className="counter">Repetitions: {count}</p>
            <div className="repetition-buttons">
                <button onClick={() => setCount(count + 1)}>Increase</button>
                <button onClick={() => setCount(0)}>Reset</button>
            </div>
        </div>
    );
}

export default RepetitionExercise;
