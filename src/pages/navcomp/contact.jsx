import React from "react";
import { useForm } from "react-hook-form";
import Footer from "../../components/footer";

const Contact = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = (data) => {
        console.log("Form Submitted:", data);
        alert("Message sent successfully!");
    };

    return (
        <div className="bg-gray-100 min-h-screen flex flex-col">


            <div className="flex-grow  flex justify-center items-center p-20">
                <div className="flex flex-col md:flex-row w-full max-w-6xl bg-white rounded-lg shadow-lg overflow-hidden">
                    <div className="w-full md:w-1/2 p-8">
                        <h2 className="text-3xl font-bold text-gray-800">Get in Touch</h2>
                        <p className="mt-2 text-gray-600">We'd love to hear from you!</p>

                        <form onSubmit={handleSubmit(onSubmit)} className="mt-6">
                            <div className="mb-4">
                                <label className="block text-gray-700 font-semibold">Name</label>
                                <input
                                    type="text"
                                    {...register("name", { required: "Name is required" })}
                                    className="w-full mt-2 p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                                />
                                {errors.name && <p className="text-red-500 text-sm">{errors.name.message}</p>}
                            </div>

                            <div className="mb-4">
                                <label className="block text-gray-700 font-semibold">Email</label>
                                <input
                                    type="email"
                                    {...register("email", { required: "Email is required", pattern: /^\S+@\S+\.\S+$/ })}
                                    className="w-full mt-2 p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                                />
                                {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
                            </div>

                            <div className="mb-4">
                                <label className="block text-gray-700 font-semibold">Message</label>
                                <textarea
                                    {...register("message", { required: "Message is required", minLength: 10 })}
                                    rows="4"
                                    className="w-full mt-2 p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                                ></textarea>
                                {errors.message && <p className="text-red-500 text-sm">{errors.message.message}</p>}
                            </div>

                            <button type="submit" className="w-full bg-blue-500 text-white font-semibold p-3 rounded-lg hover:bg-blue-600">
                                Send Message
                            </button>
                        </form>
                    </div>

                    <div className="w-full md:w-1/2 p-6 flex flex-col justify-between">
                        <iframe
                            className="w-full h-64 rounded-lg"
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d30444.415891950537!2d78.3996444743164!3d17.43746268993306!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb925c987f5355%3A0xf5c2b4860fbc1a6f!2sHyderabad%2C%20Telangana%2C%20India!5e0!3m2!1sen!2s!4v1631332213201!5m2!1sen!2s"
                            allowFullScreen
                            loading="lazy"
                        ></iframe>

                        <div className="mt-6 bg-gray-100 p-6 rounded-lg shadow-md">
                            <h3 className="text-2xl font-semibold text-gray-800">Contact Information</h3>
                            <p className="mt-2 text-gray-600"><strong>📍 Address:</strong> Hyderabad, Telangana, India</p>
                            <p className="mt-2 text-gray-600"><strong>📧 Email:</strong> ssathwikachette@gmail.com</p>
                            <p className="mt-2 text-gray-600"><strong>📞 Phone:</strong> +91 98765 43210</p>
                            <p className="mt-2 text-gray-600"><strong>🕒 Open Hours:</strong> 24/7</p>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    );
};

export default Contact;
