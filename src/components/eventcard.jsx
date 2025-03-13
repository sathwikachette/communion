import React from "react";

const EventCard = ({ title, date, location, description, image }) => {
    return (
        <div className="bg-white shadow-md rounded-lg overflow-hidden w-full sm:w-[300px]">
            <img src={image} alt={title} className="w-full h-48 object-cover" />
            <div className="p-4">
                <h3 className="text-xl font-semibold text-gray-800">{title}</h3>
                <p className="text-gray-600 mt-1">{date} | {location}</p>
                <p className="text-gray-700 mt-2 text-sm">{description}</p>
                <button className="mt-4 bg-blue-600 text-white px-4 py-2 rounded-lg w-full hover:bg-blue-700">
                    View Details
                </button>
            </div>
        </div>
    );
};

export default EventCard;
