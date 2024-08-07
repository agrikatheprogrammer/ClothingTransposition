import React, { useState } from "react";
import FileBase64 from "react-file-base64";
import "../stylings/ImageUpload.css";
import PictureList from "./PictureList"; // Import PictureList component
import Navbar from "./Navbar";
const API_URL = "http://127.0.0.1:5000/api/upload"; // Adjust the URL as necessary

const UploadImage = () => {
  const [images, setImages] = useState([]);
  const [submitting, setSubmitting] = useState(false);
  const [pictureIds, setPictureIds] = useState([]);

  const handleFileUpload = (files) => {
    const newImages = files.map((file) => file.base64);
    setImages([...images, ...newImages]);
  };

  const handleSubmit = async () => {
    setSubmitting(true);

    try {
      const response = await fetch(API_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ images }),
      });

      if (!response.ok) {
        throw new Error(`Failed to submit images: ${response.status}`);
      }

      const data = await response.json();
      setPictureIds(data.pictureIds); // Assuming the Flask backend returns a list of picture IDs
      setImages([]); // Clear uploaded images after successful upload
    } catch (error) {
      console.error("Error uploading images:", error);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div>
    <div className="upload-image-container">
      <h2 className="upload-image-title">Upload Images</h2>
      <div className="file-upload-container">
        <FileBase64 multiple={true} onDone={handleFileUpload} />
      </div>
      <div className="uploaded-images-container">
        {images.map((image, index) => (
          <div key={index} className="uploaded-image">
            <img
              src={image}
              alt={`Uploaded image ${index}`}
              className="uploaded-image-content"
            />
          </div>
        ))}
      </div>
      <button
        className="submit-button"
        onClick={handleSubmit}
        disabled={images.length === 0 || submitting}
      >
        {submitting ? "Submitting..." : "Submit"}
      </button>
      {pictureIds.length > 0 && <PictureList pictureIds={pictureIds} />}
    </div>
    </div>
  );
};

export default UploadImage;
