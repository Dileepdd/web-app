import React from "react";
import { Pie } from "react-chartjs-2";
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  ArcElement,
  Legend,
  ChartOptions,
} from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend, Title);

const PieChart = () => {
  const data = {
    labels: ["Delayed Approvals", "Missing Signatures", "Misplaced Documents", "Incorrect Information", "Other Errors"],
    datasets: [
      {
        label: "Average Time Required (Weeks)",
        data: [5,35, 25, 20, 5],
        backgroundColor: [
          "rgba(254, 106, 53,1)",
          "rgba(107, 138, 188,1)",
          "rgba(44, 175, 254,1)",
          "rgba(84, 79, 197,1)",
          "rgba(0, 226, 114,1)",
        ],
      },
    ],
  };

  const options: ChartOptions<"pie"> = {
    responsive: true,
    plugins: {
      legend: {
        position: "top" as const,
      },
      title: {
        display: true,
        text: "Development Approaches and Time Required",
      },
    },
    maintainAspectRatio: false, // Add this to allow custom sizing
  };

  return (
    <div style={{ width: "300px", height: "300px" }}>
      <Pie data={data} options={options} />
    </div>
  );
};

export default PieChart;
