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

export type SignInFormValues = {
  username: string;
  firstname: string;
  lastname: string;
  email: string;
  password: string;
};
