const BASE_URL: string = "http://localhost:3000/auth";

export interface LoginResponse {
    token: string,
    user: {
        id: number,
        email:string
    };
}

export interface SignUpResponse {
    id: number
    email: string
}



export async function login(email:string, password:string) {
    const response = await fetch(`${BASE_URL}/login`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            email,
            password,
        }),
    });

    if (!response.ok) {
        throw new Error("Error logging in");
    }

    return response.json() as Promise<LoginResponse>;
}

export async function signup(email:string, password: string, passwordConfirmation:string) {
    const response = await fetch(`${BASE_URL}/signup`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            email,
            password,
            passwordConfirmation
        })
    })

    if (!response.ok) {
        throw new Error("Error signing up");
    }

    return response.json() as Promise<SignUpResponse>;
}

