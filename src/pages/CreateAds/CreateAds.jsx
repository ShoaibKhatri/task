import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

const CreateAds = () => {
  const [value, setValue] = useState(false);
  const [to, setTo] = useState();
  const navigate = useNavigate();
  const location = useLocation();

  const handleAccrValue = (e) => {
    const { value, checked } = e.target;
    const checkIcon = e.currentTarget.parentNode.querySelector(
      ".material-symbols-outlined"
    );

    if (checked) {
      //   setAccr((pre) => [...pre, value]);
      checkIcon.innerText = "check_box";
      setValue(true);
      setTo(value);
    } else {
      checkIcon.innerText = "check_box_outline_blank";
      setValue(false);
      setTo("");
    }
  };

  const next = () => {
    navigate(`/${to}`);
  };

  return (
    <div className="m-5 border-2 border-grey rounded-lg  p-5">
      <button className="mb-5 px-5 py-2  font-semibold rounded-sm text-gray-500">
        Create Ads
      </button>

      <div className="w-full mx-auto h-full flex flex-col md:flex-row items-center justify-evenly">
        <label
          htmlFor="TextAd"
          className="mt-4 md:mt-0 border h-[300px] w-full sm:w-[300px] pt-5 pl-0 relative drop-shadow-xl"
        >
          <input
            type="checkbox"
            name="textad"
            id="TextAd"
            value="text-ad"
            className="cursor-pointer"
            hidden
            onChange={handleAccrValue}
          />
          <label
            htmlFor="TextAd"
            className="ml-3 font-semibold text-primaryLightGray mr-10 flex items-center"
          >
            <span className="material-symbols-outlined ">
              check_box_outline_blank
            </span>
          </label>
          <img
            src="https://www.searchinfluence.com/wp-content/uploads/2019/03/Screen-Shot-2019-03-21-at-12.59.38-PM.png"
            alt=""
            className="w-full mx-auto h-[190px] mt-1"
          />
          <div className="text-center w-full absolute bottom-0 bg-slate-100">
            Create <br /> <b> Text Ad</b>
          </div>
        </label>

        <label
          htmlFor="media-ad"
          className="mt-4 md:mt-0 border h-[300px] w-full sm:w-[300px] py-5 pl-0 relative drop-shadow-xl "
        >
          <input
            type="checkbox"
            name="accreditationValue"
            id="media-ad"
            value="media-ad"
            className="cursor-pointer"
            hidden
            onChange={handleAccrValue}
          />
          <label
            htmlFor="media-ad"
            className="ml-3 font-semibold text-primaryLightGray mr-10 flex items-center"
          >
            <span className="material-symbols-outlined ">
              check_box_outline_blank
            </span>
          </label>
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScBW7O4zFQ3jc_t7laIUbW-vBCGLM1iSodHVQZkr3V3yoCqW5MCRjCZuHU2eXbhTs1cSc&usqp=CAU"
            alt=""
            className="w-full mx-auto h-[190px] mt-1"
          />
          <div className="text-center w-full bg-slate-100 absolute bottom-0">
            Create <br /> <b> Media Ad</b>
          </div>
        </label>
      </div>

      {value && (
        <div className="flex w-full justify-end mt-5">
          <Link
            // to={`/${to}`}
            to={{
              pathname: `/${to}`,
              state: {
                location: location.pathname,
              },
            }}
            className="bg-blue-400 px-[50px] py-2 rounded-md text-white font-semibold"
            onClick={next}
            state={location.pathname}
          >
            Next
          </Link>
        </div>
      )}
    </div>
  );
};

export default CreateAds;
