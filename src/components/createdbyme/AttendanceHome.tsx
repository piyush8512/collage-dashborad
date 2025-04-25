import React from "react";

const AttendanceHome: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Navbar */}
      

      {/* Dashboard Content */}
      <main className="container mx-auto text-center py-10">
        <h2 className="text-3xl font-bold text-purple-700 mb-8">
          Attendance Dashboard
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Card 1 */}
          <div className="bg-white shadow-lg rounded-md p-6 border hover:shadow-xl transition">
            <h3 className="font-semibold text-lg mb-4">Take Attendance</h3>
            <button className="px-4 py-2 text-purple-500 border border-purple-500 rounded-md hover:bg-purple-100 transition">
              Mark
            </button>
          </div>
          {/* Card 2 */}
          <div className="bg-white shadow-lg rounded-md p-6 border hover:shadow-xl transition">
            <h3 className="font-semibold text-lg mb-4">View Attendance</h3>
            <button className="px-4 py-2 text-purple-500 border border-purple-500 rounded-md hover:bg-purple-100 transition">
              View
            </button>
          </div>
          {/* Card 3 */}
          <div className="bg-white shadow-lg rounded-md p-6 border hover:shadow-xl transition">
            <h3 className="font-semibold text-lg mb-4">Total Students</h3>
            <p className="text-purple-500 font-bold text-2xl">8</p>
          </div>
        </div>

        {/* Footer Section */}
        <div className="mt-8">
          <div className="bg-white shadow-lg rounded-md p-6 border hover:shadow-xl transition inline-block">
            <p className="font-semibold text-lg">
              Total Student present in School Today:
              <span className="text-purple-500 font-bold text-2xl"> 2</span>
            </p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default AttendanceHome;
