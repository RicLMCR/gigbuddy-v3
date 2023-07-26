import { Venue } from '../types';

// Destructure the 'event' prop from the arguments
interface ApiExampleProps {
  event: Venue[];
}

const ApiExample = ({ event }: ApiExampleProps) => {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Gig Buddy V3</h1>
        <h2>Music events in the north west area of UK (20 per page)</h2>
        <div>
          {event.map((venue: Venue) => (
            <div key={venue.id}>
              <p>{venue.name}</p>
              {venue.city && <small>{venue.city.name}</small>}
            </div>
          ))}
        </div>
      </header>
    </div>
  );
};

export default ApiExample;
