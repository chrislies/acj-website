"use client"; // for useState feature
import { Mail, Phone, Spinner } from "@/components/svgs";
import Link from "next/link";
import React, { useRef, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import HCaptcha from "@hcaptcha/react-hcaptcha";

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
  const [captchaToken, setCaptchaToken] = useState<string | null>(null);
  const captchaRef = useRef<HCaptcha>(null);

  const sanitizeInput = (input: string) => {
    return input
      .replace(/</g, "&lt;") // Replace `<` with `&lt;`
      .replace(/>/g, "&gt;") // Replace `>` with `&gt;`
      .replace(/&/g, "&amp;") // Replace `&` with `&amp;`
      .replace(/"/g, "&quot;") // Replace `"` with `&quot;`
      .replace(/'/g, "&#039;"); // Replace `'` with `&#039;`
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    // Validate hCaptcha token
    if (!captchaToken) {
      toast.error("Please complete the CAPTCHA challenge.", {
        id: "captcha-error-toast",
        duration: 5000,
      });
      return;
    }

    setLoading(true); // Set loading to true during submission

    try {
      const sanitizedData = {
        name: sanitizeInput(name.trim()),
        email: sanitizeInput(email.trim()),
        message: sanitizeInput(message),
        captchaToken,
      };

      const res = await fetch("api/contact", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(sanitizedData),
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
        toast.success("Email sent successfully!", { id: "email-success-toast", duration: 10000 });
        captchaRef.current?.resetCaptcha();
      } else {
        // console.log("Form submission failed", msg); // Log failed form submission and error messages
        // Map error messages to input fields
        const errorMap: Record<string, string | string[]> = {};
        if (Array.isArray(msg)) {
          msg.forEach((err: string | string[]) => {
            if (typeof err !== "string") return;
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
        } else if (typeof msg === "string") {
          // Handle single string error
          let err = msg;
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
        }
        // console.log("New errors:", { ...errors, ...errorMap }); // Log the new errors

        setErrors((prevErrors) => ({
          ...prevErrors, // Preserve existing values
          ...errorMap, // Update with new values
        }));
        setSuccess(false);
      }
    } catch (error) {
      console.log("Error submitting form:", error);
      toast.error("An error occurred. Please try again later.", {
        id: "email-error-toast",
        duration: 10000,
      });
    } finally {
      setLoading(false); // Set loading to false after submission
    }
  };

  // Handle hCaptcha verification
  const handleCaptchaVerify = (token: string) => {
    setCaptchaToken(token);
  };

  return (
    <section className="min-h-screend">
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

      <div className="bg-red-400d flex gap-[120px] justify-center items-center pt-10 2xl:text-xl max-md:text-sm max-md:flex-col max-md:gap-2">
        <div className="flex gap-2 items-center">
          <Mail className="h-[22px] max-lg:h-4"></Mail>
          <Link
            className="hover:underline"
            href="mailto:info@acjinternationalrealty.com"
          >
            info@acjinternationalrealty.com
          </Link>
        </div>
        <div className="flex gap-2 items-center">
          <Phone className="h-[22px] max-lg:h-4"></Phone>
          <Link
            className="hover:underline"
            href="tel:917-295-2102"
          >
            (917) 295-2102
          </Link>
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
            className={`${errors.nameError ? "border-red-500" : "border-slate-300"}`}
          />
          <span
            id="nameError"
            className="text-red-600"
          >
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
            className={`${errors.emailError ? "border-red-500" : "border-slate-300"}`}
          />
          <span
            id="emailError"
            className="text-red-600"
          >
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
          <span
            id="phoneError"
            className="text-red-600"
          >
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
            className={`${errors.messageError ? "border-red-500" : "border-slate-300"}`}
          ></textarea>
          <span
            id="messageError"
            className="text-red-600"
          >
            {errors.messageError}
          </span>
        </div>

        {/* hCaptcha compoment */}
        <HCaptcha
          sitekey={process.env.NEXT_PUBLIC_HCAPTCHA_SITE_KEY || ""}
          onVerify={handleCaptchaVerify}
          ref={captchaRef}
        />

        <button
          className="bg-green-600 hover:bg-green-500 rounded p-3 w-[150px] text-white font-bold"
          type="submit"
          disabled={loading}
        >
          {loading ? (
            <div className="flex flex-row">
              <Spinner className="animate-spin h-6 mr-3"></Spinner>
              Sending...
            </div>
          ) : (
            "Send"
          )}
        </button>
      </form>
      <Toaster />
    </section>
  );
};

export default page;
