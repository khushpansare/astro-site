import React, { useState } from "react";

import Layout from "../Main Component/Layout";

function Astrological_Survey_Form() {
  const [faceImg, setFaceImg] = useState("");
  const [rightPalmImg, setRightPalmImg] = useState("");
  const [LeftPalmImg, setLeftPalmImg] = useState("");

  // Handle image selection
  const handleLeftPalmImg = (event) => {
    const file = event.target.files[0];
    if (file) {
      const path = URL.createObjectURL(file);
      setLeftPalmImg(path);
    }
  };

  const handleFaceImg = (event) => {
    const file = event.target.files[0];
    if (file) {
      const path = URL.createObjectURL(file);
      setFaceImg(path);
    }
  };

  const handleRightPalmImg = (event) => {
    const file = event.target.files[0];
    if (file) {
      const path = URL.createObjectURL(file);
      setRightPalmImg(path);
    }
  };

  return (
    <>
      <Layout>
        <section className="astrology-session">
          <form>
            <div className="form-row">
              <div className="single-input">
                <label htmlFor="First Name">First Name</label>
                <br />
                <input
                  type="text"
                  name="firstName"
                  // value={formData.firstName}
                  // onChange={handleChange}
                  placeholder="First Name"
                  required
                />
              </div>
              <div className="single-input">
                <label htmlFor="Date of Birth">Date of Birth</label>
                <br />
                <input
                  type="date"
                  name="lastName"
                  // value={formData.lastName}
                  // onChange={handleChange}
                  placeholder="Last Name"
                  required
                />
              </div>
            </div>
            <div className="form-row">
              <div className="single-input">
                <label htmlFor="Last Name">Birth Time</label>
                <br />
                <input
                  type="time"
                  name="firstName"
                  // value={formData.firstName}
                  // onChange={handleChange}
                  placeholder="Time"
                  required
                />
              </div>
              <div className="single-input">
                <label htmlFor="Last Name">Birth Location</label>
                <br />
                <input
                  type="text"
                  name="lastName"
                  // value={formData.lastName}
                  // onChange={handleChange}
                  placeholder="Birth Location"
                  required
                />
              </div>
            </div>

            <div className="form-row">
              <div className="single-input">
                <div
                  class="upload-container"
                  id="uploadBox"
                  onclick="triggerFileInput()">
                  <label class="custom-file">
                    <input
                      type="file"
                      accept="image/*"
                      onChange={handleFaceImg}
                    />
                    <h3>Upload Face Image</h3>
                  </label>

                  {faceImg && (
                    <img
                      src={faceImg}
                      alt="Preview"
                      className="preview-image"
                    />
                  )}
                </div>
              </div>

              <div className="single-input">
                <div
                  class="upload-container"
                  id="uploadBox"
                  onclick="triggerFileInput()">
                  <div
                    class="upload-container"
                    id="uploadBox"
                    onclick="triggerFileInput()">
                    <label class="custom-file">
                      <input
                        type="file"
                        accept="image/*"
                        onChange={handleRightPalmImg}
                      />
                      <h3>Upload Right Palm Image</h3>
                    </label>

                    {rightPalmImg && (
                      <img
                        src={rightPalmImg}
                        alt="Preview"
                        className="preview-image"
                      />
                    )}
                  </div>
                  {/* <button class="upload-btn" id="uploadButton">
                    Upload Image
                  </button> */}
                </div>
              </div>
            </div>

            <div className="form-row">
              <div className="single-input">
                <div
                  class="upload-container"
                  id="uploadBox"
                  onclick="triggerFileInput()">
                  <div
                    class="upload-container"
                    id="uploadBox"
                    onclick="triggerFileInput()">
                    <label class="custom-file">
                      <input
                        type="file"
                        accept="image/*"
                        onChange={handleLeftPalmImg}
                      />
                      <h3>Upload Left Palm Image</h3>
                    </label>

                    {LeftPalmImg && (
                      <img
                        src={LeftPalmImg}
                        alt="Preview"
                        className="preview-image"
                      />
                    )}
                  </div>
                  {/* <button class="upload-btn" id="uploadButton">
                    Upload Image
                  </button> */}
                </div>
              </div>
            </div>
          </form>
        </section>
      </Layout>
    </>
  );
}

export default Astrological_Survey_Form;
