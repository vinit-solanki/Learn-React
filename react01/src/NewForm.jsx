import React from "react";
import { useForm } from "react-hook-form";

function NewForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm();

  async function onSubmit(data) {
    await new Promise((resolve)=>setTimeout(resolve, 3000));
    console.log("Form submitted", data);
  }

  return (
    <div className="w-full ">
      <h2 className="text-xl">React Form Using React Hook Form</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div className="w-full flex gap-x-3 justify-between">
            <label htmlFor="first-name" className="block text-sm font-medium">
              First Name:
            </label>
            <input
              className={`w-full p-2 rounded-md bg-gray-700 text-gray-100 border ${
                errors.firstName ? "border-red-500" : "border-gray-600"
              } focus:border-blue-400 focus:ring focus:ring-blue-300`}
              {...register("firstName", {
                required: "First name is required",
                minLength: { value: 3, message: "Length must be at least 3" },
                maxLength: { value: 15, message: "Max length at most 15" },
              })}
              type="text"
              id="first-name"
            />
            {errors.firstName && <div className="text-red-500 text-sm">{errors.firstName.message}</div>}
          </div>

          <div className="w-full flex gap-x-3 justify-between">
            <label htmlFor="last-name" className="block text-sm font-medium">
              Last Name:
            </label>
            <input
              className={`w-full p-2 rounded-md bg-gray-700 text-gray-100 border ${
                errors.lastName ? "border-red-500" : "border-gray-600"
              } focus:border-blue-400 focus:ring focus:ring-blue-300`}
              {...register("lastName", {
                required: "Last name is required",
                minLength: { value: 2, message: "Min length at least 2" },
              })}
              type="text"
              id="last-name"
            />
            {errors.lastName && <div className="text-red-500 text-sm">{errors.lastName.message}</div>}
          </div>

          <div className="w-full flex gap-x-3 justify-between">
            <label htmlFor="age" className="block text-sm font-medium">
              Age:
            </label>
            <input
              className={`w-full p-2 rounded-md bg-gray-700 text-gray-100 border ${
                errors.age ? "border-red-500" : "border-gray-600"
              } focus:border-blue-400 focus:ring focus:ring-blue-300`}
              {...register("age", {
                required: "Age is required",
                min: { value: 1, message: "Age must be greater than 0" },
              })}
              type="number"
              id="age"
            />
            {errors.age && <div className="text-red-500 text-sm">{errors.age.message}</div>}
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            value={isSubmitting?"Submitting":"Submit"}>
            Submit
          </button>
        </form>
    </div>
  );
}
// The following component is an example of your existing Input Component
const Input = ({ label, register, required }) => (
  <>
    <label>{label}</label>
    <input {...register(label, { required })} />
  </>
)

export default NewForm;
