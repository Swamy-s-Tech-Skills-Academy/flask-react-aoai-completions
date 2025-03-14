import { useState } from "react";

const Chat: React.FC = () => {
    const [prompt, setPrompt] = useState<string>("");
    const [response, setResponse] = useState<string>("Your response will appear here");

    const sendRequest = async () => {
        setResponse("Thinking... 🤔");

        try {
            const res = await fetch("http://127.0.0.1:5009/api/completions", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ prompt }),
            });

            if (!res.ok) {
                setResponse("⚠️ Error fetching response. Please try again later.");
                return;
            }

            const data = await res.text();
            setResponse(data);
        } catch (error: unknown) {
            if (error instanceof Error) {
                setResponse(`🚨 Error fetching response: ${error.message}`);
            } else {
                setResponse("❌ Error fetching response.");
            }
        }
    };

    return (
        <div className="font-inter p-6 text-center w-full max-w-6xl mx-auto border-2 border-gray-400 rounded-lg shadow-lg bg-white flex flex-col h-[80vh]">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                Chat with Azure OpenAI 🤖
            </h2>

            {/* Response Box - Fixed Height with Scroll */}
            <div className="bg-gray-700 text-white p-5 rounded-lg shadow-md text-left border-2 border-blue-800 
                overflow-y-auto h-[40vh] flex-grow custom-scrollbar">
                <p className="whitespace-pre-wrap break-words">
                    {response}
                </p>
            </div>

            {/* Chat Input & Button - Stick to Bottom */}
            <div className="mt-4 flex flex-col">
                <textarea
                    className="border w-full p-4 rounded-lg shadow-md resize-none 
                       focus:outline-none focus:ring focus:ring-blue-300 transition 
                       text-gray-800 text-base font-normal leading-relaxed min-h-[10vh] max-h-[15vh]"
                    rows={3}
                    placeholder="Type your question..."
                    value={prompt}
                    onChange={(e) => setPrompt(e.target.value)}
                />

                <button
                    onClick={sendRequest}
                    className="bg-gray-500 text-white font-semibold px-6 py-3 rounded-lg shadow-md 
               hover:bg-gray-700 transition transform hover:scale-105 
               focus:outline-none focus:ring-2 focus:ring-gray-500 
               w-40 mx-auto flex items-center justify-center mt-4"
                >
                    🚀 Send
                </button>
            </div>
        </div>
    );
};

export default Chat;
