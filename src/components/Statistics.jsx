import React from "react";
import { Area, CartesianGrid, ComposedChart, Legend, Line, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";

const Statistics = () => {
  const marks = [
    { subject: "A1", mark: 60, full_mark: 60 },
    { subject: "A2", mark: 60, full_mark: 60 },
    { subject: "A3", mark: 60, full_mark: 60 },
    { subject: "A4", mark: 60, full_mark: 60 },
    { subject: "A5", mark: 60, full_mark: 60 },
    { subject: "A6", mark: 60, full_mark: 60 },
    { subject: "A7", mark: 60, full_mark: 60 },
    { subject: "A8", mark: 60, full_mark: 60 },
  ];

  return (
    <div className="flex justify-center items-center container mx-auto my-32 px-2">
      <ResponsiveContainer  width="100%" height={400}>
      <ComposedChart data={marks}>
        <XAxis dataKey="subject" />
        <YAxis />
        <Tooltip />
        <Legend />
        <CartesianGrid stroke="#f5f5f5" />
        <Area type="monotone" dataKey="full_mark" fill="#7E90FE" />
        <Line type="monotone" dataKey="mark" stroke="#9873FF" />
      </ComposedChart>
      </ResponsiveContainer>
      
    </div>
  );
};

export default Statistics;
