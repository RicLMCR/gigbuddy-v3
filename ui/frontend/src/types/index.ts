export interface Venue {
  id: string;
  name: string;
  city: {
    name: string;
  };
}

export interface ApiProps {
  id: string;
  name: string;

  _embedded: {
    events: Venue[];
  };
}
