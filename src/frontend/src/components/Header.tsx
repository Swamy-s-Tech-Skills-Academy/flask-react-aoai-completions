import { useState } from "react";

const Header: React.FC = () => {
    const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);

    return (
        <header className="bg-blue-600 text-white min-h-[50px] flex justify-between items-center px-4 shadow-md font-inter">
            <h1 className="text-xl font-bold">ChatGPT Clone</h1>
            <button
                className="bg-white text-blue-600 px-4 py-1 rounded"
                onClick={() => setIsLoggedIn(!isLoggedIn)}
            >
                {isLoggedIn ? "Logout" : "Login"}
            </button>
        </header>
    );
};

export default Header;
