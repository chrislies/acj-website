"use client"; // for useState feature
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

const page = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [phone, setPhone] = useState("");
  const [errors, setErrors] = useState({
    nameError: "",
    emailError: "",
    phoneError: "",
    messageError: "",
  });
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const res = await fetch("api/contact", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        name,
        email,
        phone,
        message,
      }),
    });

    const { msg, success } = await res.json();
    // console.log("Server response:", { msg, success }); // Log the server response

    if (success) {
      // console.log("Form submitted successfully"); // Log successful form submission
      setName("");
      setEmail("");
      setPhone("");
      setMessage("");
      setErrors({
        nameError: "",
        emailError: "",
        phoneError: "",
        messageError: "",
      });
      setSuccess(true);
    } else {
      // console.log("Form submission failed", msg); // Log failed form submission and error messages
      // Map error messages to input fields
      const errorMap: Record<string, string | string[]> = {};
      msg.forEach((err: string | string[]) => {
        if (err.includes("Name")) {
          errorMap.nameError = err;
          const nameElement = document.querySelector(".name");
          if (nameElement) {
            nameElement.scrollIntoView({
              behavior: "smooth",
              block: "center",
              inline: "nearest",
            });
          }
        } else if (err.includes("valid name")) {
          errorMap.nameError = err;
          const nameElement = document.querySelector(".name");
          if (nameElement) {
            nameElement.scrollIntoView({
              behavior: "smooth",
              block: "center",
              inline: "nearest",
            });
          }
        } else if (err.includes("Email")) {
          errorMap.emailError = err;
          const emailElement = document.querySelector(".email");
          if (emailElement) {
            emailElement.scrollIntoView({
              behavior: "smooth",
              block: "center",
              inline: "nearest",
            });
          }
        } else if (err.includes("Phone")) {
          errorMap.phoneError = err;
        } else if (err.includes("Message")) {
          errorMap.messageError = err;
        } else {
          errorMap.emailError = err;
          const emailElement = document.querySelector(".email");
          if (emailElement) {
            emailElement.scrollIntoView({
              behavior: "smooth",
              block: "center",
              inline: "nearest",
            });
          }
        }
      });
      // console.log("New errors:", { ...errors, ...errorMap }); // Log the new errors

      setErrors((prevErrors) => ({
        ...prevErrors, // Preserve existing values
        ...errorMap, // Update with new values
      }));
      setSuccess(false);
    }
  };

  return (
    <section>
      <div
        className="flex justify-center bg-cover bg-no-repeat bg-center h-[30vh]"
        style={{ backgroundImage: 'url("/compressed_images/worldmap.webp")' }}
      >
        <div className="backdrop-blur-[3px] bg-white/20 w-full h-full flex flex-col justify-center items-center">
          <h1 className="font-bold lg:text-6xl max-lg:text-5xl max-sm:text-4xl tracking-tight leading-[70px]">
            Contact Us
          </h1>
        </div>
      </div>
      <div className="flex flex-row justify-center items-center bg-red-500d pt-10 pb-2">
        <div className="bg-blue-500d lg:w-[45vw] max-lg:w-fit 2xl:text-xl max-md:text-sm grid lg:grid-cols-2 lg:grid-rows-1 lg:grid-flow-row max-lg:grid-rows-2 max-lg:grid-flow-col">
          <div className="flex lg:flex-row gap-2 lg:justify-start max-lg:justify-center items-center">
            <Image
              src="/images/phone.svg"
              alt="phone"
              width={22}
              height={22}
              className="max-lg:w-3 max-lg:h-3"
            />
            <Link className="hover:underline" href="tel:9297100869">
              929-710-0869
            </Link>
          </div>
          <div className="flex lg:flex-row gap-2 lg:justify-end max-lg:justify-center items-center">
            <Image
              src="/images/mail.svg"
              alt="email"
              width={22}
              height={22}
              className="max-lg:w-3 max-lg:h-3"
            />
            <Link
              className="hover:underline"
              href="mailto:info@acjinternationalrealty.com"
            >
              info@acjinternationalrealty.com
            </Link>
          </div>
        </div>
      </div>
      <form
        onSubmit={handleSubmit}
        className="bg-blue-500d pt-8 pb-10 flex flex-col items-center gap-5 2xl:px-[200px] max-2xl:px-[200px] max-xl:px-[100px] max-lg:px-8"
      >
        <div className="name">
          <label htmlFor="name">
            Name<span className="text-red-500">*</span>
          </label>
          <input
            onChange={(event) => {
              setName(event.target.value);
              // Clear the error when the user starts typing
              setErrors((prevErrors) => ({ ...prevErrors, nameError: "" }));
            }}
            value={name}
            type="text"
            id="name"
            placeholder=""
            className={`${
              errors.nameError ? "border-red-500" : "border-slate-300"
            }`}
          />
          <span id="nameError" className="text-red-600">
            {errors.nameError}
          </span>
        </div>

        <div className="email">
          <label htmlFor="email">
            Email<span className="text-red-500">*</span>
          </label>
          <input
            onChange={(event) => {
              setEmail(event.target.value);
              // Clear the error when the user starts typing
              setErrors((prevErrors) => ({ ...prevErrors, emailError: "" }));
            }}
            value={email}
            type="text"
            id="email"
            placeholder=""
            className={`${
              errors.emailError ? "border-red-500" : "border-slate-300"
            }`}
          />
          <span id="emailError" className="text-red-600">
            {errors.emailError}
          </span>
        </div>

        <div className="phone">
          <label htmlFor="phone">Phone Number</label>
          <input
            onChange={(event) => setPhone(event.target.value)}
            value={phone}
            type="text"
            id="phone"
            placeholder=""
          />
          <span id="phoneError" className="text-red-600">
            {errors.phoneError}
          </span>
        </div>

        <div className="message">
          <label htmlFor="message">
            Message<span className="text-red-500">*</span>
          </label>
          <textarea
            onChange={(event) => {
              setMessage(event.target.value);
              // Clear the error when the user starts typing
              setErrors((prevErrors) => ({ ...prevErrors, messageError: "" }));
            }}
            value={message}
            style={{ minHeight: "128px", resize: "vertical" }}
            id="message"
            placeholder=""
            className={`${
              errors.messageError ? "border-red-500" : "border-slate-300"
            }`}
          ></textarea>
          <span id="messageError" className="text-red-600">
            {errors.messageError}
          </span>
        </div>

        <button
          className="bg-green-600 hover:bg-green-500 rounded p-3 w-[150px] text-white font-bold"
          type="submit"
        >
          Send
        </button>
        <div className="2xl:h-5 max-2xl:h-5 max-sm:h-[30px]">
          {success && (
            <div
              className={`bg-slate-100 text-green-800 text-lg px-5 py-2`}
              key="success"
            >
              Message sent successfully.
            </div>
          )}
        </div>
      </form>
    </section>
  );
};

export default page;
