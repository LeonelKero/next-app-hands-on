"use client";
import { CldImage, CldUploadWidget } from "next-cloudinary";
import { useState } from "react";

interface CloudinaryResult {
  public_id: string;
  secure_url: string;
}

const UploadFile = () => {
  const [publicId, setPublicId] = useState("");

  return (
    <>
      {publicId && <CldImage alt="" width={270} height={180} src={publicId} />}
      <CldUploadWidget
        options={{ sources: ["local"], multiple: false, cropping: false }}
        uploadPreset="dhlkcxzu"
        onSuccess={(results) => {
          const result = results.info as CloudinaryResult;
          setPublicId(result.public_id);
        }}
        onError={(error) => {
          console.log("ERROR OCCURED", error);
        }}
      >
        {({ open, results }) => (
          <button className="btn btn-primary" onClick={() => open()}>
            Upload
          </button>
        )}
      </CldUploadWidget>
    </>
  );
};

export default UploadFile;
