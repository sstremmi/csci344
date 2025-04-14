import React, { useState } from "react";

export default function LikeButton({ token, postId, initialLikeId, onLikeChange }) {
    const [likeId, setLikeId] = useState(initialLikeId);
    const isLiked = !!likeId;

    async function handleLike() {
        try {
            const response = await fetch(`/api/posts/${postId}/likes`, {
                method: "POST",
                headers: {
                    Authorization: `Token ${token}`,
                    "Content-Type": "application/json",
                },
            });

            if (response.ok) {
                const data = await response.json();
                setLikeId(data.id);
                if (onLikeChange) onLikeChange(data.id);
            } else {
                console.error("Failed to like post");
            }
        } catch (error) {
            console.error("Error liking post:", error);
        }
    }

    async function handleUnlike() {
        try {
            const response = await fetch(`/api/posts/${postId}/likes/${likeId}`, {
                method: "DELETE",
                headers: {
                    Authorization: `Token ${token}`,
                },
            });

            if (response.ok) {
                setLikeId(null);
                if (onLikeChange) onLikeChange(null);
            } else {
                console.error("Failed to unlike post");
            }
        } catch (error) {
            console.error("Error unliking post:", error);
        }
    }

    return (
        <button onClick={isLiked ? handleUnlike : handleLike}>
            <i className={`${isLiked ? "fas text-red-700" : "far"} fa-heart`}></i>
        </button>
    );
}