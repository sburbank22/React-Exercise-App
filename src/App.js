import React, { useState } from 'react';
import RepetitionExercise from './components/RepetitionExercise';
import DurationExercise from './components/DurationExercise';

function App() {
  const [exercise, setExercise] = useState(null);

  const handleSelectExercise = (type) => {
    setExercise(type);
  };

  const goBackToMenu = () => {
    setExercise(null);
  };

  return (
    <div className="App">
      <h1>Choose Your Workout</h1>

      {/* my menu screen */}
      {!exercise && (
        <div className="menu">
          <button onClick={() => handleSelectExercise('repetition')}>Push Ups</button>
          <button onClick={() => handleSelectExercise('planks')}>Planks</button>
          <button onClick={() => handleSelectExercise('running')}>Running</button>
        </div>
      )}

      {/* my exercise screen*/}
      {exercise === 'repetition' && (
        <div>
          <button onClick={goBackToMenu}>Back</button>
          <RepetitionExercise name="Push Ups" />
        </div>
      )}
      {exercise === 'planks' && (
        <div>
          <button onClick={goBackToMenu}>Back</button>
          <DurationExercise name="Planks" />
        </div>
      )}
      {exercise === 'running' && (
        <div>
          <button onClick={goBackToMenu}>Back</button>
          <DurationExercise name="Running" />
        </div>
      )}
    </div>
  );
}

export default App;
