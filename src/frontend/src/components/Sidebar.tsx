import React from "react";
import { PlusIcon } from "@heroicons/react/24/solid";

const Sidebar: React.FC = () => {
    return (
        <aside className="bg-blue-800 w-64 flex flex-col text-white p-4">
            {/* New Chat Button */}
            <button className="flex items-center bg-blue-500 hover:bg-blue-700 py-2 px-4 rounded mb-4 font-semibold w-full">
                <PlusIcon className="h-5 w-5 mr-2" />
                <span>New Chat</span>
            </button>

            {/* Placeholder Chat History */}
            <div className="flex-grow space-y-2">
                <div className="bg-blue-500 hover:bg-blue-700 rounded p-2">Chat 1</div>
                <div className="bg-blue-500 hover:bg-blue-700 rounded p-2">Chat 2</div>
                <div className="bg-blue-500 hover:bg-blue-700 rounded p-2">Chat 3</div>
            </div>

            {/* Logout Button at Bottom */}
            <button className="mt-4 bg-red-500 hover:bg-red-700 py-2 px-4 rounded font-semibold">
                Logout
            </button>
        </aside>
    );
};

export default Sidebar;
