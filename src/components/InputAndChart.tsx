"use client";

import { createContext, Dispatch, SetStateAction, useEffect } from "react";
import RatingChart from "./RatingChart";
import UsernameInput from "./UsernameInput";
import { useState } from "react";
import axios from "axios";
import DaysSlider from "./DaysSlider";
import GameModeSelect from "./GameModeSelect";

type RatingFetchContextValues = {
  shouldFetch: boolean;
  setShouldFetch: Dispatch<SetStateAction<boolean>>;
  username: string;
  setUsername: Dispatch<SetStateAction<string>>;
  daysAgo: number;
  setDaysAgo: Dispatch<SetStateAction<number>>;
  data: { timestamp: string; rating: number }[];
  setData: Dispatch<SetStateAction<{ rating: number; timestamp: string }[]>>;
  gameMode: string;
  setGameMode: Dispatch<SetStateAction<string>>;
};

export const RatingFetchContext = createContext<RatingFetchContextValues>(
  {} as RatingFetchContextValues
);

export default function InputAndChart() {
  const [shouldFetch, setShouldFetch] = useState(false);
  const [username, setUsername] = useState("");
  const [daysAgo, setDaysAgo] = useState(30);
  const [data, setData] = useState<RatingFetchContextValues["data"]>([]);
  const [gameMode, setGameMode] = useState("standard");

  const contextValue = {
    shouldFetch,
    setShouldFetch,
    username,
    setUsername,
    daysAgo,
    setDaysAgo,
    data,
    setData,
    gameMode,
    setGameMode,
  };

  async function fetchRatingData(
    username: string,
    daysAgo: number,
    gameMode: string
  ) {
    try {
      const response = await axios.get(
        `/get_rating_data/${username}/${daysAgo}/${gameMode}`
      );

      console.log("RESPOSTA: ", response.data);

      setData(response.data);
    } catch (error) {
      if (axios.isAxiosError(error) && error.response?.status === 404) {
        alert("This username does not exit");
        setShouldFetch(false);
      }
    }
  }

  useEffect(() => {
    if (shouldFetch) fetchRatingData(username, daysAgo, gameMode);
  }, [shouldFetch]);

  useEffect(() => {
    setShouldFetch(false);
  }, [data]);

  useEffect(() => {
    if (username) setShouldFetch(true);
  }, [daysAgo, gameMode]);

  return (
    <div className="w-full max-w-xl flex flex-col gap-y-5">
      <RatingFetchContext.Provider value={contextValue}>
        <UsernameInput />
        <RatingChart />
        <DaysSlider />
        <GameModeSelect />
      </RatingFetchContext.Provider>
    </div>
  );
}
