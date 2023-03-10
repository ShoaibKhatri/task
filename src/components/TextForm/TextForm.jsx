import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import swal from "sweetalert";

const TextForm = (props) => {
  const [media, setMedia] = useState({});
  const navigate = useNavigate();
  const [btndisabled, setBtndisabled] = useState(true);
  const location = useLocation();

  const mediaSubmit = (e) => {
    e.preventDefault();
    console.log(media);
    swal({
      text: "You clicked the button!",
      icon: "success",
      timer: 1000,
    }).then(() => {
      navigate("/createads");
      setMedia({});
    });
  };

  useEffect(() => {
    if (
      media.heading1 &&
      media.heading2 &&
      media.description1 &&
      media.video &&
      media.business &&
      media.button &&
      media.website
    ) {
      setBtndisabled(false);
    }
  });

  return (
    <div>
      <div className="flex items-center justify-evenly w-full">
        <div className="flex items-center justify-center flex-col w-11/12">
          <div className="self-start m-3">
            <h5>Create Text</h5>
          </div>

          <form className="w-full " onSubmit={mediaSubmit}>
            <div className="md:flex justify-between md:mr-2">
              <div className="w-full mb-5">
                <div className="mb-2">
                  <label>Heading 01</label>
                  <input
                    type="text"
                    required
                    className="w-full border border-black outline-none p-2"
                    placeholder="Add a heading that would make users interested"
                    onChange={(e) =>
                      setMedia({ ...media, heading1: e.target.value })
                    }
                  />
                </div>
                <div>
                  <label>Heading 02</label>
                  <input
                    type="text"
                    required
                    placeholder="Add a heading that would make users interested"
                    className="w-full border border-black outline-none p-2"
                    onChange={(e) =>
                      setMedia({ ...media, heading2: e.target.value })
                    }
                  />
                </div>
              </div>
              <div className="w-full md:ml-2">
                <label>Description 1</label>
                <textarea
                  id="w3review"
                  name="w3review"
                  required
                  rows="4"
                  cols="50"
                  className="w-full border border-black outline-none p-1"
                  onChange={(e) =>
                    setMedia({ ...media, description1: e.target.value })
                  }
                />
              </div>
            </div>

            <div className="mb-5">
              <label>Video URL</label>
              <input
                type="text"
                required
                placeholder="Add the URL of the image you want to use for the ad"
                className="w-full border border-black outline-none p-2 "
                onChange={(e) => setMedia({ ...media, video: e.target.value })}
              />
            </div>

            <div className="md:flex w-full justify-between mb-5">
              <div className="w-full md:mr-2">
                <label>Business Name</label>
                <input
                  type="text"
                  required
                  placeholder="Add your business name"
                  className="w-full border border-black outline-none p-2 "
                  onChange={(e) =>
                    setMedia({ ...media, business: e.target.value })
                  }
                />
              </div>
              <div className="flex flex-col w-full md:ml-2">
                <label htmlFor="cars">Button Label</label>
                <select
                  name="cars"
                  id="cars"
                  defaultValue="Select a label that best suits your ad"
                  className="border border-black p-2"
                  onChange={(e) =>
                    setMedia({ ...media, button: e.target.value })
                  }
                >
                  <option
                    disabled
                    value="Select a label that best suits your ad"
                    className="opacity-60"
                  >
                    Select a label that best suits your ad
                  </option>
                  <option value="saab">Saab</option>
                  <option value="opel">Opel</option>
                  <option value="audi">Audi</option>
                </select>
              </div>
            </div>
            <div>
              <label>Website URL</label>
              <input
                type="text"
                required
                placeholder="Add your business name"
                className="w-full border border-black outline-none p-2 "
                onChange={(e) =>
                  setMedia({ ...media, website: e.target.value })
                }
              />
            </div>

            <div className="float-right my-3">
              <Link
                to={location.state}
                className="border border-gray-500  px-8 py-2 rounded-md capitalize font-semibold"
              >
                Back
              </Link>
              <button
                type="submit"
                disabled={btndisabled}
                className="border border-black rounded-md bg-sky-500 hover:bg-sky-600 mx-3 px-5 py-2 capitalize font-semibold text-white"
              >
                submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default TextForm;
