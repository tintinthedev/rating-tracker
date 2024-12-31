import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async rewrites() {
    return [
      {
        source: "/get_rating_data/:username/:days_ago/:game_mode",
        destination:
          "https://www.chess.com/callback/live/stats/:username/chart?daysAgo=:days_ago&type=:game_mode",
      },
    ];
  },
};

export default nextConfig;
