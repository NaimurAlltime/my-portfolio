import emailjs from "@emailjs/browser";
import { useRef } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import img from "../../assets/contact.png";
// import email from "../../assets/email.png";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_wf6ofxl",
        "template_i5od13u",
        form.current,
        "SlvP-FHSkNcXNqTxA"
      )
      .then(
        (result) => {
          console.log(result.text);
          //   console.log("message sent");
          toast("Your message sent successful!");
          e.target.reset();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="w-full pt-7 px-8 md:px-10 gap-10 lg:gap-20 lg:py-20">
      <h2 className="text-3xl text-center font-bold text-black dark:text-white">
        Contact Me
      </h2>
      <div
        data-aos="zoom-in-down"
        data-aos-offset="200"
        data-aos-delay="50"
        data-aos-duration="1000"
        data-aos-easing="ease-in-out"
        className="xl:mt-5 w-full items-center flex xl:flex-row flex-col-reverse md:gap-10 overflow-hidden"
      >
        <div className="md:w-1/2 bg-black-100 rounded-2xl">
          <form
            ref={form}
            onSubmit={sendEmail}
            className="mt-5 flex flex-col gap-8"
          >
            <label className="flex flex-col">
              <span className="text-white font-medium mb-2">Your Name</span>
              <input
                type="text"
                name="user_name"
                placeholder="Enter your name"
                className="bg-gray-800 py-4 px-6 placeholder-gray-500 text-white rounded-lg outline-none border-none font-medium"
              />
            </label>
            <label className="flex flex-col">
              <span className="text-white font-medium mb-2">Your email</span>
              <input
                type="email"
                name="user_email"
                placeholder="Enter your email"
                className="bg-gray-800 py-4 px-6 placeholder-gray-500 text-white rounded-lg outline-none border-none font-medium"
              />
            </label>
            <label className="flex flex-col">
              <span className="text-white font-medium mb-2">Your Message</span>
              <textarea
                rows={7}
                name="message"
                placeholder="Enter your message"
                className="bg-gray-800 py-4 px-6 placeholder-gray-500 text-white rounded-lg outline-none border-none font-medium"
              />
            </label>

            <button
              type="submit"
              className="bg-orange-500 py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md"
            >
              Send
            </button>
            <ToastContainer />
          </form>
        </div>

        <div className="md:w-1/2">
          {/* <Player src="contact.json" loop autoplay /> */}
          <img src={img} alt="" />
          {/* <div className="flex gap2 items-center dark:text-white">
            <img className="w-[27px]" src={email} alt="" />
            <p>naimur2231@gmail.com</p>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Contact;
