import React, { useEffect, useState } from "react";
import Suggestion from "./Suggestion";

export default function Suggestions({ token }) {
    const [suggestions, setSuggestions] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function fetchSuggestions() {
            try {
                const response = await fetch("/api/suggestions", {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                });
                if (!response.ok) throw new Error("Failed to fetch suggestions");
                const data = await response.json();
                setSuggestions(data);
            } catch (err) {
                console.error(err);
            } finally {
                setLoading(false);
            }
        }

        fetchSuggestions();
    }, [token]);

    return (
        <div className="mt-4">
            <p className="text-base text-gray-400 font-bold mb-4">
                Suggestions for you
            </p>

            {loading ? (
                <p>Loading...</p>
            ) : (
                suggestions.map((user, index) => (
                    <Suggestion
                        key={index}
                        username={user.username}
                        imageUrl={user.imageUrl || `https://picsum.photos/40/40?q=${index + 11}`}
                    />
                ))
            )}
        </div>
    );
}