import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../api/api";
import toast from 'react-hot-toast';

const CreateEvent = () => {
    const [eventData, setEventData] = useState({
        title: "",
        description: "",
        date: "",
        location: "",
        maxAttendees: "",
    });

    const [image, setImage] = useState(null);
    const [error, setError] = useState("");
    const navigate = useNavigate();

    const handleChange = (e) => {
        setEventData({ ...eventData, [e.target.name]: e.target.value });
    };

    const handleFileChange = (e) => {
        setImage(e.target.files[0]);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (
            !eventData.title ||
            !eventData.description ||
            !eventData.date ||
            !eventData.location ||
            !eventData.maxAttendees
        ) {
            setError("Please fill in all required fields.");
            toast.error("Please fill in all required fields.");
            return;
        }

        const formData = new FormData();
        formData.append("title", eventData.title);
        formData.append("description", eventData.description);
        formData.append("date", eventData.date);
        formData.append("location", eventData.location);
        formData.append("maxAttendees", eventData.maxAttendees);
        if (image) {
            formData.append("image", image);
        }

        try {
            const response = await api.post("/events/create", formData, {
                headers: {
                    "Content-Type": "multipart/form-data",
                },
            });
            console.log("Event created successfully:", response.data);
            toast.success('Event created successfully!');
            navigate("/my-events");
        } catch (error) {
            console.error("Error creating event:", error.response || error.message);
            const errorMessage = error.response?.data?.message || "An error occurred while creating the event.";
            setError(errorMessage);
            toast.error(errorMessage);
        }
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100 py-8">
            <div className="w-full max-w-lg px-6 py-8 bg-white shadow-lg rounded-lg">
                <h2 className="text-3xl font-bold text-[#dc363c] mb-8 text-center">Create Event</h2>
                {error && <p className="text-red-500 text-center mb-4">{error}</p>}
                <form onSubmit={handleSubmit} encType="multipart/form-data">
                    <div className="mb-6">
                        <label className="block text-gray-700 font-semibold mb-2">Event Title</label>
                        <input
                            type="text"
                            name="title"
                            value={eventData.title}
                            onChange={handleChange}
                            className="w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-orange-500"
                            placeholder="Enter event title"
                            required
                        />
                    </div>
                    <div className="mb-6">
                        <label className="block text-gray-700 font-semibold mb-2">Event Description</label>
                        <textarea
                            name="description"
                            value={eventData.description}
                            onChange={handleChange}
                            className="w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-orange-500"
                            placeholder="Enter event description"
                            required
                        />
                    </div>
                    <div className="mb-6 grid grid-cols-2 gap-4">
                        <div>
                            <label className="block text-gray-700 font-semibold mb-2">Event Date</label>
                            <input
                                type="date"
                                name="date"
                                value={eventData.date}
                                onChange={handleChange}
                                className="w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-orange-500"
                                required
                            />
                        </div>
                        <div>
                            <label className="block text-gray-700 font-semibold mb-2">Max Attendees</label>
                            <input
                                type="number"
                                name="maxAttendees"
                                value={eventData.maxAttendees}
                                onChange={handleChange}
                                className="w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-orange-500"
                                placeholder="Enter max attendees"
                                required
                            />
                        </div>
                    </div>
                    <div className="mb-6">
                        <label className="block text-gray-700 font-semibold mb-2">Location</label>
                        <input
                            type="text"
                            name="location"
                            value={eventData.location}
                            onChange={handleChange}
                            className="w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-orange-500"
                            placeholder="Enter location"
                            required
                        />
                    </div>
                    <div className="mb-6">
                        <label className="block text-gray-700 font-semibold mb-2">Event Image</label>
                        <input
                            type="file"
                            onChange={handleFileChange}
                            className="w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-orange-500"
                            accept="image/*"
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full py-3 bg-[#093054] text-white font-semibold rounded-md shadow-md hover:bg-[#102144] transition duration-200"
                    >
                        Create Event
                    </button>
                </form>
            </div>
        </div>
    );
};

export default CreateEvent;
