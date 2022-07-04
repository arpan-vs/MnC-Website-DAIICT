import React, { useState } from 'react';
import NewsEventContext from './NewsEventContext';


const NewsEventState = (props) => {
  const ID = 5000;
  const host = `http://localhost:${ID}`;
  const Initial = [];
  const [news, setNews] = useState(Initial);
  const [events, setEvents] = useState(Initial);

  // GET all News
  const getNews = async () => {
    // TODO: API call
    const respose = await fetch(
      `${host}/getnews`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const json = await respose.json()
    setNews(json);
  };

  // GET all Events
  const getEvents = async () => {
    // TODO: API call
    const respose = await fetch(
      `${host}/getevent`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const json = await respose.json()
    setEvents(json);
  };

  return (
    <NewsEventContext.Provider value={{news,events,getNews,getEvents}}>
      {props.children}
    </NewsEventContext.Provider>
  )
}

export default NewsEventState
