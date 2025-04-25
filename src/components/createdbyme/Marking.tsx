"use client";

import React, { useState } from "react";

interface StudentData {
  rollNumber: number;
  name: string;
}

const AttendanceTable: React.FC = () => {
  // Mock data for students
  const students: StudentData[] = [
    { rollNumber: 21, name: "Arjun Singh" },
    { rollNumber: 86, name: "Sita Raman" },
    { rollNumber: 12345, name: "Raza Hussain" },
    { rollNumber: 19019, name: "Hussain" },
    { rollNumber: 1234, name: "Saniya Khan" },
    { rollNumber: 71, name: "Harmant Singh" },
  ];

  // State to track attendance marking
  const [markedAttendance, setMarkedAttendance] = useState<Record<number, boolean>>({});

  const handleMarkAttendance = (rollNumber: number) => {
    setMarkedAttendance((prev) => ({
      ...prev,
      [rollNumber]: true,
    }));
  };

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <h1 className="text-2xl font-bold text-gray-800 mb-6">Student Attendance</h1>
      <div className="overflow-x-auto">
        <table className="table-auto w-full border-collapse border border-gray-200 shadow-md">
          <thead>
            <tr className="bg-purple-100">
              <th className="border border-gray-200 px-4 py-2 text-left">Sr. No.</th>
              <th className="border border-gray-200 px-4 py-2 text-left">Roll Number</th>
              <th className="border border-gray-200 px-4 py-2 text-left">Name</th>
              <th className="border border-gray-200 px-4 py-2 text-left">Attendance</th>
            </tr>
          </thead>
          <tbody>
            {students.map((student, index) => (
              <tr
                key={student.rollNumber}
                className={index % 2 === 0 ? "bg-white" : "bg-gray-50"}
              >
                <td className="border border-gray-200 px-4 py-2">{index + 1}</td>
                <td className="border border-gray-200 px-4 py-2">{student.rollNumber}</td>
                <td className="border border-gray-200 px-4 py-2">{student.name}</td>
                <td className="border border-gray-200 px-4 py-2">
                  <button
                    className={`px-4 py-1 rounded transition ${
                      markedAttendance[student.rollNumber]
                        ? "bg-green-500 text-white"
                        : "bg-gray-300 text-black"
                    }`}
                    onClick={() => handleMarkAttendance(student.rollNumber)}
                  >
                    {markedAttendance[student.rollNumber] ? "Marked" : "Mark Attendance"}
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AttendanceTable;
