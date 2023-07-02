import { BsArrowUpRightCircleFill, BsGithub } from "react-icons/bs";
import { FcApproval } from "react-icons/fc";
import Project2 from "../../assets/project/project-2.png";
import Project1 from "../../assets/project/project-one.png";
import Project3 from "../../assets/project/project-three.png";

const Project = () => {
  return (
    <div className="w-full py-16 px-8 md:px-10 gap-10 lg:gap-20 lg:py-20">
      <h4 className="text-3xl text-center font-bold text-black dark:text-white mb-14">
        Best Projects
      </h4>

      <div
        data-aos="fade-up"
        data-aos-offset="200"
        data-aos-delay="50"
        data-aos-duration="1000"
        data-aos-easing="ease-in-out"
        className="flex flex-col-reverse md:flex-row-reverse items-center w-full gap-10 mb-12"
      >
        <div className="text-black dark:text-white md:w-1/2">
          <h2 className="text-3xl font-semibold">Music Fairy</h2>
          <h5 className="text-orange-500 text-xl mt-2">
            React JS | NodeJS | MongoDB | Express JS | Firebase | Stripe |
            Tailwind | JWT{" "}
          </h5>
          <p className="text-lg mt-4 mb-2">
            Introducing Music Fairy: The Ultimate Online Music School Learning
            Platform.
          </p>
          <div className="flex items-center gap-2">
            <FcApproval className="text-xl" />
            <p className="text-lg font-light">
              Music Fairy is a full stack web application
            </p>
          </div>
          <div className="flex items-center gap-2">
            <FcApproval className="text-xl" />
            <p className="text-lg font-light">
              On website 3 role an admin, instructor and student.
            </p>
          </div>
          <div className="flex items-center gap-2">
            <FcApproval className="text-xl" />
            <p className="text-lg font-light">
              Integration stripe international payment system
            </p>
          </div>

          <div className="flex items-center gap-2">
            <FcApproval className="text-xl" />
            <p className="text-lg font-light">
              Integration firebase authentication system
            </p>
          </div>
          <div className="flex items-center gap-2">
            <FcApproval className="text-xl" />
            <p className="text-lg font-light">
              Applied Private route system and JWT to secure data
            </p>
          </div>
          <div className="mt-5 flex gap-4">
            <div className="flex items-center text-xl font-medium gap-2">
              <BsGithub />
              <a
                href="https://github.com/NaimurAlltime/music-fairy-client"
                target="_blank"
                rel="noreferrer"
              >
                Client
              </a>
            </div>
            <div className="flex items-center text-xl font-medium gap-2">
              <BsGithub />
              <a
                href="https://github.com/NaimurAlltime/music-fairy-server"
                target="_blank"
                rel="noreferrer"
              >
                Server
              </a>
            </div>
            <div className="flex items-center text-xl font-medium gap-2">
              <BsArrowUpRightCircleFill />
              <a
                href="https://music-fairy-a1e59.web.app/"
                target="_blank"
                rel="noreferrer"
              >
                Live Demo
              </a>
            </div>
          </div>
        </div>
        <div className="md:w-1/2 cursor-pointer hover:scale-110 ease-in-out duration-300">
          <img className="w-full h-[380px] rounded-md" src={Project1} alt="" />
        </div>
      </div>
      <div
        data-aos="fade-up"
        data-aos-offset="200"
        data-aos-delay="50"
        data-aos-duration="1000"
        data-aos-easing="ease-in-out"
        className="flex flex-col-reverse md:flex-row-reverse items-center w-full gap-10 mb-12"
      >
        <div className="md:w-1/2 cursor-pointer hover:scale-110 ease-in-out duration-300">
          <img className="w-full h-[380px] rounded-md" src={Project2} alt="" />
        </div>
        <div className="text-black dark:text-white md:w-1/2">
          <h2 className="text-3xl font-semibold">Toy Trackers</h2>
          <h5 className="text-orange-500 text-xl mt-2">
            React JS | NodeJS | MongoDB | Express JS | Firebase | Tailwind
          </h5>
          <p className="text-lg mt-4 mb-2">
            Introducing Toy Trackers: The Ultimate Toy Online Marketplace
            Platform.
          </p>
          <div className="flex items-center gap-2">
            <FcApproval className="text-xl" />
            <p className="text-lg font-light">
              Toy Trackers site uses Firebase authentication
            </p>
          </div>
          <div className="flex items-center gap-2">
            <FcApproval className="text-xl" />
            <p className="text-lg font-light">
              On website 3 role an admin, instructor and student.
            </p>
          </div>
          <div className="flex items-center gap-2">
            <FcApproval className="text-xl" />
            <p className="text-lg font-light">
              User and seller base full stack with mongo integration.
            </p>
          </div>

          <div className="flex items-center gap-2">
            <FcApproval className="text-xl" />
            <p className="text-lg font-light">
              On website Add user, my user, all user implement.
            </p>
          </div>
          <div className="flex items-center gap-2">
            <FcApproval className="text-xl" />
            <p className="text-lg font-light">
              Search and filtering option to help users find the specific
              product.
            </p>
          </div>
          <div className="mt-5 flex gap-4">
            <div className="flex items-center text-xl font-medium gap-2">
              <BsGithub />
              <a
                href="https://github.com/NaimurAlltime/toy-trackers-client"
                target="_blank"
                rel="noreferrer"
              >
                Client
              </a>
            </div>
            <div className="flex items-center text-xl font-medium gap-2">
              <BsGithub />
              <a
                href="https://github.com/NaimurAlltime/toy-trackers-server"
                target="_blank"
                rel="noreferrer"
              >
                Server
              </a>
            </div>
            <div className="flex items-center text-xl font-medium gap-2">
              <BsArrowUpRightCircleFill />
              <a
                href="https://toy-trackers.web.app/"
                target="_blank"
                rel="noreferrer"
              >
                Live Demo
              </a>
            </div>
          </div>
        </div>
      </div>
      <div
        data-aos="fade-up"
        data-aos-offset="200"
        data-aos-delay="50"
        data-aos-duration="1000"
        data-aos-easing="ease-in-out"
        className="flex flex-col-reverse md:flex-row-reverse items-center w-full gap-10"
      >
        <div className="text-black dark:text-white md:w-1/2">
          <h2 className="text-3xl font-semibold">Royal Meals</h2>
          <h5 className="text-orange-500 text-xl mt-2">
            React JS | NodeJS | MongoDB | Express JS | Firebase | Bootstrap
          </h5>
          <p className="text-lg mt-4 mb-2">
            Introducing Royal Meals: The Ultimate Toy Online Chep Recipe
            Platform.
          </p>
          <div className="flex items-center gap-2">
            <FcApproval className="text-xl" />
            <p className="text-lg font-light">
              This web application is made with react and restful API
            </p>
          </div>
          <div className="flex items-center gap-2">
            <FcApproval className="text-xl" />
            <p className="text-lg font-light">
              User can see details only after login.
            </p>
          </div>
          <div className="flex items-center gap-2">
            <FcApproval className="text-xl" />
            <p className="text-lg font-light">
              Application is made with bootstrap css library
            </p>
          </div>

          <div className="flex items-center gap-2">
            <FcApproval className="text-xl" />
            <p className="text-lg font-light">
              Integration of sweet alert and user friendly.
            </p>
          </div>
          <div className="flex items-center gap-2">
            <FcApproval className="text-xl" />
            <p className="text-lg font-light">
              Implementation of Firebase authentication system
            </p>
          </div>
          <div className="mt-5 flex gap-4">
            <div className="flex items-center text-xl font-medium gap-2">
              <BsGithub />
              <a
                href="https://github.com/NaimurAlltime/royal-meals-client"
                target="_blank"
                rel="noreferrer"
              >
                Client
              </a>
            </div>
            <div className="flex items-center text-xl font-medium gap-2">
              <BsGithub />
              <a
                href="https://github.com/NaimurAlltime/royal-meals-server"
                target="_blank"
                rel="noreferrer"
              >
                Server
              </a>
            </div>
            <div className="flex items-center text-xl font-medium gap-2">
              <BsArrowUpRightCircleFill />
              <a
                href="https://royal-meals.web.app/"
                target="_blank"
                rel="noreferrer"
              >
                Live Demo
              </a>
            </div>
          </div>
        </div>
        <div className="md:w-1/2 cursor-pointer hover:scale-110 ease-in-out duration-300">
          <img className="w-full h-[380px] rounded-md" src={Project3} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Project;
