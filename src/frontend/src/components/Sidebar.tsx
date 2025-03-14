import React from "react";
import {
    faPlus,
    faSignOutAlt,
    faSignInAlt
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Sidebar: React.FC = () => {
    return (
        <aside className="bg-gradient-to-b from-gray-400 to-gray-900 w-64 flex flex-col text-gray-200 p-5 min-h-screen rounded-r-lg shadow-lg">
            {/* New Chat Button */}
            <button className="flex items-center justify-center bg-gray-600 hover:bg-gray-500 transition-colors duration-200 py-3 px-5 rounded-lg mb-5 font-semibold w-full shadow-md">
                <FontAwesomeIcon icon={faPlus} />
                <span className="ml-3">New Chat</span>
            </button>

            {/* Chat History (Fixed Scroll Issue) */}
            <div className="flex-grow space-y-3 overflow-y-auto overflow-x-hidden">
                {["Chat 1", "Chat 2", "Chat 3"].map((chat, index) => (
                    <div
                        key={index}
                        className="bg-gray-600 hover:bg-gray-500 transition-colors duration-200 rounded-lg p-3 cursor-pointer shadow-sm border border-gray-500"
                    >
                        {chat}
                    </div>
                ))}
            </div>

            {/* Login & Logout Buttons */}
            <button className="flex items-center justify-center w-full bg-emerald-500 hover:bg-emerald-600 text-white font-semibold py-3 px-5 rounded-lg transition-all mt-5 shadow-lg hover:shadow-emerald-500/50">
                <FontAwesomeIcon icon={faSignInAlt} className="mr-2" />
                Login
            </button>

            <button className="flex items-center justify-center w-full bg-red-500 hover:bg-red-600 text-white font-semibold py-3 px-5 rounded-lg transition-all mt-3 shadow-lg hover:shadow-red-500/50">
                <FontAwesomeIcon icon={faSignOutAlt} className="mr-2" />
                Logout
            </button>
        </aside>
    );
};

export default Sidebar;
