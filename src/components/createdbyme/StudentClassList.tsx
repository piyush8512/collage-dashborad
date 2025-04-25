// "use client"; // Add this line at the top

// import React from "react";
// import Link from "next/link";

// interface ClassData {
//   className: string;
//   capacity: number;
//   grade: number;
//   supervisor: string;
// }

// const StudentClassList: React.FC = () => {
//   // Mock data for the classes
//   const classes: ClassData[] = [
//     { className: "1A", capacity: 19, grade: 1, supervisor: "TName12 TSurname12" },
//     { className: "2A", capacity: 17, grade: 2, supervisor: "TName13 TSurname13" },
//     { className: "3A", capacity: 19, grade: 3, supervisor: "TName14 TSurname14" },
//     { className: "4A", capacity: 20, grade: 4, supervisor: "TName15 TSurname15" },
//     { className: "5A", capacity: 20, grade: 5, supervisor: "TName10 TSurname10" },
//     { className: "6A", capacity: 16, grade: 6, supervisor: "TName11 TSurname11" },
//   ];

  

//   return (
//     <div className="min-h-screen bg-gray-50 p-8">
//       <h1 className="text-2xl font-bold text-gray-800 mb-6">All Classes</h1>
//       <div className="overflow-x-auto">
//         <table className="table-auto w-full border-collapse border border-gray-200 shadow-md">
//           <thead>
//             <tr className="bg-gray-100">
//               <th className="border border-gray-200 px-4 py-2 text-left">Action</th>
//               <th className="border border-gray-200 px-4 py-2 text-left">Class Name</th>
//               <th className="border border-gray-200 px-4 py-2 text-left">Capacity</th>
//               <th className="border border-gray-200 px-4 py-2 text-left">Grade</th>
//               <th className="border border-gray-200 px-4 py-2 text-left">Supervisor</th>
//             </tr>
//           </thead>
//           <tbody>
//             {classes.map((classItem, index) => (
//               <tr
//                 key={classItem.className}
//                 className={index % 2 === 0 ? "bg-white" : "bg-gray-50"}
//               >
//                 <td className="border border-gray-200 px-4 py-2">
//                   <button
//                     className="bg-purple-500 text-white px-4 py-1 rounded hover:bg-purple-600 transition"
                    
//                   ><Link
//                   className="p-3 rounded-md bg-lamaPurpleLight"
//                   href={`/createdbyme/Marking`}
//                 > Take Attendance</Link>
                   
//                   </button>
//                 </td>
//                 <td className="border border-gray-200 px-4 py-2">{classItem.className}</td>
//                 <td className="border border-gray-200 px-4 py-2">{classItem.capacity}</td>
//                 <td className="border border-gray-200 px-4 py-2">{classItem.grade}</td>
//                 <td className="border border-gray-200 px-4 py-2">{classItem.supervisor}</td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// };

// export default StudentClassList;






  // import { useState } from "react";

  // interface Student {
  //   id: number;
  //   name: string;
  // }

  // const students: Student[] = [
  //   { id: 1, name: "Studen1" },
  //   { id: 2, name: "Studen2" },
  //   { id: 3, name: "Studen3" },
  //   { id: 4, name: "Studen4" },
  //   { id: 1, name: "Studen5" },
  //   { id: 2, name: "Studen6" },
  //   { id: 3, name: "Studen7" },
  //   { id: 4, name: "Studen8" },
  //   { id: 1, name: "Studen9" },
  //   { id: 2, name: "Studen10" },
  //   { id: 3, name: "Studen11" },
  //   { id: 4, name: "Studen12" },
  //   { id: 1, name: "Studen13" },
  //   { id: 2, name: "Studen14" },
  //   { id: 3, name: "Studen15" },
  //   { id: 4, name: "Student16" },
  //   { id: 1, name: "Studen117" },
  //   { id: 2, name: "Student18" },
  //   { id: 3, name: "Student19" },
  //   { id: 4, name: "Student20" },
  // ];

  // const StudentClassList = () => {
  //   const [attendance, setAttendance] = useState<{ [id: number]: boolean }>({});

  //   const toggleAttendance = (id: number) => {
  //     setAttendance((prev) => ({
  //       ...prev,
  //       [id]: !prev[id],
  //     }));
  //   };

  //   return (
  //     <div className="min-h-screen bg-gray-100 flex flex-col items-center p-6">
  //       <h1 className="text-2xl font-bold mb-6">Attendance Sheet</h1>
  //       <table className="table-auto bg-white shadow-md rounded-lg w-full max-w-4xl border border-gray-200">
  //         <thead>
  //           <tr className="bg-gray-200 text-gray-700">
  //             <th className="px-4 py-2 border">ID</th>
  //             <th className="px-4 py-2 border">Name</th>
  //             <th className="px-4 py-2 border">1 dec</th>
  //             <th className="px-4 py-2 border">2 dec</th>
  //             <th className="px-4 py-2 border">3 dec</th>
  //             <th className="px-4 py-2 border">4 dec</th>
  //             <th className="px-4 py-2 border">5 dec</th>
  //             <th className="px-4 py-2 border">6 dec</th>
  //             <th className="px-4 py-2 border">7 dec</th>
  //           </tr>
  //         </thead>
  //         <tbody>
  //           {students.map((student) => (
  //             <tr key={student.id} className="text-center">
  //               <td className="px-4 py-2 border">{student.id}</td>
  //               <td className="px-4 py-2 border">{student.name}</td>
  //               <td className="px-4 py-2 border">
  //                 <input
  //                   type="checkbox"
  //                   checked={!!attendance[student.id]}
  //                   onChange={() => toggleAttendance(student.id)}
  //                   className="w-5 h-5 text-blue-500 focus:ring-blue-400"
  //                 />
  //               </td>
  //             </tr>
  //           ))}
  //         </tbody>
  //       </table>
  //     </div>
  //   );
  // };

  // export default StudentClassList;



// "use client";

// import { useState } from "react";

// interface Student {
//   id: number;
//   name: string;
// }

// const students: Student[] = [
//   { id: 1, name: "Studen1" },
//   { id: 2, name: "Studen2" },
//   { id: 3, name: "Studen3" },
//   { id: 4, name: "Studen4" },
//   { id: 5, name: "Studen5" },
//   { id: 6, name: "Studen6" },
//   { id: 7, name: "Studen7" },
//   { id: 8, name: "Studen8" },
//   { id: 9, name: "Studen9" },
//   { id: 10, name: "Studen10" },
//   { id: 11, name: "Studen11" },
//   { id: 12, name: "Studen12" },
//   { id: 13, name: "Studen13" },
//   { id: 14, name: "Studen14" },
//   { id: 15, name: "Studen15" },
//   { id: 16, name: "Student16" },
//   { id: 17, name: "Studen117" },
//   { id: 18, name: "Student18" },
//   { id: 19, name: "Student19" },
//   { id: 20, name: "Student20" },
// ];

// const StudentClassList = () => {
//   const [attendance, setAttendance] = useState<{ [id: string]: { [date: string]: boolean } }>({});

//   const toggleAttendance = (id: number, date: string) => {
//     setAttendance((prev) => ({
//       ...prev,
//       [id]: {
//         ...prev[id],
//         [date]: !prev[id]?.[date],
//       },
//     }));
//   };

//   return (
//     <div className="min-h-screen bg-gray-100 flex flex-col items-center p-6">
//       <h1 className="text-2xl font-bold mb-6">Attendance Sheet</h1>
//       <table className="table-auto bg-white shadow-md rounded-lg w-full max-w-4xl border border-gray-200">
//         <thead>
//           <tr className="bg-gray-200 text-gray-700">
//             <th className="px-4 py-2 border">ID</th>
//             <th className="px-4 py-2 border">Name</th>
//             {[...Array(7).keys()].map((i) => (
//               <th key={i} className="px-4 py-2 border">
//                 {`${i + 1} Dec`}
//               </th>
//             ))}
//           </tr>
//         </thead>
//         <tbody>
//           {students.map((student) => (
//             <tr key={student.id} className="text-center">
//               <td className="px-4 py-2 border">{student.id}</td>
//               <td className="px-4 py-2 border">{student.name}</td>
//               {[...Array(7).keys()].map((i) => (
//                 <td key={i} className="px-4 py-2 border">
//                   <input
//                     type="checkbox"
//                     checked={attendance[student.id]?.[`${i + 1}`] || false}
//                     onChange={() => toggleAttendance(student.id, `${i + 1}`)}
//                     className="w-5 h-5 text-blue-500 focus:ring-blue-400"
//                   />
//                 </td>
//               ))}
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default StudentClassList;



"use client";

import { useState, useEffect } from "react";

interface Student {
  id: number;
  name: string;
}

const students: Student[] = [
  { id: 1, name: "Student1" },
  { id: 2, name: "Student2" },
  { id: 3, name: "Student3" },
  { id: 4, name: "Student4" },
  { id: 5, name: "Student5" },
  { id: 6, name: "Student6" },
  { id: 7, name: "Student7" },
  { id: 8, name: "Student8" },
  { id: 9, name: "Student9" },
  { id: 10, name: "Student10" },
  { id: 11, name: "Student11" },
];

const StudentClassList = () => {
  const [attendance, setAttendance] = useState<{
    [id: number]: { [date: string]: boolean };
  }>({});

  // Load attendance from localStorage on component mount
  useEffect(() => {
    const storedAttendance = localStorage.getItem("attendance");
    if (storedAttendance) {
      setAttendance(JSON.parse(storedAttendance));
    }
  }, []);

  // Save attendance to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem("attendance", JSON.stringify(attendance));
  }, [attendance]);

  const toggleAttendance = (id: number, date: string) => {
    setAttendance((prev) => ({
      ...prev,
      [id]: {
        ...prev[id],
        [date]: !prev[id]?.[date],
      },
    }));
  };

  const calculateTotalTicks = (id: number): number => {
    const studentAttendance = attendance[id] || {};
    return Object.values(studentAttendance).filter(Boolean).length;
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center p-6">
      <h1 className="text-2xl font-bold mb-6">Attendance Sheet</h1>
      <table className="table-auto bg-white shadow-md rounded-lg w-full max-w-4xl border border-gray-200">
        <thead>
          <tr className="bg-gray-200 text-gray-700">
            <th className="px-4 py-2 border">ID</th>
            <th className="px-4 py-2 border">Name</th>
            {[...Array(7).keys()].map((i) => (
              <th key={i} className="px-4 py-2 border">{`${i + 1} Dec`}</th>
            ))}
            <th className="px-4 py-2 border">Total</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student) => (
            <tr key={student.id} className="text-center">
              <td className="px-4 py-2 border">{student.id}</td>
              <td className="px-4 py-2 border">{student.name}</td>
              {[...Array(7).keys()].map((i) => (
                <td key={i} className="px-4 py-2 border">
                  <input
                    type="checkbox"
                    checked={attendance[student.id]?.[`${i + 1}`] || false}
                    onChange={() => toggleAttendance(student.id, `${i + 1}`)}
                    className="w-5 h-5 text-blue-500 focus:ring-blue-400"
                  />
                </td>
              ))}
              <td className="px-4 py-2 border font-bold">
                {calculateTotalTicks(student.id)}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default StudentClassList;
