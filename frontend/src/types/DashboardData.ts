export interface DashboardData {
    username: string,
    total_sessions: number,
    minutes_meditated: number,
    recent_session: {
        id: number,
        duration: number,
        created_at: string,
        meditation: {
            id: number,
            title: string,
            category: string
        }
    } | null;
}
