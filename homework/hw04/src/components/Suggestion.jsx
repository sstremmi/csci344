import React from "react";

export default function Suggestion({ username, imageUrl }) {
    return (
        <section className="flex justify-between items-center mb-4 gap-2">
            <img
                src={imageUrl || "https://picsum.photos/40/40"}
                className="rounded-full"
                alt={username}
            />
            <div className="w-[180px]">
                <p className="font-bold text-sm">{username}</p>
                <p className="text-gray-500 text-xs">suggested for you</p>
            </div>
            <button className="text-blue-500 text-sm py-2">follow</button>
        </section>
    );
}