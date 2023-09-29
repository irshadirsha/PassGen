// import React, { useState } from "react";
// import { Line } from "react-chartjs-2";

// // Dummy data
// const data = [
//   { x: 1, y: 10 },
//   { x: 2, y: 20 },
//   { x: 3, y: 30 },
//   { x: 4, y: 40 },
//   { x: 5, y: 50 },
// ];

// const LineGraph = () => {
//   const [options, setOptions] = useState({
//     scales: {
//       x: {
//         type: "linear",
//         position: "bottom",
//         title: {
//           display: true,
//           text: "X-axis",
//         },
//       },
//       y: {
//         type: "linear",
//         position: "left",
//         title: {
//           display: true,
//           text: "Y-axis",
//         },
//       },
//     },
//   });

//   const chartData = {
//     labels: data.map(d => d.x),
//     datasets: [
//       {
//         label: "Dataset 1",
//         data: data.map(d => d.y),
//         borderColor: "rgba(75, 192, 192, 1)",
//         backgroundColor: "rgba(75, 192, 192, 0.5)",
//       },
//     ],
//   };

//   return (
//     <div>
//       <Line data={chartData} options={options} />
//     </div>
//   );
// };

// export default LineGraph;