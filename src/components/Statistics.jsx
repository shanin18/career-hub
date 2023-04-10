import React from "react";
import {
  Legend,
  PolarAngleAxis,
  PolarGrid,
  PolarRadiusAxis,
  Radar,
  RadarChart,
  Tooltip,
} from "recharts";

const Statistics = () => {
  const marks = [
    {subject: "A1", mark: 60, full_mark: 60,},
    {subject: "A2", mark: 60, full_mark: 60,},
    {subject: "A3", mark: 60, full_mark: 60,},
    {subject: "A4", mark: 60, full_mark: 60,},
    {subject: "A5", mark: 60, full_mark: 60,},
    {subject: "A6", mark: 60, full_mark: 60,},
    {subject: "A7", mark: 60, full_mark: 60,},
    {subject: "A8", mark: 60, full_mark: 60,},
  ];

  return (
    <div className="flex justify-center">
      <RadarChart outerRadius={90} width={730} height={250} data={marks}>
        <PolarGrid />
        <PolarAngleAxis dataKey="subject"/>
        <PolarRadiusAxis angle={30} domain={[0, 60]} />
        <Radar
          name="Syed Shamim Hosan"
          dataKey="mark"
          stroke="#8884d8"
          fill="#8884d8"
          fillOpacity={0.6}
        />
        <Legend />
        <Tooltip></Tooltip>
      </RadarChart>
    </div>
  );
};

export default Statistics;
