import React, { useEffect, useState } from 'react';
import './App.css';

type ApiProps = {
  id: string;
  name: string;
  dates?: any;
  _embedded?: any;
  venues: any;
};

const App = () => {
  const [event, setEvent] = useState([]);

  useEffect(() => {
    fetch(
      'https://app.ticketmaster.com/discovery/v2/events.json?classificationName=music&dmaId=605&apikey=K9r7IEQ5cw6loi2dujLgMfzyaMb9RIHs'
    )
      .then((response) => response.json())
      .then((data) => {
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
