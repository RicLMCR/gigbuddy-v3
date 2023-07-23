import React, { useEffect, useState } from 'react';
import { fetchEventData } from './components/api/api';
import { Venue } from './types/types';
import './App.css';
import ApiExample from './Pages/ApiExample';

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
