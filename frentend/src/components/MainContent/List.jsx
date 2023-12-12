// Import necessary dependencies
import React, { useState, useEffect } from "react";
import axios from "axios";

// Function to make API calls
const fetchData = async () => {
  try {
    const response = await axios.get("http://localhost:4000/api/v2/gettask");
    return response.data.tasks;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error; // Propagate the error to handle it outside
  }
};

const App = () => {
  // State to store tasks, form data, and messages
  const [tasks, setTasks] = useState([]);
  const [formData, setFormData] = useState({ title: "" });
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  // Effect to fetch data on component mount
  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const data = await fetchData();
        setTasks(data || []);
      } catch (error) {
        setErrorMessage("Error fetching tasks");
      }
    };

    fetchTasks();
  }, []);

  // Function to handle form submission for adding/updating tasks
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      if (formData.id) {
        // Update task
        await axios.put(
          `http://localhost:4000/api/v2/update/${formData.id}`,
          formData
        );
        setSuccessMessage("Task updated successfully");
      } else {
        // Add new task
        await axios.post("http://localhost:4000/api/v2/addtask", formData);
        setSuccessMessage("Task added successfully");
      }

      // Fetch updated data
      const data = await fetchData();
      setTasks(data || []);

      // Clear form data and messages
      setFormData({ title: "" });
      setErrorMessage("");
    } catch (error) {
      console.error("Error submitting form:", error);
      setErrorMessage("Error submitting form");
      setSuccessMessage("");
    }
  };

  // Function to handle task deletion
  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:4000/api/v2/delete/${id}`);

      // Fetch updated data
      const data = await fetchData();
      setTasks(data || []);

      // Show success message
      setSuccessMessage("Task deleted successfully");
      setErrorMessage("");
    } catch (error) {
      console.error("Error deleting task:", error);
      setErrorMessage("Error deleting task");
      setSuccessMessage("");
    }
  };

  // Function to handle task editing
  const handleEdit = (task) => {
    setFormData({ title: task.title, id: task._id });
    setSuccessMessage("");
    setErrorMessage("");
  };

  return (
    <div className="container flex flex-col items-center justify-center mx-auto my-8">
      {/* Success and Error Messages */}
      {successMessage && (
        <div className="bg-green-500 text-white px-4 py-2 mb-4 rounded-md">
          {successMessage}
        </div>
      )}
      {errorMessage && (
        <div className="bg-red-500 text-white px-4 py-2 mb-4 rounded-md">
          {errorMessage}
        </div>
      )}

      <div className="bg-slate-400 px-10 py-1 flex justify-center rounded-lg">
        {/* Task Form */}
        <form onSubmit={handleSubmit} className="mb-4">
          <input
            type="text"
            placeholder="Enter task title"
            value={formData.title}
            onChange={(e) =>
              setFormData({ ...formData, title: e.target.value })
            }
            className="mr-2 p-2 border border-gray-300 rounded-md"
          />
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 rounded-md py-2"
          >
            Submit
          </button>
        </form>
      </div>

      <div className="flex bg-red-200 py-3 rounded-lg mt-2 px-8">
        {/* Task List */}
        <ul>
          {tasks.map((task) => (
            <li
              key={task._id}
              className="mb-2  flex justify-between bg-slate-300 px-5 py-2 rounded-md"
            >
              <div className="">{task.title}</div>
              <div className="">
                <button
                  onClick={() => handleEdit(task)}
                  className="ml-2 bg-yellow-500 text-white px-2 py-1 rounded-md"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDelete(task._id)}
                  className="ml-2 bg-red-500 text-white px-2 py-1 rounded-md"
                >
                  Delete
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default App;
