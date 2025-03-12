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
                setResponse("⚠️ Error fetching response. Please try again later. ...");
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
        <div className="font-inter p-6 text-center w-full max-w-2xl mx-auto space-y-4">
            <h2 className="text-2xl font-semibold mb-4 text-gray-800">
                Chat with AI 🤖
            </h2>

            <div className="bg-gray-700 text-white p-4 rounded-lg shadow-md text-left border-2 border-blue-800">
                <p className="text-base font-light leading-relaxed">
                    {response}
                </p>
            </div>

            <textarea
                className="border w-full p-3 rounded-lg shadow-md resize-none 
                   focus:outline-none focus:ring focus:ring-blue-300 transition 
                   text-gray-800 text-base font-normal leading-relaxed"
                rows={3}
                placeholder="Type your question..."
                value={prompt}
                onChange={(e) => setPrompt(e.target.value)}
            />

            <button
                onClick={sendRequest}
                className="bg-blue-600 text-white px-6 py-2 rounded-lg shadow-md 
                   hover:bg-blue-700 transition transform hover:scale-105"
            >
                🚀 Send
            </button>
        </div>
    );
};

export default Chat;
