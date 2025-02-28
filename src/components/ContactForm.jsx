import React, { useCallback, useEffect, useState } from "react";
import { toast } from "react-toastify";
import { useForm, ValidationError } from "@formspree/react";
import Spinner from "./Spinner";

const ContactForm = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [disabled, setDisabled] = useState(true);
  const [state, handleSubmit] = useForm("mvgzekqb");

  const isValidEmail = (email) => {
    return /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email);
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    if (disabled || state.submitting) return;
    if (!isValidEmail(email)) {
      toast.error("Invalid email address");
      return;
    }
    await handleSubmit({ email, message });
  };

  useEffect(() => {
    setDisabled(!(email.trim() && message.trim()));
  }, [email, message]);

  useEffect(() => {
    if (state.succeeded) {
      toast.success("Submitted successfully");
      setDisabled(true);
      setEmail("");
      setMessage("");
    }
  }, [state.succeeded]);
  return (
    <form className="w-full flex flex-col gap-8" onSubmit={handleFormSubmit}>
      <div className="relative w-full bg-gradient h-[40px] [clip-path:polygon(0%_0.9em,_0.9em_0%,_100%_0%,_100%_calc(100%_-_0.9em),_calc(100%_-_0.9em)_100%,_0_100%)]">
        <input
          type="email"
          placeholder="Your email"
          className="border-none text-white py-2 px-4 text-sm outline-none absolute inset-[1px] bg-[#1C1C1C] [clip-path:polygon(0%_0.9em,_0.9em_0%,_100%_0%,_100%_calc(100%_-_0.9em),_calc(100%_-_0.9em)_100%,_0_100%)]"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div className="relative bg-gradient h-[300px] w-full [clip-path:polygon(0%_0.9em,_0.9em_0%,_100%_0%,_100%_calc(100%_-_0.9em),_calc(100%_-_0.9em)_100%,_0_100%)]">
        <textarea
          className="absolute bg-[#1C1C1C] border-none outline-none text-white p-4 inset-[1px] [clip-path:polygon(0%_0.9em,_0.9em_0%,_100%_0%,_100%_calc(100%_-_0.9em),_calc(100%_-_0.9em)_100%,_0_100%)]"
          style={{ resize: "none" }}
          placeholder="What is your opinion"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
      </div>
      <div
        className={`${
          state.submitting || disabled
            ? "bg-[#1C1C1C]"
            : "bg-gradient hover:scale-105"
        } relative h-[60px] w-full transition-all duration-300 ease-in-out [clip-path:polygon(0%_0.9em,_0.9em_0%,_100%_0%,_100%_calc(100%_-_0.9em),_calc(100%_-_0.9em)_100%,_0_100%)]`}
      >
        <div
          className={`${
            state.submitting || disabled ? "bg-[#444444]" : "bg-white"
          } absolute [clip-path:polygon(0%_0.9em,_0.9em_0%,_100%_0%,_100%_calc(100%_-_0.9em),_calc(100%_-_0.9em)_100%,_0_100%)] inset-[5px]`}
        >
          <button
            type="submit"
            className={`${
              state.submitting || disabled
                ? "bg-[#1C1C1C] cursor-not-allowed text-[#444444]"
                : "bg-gradient cursor-pointer text-white"
            } absolute [clip-path:polygon(0%_0.9em,_0.9em_0%,_100%_0%,_100%_calc(100%_-_0.9em),_calc(100%_-_0.9em)_100%,_0_100%)] inset-[1px] flex items-center justify-center`}
            disabled={state.submitting || disabled}
          >
            {state.submitting ? (
              <div className="flex flex-row items-center gap-3">
                <span className="text-[#444444]">Submitting...</span>
                <Spinner size={20} margin={12} />
              </div>
            ) : (
              "Submit"
            )}
          </button>
        </div>
      </div>
    </form>
  );
};

export default ContactForm;
