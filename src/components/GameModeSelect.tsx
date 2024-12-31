"use client";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useContext } from "react";
import { RatingFetchContext } from "./InputAndChart";

export default function GameModeSelect() {
  const { setGameMode, gameMode } = useContext(RatingFetchContext);

  return (
    <div className="mt-5">
      <p className="text-center my-3">Game mode: </p>
      <Select
        onValueChange={(value) => setGameMode(value)}
        defaultValue={gameMode}
      >
        <SelectTrigger className="w-[180px] mx-auto">
          <SelectValue placeholder="Game mode" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="standard">Standard (Rapid)</SelectItem>
          <SelectItem value="blitz">Blitz</SelectItem>
          <SelectItem value="lightning">Bullet</SelectItem>
        </SelectContent>
      </Select>
    </div>
  );
}
