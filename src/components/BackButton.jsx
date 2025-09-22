import React from "react";
import { useNavigate } from "react-router-dom";

const Button = () => {

  const navigate = useNavigate();

    return (
        <>
            <div>
                <button
                    onClick={() => navigate(`/`)}
                    className="text-base p-2  md:text-lg  bg-gray-200 text-[#000000] cursor-pointer rounded-lg shadow hover:bg-gray-300 my-10 mr-4 2xl:mr-16"
                >
                    ← Go Back
                </button>
            </div>

        </>
    )

}

export default Button;