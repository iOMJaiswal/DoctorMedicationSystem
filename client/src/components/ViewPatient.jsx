import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";

const ViewPatient = () => {
  const { patient_id } = useParams();
  const [patient, setPatient] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    date_of_birth: "",
    gender: "",
    phone_number: "",
    email: "",
    address: "",
    city: "",
    state: "",
    country: "",
    zipcode: "",
  });

  // console.log(formData)

  useEffect(() => {
    const fetchPatient = async () => {
      try {
        const response = await axios.get(
          `http://localhost:4000/api/patients/get-patient-by-patient-id/${patient_id}`
        );
        const {
          name,
          date_of_birth,
          gender,
          phone_number,
          email,
          address,
          city,
          state,
          country,
          zipcode,
        } = response.data;

        // Convert the date_of_birth string to a Date object
        const dateOfBirth = new Date(date_of_birth);

        setPatient(response.data);
        setFormData({
          name,
          date_of_birth: dateOfBirth.toISOString().split("T")[0],
          gender,
          phone_number,
          email,
          address,
          city,
          state,
          country,
          zipcode,
        });
      } catch (error) {
        console.error("Error fetching patient:", error);
      }
    };

    fetchPatient();
  }, [patient_id]);

  return (
    <>
      <section className="max-w-8xl  p-6 mx-auto bg-gray-700 rounded-md shadow-md dark:bg-gray-800 mt-20">
        <div className="flex items-center justify-between p-3">
          <h1 className="text-xl font-bold text-white capitalize dark:text-white">
            Patient Details
          </h1>
          <div className="flex justify-end">
            <Link
              to={`/editPatient/${patient_id}`}
              className="bg-gray-900 text-white hover:bg-gray-800 rounded-md px-3 py-2 text-sm font-medium"
            >
              Edit Patient
            </Link>
          </div>
        </div>
        <form>
          <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
            <div>
              <label className="text-white dark:text-gray-200" htmlFor="name">
                Name
              </label>
              <input
                id="name"
                type="text"
                defaultValue={formData.name}
                disabled
                className="block w-full px-4 py-2 mt-2 text-white font-bold bg-gray-700 border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
              />
            </div>

            <div>
              <label
                className="text-white dark:text-gray-200"
                htmlFor="date_of_birth"
              >
                Date of Birth
              </label>
              <input
                id="date_of_birth"
                type="date"
                value={formData.date_of_birth}
                defaultValue={formData.date_of_birth}
                disabled
                className="block w-full cursor-pointer px-4 py-2 mt-2 text-white font-bold bg-gray-700 border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
              />
            </div>
            <div>
              <label className="text-white dark:text-gray-200" htmlFor="gender">
                Gender
              </label>
              <select
                id="gender"
                value={formData.gender}
                disabled
                className="block w-full cursor-pointer px-4 py-2 mt-2 text-white font-bold bg-gray-700 border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
              >
                <option value="M">Male</option>
                <option value="F">Female</option>
                <option value="Other">Other</option>
              </select>
            </div>

            <div>
              <label
                className="text-white dark:text-gray-200"
                htmlFor="phone_number"
              >
                Contact Number
              </label>
              <input
                id="phone_number"
                type="text"
                value={formData.phone_number}
                disabled
                className="block w-full px-4 py-2 mt-2 text-white font-bold bg-gray-700 border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
              />
            </div>
            <div>
              <label className="text-white dark:text-gray-200" htmlFor="email">
                Email Address
              </label>
              <input
                id="email"
                type="text"
                value={formData.email}
                disabled
                className="block w-full px-4 py-2 mt-2 text-white font-bold bg-gray-700 border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
              />
            </div>
            <div>
              <label
                className="text-white dark:text-gray-200"
                htmlFor="address"
              >
                Address Line
              </label>
              <input
                id="address"
                type="text"
                value={formData.address}
                disabled
                className="block w-full px-4 py-2 mt-2 text-white font-bold bg-gray-700 border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
              />
            </div>
            <div>
              <label className="text-white dark:text-gray-200" htmlFor="city">
                City
              </label>
              <input
                id="city"
                type="text"
                value={formData.city}
                disabled
                className="block w-full px-4 py-2 mt-2 text-white font-bold bg-gray-700 border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
              />
            </div>
            <div>
              <label className="text-white dark:text-gray-200" htmlFor="state">
                State
              </label>
              <input
                id="state"
                type="text"
                value={formData.state}
                disabled
                className="block w-full px-4 py-2 mt-2 text-white font-bold bg-gray-700 border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
              />
            </div>
            <div>
              <label
                className="text-white dark:text-gray-200"
                htmlFor="country"
              >
                Country
              </label>
              <input
                id="country"
                type="text"
                value={formData.country}
                disabled
                className="block w-full px-4 py-2 mt-2 text-white font-bold bg-gray-700 border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
              />
            </div>
            <div>
              <label
                className="text-white dark:text-gray-200"
                htmlFor="zipcode"
              >
                Postal Code
              </label>
              <input
                id="zipcode"
                type="text"
                value={formData.zipcode}
                disabled
                className="block w-full px-4 py-2 mt-2 text-white font-bold bg-gray-700 border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
              />
            </div>
          </div>
        </form>
      </section>
    </>
  );
};

export default ViewPatient;
