import React from "react";
import { PlusIcon } from "@heroicons/react/20/solid";

const Sidebar: React.FC = () => {
    return (
        <aside className="bg-blue-800 w-64 flex flex-col text-white p-4">
            {/* New Chat Button */}
            <button className="bg-blue-600 hover:bg-blue-700 py-2 px-4 rounded mb-4 font-semibold">
                <PlusIcon className="h-5 w-5 mr-2" /> New Chat
            </button>

            {/* Placeholder Chat History */}
            <div className="flex-grow space-y-2 overflow-y-auto">
                <div className="bg-blue-700 hover:bg-blue-600 rounded p-2 cursor-pointer">
                    Chat 1
                </div>
                <div className="bg-blue-700 hover:bg-blue-600 rounded p-2 cursor-pointer">
                    Chat 2
                </div>
                <div className="bg-blue-700 hover:bg-blue-600 rounded p-2 cursor-pointer">
                    Chat 3
                </div>
                {/* Add as many as you need */}
            </div>

            {/* Logout Button at Bottom */}
            <button className="mt-4 bg-red-500 hover:bg-red-600 py-2 px-4 rounded font-semibold">
                Logout
            </button>
        </aside>
    );
};

export default Sidebar;
