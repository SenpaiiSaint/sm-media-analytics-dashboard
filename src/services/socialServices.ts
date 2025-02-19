// Handles fetching social media metrics from an API

export interface SocialData {
    platform: string;
    followers: number;
    engagement: number;
}

export const fetchSocialData = async (): Promise<SocialData[]> => {
    // Replace the URL with a real endpoint or use a mock service
    const response = await fetch('https://api.example.com/socialMetrics');
    if (!response.ok) {
        throw new Error('Failed to fetch social metrics');
    }
    return await response.json();
};