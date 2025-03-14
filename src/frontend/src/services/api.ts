const BASE_URL = "http://127.0.0.1:5009/api"; // Adjust as needed

export const fetchAIResponse = async (prompt: string): Promise<string> => {
    try {
        const res = await fetch(`${BASE_URL}/completions`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ prompt }),
        });

        if (!res.ok) {
            throw new Error("Error fetching response. Please try again later.");
        }

        return await res.text();
    } catch (error) {
        console.error("API Error:", error);
        return "❌ Error fetching response.";
    }
};
