import { useEffect, useState } from 'react';
import { fetchEventData } from './components/api/api';
import { ApiProps } from './types/types';
import './App.css';

const App = () => {
  const [event, setEvent] = useState([]);

  useEffect(() => {
    fetchEventData().then((data) => {
      setEvent(data._embedded.events);
      console.log(data._embedded.events);
    });
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Gig Buddy V3</h1>
        <h2>Music events in the north west area of UK (20 per page)</h2>
        <div>
          {event.map((event: ApiProps) => (
            <div key={event.id}>
              <p>{event.name}</p>
              <small>{event._embedded.venues[0].city.name}</small>
            </div>
          ))}
        </div>
      </header>
    </div>
  );
};

export default App;
