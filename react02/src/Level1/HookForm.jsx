import React from "react";
import { useForm } from "react-hook-form";

function HookForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm();

  const onSubmit = async (data) => {
    await new Promise((resolve) =>
      setTimeout(() => {
        console.log("Form Submitted Successfully!");
        resolve(); // Resolve the promise
      }, 2000)
    );
    console.log(data);
    reset(); // for reseting the form
  };

  return (
    <div className="w-full h-full items-center justify-between flex flex-col text-start gap-y-3 bg-white bg-opacity-10  p-4 py-5 rounded-lg">
      <div className="flex flex-row">
        <h2 className="text-2xl font-semibold">React Hook Sign Up Form</h2>
      </div>
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-y-3">
        <input
          {...register("name", {
            required: "Name is required",
            minLength: { value: 3, message: "Length must be at least 3" },
          })}
          className="p-4 rounded-lg text-xl"
          type="text"
          name="name"
          placeholder="Enter your name"
        />
        {errors.name && (
          <p className="text-red-500 text-sm">{errors.name.message}</p>
        )}
        <input
          {...register("email", {
            required: "Email is required",
            pattern: {
              value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
              message: "Invalid email address",
            },
          })}
          className="p-4 rounded-lg text-xl"
          type="email"
          name="email"
          placeholder="Enter your email"
        />
        {errors.email && (
          <p className="text-red-500 text-sm">{errors.email.message}</p>
        )}
        <input
          {...register("password", {
            required: "Password is required",
            minLength: {
              value: 6,
              message: "Password length must be at least 6",
            },
          })}
          className="p-4 rounded-lg text-xl"
          type="password"
          name="password"
          placeholder="Enter your password"
        />
        {errors.password && (
          <p className="text-red-500 text-sm">{errors.password.message}</p>
        )}
        <button
          disabled={isSubmitting} // Disable button while submitting
          type="submit"
          className={
            isSubmitting
              ? "bg-gray-900 text-lg text-white p-2 rounded-lg"
              : "bg-red-700 text-lg text-white p-2 rounded-lg"
          }
        >
          {isSubmitting ? "Submitting" : "Submit"}
        </button>
      </form>
      <div className="w-full text-end">
      <a href="" style={{textDecorationStyle:"none", color:"white", fontWeight: "semi-bold"}}><button className="bg-green-700 p-2">Get Code</button></a>
         </div>
    </div>
  );
}

export default HookForm;
