import React from 'react';

const Heading : React.FC<{ text: string,className?:string }> = ({text,className}) => {
    return (
        <div className={`text-[#0E0D14] ${className} py-4 font-medium text-center text-2xl md:text-5xl`}>
            {text}
        </div>
    );
};

export default Heading;