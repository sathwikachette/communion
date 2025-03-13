import { useState } from "react";
import Footer from "./footer";

const EventForm = ({ onSubmit }) => {
    const [formData, setFormData] = useState({
        name: "",
        description: "",
        date: "",
        location: "",
        category: "",
        image: null,
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        setFormData((prev) => ({ ...prev, image: file }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(formData);
    };

    return (
        <div className="min-h-screen flex flex-col bg-gray-200">
            <div className="w-full max-w-4xl mx-auto px-6 py-10 flex-grow">
                <h1 className="text-3xl font-bold text-center text-blue-600 mb-8">
                    Create a New Event
                </h1>
                <form
                    onSubmit={handleSubmit}
                    className="w-full bg-white shadow-lg rounded-lg p-10"
                >
                    {/* Event Image Upload */}
                    <div className="flex flex-col space-y-2">
                        <label className="text-gray-700 text-lg font-medium">Event Image</label>
                        <div className="border-2 border-dashed border-gray-400 bg-gray-100 rounded-lg p-6 flex items-center justify-center h-40">
                            <input type="file" accept="image/*" onChange={handleImageChange} className="hidden" id="upload-image" />
                            <label htmlFor="upload-image" className="cursor-pointer text-gray-500">
                                {formData.image ? "Image Uploaded" : "Upload Cover Image"}
                            </label>
                        </div>
                    </div>

                    {/* Event Name */}
                    <div className="flex flex-col">
                        <label className="text-gray-700 text-lg font-medium">Event Name</label>
                        <input
                            type="text"
                            name="name"
                            placeholder="Enter event name"
                            value={formData.name}
                            onChange={handleChange}
                            className="border border-gray-300 p-3 rounded-lg text-gray-700 w-full text-lg"
                        />
                    </div>

                    {/* Event Description */}
                    <div className="flex flex-col">
                        <label className="text-gray-700 text-lg font-medium">Description</label>
                        <textarea
                            name="description"
                            placeholder="Describe your event"
                            value={formData.description}
                            onChange={handleChange}
                            className="border border-gray-300 p-3 rounded-lg text-gray-700 w-full text-lg h-32"
                        />
                    </div>

                    {/* Date and Location - Two Column Layout */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="flex flex-col">
                            <label className="text-gray-700 text-lg font-medium">Date</label>
                            <input
                                type="date"
                                name="date"
                                value={formData.date}
                                onChange={handleChange}
                                className="border border-gray-300 p-3 rounded-lg text-gray-700 w-full text-lg"
                            />
                        </div>

                        <div className="flex flex-col">
                            <label className="text-gray-700 text-lg font-medium">Location</label>
                            <input
                                type="text"
                                name="location"
                                placeholder="Enter location"
                                value={formData.location}
                                onChange={handleChange}
                                className="border border-gray-300 p-3 rounded-lg text-gray-700 w-full text-lg"
                            />
                        </div>
                    </div>

                    {/* Category Selection */}
                    <div className="flex flex-col">
                        <label className="text-gray-700 text-lg font-medium">Category</label>
                        <select
                            name="category"
                            value={formData.category}
                            onChange={handleChange}
                            className="border border-gray-300 p-3 rounded-lg text-gray-700 w-full text-lg"
                        >
                            <option value="">Select Category</option>
                            <option value="Music">Music</option>
                            <option value="Sports">Sports</option>
                            <option value="Tech">Tech</option>
                            <option value="Art">Art</option>
                        </select>
                    </div>

                    {/* Submit Button */}
                    <button
                        type="submit"
                        className="bg-blue-600 text-white py-3 rounded-lg text-lg font-semibold w-full hover:bg-blue-700 mt-6"
                    >
                        Submit Event
                    </button>
                </form>
            </div>
        </div>
    );
};

export default EventForm;
