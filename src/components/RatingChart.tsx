"use client";

import { Bar, BarChart, XAxis } from "recharts";

import { ChartConfig, ChartContainer } from "@/components/ui/chart";
import { ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";
import { useContext, useEffect } from "react";
import { RatingFetchContext } from "./InputAndChart";
import { timestampToDate } from "@/helpers/timestampToDate";

const chartConfig = {
  rating: {
    label: "Rating",
    color: "#9d00ff",
  },
} satisfies ChartConfig;

export default function RatingChart() {
  const { data } = useContext(RatingFetchContext);

  useEffect(() => {
    data.forEach(
      //@ts-expect-error string to number
      (value) => (value.timestamp = timestampToDate(value.timestamp))
    );
  }, [data]);

  return (
    <ChartContainer config={chartConfig} className="min-h-[200px] w-full">
      <BarChart
        accessibilityLayer
        data={data}
        margin={{
          left: 12,
          right: 12,
        }}
      >
        <ChartTooltip content={<ChartTooltipContent />} />
        <Bar dataKey="rating" fill="var(--color-rating)" radius={4} />
        <XAxis
          dataKey="timestamp"
          tickLine={false}
          tickMargin={10}
          axisLine={false}
        />
      </BarChart>
    </ChartContainer>
  );
}
