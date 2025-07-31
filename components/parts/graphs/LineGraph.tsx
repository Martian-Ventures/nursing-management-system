"use client";

import React, { PureComponent } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    name: "Sept",
    mothers: 4000,
    babies: 2400,
    amt: 2400,
  },
  {
    name: "Oct",
    mothers: 3000,
    babies: 1398,
    amt: 2210,
  },
  {
    name: "Nov",
    mothers: 2000,
    babies: 9800,
    amt: 2290,
  },
  {
    name: "Dec",
    mothers: 2780,
    babies: 3908,
    amt: 2000,
  },
  {
    name: "Jan",
    mothers: 1890,
    babies: 4800,
    amt: 2181,
  },
  {
    name: "Feb",
    mothers: 2390,
    babies: 3800,
    amt: 2500,
  },
  {
    name: "Mar",
    mothers: 3490,
    babies: 4300,
    amt: 2100,
  },
];

export default class GenericLineChart extends PureComponent {
  // static demoUrl =
  //   "https://codesandbox.io/p/sandbox/line-chart-width-xaxis-padding-8v7952";

  render() {
    return (
      <div className="h-96">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart
            width={300}
            height={300}
            data={data}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line
              type="monotone"
              dataKey="babies"
              stroke="#8884d8"
              activeDot={{ r: 8 }}
            />
            <Line type="monotone" dataKey="mothers" stroke="#82ca9d" />
          </LineChart>
        </ResponsiveContainer>
      </div>
    );
  }
}
