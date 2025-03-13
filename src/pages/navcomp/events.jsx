import React from "react";
import EventCard from "../../components/eventcard";
import Footer from "../../components/footer";


const eventsData = [
    {
        title: "Christmas Charity Drive",
        date: "Saturday, March 15, 2025",
        location: "Online",
        description: "Join us to make a difference by donating and supporting those in need.",
        image: "/src/pages/navcomp/comppics/event1.jpg",
    },
    {
        title: "Eid-ul-Fitr Celebration",
        date: "Sunday, March 30, 2025",
        location: "5:30 AM IST",
        description: "Celebrate Eid with us in a joyous community gathering.",
        image: "/src/pages/navcomp/comppics/event2.webp",
    },
    {
        title: "Mahavir Jayanti",
        date: "Tuesday, April 10, 2025",
        location: "5:30 AM IST",
        description: "Join us for a spiritual event honoring Mahavir Jayanti.",
        image: "/src/pages/navcomp/comppics/event3.jpg",
    },
    {
        title: "Good Friday Service",
        date: "Friday, April 18, 2025",
        location: "Church Hall",
        description: "A solemn service in remembrance of Good Friday.",
        image: "/src/pages/navcomp/comppics/event4.jpg",
    },
    {
        title: "Easter Sunday Service",
        date: "Sunday, April 20, 2025",
        location: "5:30 AM IST",
        description: "Join us for a special Easter Sunday celebration.",
        image: "/src/pages/navcomp/comppics/event5.webp",
    },
    {
        title: "Diwali Celebration",
        date: "Thursday, October 23, 2025",
        location: "Community Hall, Hyderabad",
        description: "Celebrate the festival of lights with us! Join for prayers, cultural performances, and a grand feast.",
        image: "/src/pages/navcomp/comppics/event6.jpg",
    },
    {
        title: "Dussehra Festival",
        date: "Tuesday, October 7, 2025",
        location: "City Grounds, Mumbai",
        description: "Experience the vibrant Dussehra celebrations with Ram Leela performances and the grand burning of Ravana effigies.",
        image: "/src/pages/navcomp/comppics/event7.jpg",
    },
    {
        title: "Ganesh Chaturthi Celebration",
        date: "Saturday, August 30, 2025",
        location: "Temple Street, Pune",
        description: "Join us for the Ganesh Chaturthi festivities with Aarti, processions, and the grand visarjan ceremony.",
        image: "/src/pages/navcomp/comppics/event8.jpg",
    },

];

const Events = () => {
    return (
        <div className="bg-gray-100 min-h-screen flex flex-col">
            {/* Content Wrapper */}
            <div className="flex-grow px-6 py-12">
                <h1 className="text-4xl font-bold text-center text-gray-800 mb-6 mt-12">
                    Upcoming Events
                </h1>

                {/* Event Cards Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 justify-center">
                    {eventsData.map((event, index) => (
                        <EventCard key={index} {...event} />
                    ))}
                </div>
            </div>

            {/* Footer always at the bottom */}
            <Footer />
        </div>
    );
};

export default Events;
