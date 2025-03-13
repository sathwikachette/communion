import { useState } from "react";
import EventForm from "../../components/eventform";
import Footer from "../../components/footer"; // Ensure Footer is correctly imported

const CreateEvent = () => {
    const [submittedEvent, setSubmittedEvent] = useState(null);

    const handleEventSubmit = (eventData) => {
        setSubmittedEvent(eventData);
    };

    return (
        <div className="min-h-screen flex flex-col bg-gray-200">
            <div className="w-full max-w-4xl mx-auto p-10 flex-grow">
                <h1 className="text-3xl font-bold text-blue-600 mb-8">
                    Fill in the details to create a New Event
                </h1>

                <div className="bg-white p-8 rounded-lg shadow-lg">
                    <EventForm onSubmit={handleEventSubmit} />
                </div>

                {submittedEvent && (
                    <div className="mt-8 bg-white p-6 rounded-lg shadow-lg">
                        <h2 className="text-2xl font-semibold text-gray-800">Event Details</h2>
                        <div className="mt-4 space-y-4">
                            <p><strong>Name:</strong> {submittedEvent.name}</p>
                            <p><strong>Description:</strong> {submittedEvent.description}</p>
                            <p><strong>Date:</strong> {submittedEvent.date}</p>
                            <p><strong>Location:</strong> {submittedEvent.location}</p>
                            <p><strong>Category:</strong> {submittedEvent.category}</p>
                            {submittedEvent.image && (
                                <div className="mt-4">
                                    <img
                                        src={URL.createObjectURL(submittedEvent.image)}
                                        alt="Event"
                                        className="w-full h-64 object-cover rounded-lg"
                                    />
                                </div>
                            )}
                        </div>
                    </div>
                )}
            </div>

            {/* Footer always stays at the bottom */}
            <Footer />
        </div>
    );
};

export default CreateEvent;
