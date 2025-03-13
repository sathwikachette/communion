import React from "react";
import Footer from "../../components/footer";

const About = () => {
    return (
        <div className="bg-gray-100 min-h-screen flex flex-col">
            {/* Main Content */}
            <div className="flex-grow flex items-center justify-center px-6 py-12">
                <div className="max-w-6xl w-full flex flex-col md:flex-row bg-white shadow-lg rounded-lg overflow-hidden">

                    {/* Image Section */}
                    <div className="md:w-1/2">
                        <img
                            src="/src/pages/navcomp/comppics/aboutpic.png"
                            alt="Community Event"
                            className="w-full h-full object-cover"
                        />
                    </div>

                    {/* Content Section */}
                    <div className="md:w-1/2 p-8 flex flex-col justify-center">
                        <h1 className="text-4xl font-bold text-gray-800">About Us</h1>
                        <p className="mt-4 text-gray-600 text-lg">
                            Learn more about our mission, vision, and the community we build.
                        </p>

                        <div className="mt-6">
                            <h2 className="text-2xl font-semibold text-gray-800">Who Are We?</h2>
                            <p className="mt-2 text-gray-600">
                                At <strong>Communion</strong>, we believe in the power of bringing people together.
                                Our platform is dedicated to organizing events that foster meaningful
                                connections, inspire personal and professional growth, and create
                                lasting memories.
                            </p>
                        </div>

                        <div className="mt-6">
                            <h2 className="text-2xl font-semibold text-gray-800">Our Mission</h2>
                            <p className="mt-2 text-gray-600">
                                Our mission is to unite communities through inspiring events. We aim to:
                            </p>
                            <ul className="list-disc ml-6 mt-2 text-gray-600">
                                <li>Foster collaboration and engagement.</li>
                                <li>Provide valuable learning experiences.</li>
                                <li>Build an inclusive and supportive community.</li>
                            </ul>
                        </div>

                        <div className="mt-6">
                            <h2 className="text-2xl font-semibold text-gray-800">Our Vision</h2>
                            <p className="mt-2 text-gray-600">
                                We envision a world where events become catalysts for transformation.
                                Whether you're an entrepreneur, a creative, a student, or a professional,
                                Communion provides the perfect platform to connect, learn, and make an impact.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Footer - Sticks to Bottom */}
            <Footer />
        </div>
    );
};

export default About;
