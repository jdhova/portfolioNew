import SectionHeader from "@components/UI-Componets/Section-Header/SectionHeader";
import axios from "axios";
import { AnimatePresence, motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const ContactSection = (props) => {
  const ref = useRef(null);
  const isInView = useInView(ref);

  useEffect(() => {
    if (isInView) props.detectSection('contact');
  }, [isInView]);



  let [userName, setUserName] = useState("");
  let [email, setEmail] = useState("");
  let [service, setService] = useState("Select Any Service");
  let [message, setMessage] = useState("");
  let [errorMessage, setErrorMessage] = useState("");
  let [buttonState, setButtonState] = useState("default");
  useEffect(() => {
    if (errorMessage !== "") {
      setTimeout(() => {
        setErrorMessage("");
      }, 4000);
    }
    if (buttonState === "success") {
      setTimeout(() => {
        setButtonState("default");
      }, 4000);
    }
  }, [errorMessage, buttonState]);

  async function FormSubmit(e) {
    e.preventDefault();
    if (service === "Select Any Service") {
      setService("RED");
    } else {
      try {
        setButtonState("sending");
        await axios.post("/api/jude-contact-server", {
          userName,
          email,
          service,
          message,
        });
        setErrorMessage("");
        setButtonState("success");
        setEmail("");
        setUserName("");
        setMessage("");
        setService("Select Any Service");
      } catch (err) {
        setButtonState("default");
        if (err.message === "Network Error") {
          setErrorMessage("Internet Disconnected");
        } else {
          setErrorMessage(err.message);
        }
      }
    }
  }
  return (
    <div ref={ref} id="contact" className="py-20 max-container">
      <SectionHeader heading={props.Header.heading} desc={props.Header.desc} />
      <div className="block mx-auto p-6 rounded-lg shadow-lg bg-white max-w-lg">
        <AnimatePresence>
          {errorMessage !== "" && (
            <motion.div
              layout
              initial={{ opacity: "50%", scale: 0.5 }}
              animate={{ opacity: "100%", scale: 1 }}
              exit={{ opacity: "50%", scale: 0.5 }}
              transition={{ duration: 0.4 }}
              className="flex items-center justify-center md:justify-start  gap-x-3 bg-red-500 text-white px-5 py-2 mb-3 rounded text-lg"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 16 16"
                fill="white"
              >
                <path d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
              </svg>
              <p>{errorMessage}</p>
            </motion.div>
          )}
        </AnimatePresence>
        <form onSubmit={buttonState === "default" ? FormSubmit : undefined}>
          <div className="form-group mb-6">
            <input
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
              required
              type="text"
              className="form-control block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-primary
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-primary focus:outline-none"
              id="exampleInput7"
              placeholder="Name"
            />
          </div>
          <div className="form-group mb-6">
            <input
              required
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="form-control block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-primary
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-primary focus:outline-none"
              id="exampleInput8"
              placeholder="Email address"
            />
          </div>
          <div className="form-group mb-6">
            <select
              value={service}
              onChange={(e) => setService(e.target.value)}
              className={`form-select block
      w-full
      px-3
      py-1.5
      text-base
      font-normal 
      ${service === "RED" ? "text-red-400" : "text-primary"}
       
      bg-white bg-clip-padding bg-no-repeat
      ${service === "RED" ? "border-red-400" : "border-gray-300"}
      ${service === "RED" ? "border-2" : "border"}
      rounded
      transition
      ease-in-out
      m-0
     focus:bg-white focus:border-primary focus:outline-none`}
              aria-label="Default select example"
            >
              <option
                className="text-gray-300"
                defaultValue="Select Any Service"
              >
                Select Any Service
              </option>
              <option className="text-primary" value="React js">
                React js
              </option>
              <option className="text-primary" value="Full Stack">
                Full Stack
              </option>
              <option className="text-primary" value="Firebase or Database">
                Firebase or Database
              </option>
              <option className="text-primary" value="HTML, CSS, JavaScript">
                HTML, CSS, JavaScript
              </option>
              <option className="text-primary" value="Others">
                Others
              </option>
            </select>
          </div>
          <div className="form-group mb-6">
            <textarea
              required
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="
              resize-none
        form-control
        block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-primary
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-primary focus:outline-none
      "
              id="exampleFormControlTextarea13"
              rows={4}
              placeholder="Message"
            />
          </div>
          <button
            disabled={buttonState === "sending"}
            type="submit"
            className={`
      w-full
      px-6
      py-2.5
      bg-white
      border
      ${buttonState !== "sending" ? "border-primary" : "border-gray-400"}
      text-primary
      leading-tight
      uppercase
      rounded
      shadow
      ${
        buttonState !== "sending" &&
        `hover:bg-primary hover:shadow-md hover:text-white focus:bg-primary focus:shadow-md focus:text-white focus:outline focus:outline-offset-2 focus:outline-primary focus:ring-0
      active:bg-primary active:shadow-md`
      }
      transition
      duration-150
      ease-in-out`}
          >
            {buttonState === "default"
              ? "Send"
              : buttonState === "success"
              ? "Sent Successfully"
              : buttonState === "sending" && (
                  <svg
                    width="26"
                    height="25"
                    viewBox="0 0 26 25"
                    className="fill-gray-400 animate-spin mx-auto inline-block"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M25.4156 11.7576C25.1942 7.23882 22.4631 3.01636 18.4034 1.09032C13.9746 -0.90979 8.5863 -0.0949291 4.89566 3.01636C1.35264 5.97949 -0.27124 10.7946 0.762139 15.3133C1.72171 19.758 5.19091 23.3879 9.54587 24.5731C14.7866 26.0547 19.5844 23.536 22.5369 19.2395C19.8797 22.7952 15.82 25.1658 11.3174 24.3509C6.81479 23.536 3.12415 20.1284 2.09077 15.6837C0.983578 10.9427 3.19796 5.97949 7.40529 3.5349C11.7603 1.01624 17.8867 1.97926 20.7654 6.2758C21.5035 7.31289 22.0202 8.57222 22.2417 9.83155C22.4631 10.8686 22.3893 11.9798 22.5369 13.0169C22.6845 13.9799 23.4965 15.2393 24.6037 14.5726C25.5632 13.9799 25.4894 12.7206 25.4156 11.7576C25.4156 11.4613 25.4894 12.2761 25.4156 11.7576V11.7576Z" />
                  </svg>
                )}
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactSection;
