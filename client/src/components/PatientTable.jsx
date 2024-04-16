import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { IoEyeOutline } from "react-icons/io5";
import { MdOutlineModeEdit } from "react-icons/md";
import { RiDeleteBin6Line } from "react-icons/ri";
import axios from "axios";
import Cookies from "js-cookie";

const PatientTable = () => {
  const [patients, setPatients] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredPatients, setFilteredPatients] = useState([]);
  const doctor_id = Cookies.get("doctor_id");

  useEffect(() => {
    const fetchPatients = async () => {
      try {
        const response = await axios.get(
          `http://localhost:4000/api/patients/get-patient-by-doctor-id/${doctor_id}`
        );
        setPatients(response.data);
        setFilteredPatients(response.data); // Initialize filteredPatients with the fetched data
      } catch (error) {
        console.error("Error fetching patients:", error);
      }
    };

    fetchPatients();
  }, []);

  const handleDelete = async (id) => {
    try {
      await axios.post(
        `http://localhost:4000/api/patients/delete-patient/${id}`
      );
      setPatients(patients.filter((patient) => patient.patient_id !== id));
    } catch (error) {
      console.error("Error deleting patient:", error);
    }
  };

  const calculateAge = (dateOfBirth) => {
    const today = new Date();
    const birthDate = new Date(dateOfBirth);
    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDiff = today.getMonth() - birthDate.getMonth();

    if (
      monthDiff < 0 ||
      (monthDiff === 0 && today.getDate() < birthDate.getDate())
    ) {
      age--;
    }

    return age;
  };

  const formatDateOfBirth = (dateOfBirth) => {
    const dob = new Date(dateOfBirth);
    const year = dob.getFullYear();
    const month = String(dob.getMonth() + 1).padStart(2, "0");
    const day = String(dob.getDate()).padStart(2, "0");
    return `${year}-${month}-${day}`;
  };

  const handleSearch = (e) => {
    const searchTerm = e.target.value.toLowerCase();
    setSearchTerm(searchTerm);
    const filtered = patients.filter(
      (patient) =>
        patient.name.toLowerCase().includes(searchTerm) ||
        patient.email.toLowerCase().includes(searchTerm) ||
        patient.phone_number.includes(searchTerm)
    );
    setFilteredPatients(filtered);
  };

  return (
    <>
      <div className="p-6 px-0">
        <div className="mb-4 flex justify-end">
          <input
            type="text"
            placeholder="Search patients..."
            value={searchTerm}
            onChange={handleSearch}
            className="border border-gray-300 rounded-md p-2 mr-2"
          />
          <Link
            to="/add-patient"
            className="bg-gray-900 text-white hover:bg-gray-700 rounded-md px-3 py-2 text-sm font-medium"
          >
            Add Patient
          </Link>
        </div>

        <table className="mt-4 w-full min-w-max table-auto text-left">
          <thead>
            <tr>
              <th className="cursor-pointer border-y border-blue-gray-100 bg-blue-gray-50/50 p-4 transition-colors hover:bg-blue-gray-50">
                <p className="antialiased font-sans text-sm text-blue-gray-900 flex items-center justify-between gap-2 font-normal leading-none opacity-70">
                  Patient Name
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    stroke="currentColor"
                    aria-hidden="true"
                    className="h-4 w-4"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M8.25 15L12 18.75 15.75 15m-7.5-6L12 5.25 15.75 9"
                    ></path>
                  </svg>
                </p>
              </th>
              <th className="cursor-pointer border-y border-blue-gray-100 bg-blue-gray-50/50 p-4 transition-colors hover:bg-blue-gray-50">
                <p className="antialiased font-sans text-sm text-blue-gray-900 flex items-center justify-between gap-2 font-normal leading-none opacity-70">
                  Date of Birth
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    stroke="currentColor"
                    aria-hidden="true"
                    className="h-4 w-4"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M8.25 15L12 18.75 15.75 15m-7.5-6L12 5.25 15.75 9"
                    ></path>
                  </svg>
                </p>
              </th>
              <th className="cursor-pointer border-y border-blue-gray-100 bg-blue-gray-50/50 p-4 transition-colors hover:bg-blue-gray-50">
                <p className="antialiased font-sans text-sm text-blue-gray-900 flex items-center justify-between gap-2 font-normal leading-none opacity-70">
                  Patient Gender
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    stroke="currentColor"
                    aria-hidden="true"
                    className="h-4 w-4"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M8.25 15L12 18.75 15.75 15m-7.5-6L12 5.25 15.75 9"
                    ></path>
                  </svg>
                </p>
              </th>
              <th className="cursor-pointer border-y border-blue-gray-100 bg-blue-gray-50/50 p-4 transition-colors hover:bg-blue-gray-50">
                <p className="antialiased font-sans text-sm text-blue-gray-900 flex items-center justify-between gap-2 font-normal leading-none opacity-70">
                  Patient Contact Information
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    stroke="currentColor"
                    aria-hidden="true"
                    className="h-4 w-4"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M8.25 15L12 18.75 15.75 15m-7.5-6L12 5.25 15.75 9"
                    ></path>
                  </svg>
                </p>
              </th>
              <th className="cursor-pointer border-y border-blue-gray-100 bg-blue-gray-50/50 p-4 transition-colors hover:bg-blue-gray-50">
                <p className="antialiased font-sans text-sm text-blue-gray-900 flex items-center justify-between gap-2 font-normal leading-none opacity-70">
                  Address
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    stroke="currentColor"
                    aria-hidden="true"
                    className="h-4 w-4"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M8.25 15L12 18.75 15.75 15m-7.5-6L12 5.25 15.75 9"
                    ></path>
                  </svg>
                </p>
              </th>
              <th className="cursor-pointer border-y border-blue-gray-100 bg-blue-gray-50/50 p-4 transition-colors hover:bg-blue-gray-50">
                <p className="antialiased font-sans text-sm text-blue-gray-900 flex items-center justify-between gap-2 font-normal leading-none opacity-70">
                  Actions
                </p>
              </th>
            </tr>
          </thead>
          <tbody>
            {filteredPatients.map((patient) => (
              <tr key={patient.patient_id}>
                <td className="p-4 border-b border-blue-gray-50">
                  <div className="flex items-center gap-3">
                    <div className="flex flex-col">
                      <p className="block antialiased font-sans text-sm leading-normal text-blue-gray-900 font-normal">
                        {patient.name}
                      </p>
                    </div>
                  </div>
                </td>
                <td className="p-4 border-b border-blue-gray-50">
                  <div className="flex items-center gap-3">
                    <div className="flex flex-col">
                      <p className="block antialiased font-sans text-sm leading-normal text-blue-gray-900 font-normal">
                        {formatDateOfBirth(patient.date_of_birth)}
                      </p>
                      <p className="block antialiased font-sans text-sm leading-normal text-blue-gray-900 font-normal opacity-70">
                        {calculateAge(patient.date_of_birth)} years
                      </p>
                    </div>
                  </div>
                </td>
                <td className="p-4 border-b border-blue-gray-50">
                  <div className="flex flex-col">
                    <p className="block antialiased font-sans text-sm leading-normal text-blue-gray-900 font-normal">
                      {patient.gender}
                    </p>
                  </div>
                </td>
                <td className="p-4 border-b border-blue-gray-50">
                  <p className="block antialiased font-sans text-sm leading-normal text-blue-gray-900 font-normal">
                    {patient.phone_number}
                  </p>
                  <p className="block antialiased font-sans text-sm leading-normal text-blue-gray-900 font-normal opacity-70">
                    {patient.email}
                  </p>
                </td>
                <td className="p-4 border-b border-blue-gray-50">
                  <p className="block antialiased font-sans text-sm leading-normal text-blue-gray-900 font-normal">
                    {patient.address}
                  </p>
                  <p className="block antialiased font-sans text-sm leading-normal text-blue-gray-900 font-normal opacity-70">
                    {patient.city}, {patient.state}, {patient.zipcode},{" "}
                    {patient.country}
                  </p>
                </td>
                <td className="p-4 border-b border-blue-gray-50">
                  <div className="flex gap-3">
                    <Link to={`/viewPatient/${patient.patient_id}`}>
                      <IoEyeOutline />
                    </Link>
                    <Link to={`/editPatient/${patient.patient_id}`}>
                      <MdOutlineModeEdit />
                    </Link>
                    <button onClick={() => handleDelete(patient.patient_id)}>
                      <RiDeleteBin6Line />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default PatientTable;
