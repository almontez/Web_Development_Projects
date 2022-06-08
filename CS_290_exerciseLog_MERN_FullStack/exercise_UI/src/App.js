import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import AddExercisePage from './pages/AddExercisePage';
import EditExercisePage from './pages/EditExercisePage';
import { useState } from 'react';
import Navigation from './components/Navigation';
import { GiWeightLiftingUp } from 'react-icons/gi'

function App() {
  const [exerciseToEdit, setExerciseToEdit] = useState();

  return (
    <div className="App">
      <header>
        <h1>Train Strong <GiWeightLiftingUp/> Fitness Tracker</h1>
        <p>
          Record of your strength based exercises. 
          Track your progress over time.
          Build and tone everyday.
          </p>
      </header>

      <Router>
        <div className="App-header">
          <Route path="/" exact>
            <HomePage setExerciseToEdit={setExerciseToEdit}/>
          </Route>
          <Route path="/add-exercise">
            <AddExercisePage />
          </Route>
          <Route path="/edit-exercise">
            <EditExercisePage exerciseToEdit={exerciseToEdit}/>
          </Route>
        </div>
        <Navigation></Navigation>
      </Router>
      
      <br></br>
      <footer>© 2022 Angela Montez</footer>
    </div>
  );
}

export default App;