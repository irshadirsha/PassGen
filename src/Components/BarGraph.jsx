// import React, { useState } from 'react';

// const data = [
//   { label: 'Overdue(1-15 Days)', value: 5000, color: 'bg-red-500' },
//   { label: 'Overdue(16-30 Days)', value: 3000, color: 'bg-yellow-400' },
//   { label: 'Overdue(31-45 Days)', value: 1500, color: 'bg-blue-500' },
//   { label: 'Overdue(Above 45 Days)', value: 3500, color: 'bg-green-500' },
// ];

// function BarGraph() {
//   const [tooltipText, setTooltipText] = useState('');
//   const [tooltipPosition, setTooltipPosition] = useState({});

//   const handleBarHover = (label, value, e) => {
//     setTooltipText(`₹${value} ${label}`);
//     setTooltipPosition({ top: e.clientY, left: e.clientX });
//   };

//   const handleBarLeave = () => {
//     setTooltipText('');
//     setTooltipPosition({});
//   };

//   return (
//     <div className="w-900 h-30 bg-gray-300 relative">
//       {data.map((item, index) => (
//         <div
//           key={index}
//           className={`h-full ${item.color}`}
//           style={{ width: `${(item.value / 5000) * 100}%` }}
//           onMouseOver={(e) => handleBarHover(item.label, item.value, e)}
//           onMouseLeave={handleBarLeave}
//         ></div>
//       ))}
//       {tooltipText && (
//         <div
//           className="absolute bg-black text-white px-2 py-1 rounded-lg"
//           style={{ top: tooltipPosition.top, left: tooltipPosition.left }}
//         >
//           {tooltipText}
//         </div>
//       )}
//     </div>
//   );
// }

// export default BarGraph;