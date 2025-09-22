import React from "react";
import denimImage from "/images/denimImage.jpg";

const DenimImage = () => {

    return (
        <>
        <div>
            <div>
                <img className="h-[580px] w-full object-cover" src={denimImage}></img>
            </div>
        </div>
        </>
    )

}


export default DenimImage