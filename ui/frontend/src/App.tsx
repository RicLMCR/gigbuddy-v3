//React imports
import { useEffect, useState } from 'react';

//API fetch imports
import { fetchEventData } from './api/fetch';

//Type imports
import { Venue } from './types';

//React Router imports

//Page imports
import ApiExample from './Pages/ApiExample';

//Style imports
import './App.css';

const App = () => {
  const [event, setEvent] = useState<Venue[]>([]);

  useEffect(() => {
    fetchEventData().then((data) => {
      setEvent(data._embedded.events);
      console.log(data._embedded.events);
    });
  }, []);

  return (
    <>
      <ApiExample event={event} />
    </>
  );
};

export default App;
