import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { HiCalendar, HiUserGroup, HiBadgeCheck, HiLocationMarker } from "react-icons/hi";
import { AuthContext } from "../context/AuthContext";

const BASE_URL = "http://localhost:5000";

const EventCard = ({
    id,
    title,
    date,
    location,
    imageUrl,
    attendeesCount,
}) => {
    const { user } = useContext(AuthContext);
    const navigate = useNavigate();
    const fullImageUrl = `${BASE_URL}${imageUrl}`;
    const formattedDate = new Date(date).toLocaleDateString("en-US", {
        weekday: "short",
        year: "numeric",
        month: "short",
        day: "numeric",
    });

    const handleViewDetails = () => {
        if (id) {
            navigate(`/event/${id}`);
        } else {
            console.error(
                "Event ID is undefined. Check if the ID is passed correctly."
            );
        }
    };
    return (
        <div 
            className="bg-white border border-gray-200 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 ease-in-out p-4 cursor-pointer"
            onClick={handleViewDetails}
        >
            {imageUrl && (
                <img
                    src={fullImageUrl}
                    alt={title}
                    className="w-full h-40 object-cover rounded-t-lg mb-4"
                />
            )}
            <div className="p-2">
                <h2 className="text-lg font-bold text-gray-800 mb-2 truncate hover:text-blue-600">
                    {title}
                </h2>
                
                <div className="flex items-center text-gray-600 text-sm mb-4">
                    <HiCalendar className="mr-2 text-gray-500" />
                    <p>
                        {formattedDate} 
                    </p>
                </div>
                <div className="flex items-center text-gray-600 text-sm mb-4">
                    <HiLocationMarker className="mr-2 text-gray-500" />
                    <p>
                        {location} 
                    </p>
                </div>

                <div className="flex justify-between items-center text-gray-600 text-sm">
                    <div className="flex items-center">
                        <HiUserGroup className="mr-1" />
                        <p>{attendeesCount} going</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default EventCard;