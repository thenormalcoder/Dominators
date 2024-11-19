import React, { useState } from "react";
import { Link } from "react-router-dom";


// Placeholder types for demonstration purposes
interface Student {
  id: string;
  name: string;
  assignments: Assignment[];
  progress: number; // Progress in percentage
}

interface Assignment {
  id: string;
  title: string;
  description: string;
  deadline: string;
  status: "Pending" | "Submitted" | "Graded";
  grade?: number;
}

const MentorDashboard: React.FC = () => {
  const [students, setStudents] = useState<Student[]>([
    {
      id: "1",
      name: "John Doe",
      assignments: [
        {
          id: "a1",
          title: "Project 1",
          description: "Description of Project 1",
          deadline: "2024-12-01",
          status: "Pending",
        },
      ],
      progress: 60,
    },
    {
      id: "2",
      name: "Jane Smith",
      assignments: [
        {
          id: "a2",
          title: "Project 2",
          description: "Description of Project 2",
          deadline: "2024-12-10",
          status: "Submitted",
          grade: 85,
        },
      ],
      progress: 80,
    },
  ]);

  const handleCreateAssignment = () => {
    // Logic to create assignment (e.g., show modal to enter details)
  };

  const handleMarksSubmission = (studentId: string, assignmentId: string) => {
    // Logic to submit marks and feedback for the student
  };

  const handleViewProgress = (studentId: string) => {
    // Logic to show detailed progress (e.g., open progress modal)
  };

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <div className="w-64 bg-blue-600 text-white p-6">
        <h2 className="text-2xl font-bold mb-6">Mentor Dashboard</h2>
        <ul>
          <li className="mb-4">
            <Link to="#" className="hover:text-gray-300">Dashboard Overview</Link>
          </li>
          <li className="mb-4">
            <Link to="#" className="hover:text-gray-300">Students List</Link>
          </li>
          <li className="mb-4">
            <Link to="#" className="hover:text-gray-300">Assignments</Link>
          </li>
          <li className="mb-4">
            <Link to="#" className="hover:text-gray-300">Marks Submission</Link>
          </li>
          <li className="mb-4">
            <Link to="#" className="hover:text-gray-300">Progress Tracking</Link>
          </li>
          <li className="mb-4">
            <Link to="#" className="hover:text-gray-300">Feedback</Link>
          </li>
        </ul>
      </div>

      {/* Main Content Area */}
      <div className="flex-1 p-8 overflow-y-auto">
        {/* Student Overview */}
        <h3 className="text-3xl font-semibold mb-6">Student Overview</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {students.map((student) => (
            <div key={student.id} className="bg-white p-6 rounded-lg shadow-lg">
              <h4 className="text-xl font-semibold mb-2">{student.name}</h4>
              <p className="mb-4">Progress: {student.progress}%</p>
              <div className="mb-4">
                <button
                  onClick={() => handleViewProgress(student.id)}
                  className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700"
                >
                  View Progress
                </button>
              </div>

              {/* Assignments List */}
              <h5 className="font-semibold mb-2">Assignments</h5>
              <ul>
                {student.assignments.map((assignment) => (
                  <li key={assignment.id} className="border-b pb-4 mb-4">
                    <div>
                      <p className="font-medium">{assignment.title}</p>
                      <p>Status: {assignment.status}</p>
                      <p>Deadline: {assignment.deadline}</p>
                      <div className="mt-2">
                        {assignment.status === "Submitted" && (
                          <button
                            onClick={() =>
                              handleMarksSubmission(student.id, assignment.id)
                            }
                            className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600"
                          >
                            Submit Marks
                          </button>
                        )}
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Assignment Management Section */}
        <div className="mt-12">
          <h3 className="text-2xl font-semibold mb-4">Manage Assignments</h3>
          <button
            onClick={handleCreateAssignment}
            className="bg-blue-600 text-white py-2 px-6 rounded hover:bg-blue-700"
          >
            Create New Assignment
          </button>
          <div className="mt-6">
            <h4 className="text-xl font-semibold mb-4">Existing Assignments</h4>
            <table className="min-w-full table-auto border-collapse">
              <thead>
                <tr>
                  <th className="border px-4 py-2">Title</th>
                  <th className="border px-4 py-2">Deadline</th>
                  <th className="border px-4 py-2">Status</th>
                  <th className="border px-4 py-2">Action</th>
                </tr>
              </thead>
              <tbody>
                {students.flatMap((student) =>
                  student.assignments.map((assignment) => (
                    <tr key={assignment.id}>
                      <td className="border px-4 py-2">{assignment.title}</td>
                      <td className="border px-4 py-2">{assignment.deadline}</td>
                      <td className="border px-4 py-2">{assignment.status}</td>
                      <td className="border px-4 py-2">
                        <button className="bg-yellow-500 text-white py-1 px-3 rounded hover:bg-yellow-600">
                          Edit
                        </button>
                        <button className="bg-red-500 text-white py-1 px-3 rounded hover:bg-red-600 ml-2">
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MentorDashboard;
