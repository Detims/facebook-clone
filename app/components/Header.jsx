import Image from "next/image";
import React from "react";

const Header = () => {
    return(
        <div className="bg-white flex items-center p-2 shadow-md top-0 sticky z-50 h-16">
            <div className="flex min-w-fit">
                <Image 
                    src="https://upload.wikimedia.org/wikipedia/commons/b/b9/2023_Facebook_icon.svg" 
                    width={40}
                    height={40}
                    alt="logo"
                />
            </div>
        </div>
    )
}

export default Header