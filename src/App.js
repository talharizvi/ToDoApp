import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { createEntry, selectGoals } from './features/goal/goalSlice';

function App() {
  const goals = useSelector(selectGoals)
  const dispatch = useDispatch()
  const [goalName, setGoalName] = useState('')
  console.log('goals',goals)


  const handleGoalChange = (event)=>{
    setGoalName(event.target.value)
  }

  const handleSaveGoal = (event) => {
    event.preventDefault(); // Prevent form submission
    if (goalName.trim() !== '') {
      dispatch(createEntry(goalName));
      setGoalName(''); // Clear the input field
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <label>Goals List</label>
        {goals.length > 0 ? (
          <ol>
            {goals.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ol>
        ) : (
          <p>No goals yet.</p>
        )}
        <form onSubmit={handleSaveGoal}>
          <label>Enter Goal</label>
          <input type="text" value={goalName} onChange={handleGoalChange} />
          <button type="submit">Save</button>
        </form>
      </header>
    </div>
  );
}

export default App;
