// import { useState } from "react";

const Header: React.FC = () => {
    // const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);

    return (
        <header className="bg-gray-200 text-Navy-800 h-12 flex justify-between items-center px-4 shadow-md font-inter">
            <h1 className="text-xl font-bold tracking-wide">Single Turn ChatGPT Clone</h1>
            {/* <button
                className="bg-white text-blue-600 px-4 py-1 rounded transition duration-200 hover:bg-gray-200 active:scale-95"
                onClick={() => setIsLoggedIn(!isLoggedIn)}
            >
                {isLoggedIn ? "Logout" : "Login"}
            </button> */}
        </header>
    );
};

export default Header;
