//React imports
import { useEffect, useState } from 'react';

//API fetch imports
import { fetchEventData } from './api/fetch';

//Type imports
import { Venue } from './types';

//React Router imports
import { BrowserRouter, Routes, Route } from 'react-router-dom';

//Page imports
import Home from './Pages/Home';
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
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/api-example" element={<ApiExample event={event} />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
