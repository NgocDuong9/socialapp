import React from "react";

const ImageCustom = ({
  url,
  className,
}: {
  url: string;
  className?: string;
}) => {
  return (
    <>
      <img
        src={`${process.env.REACT_APP_PUBLIC_FOLDER}/${url}`}
        alt=""
        className={`w-full min-h-[300px] object-cover ${className}`}
      />
    </>
  );
};

export default ImageCustom;
