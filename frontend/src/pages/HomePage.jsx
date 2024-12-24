import React, { useState, useEffect } from "react";
import EventCard from "../components/EventCard";
import api from "../api/api"; 
import { format } from "date-fns";

const HomePage = () => {
  const [events, setEvents] = useState([]);
  const [filteredEvents, setFilteredEvents] = useState([]);
  const [locations, setLocations] = useState([]); 
  const [loading, setLoading] = useState(true);

  const [selectedTitle, setSelectedTitle] = useState("");
  const [selectedLocation, setSelectedLocation] = useState("");
  const [selectedDate, setSelectedDate] = useState("");

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await api.get("/events/all");
        const fetchedEvents = response.data;
        setEvents(fetchedEvents);
        setFilteredEvents(fetchedEvents); 

        const uniqueLocations = [
          ...new Set(fetchedEvents.map((event) => event.location)),
        ];
        setLocations(uniqueLocations); 
      } catch (error) {
        console.error("Error fetching events:", error);
      } finally {
        setLoading(false); 
      }
    };

    fetchEvents();
  }, []);

  useEffect(() => {
    handleFilterByTitle();
  }, [selectedTitle]);

  const handleFilterByTitle = () => {
    let filtered = events;

    if (selectedTitle) {
      filtered = filtered.filter((event) =>
        event.title.toLowerCase().includes(selectedTitle.toLowerCase())
      );
    }

    setFilteredEvents(filtered);
  };

  const handleFilterByLocationAndDate = () => {
    let filtered = events;

    if (selectedLocation) {
      filtered = filtered.filter((event) =>
        event.location.toLowerCase().includes(selectedLocation.toLowerCase())
      );
    }

    if (selectedDate) {
      filtered = filtered.filter(
        (event) => format(new Date(event.date), "yyyy-MM-dd") === selectedDate
      );
    }

    setFilteredEvents(filtered);
  };

  const clearFilters = () => {
    setSelectedTitle(""); 
    setSelectedLocation(""); 
    setSelectedDate(""); 
    setFilteredEvents(events); 
  };

  if (loading) {
    return <div>Loading events...</div>;
  }

  return (
    <div className="container mx-auto mt-8">
      <h1 className="text-3xl font-bold mb-8 text-gray-800 text-center">Upcoming Events</h1>

      <div className="flex gap-4 mb-8 p-4 border rounded-lg shadow-sm bg-white">
        <input
          type="text"
          id="title"
          value={selectedTitle}
          onChange={(e) => setSelectedTitle(e.target.value)}
          placeholder="Search by event title"
          className="flex-1 p-2 border rounded-md text-gray-700"
        />

        <select
          id="location"
          value={selectedLocation}
          onChange={(e) => setSelectedLocation(e.target.value)}
          className="w-48 p-2 border rounded-md text-gray-700"
        >
          <option value="">Select Location</option>
          {locations.map((location, index) => (
            <option key={index} value={location}>
              {location}
            </option>
          ))}
        </select>

        <input
          type="date"
          id="date"
          value={selectedDate}
          onChange={(e) => setSelectedDate(e.target.value)}
          className="w-48 p-2 border rounded-md text-gray-700"
        />

        <button
          onClick={handleFilterByLocationAndDate}
          className="bg-[#093054] text-white px-6 py-2 rounded-md hover:bg-gray-800 whitespace-nowrap"
        >
          Search
        </button>

        <button
          onClick={clearFilters}
          className="bg-gray-300 text-black px-6 py-2 rounded-md hover:bg-gray-400 whitespace-nowrap"
        >
          Remove Filter
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 pb-10">
        {filteredEvents.length > 0 ? (
          filteredEvents.map((event) => (
            <EventCard
              key={event._id}
              id={event._id}
              title={event.title}
              date={event.date}
              location={event.location}
              imageUrl={event.imageUrl}
            />
          ))
        ) : (
          <p>No events available</p>
        )}
      </div>
    </div>
  );
};

export default HomePage;
