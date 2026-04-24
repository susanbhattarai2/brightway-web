import api from "./api";

export async function getSettings()
{
    try {
        const res = await api.get("/site-settings", {
        });
        return res?.data?.data || [];

    } catch (err) {
        console.error("Settings Fetch Error", err);
        return [];
    }
}