"use client";

import { useContext } from "react";
import { RatingFetchContext } from "./InputAndChart";
import { Slider } from "@/components/ui/slider";
import { useDebouncedCallback } from "use-debounce";

export default function DaysSlider() {
  const { daysAgo, setDaysAgo } = useContext(RatingFetchContext);

  const setDaysAgoDebounced = useDebouncedCallback((daysAgo) => {
    setDaysAgo(daysAgo);
  }, 700);

  return (
    <div>
      <Slider
        defaultValue={[daysAgo]}
        max={365}
        min={1}
        step={1}
        onValueChange={(value) => setDaysAgoDebounced(value[0])}
      />

      <p className="text-center mt-5">Days ago: {daysAgo}</p>
    </div>
  );
}
