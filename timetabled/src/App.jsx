import './App.css';
import Calendar from './components/Calendar';

const App = () => {

  return (
    <div className="App">
      <h1>Weekly Schedule</h1>
      <h2>This week's schedule to ensure maximum productivity.</h2>
      <Calendar />
    </div>
  )
}

export default App