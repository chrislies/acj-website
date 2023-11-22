"use client"; // for useState feature
import React, { useState } from "react";

const page = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [phone, setPhone] = useState("");
  const [error, setError] = useState([]);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // console.log("Name: ", name.trim());
    // console.log("Email: ", email.trim());
    // console.log("Phone #: ", phone);
    // console.log("Message: ", message);

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
    setError(msg);
    setSuccess(success);

    if (success) {
      setName("");
      setEmail("");
      setPhone("");
      setMessage("");
    }
  };

  return (
    <section className="bg-red-500d max-container w-[80%] m-12">
      <h1 className="text-center font-bold text-4xl">Contact Us</h1>
      <form
        onSubmit={handleSubmit}
        className="bg-blue-500d py-4 mt-4 border-t flex flex-col items-center gap-5"
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
          />
          <span id="nameError" className=""></span>
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
          />
          <span id="nameError" className=""></span>
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
          <span id="nameError" className=""></span>
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
          ></textarea>
          <span id="nameError" className=""></span>
        </div>

        <button
          className="bg-green-700 p-3 w-[150px]  text-white font-bold"
          type="submit"
        >
          Send
        </button>
      </form>

      <div className="bg-slate-100 flex flex-col">
        {error &&
          error.map((err) => (
            <div
              className={`${
                success ? "text-green-800" : "text-red-600"
              } px-5 py-2`}
              key={err} // Add a unique key for each error
            >
              {err}
            </div>
          ))}
      </div>
    </section>
  );
};

export default page;
