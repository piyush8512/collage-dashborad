"use client";

import { useState, useEffect } from "react";

interface Student {
  id: number;
  name: string;
}

const students: Student[] = [
  { id: 1, name: "Subject1" },
  { id: 2, name: "Subject2" },
  { id: 3, name: "Subject3" },
  { id: 4, name: "Subject4" },
  { id: 5, name: "Subject5" },
  { id: 6, name: "Subject6" },
  { id: 7, name: "Subject7" },
  { id: 8, name: "Subject8" },
  { id: 9, name: "Subject9" },
  { id: 10, name: "Subject10" },
  { id: 11, name: "Subject11" },
];

const SoloStudent = () => {
  const [attendance, setAttendance] = useState<{
    [id: number]: { [date: string]: boolean };
  }>({});

  // Load attendance from localStorage on component mount
  useEffect(() => {
    const storedAttendance = localStorage.getItem("attendance");
    if (storedAttendance) {
      try {
        const parsedData = JSON.parse(storedAttendance);
        setAttendance(parsedData);
      } catch (error) {
        console.error("Error parsing attendance data:", error);
      }
    }
  }, []);

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
              <th key={i} className="px-4 py-2 border">{`${i + 24} nov`}</th>
            ))}
            {/* <th className="px-4 py-2 border">Total</th> */}
          </tr>
        </thead>
        <tbody>
          {students.map((student) => (
            <tr key={student.id} className="text-center">
              <td className="px-4 py-2 border">{student.id}</td>
              <td className="px-4 py-2 border">{student.name}</td>
              {[...Array(7).keys()].map((i) => (
                // <td key={i} className="px-4 py-2 border">
                //     1
                //   {attendance[student.id]?.[`${i + 1}`] ? "1" : ""}
                // </td>
                <td key={i} className="px-4 py-2 border">
  {/* Generate a random value (1 or 0) */}
  {Math.random() > 0.5 ? "1" : "0"}
</td>

              ))}
              {/* <td className="px-4 py-2 border font-bold">
                7
                
              </td> */}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default SoloStudent;
