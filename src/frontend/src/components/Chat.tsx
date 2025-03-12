import { useState } from "react";

const Chat: React.FC = () => {
    const [prompt, setPrompt] = useState<string>("");
    const [response, setResponse] = useState<string>("");

    const sendRequest = async () => {
        setResponse("Loading...");

        try {
            const res = await fetch("http://127.0.0.1:5009/api/completions", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ prompt }),
            });

            const data = await res.text();
            setResponse(data);
        } catch (error) {
            setResponse("Error fetching response.");
        }
    };

    return (
        <div className="p-6 text-center">
            <h2 className="text-2xl font-semibold mb-4">Chat with AI</h2>
            <textarea
                className="border w-full p-2 rounded"
                rows={3}
                placeholder="Type your question..."
                value={prompt}
                onChange={(e) => setPrompt(e.target.value)}
            />
            <button
                onClick={sendRequest}
                className="bg-blue-600 text-white px-4 py-2 mt-2 rounded"
            >
                Send
            </button>
            <div className="mt-4 bg-gray-100 p-4 rounded">{response}</div>
        </div>
    );
};

export default Chat;
