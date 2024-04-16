import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

const EditMedication = () => {
  const { medication_id } = useParams();
  const [formData, setFormData] = useState({
    patient_id: "",
    medication_name: "",
    dosage: "",
    frequency: "",
    instructions: "",
    start_date: "",
    end_date: "",
  });
  const navigate = useNavigate();

  useEffect(() => {
    const fetchMedication = async () => {
      try {
        const response = await axios.get(
          `http://localhost:4000/api/medications/get-medication-by-medication-id/${medication_id}`
        );
        const {
          patient_id,
          medication_name,
          dosage,
          frequency,
          instructions,
          start_date,
          end_date,
        } = response.data;
        console.log(response.data);
        // Parse the start_date string
        const startDate = start_date ? new Date(start_date) : null;
  
        // Check if end_date is null before parsing
        const endDate = end_date ? new Date(end_date) : null;
  
        setFormData({
          patient_id,
          medication_name,
          dosage,
          frequency,
          instructions,
          start_date: startDate,
          end_date: endDate,
        });
      } catch (error) {
        console.error("Error fetching medication:", error);
      }
    };
  
    fetchMedication();
  }, [medication_id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put(
        `http://localhost:4000/api/medications/update-medication/${medication_id}`,
        formData
      );
      navigate(`/viewPatient/${formData.patient_id}`);
    } catch (error) {
      console.error("Error updating medication:", error);
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };
  return (
    <>
      <section className="max-w-6xl p-6 mx-auto bg-gray-700 rounded-md shadow-md dark:bg-gray-800 mt-20">
        <h1 className="text-xl font-bold text-white capitalize dark:text-white">
          Edit Medication
        </h1>
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
            <div>
              <label
                className="text-white dark:text-gray-200"
                htmlFor="medication_name"
              >
                Medication Name
              </label>
              <input
                id="medication_name"
                type="text"
                value={formData.medication_name}
                onChange={handleChange}
                required
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
              />
            </div>

            <div>
              <label className="text-white dark:text-gray-200" htmlFor="dosage">
                Dosage
              </label>
              <input
                id="dosage"
                type="text"
                value={formData.dosage}
                onChange={handleChange}
                required
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
              />
            </div>
            <div>
              <label
                className="text-white dark:text-gray-200"
                htmlFor="frequency"
              >
                Frequency
              </label>
              <textarea
                id="frequency"
                value={formData.frequency}
                onChange={handleChange}
                required
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
              ></textarea>
            </div>

            <div>
              <label
                className="text-white dark:text-gray-200"
                htmlFor="instructions"
              >
                Instructions
              </label>
              <textarea
                id="instructions"
                value={formData.instructions}
                onChange={handleChange}
                required
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
              ></textarea>
            </div>
            <div>
              <label
                className="text-white dark:text-gray-200"
                htmlFor="start_date"
              >
                Start Date
              </label>
              <input
                id="start_date"
                type="date"
                value={formData.start_date}
                onChange={handleChange}
                required
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
              />
            </div>
            <div>
              <label
                className="text-white dark:text-gray-200"
                htmlFor="end_date"
              >
                End Date
              </label>
              <input
                id="end_date"
                type="date"
                value={formData.end_date}
                onChange={handleChange}
                required
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
              />
            </div>
          </div>

          <div className="flex justify-end mt-6">
            <button
              type="submit"
              className="px-6 py-2 leading-5 text-white transition-colors duration-200 transform bg-pink-500 rounded-md hover:bg-pink-700 focus:outline-none focus:bg-gray-600"
            >
              Update Medication
            </button>
          </div>
        </form>
      </section>
    </>
  );
};

export default EditMedication;
