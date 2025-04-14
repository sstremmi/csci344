import React, { useEffect, useState } from "react";

export default function Stories({ token }) {
    const [stories, setStories] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function fetchStories() {
            try {
                const response = await fetch("/api/stories", {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                });
                if (!response.ok) throw new Error("Failed to fetch stories");
                const data = await response.json();
                setStories(data);
            } catch (err) {
                console.error(err);
            } finally {
                setLoading(false);
            }
        }

        fetchStories();
    }, [token]);

    return (
        <header className="flex gap-6 bg-white border p-2 overflow-hidden mb-6">
            {loading ? (
                <p>Loading...</p>
            ) : (
                stories.map((story, index) => (
                    <div
                        key={index}
                        className="flex flex-col justify-center items-center"
                    >
                        <img
                            src={story.imageUrl || `https://picsum.photos/50/50?q=${index + 10}`}
                            alt={story.username}
                            className="rounded-full border-4 border-gray-300"
                        />
                        <p className="text-xs text-gray-500">{story.username}</p>
                    </div>
                ))
            )}
        </header>
    );
}