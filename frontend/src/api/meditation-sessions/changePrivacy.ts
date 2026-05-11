const BASE_URL = "http://localhost:3000/meditation-sessions"

export async function changePrivacy(id: number, newStatus: boolean) {
    const token = localStorage.getItem("token");
    const response = await fetch(`${BASE_URL}/${id}`, {
        method: "PATCH",
        headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ 
            public: newStatus
        })
    })

    if (!response.ok) {
        throw new Error("Error changing privacy of sesssion");
    }

    return response.json();
}