import React from "react";
export default function Footer() {
    return (
        <div>
            <footer className="w-full bg-gray-900 text-white py-12">
                <div className="container mx-auto px-6 grid md:grid-cols-4 gap-8 text-sm">
                    <div>
                        <h3 className="text-lg font-semibold text-[#E6E6FA]">About communion</h3>
                        <p className="mt-2 text-gray-400">
                            Your all-in-one communication platform for secure and efficient conversations.
                        </p>
                    </div>
                    <div>
                        <h3 className="text-lg font-semibold text-[#E6E6FA]">Features</h3>
                        <ul className="mt-2 space-y-2">
                            <li className="hover:text-gray-300 cursor-pointer">Instant Messaging</li>
                            <li className="hover:text-gray-300 cursor-pointer">HD Video Calls</li>
                            <li className="hover:text-gray-300 cursor-pointer">Group Chats</li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-lg font-semibold text-[#E6E6FA]">Quick Links</h3>
                        <ul className="mt-2 space-y-2">
                            <li><a href="/support" className="hover:text-gray-300">Help & Support</a></li>
                            <li><a href="/faq" className="hover:text-gray-300">FAQs</a></li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-lg font-semibold text-[#E6E6FA]">Contact Us</h3>
                        <p className="mt-2 text-gray-400">Email: ssathwikachette@gmail.com</p>
                        <p className="text-gray-400">Phone: +1 234 567 890</p>
                    </div>
                </div>
                <div className="text-center text-gray-500 mt-8 border-t border-gray-700 pt-4">
                    © {new Date().getFullYear()} ConnectNow. All rights reserved.
                </div>
            </footer>
        </div>
    )
}