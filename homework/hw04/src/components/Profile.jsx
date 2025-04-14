import React, { useEffect, useState } from "react";
import { getDataFromServer } from "../server-requests";

export default function Profile({ token }) {
    const [profileData, setProfileData] = useState(null);

    useEffect(() => {
        async function fetchProfile() {
            try {
                const data = await getDataFromServer(token, "/api/profile/");
                console.log("Profile data:", data);
                setProfileData(data);
            } catch (error) {
                console.error("Failed to fetch profile:", error);
            }
        }

        fetchProfile();
    }, [token]);

    if (!profileData) {
        return <p>Loading profile...</p>;
    }

    return (
        <header className="flex gap-4 items-center">
            <img
                src={profileData.thumb_url}
                alt={`${profileData.username}'s avatar`}
                className="rounded-full w-16"
            />
            <div>
                <h2 className="font-Comfortaa font-bold text-2xl">{profileData.username}</h2>
            </div>
        </header>
    );
}