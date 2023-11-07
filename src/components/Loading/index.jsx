import { faCircleNotch} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const Loading = () => {
  return (
    <div className="w-full flex flex-col justify-center">
      <FontAwesomeIcon icon={faCircleNotch} spin color="white" size='2x' className="mb-10"/>
    </div>
  );
};

export default Loading;
