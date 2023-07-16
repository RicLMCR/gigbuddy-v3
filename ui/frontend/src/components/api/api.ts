import { ApiProps } from '../../types/types';

//music events in north west of uk
export const fetchEventData = async (): Promise<ApiProps> => {
  try {
    const res = await fetch(
      `https://app.ticketmaster.com/discovery/v2/events.json?classificationName=music&dmaId=605&apikey=${process.env.REACT_APP_API_KEY}`
    );
    if (!res.ok) {
      throw new Error(
        'Failed to fetch music events in the North West area of UK'
      );
    }
    const data: ApiProps = await res.json();
    return data;
  } catch (error) {
    console.error(error);
    throw new Error(
      'Error occured while fetching music events in the North West area of UK'
    );
  }
};
