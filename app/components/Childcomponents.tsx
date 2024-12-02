import React from 'react'

const Childcomponents = (props: any) => {
    console.log(props);
    return (
        <div className="w-72 mx-auto bg-white shadow-lg rounded-lg mb-6 p-4">
           
            <h1 className="text-3xl font-serif font-bold text-center text-gray-800 mb-2 underline">{props.CarsName}</h1>

           
            <div className="flex justify-center mb-4">
                {props.CarsImage}
            </div>

            
            <h2 className="text-xl font-semibold text-black ">Price: <span className="font-bold text-black">{props.CarsPrice}</span></h2>

           
            <h2 className="text-xl font-semibold text-black">Reviews: <span className="font-bold text-black">{props.CarsReview}</span></h2>

           
            <div className="flex justify-center mt-4">
                <button className="bg-black text-white py-2 px-6 rounded-full hover:bg-blue-600 ">
                    Learn More
                </button>
            </div>
        </div>
    );
};

export default Childcomponents;
