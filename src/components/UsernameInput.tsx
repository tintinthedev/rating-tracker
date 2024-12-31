"use client";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { TrendingUp } from "lucide-react";
import { useContext } from "react";
import { RatingFetchContext } from "./InputAndChart";

export default function UsernameInput() {
  const { username, setUsername, setShouldFetch } =
    useContext(RatingFetchContext);

  return (
    <div className="flex w-full items-center space-x-2">
      <Input
        type="text"
        placeholder="Your chess.com username"
        value={username}
        onChange={(event) => setUsername(event.target.value)}
      />

      <Button type="submit" onClick={() => setShouldFetch(true)}>
        <TrendingUp className="h-4 w-4" />
        See progress
      </Button>
    </div>
  );
}
