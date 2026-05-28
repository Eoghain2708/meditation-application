import type { MeditationSession } from "./MeditationSession";


export interface UserPageData {
    username: string;
    bio: string;
    meditations: MeditationSession[];
    avatar_url: string
}