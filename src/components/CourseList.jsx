// CourseList.js
import React, { useEffect, useState } from "react";

function CourseList() {
  const [courses, setCourses] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/api/courses")
      .then((res) => res.json())
      .then((data) => setCourses(data));
  }, []);

  return (
    <div className="w-full max-w-4xl my-8">
      <h2 className="text-2xl font-semibold text-gray-800 mb-4">
        Latest Courses
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {courses.map((course) => (
          <div
            key={course._id}
            className="p-4 border rounded shadow-sm hover:shadow-lg transition"
          >
            <h3 className="text-xl font-semibold text-indigo-600">
              {course.title}
            </h3>
            <p className="text-gray-700 mt-2">{course.price}</p>
            <p className="text-gray-700 mt-2">{course.discount}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CourseList;
