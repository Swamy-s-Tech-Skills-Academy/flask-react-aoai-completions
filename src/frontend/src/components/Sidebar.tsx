import React from "react";
import {
    faPlus,
    faSignOutAlt,
    faSignInAlt
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Sidebar: React.FC = () => {
    return (
        <aside className="bg-gray-300 w-64 flex flex-col text-white p-4">
            {/* New Chat Button */}
            <button className="flex items-center bg-gray-500 hover:bg-gray-700 transition-colors duration-200 py-2 px-4 rounded mb-4 font-semibold w-full">
                <FontAwesomeIcon icon={faPlus} />
                &nbsp; New Chat
            </button>

            {/* Placeholder Chat History */}
            <div className="flex-grow space-y-2 overflow-y-auto">
                <div className="bg-gray-500 hover:bg-gray-700 transition-colors duration-200 rounded p-2 cursor-pointer">
                    Chat 1
                </div>
                <div className="bg-gray-500 hover:bg-gray-700 transition-colors duration-200 rounded p-2 cursor-pointer">
                    Chat 2
                </div>
                <div className="bg-gray-500 hover:bg-gray-700 transition-colors duration-200 rounded p-2 cursor-pointer">
                    Chat 3
                </div>
            </div>

            <button className="mt-4 bg-emerald-400 hover:bg-emerald-600 py-2 px-4 rounded font-semibold w-full">
                <FontAwesomeIcon icon={faSignInAlt} />
                &nbsp; Login
            </button>

            {/* Logout Button at Bottom */}
            <button className="mt-4 bg-red-400 hover:bg-red-600 transition-colors duration-200 py-2 px-4 rounded font-semibold">
                <FontAwesomeIcon icon={faSignOutAlt} />
                &nbsp; Logout
            </button>
        </aside>
    );
};

export default Sidebar;
