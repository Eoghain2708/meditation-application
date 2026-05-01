export interface MeditationSession {
    id: number
    duration: number;
    notes: string | null;

    user: {
        id: number,
        username: string
    };

    meditation: {
        id: number,
        title: string
        category: string
    };

    public: boolean;
    
    created_at: string;
    updated_at: string;
}

export interface MeditationSessionData {
    duration: number;
    notes: string | null;
    meditation_id: number
    public: boolean;
}