import React from "react";
import { SocialData } from "../services/socialServices";

interface SocialMetricCardProps {
    data: SocialData;
}

const SocialMetricCard: React.FC<SocialMetricCardProps> = ({ data }) => {
    return (
        <div className="social-card">
            <h3>{data.platform}</h3>
            <p>Followers: {data.followers}</p>
            <p>Engagement: {data.engagement}%</p>
        </div>
    );
};

export default SocialMetricCard;

