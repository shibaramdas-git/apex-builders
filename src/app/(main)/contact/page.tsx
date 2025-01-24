"use client";
import { useForm, SubmitHandler } from "react-hook-form";

type FormValues = {
  name: string;
  email: string;
  phone: string;
  projectType: string;
  message: string;
  file?: FileList;
  contactTime: string;
};

const ContactPage = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<FormValues>();

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    console.log("Form Data:", data);
    alert("Form submitted successfully!");
  };

  console.log(watch("name"));

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center px-6 py-10">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Get in Touch</h1>
      <p className="text-center text-gray-600 mb-10 max-w-xl">
        Contact us for inquiries, quotes, or further details about our services.
        We’re here to help bring your vision to life.
      </p>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-full max-w-2xl bg-white shadow-md rounded-lg p-6"
      >
        <div className="mb-4">
          <label
            htmlFor="name"
            className="block text-gray-700 font-semibold mb-2"
          >
            Full Name
          </label>
          <input
            id="name"
            type="text"
            className={`w-full p-3 border rounded-lg ${errors.name ? "border-red-500" : "border-gray-300"}`}
            {...register("name", { required: "Name is required." })}
          />
          {errors.name && (
            <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
          )}
        </div>

        <div className="mb-4">
          <label
            htmlFor="email"
            className="block text-gray-700 font-semibold mb-2"
          >
            Email Address
          </label>
          <input
            id="email"
            type="email"
            className={`w-full p-3 border rounded-lg ${errors.email ? "border-red-500" : "border-gray-300"}`}
            {...register("email", {
              required: "Email is required.",
              pattern: /^\S+@\S+$/i,
            })}
          />
          {errors.email && (
            <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
          )}
        </div>

        <div className="mb-4">
          <label
            htmlFor="phone"
            className="block text-gray-700 font-semibold mb-2"
          >
            Phone Number
          </label>
          <input
            id="phone"
            type="tel"
            className={`w-full p-3 border rounded-lg ${errors.phone ? "border-red-500" : "border-gray-300"}`}
            {...register("phone", { required: "Phone number is required." })}
          />
          {errors.phone && (
            <p className="text-red-500 text-sm mt-1">{errors.phone.message}</p>
          )}
        </div>

        <div className="mb-4">
          <label
            htmlFor="projectType"
            className="block text-gray-700 font-semibold mb-2"
          >
            Project Type
          </label>
          <select
            id="projectType"
            className={`w-full p-3 border rounded-lg ${errors.projectType ? "border-red-500" : "border-gray-300"}`}
            {...register("projectType", {
              required: "Please select a project type.",
            })}
          >
            <option value="">Select a Project Type</option>
            <option value="Residential">Residential</option>
            <option value="Commercial">Commercial</option>
            <option value="Renovation">Renovation</option>
          </select>
          {errors.projectType && (
            <p className="text-red-500 text-sm mt-1">
              {errors.projectType.message}
            </p>
          )}
        </div>

        <div className="mb-4">
          <label
            htmlFor="message"
            className="block text-gray-700 font-semibold mb-2"
          >
            Message
          </label>
          <textarea
            id="message"
            rows={4}
            className={`w-full p-3 border rounded-lg ${errors.message ? "border-red-500" : "border-gray-300"}`}
            {...register("message", { required: "Message is required." })}
          />
          {errors.message && (
            <p className="text-red-500 text-sm mt-1">
              {errors.message.message}
            </p>
          )}
        </div>

        <div className="mb-4">
          <label
            htmlFor="file"
            className="block text-gray-700 font-semibold mb-2"
          >
            Upload Files (Optional)
          </label>
          <input
            id="file"
            type="file"
            className="w-full"
            {...register("file")}
          />
        </div>

        <div className="mb-6">
          <label
            htmlFor="contactTime"
            className="block text-gray-700 font-semibold mb-2"
          >
            Preferred Contact Time
          </label>
          <select
            id="contactTime"
            className={`w-full p-3 border rounded-lg ${errors.contactTime ? "border-red-500" : "border-gray-300"}`}
            {...register("contactTime", {
              required: "Please select a preferred contact time.",
            })}
          >
            <option value="">Select a Time</option>
            <option value="Morning">Morning</option>
            <option value="Afternoon">Afternoon</option>
            <option value="Evening">Evening</option>
          </select>
          {errors.contactTime && (
            <p className="text-red-500 text-sm mt-1">
              {errors.contactTime.message}
            </p>
          )}
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white p-3 rounded-lg font-semibold hover:bg-blue-700"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default ContactPage;
