import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

export default function Login() {
    const [formData, setFormData] = useState({
        email: "",
        password: "",
    });

    const [error, setError] = useState("");
    const navigate = useNavigate();

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!formData.email || !formData.password) {
            setError("Both fields are required!");
            return;
        }
        setError("");



        navigate("/");
    };

    return (
        <div className="flex justify-center items-center min-h-screen w-full bg-gray-100">
            <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
                <h2 className="text-2xl font-bold text-center text-[#4B0082]">Login to Your Account</h2>
                {error && <p className="text-red-500 text-center mt-2">{error}</p>}
                <form onSubmit={handleSubmit} className="mt-6">
                    <div>
                        <label className="block text-gray-700 font-medium">Email</label>
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            className="w-full px-4 py-2 mt-2 border rounded-md focus:ring-2 focus:ring-[#4B0082] outline-none"
                            placeholder="Enter your email"
                        />
                    </div>

                    <div className="mt-4">
                        <label className="block text-gray-700 font-medium">Password</label>
                        <input
                            type="password"
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                            className="w-full px-4 py-2 mt-2 border rounded-md focus:ring-2 focus:ring-[#4B0082] outline-none"
                            placeholder="Enter your password"
                        />
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-[#4B0082] text-white py-2 px-4 mt-6 rounded-md font-semibold hover:bg-[#3A0066] transition"
                    >
                        Login
                    </button>
                </form>

                <p className="mt-4 text-center text-gray-700">
                    Don't have an account?{" "}
                    <Link to="/signup" className="text-[#4B0082] font-bold">
                        Sign Up
                    </Link>
                </p>
            </div>
        </div>
    );
}
