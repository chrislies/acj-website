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
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setLoading(true); // Set loading to true during submission

    try {
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
    } catch (error) {
      console.log("Error submitting form:", error);
    } finally {
      setLoading(false); // Set loading to false after submission
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
          <div className="flex lg:flex-row gap-1 lg:justify-start max-lg:justify-center items-center">
            <Image
              src="/images/phone.svg"
              alt="phone"
              width={22}
              height={22}
              className="max-lg:w-3 max-lg:h-3"
            />
            {/* <svg
              className="max-lg:w-3 max-lg:h-3"
              fill="#000000"
              width="25px"
              height="25px"
              viewBox="0 0 32 32"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                {" "}
                <title>phone</title>{" "}
                <path d="M0 10.375c0 0.938 0.344 1.969 0.781 3.063s1 2.125 1.438 2.906c1.188 2.063 2.719 4.094 4.469 5.781s3.813 3.094 6.125 3.938c1.344 0.531 2.688 1.125 4.188 1.125 0.75 0 1.813-0.281 2.781-0.688 0.938-0.406 1.781-1.031 2.094-1.781 0.125-0.281 0.281-0.656 0.375-1.094 0.094-0.406 0.156-0.813 0.156-1.094 0-0.156 0-0.313-0.031-0.344-0.094-0.188-0.313-0.344-0.563-0.5-0.563-0.281-0.656-0.375-1.5-0.875-0.875-0.5-1.781-1.063-2.563-1.469-0.375-0.219-0.625-0.313-0.719-0.313-0.5 0-1.125 0.688-1.656 1.438-0.563 0.75-1.188 1.438-1.625 1.438-0.219 0-0.438-0.094-0.688-0.25s-0.5-0.281-0.656-0.375c-2.75-1.563-4.594-3.406-6.156-6.125-0.188-0.313-0.625-0.969-0.625-1.313 0-0.406 0.563-0.875 1.125-1.375 0.531-0.469 1.094-1.031 1.094-1.719 0-0.094-0.063-0.375-0.188-0.781-0.281-0.813-0.656-1.75-0.969-2.656-0.156-0.438-0.281-0.75-0.313-0.906-0.063-0.094-0.094-0.219-0.125-0.375s-0.094-0.281-0.125-0.406c-0.094-0.281-0.25-0.5-0.406-0.625-0.156-0.063-0.531-0.156-0.906-0.188-0.375 0-0.813-0.031-1-0.031-0.094 0-0.219 0-0.344 0.031h-0.406c-1 0.438-1.719 1.313-2.25 2.344-0.5 1.031-0.813 2.188-0.813 3.219z"></path>{" "}
              </g>
            </svg> */}
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
            {/* <svg
              className="max-lg:w-3 max-lg:h-3"
              fill="#000000"
              width="25px"
              height="25px"
              viewBox="0 0 512 512"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                <path d="M502.3 190.8c3.9-3.1 9.7-.2 9.7 4.7V400c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V195.6c0-5 5.7-7.8 9.7-4.7 22.4 17.4 52.1 39.5 154.1 113.6 21.1 15.4 56.7 47.8 92.2 47.6 35.7.3 72-32.8 92.3-47.6 102-74.1 131.6-96.3 154-113.7zM256 320c23.2.4 56.6-29.2 73.4-41.4 132.7-96.3 142.8-104.7 173.4-128.7 5.8-4.5 9.2-11.5 9.2-18.9v-19c0-26.5-21.5-48-48-48H48C21.5 64 0 85.5 0 112v19c0 7.4 3.4 14.3 9.2 18.9 30.6 23.9 40.7 32.4 173.4 128.7 16.8 12.2 50.2 41.8 73.4 41.4z"></path>
              </g>
            </svg> */}
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
          disabled={loading}
        >
          {loading ? (
            <div className="flex flex-row">
              <svg
                className="animate-spin h-6 w-6 mr-3"
                viewBox="0 0 24.00 24.00"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                stroke="#FFFFFF"
                stroke-width="0.00024000000000000003"
              >
                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  {" "}
                  <path
                    opacity="0.2"
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M12 19C15.866 19 19 15.866 19 12C19 8.13401 15.866 5 12 5C8.13401 5 5 8.13401 5 12C5 15.866 8.13401 19 12 19ZM12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
                    fill="#FFFFFF"
                  ></path>{" "}
                  <path
                    d="M2 12C2 6.47715 6.47715 2 12 2V5C8.13401 5 5 8.13401 5 12H2Z"
                    fill="#FFFFFF"
                  ></path>{" "}
                </g>
              </svg>
              Sending...
            </div>
          ) : (
            "Send"
          )}
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
