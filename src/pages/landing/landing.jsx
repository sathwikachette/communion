import { Link } from "react-router-dom";
import { useEffect } from "react";
import Footer from "../../components/footer";
import { useNavigate } from "react-router-dom";

export default function Landing() {
    useEffect(() => {
        document.documentElement.style.overflowX = "hidden";
        document.body.style.margin = "0";
        document.body.style.padding = "0";
    }, []);
    const navigate = useNavigate();
    return (
        <div className="w-full h-full overflow-hidden text-black bg-white">
            <header className="w-full flex flex-col md:flex-row items-center justify-between px-10 md:px-20 py-16 bg-white text-black">


                <div className="md:w-1/2 text-left">
                    <h1 className="text-4xl md:text-6xl font-bold leading-tight">Connect Communities</h1>
                    <p className="mt-4 text-lg text-gray-700">Bridging gaps between faiths with tech and a dash of fun!</p>
                    <div className="mt-6 flex items-center space-x-4">
                        <span className="bg-blue-200 text-blue-900 text-sm px-3 py-1 rounded-full font-semibold">Unlimited Advantages</span>
                    </div>
                    <Link to="/about">
                        <button className="mt-6 bg-black text-white px-6 py-3 rounded-lg font-semibold hover:bg-gray-800 transition"  >
                            View Our Services →
                        </button>
                    </Link>
                </div>


                <div className="md:w-1/2 flex justify-center md:justify-end mt-10 md:mt-0">
                    <div className="grid grid-cols-3 gap-4">
                        <img src="/src/pages/landing/communitiespics/community1.jpeg" alt="Community 1" className="rounded-xl w-24 h-24 md:w-60 md:h-60 object-cover" />
                        <img src="/src/pages/landing/communitiespics/community2.jpg" alt="Community 2" className="rounded-xl w-24 h-24 md:w-60 md:h-60 object-cover" />
                        <img src="/src/pages/landing/communitiespics/community3.avif" alt="Community 3" className="rounded-xl w-24 h-24 md:w-60 md:h-60 object-cover" />
                    </div>
                </div>
            </header>


            <section className="w-full text-center py-16 bg-gray-100">
                <h2 className="text-3xl font-bold">Unite, Innovate, Connect, Inspire Together</h2>
                <p className="mt-4 text-lg text-gray-700">Join us to be part of a community where spirituality meets innovation.</p>
            </section>



            <section className="w-full h-screen flex flex-col items-center justify-center text-center bg-white"
                style={{ backgroundImage: "url('/src/pages/landing/communitiespics/land2.avif')" }}
            >
                <h2 className="text-3xl font-bold text-[600%]">Why Choose Us?</h2>
                <p className="mt-4 text-[100%] text-lg text-gray-700">A modern platform for real-time messaging, voice, and video calls.</p>
            </section>



            <div className="w-full h-full overflow-hidden text-black bg-white">

                <main className="max-w-4xl mx-auto mt-16 text-center">
                    <h2 className="text-4xl font-bold">
                        Uniting Communities Through <br />
                        <span className="text-blue-400">✨ Inspiring Events</span>
                    </h2>
                    <p className="mt-4 text-gray-300">
                        At Communion, we're committed to organizing events that foster connections, inspire personal and professional growth, and bring people together to share meaningful experiences.
                    </p>
                    <div className="flex justify-center items-center mt-6">
                        <div className="flex -space-x-2">
                            <img src="https://randomuser.me/api/portraits/women/45.jpg" className="w-10 h-10 rounded-full border-2 border-gray-200" alt="user" />
                            <img src="https://randomuser.me/api/portraits/men/32.jpg" className="w-10 h-10 rounded-full border-2 border-gray-200" alt="user" />
                            <img src="https://randomuser.me/api/portraits/women/28.jpg" className="w-10 h-10 rounded-full border-2 border-gray-200" alt="user" />
                        </div>
                        <p className="ml-4 text-gray-400">Trusted by Over 12k+ people <br /> <span className="text-white font-semibold">15k+ Individuals Worldwide</span></p>
                    </div>
                    <button className="mt-6 px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
                        onClick={() => navigate("/events")}
                    >
                        Explore Events →
                    </button>
                </main>

                <section className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-5xl mx-auto">
                    <img src="/src/pages/landing/communitiespics/con1.jpg" className="rounded-lg" alt="event" />
                    <img src="/src/pages/landing/communitiespics/con2.jpg" className="rounded-lg" alt="event" />
                    <img src="/src/pages/landing/communitiespics/con3.jpg" className="rounded-lg" alt="event" />
                    <img src="/src/pages/landing/communitiespics/con4.jpg" className="rounded-lg" alt="event" />
                </section>
            </div>






            <section className="w-full h-screen bg-white text-center flex flex-col justify-center"
                style={{ backgroundImage: "url('src/pages/landing/communitiespics/community1.jpeg')" }}
            >
                <h2 className="text-3xl font-bold">Features</h2>
                <div className="mt-8 grid md:grid-cols-3 gap-8 px-6">
                    {["Instant Messaging", "HD Video Calls", "Secure & Private"].map((feature, index) => (
                        <div key={index} className="bg-gray-200 p-6 rounded-lg shadow-md w-full">
                            <Link to="/signup">
                                <button className="mt-6 bg-[#1D4ED8] text-black px-6 py-3 rounded-lg font-semibold hover:bg-white transition">
                                    {feature}
                                </button>
                            </Link>
                            <p className="mt-2 text-gray-600">A brief description of {feature.toLowerCase()}.</p>
                        </div>
                    ))}
                </div>
            </section>


            <section className="w-full h-screen flex flex-col items-center justify-center bg-white text-black text-center"
                style={{ backgroundImage: "url('src/pages/landing/communitiespics/land3.jpg')" }}
            >
                <h2 className="text-3xl font-bold">Start Communicating Today!</h2>
                <p className="mt-4 text-lg">Join millions of users worldwide.</p>
                <Link to="/signup">
                    <button className="mt-6 bg-[#E6E6FA] text-black px-6 py-3 rounded-lg font-semibold hover:bg-white transition">
                        Sign Up Now
                    </button>
                </Link>
            </section>

            <Footer />

        </div>
    );
}
