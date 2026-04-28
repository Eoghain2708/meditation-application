const TOKEN_KEY = "token";

export function saveToken(token: string) {
    localStorage.setItem(TOKEN_KEY, token);
}

export function getToken() {
    localStorage.getItem(TOKEN_KEY)
}

export function removeToken() {
    localStorage.removeItem(TOKEN_KEY);
}