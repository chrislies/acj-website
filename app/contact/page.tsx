"use client"; // for useState feature
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

const page = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [phone, setPhone] = useState("");
  const [errors, setErrors] = useState({});
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

    if (success) {
      setName("");
      setEmail("");
      setPhone("");
      setMessage("");
      setErrors({});
      setSuccess(true);
    } else {
      // Map error messages to input fields
      const errorMap = {};
      msg.forEach((err) => {
        if (err.includes("Name")) {
          errorMap.name = err;
        } else if (err.includes("valid name")) {
          errorMap.name = err;
        } else if (err.includes("Email")) {
          errorMap.email = err;
        } else if (err.includes("Phone")) {
          errorMap.phone = err;
        } else if (err.includes("Message")) {
          errorMap.message = err;
        } else {
          // Handle other types of errors, including "Invalid email address"
          errorMap.email = err;
        }
      });

      setErrors(errorMap);
      setSuccess(false);
    }
  };

  return (
    <section className="bg-red-500d flex flex-col max-container w-[80%] mt-10">
      <h1 className="text-center font-bold text-4xl">Contact Us</h1>
      <div className="flexCenter">
        <div className="lg:w-[45vw] max-lg:w-fit lg:text-base max-lg:text-sm grid lg:grid-cols-2 lg:grid-rows-1 lg:grid-flow-row max-lg:grid-rows-2 max-lg:grid-flow-col mt-5">
          <div className="flex lg:flex-row gap-2 lg:justify-start max-lg:justify-center items-center">
            <Image
              src="/phone.svg"
              alt="phone"
              width={22}
              height={22}
              className="max-lg:w-3 max-lg:h-3"
            />
            <Link className="hover:underline" href="tel:9172952102">
              917-295-2102
            </Link>
          </div>
          <div className="flex lg:flex-row gap-2 lg:justify-end max-lg:justify-center items-center">
            <Image
              src="/mail.svg"
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
        className="bg-blue-500d pt-8 pb-10 border-t flex flex-col items-center gap-5"
      >
        <div className="">
          <label htmlFor="name">
            Name<span className="text-red-500">*</span>
          </label>
          <input
            onChange={(event) => setName(event.target.value)}
            value={name}
            type="text"
            id="name"
            placeholder=""
            className={`${errors.name ? "border-red-500" : "border-slate-300"}`}
          />
          <span id="nameError" className="text-red-600">
            {errors.name}
          </span>
        </div>

        <div className="">
          <label htmlFor="email">
            Email<span className="text-red-500">*</span>
          </label>
          <input
            onChange={(event) => setEmail(event.target.value)}
            value={email}
            type="text"
            id="email"
            placeholder=""
            className={`${
              errors.email ? "border-red-500" : "border-slate-300"
            }`}
          />
          <span id="emailError" className="text-red-600">
            {errors.email}
          </span>
        </div>

        <div className="">
          <label htmlFor="phone">Phone Number</label>
          <input
            onChange={(event) => setPhone(event.target.value)}
            value={phone}
            type="text"
            id="phone"
            placeholder=""
          />
          <span id="phoneError" className="text-red-600">
            {errors.phone}
          </span>
        </div>

        <div className="">
          <label htmlFor="message">
            Message<span className="text-red-500">*</span>
          </label>
          <textarea
            onChange={(event) => setMessage(event.target.value)}
            value={message}
            style={{ minHeight: "128px", resize: "vertical" }}
            id="message"
            placeholder=""
            className={`${
              errors.message ? "border-red-500" : "border-slate-300"
            }`}
          ></textarea>
          <span id="messageError" className="text-red-600">
            {errors.message}
          </span>
        </div>

        <button
          className="bg-green-700 hover:bg-green-800 rounded p-3 w-[150px] text-white font-bold"
          type="submit"
        >
          Send
        </button>
        <div className="h-5">
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
