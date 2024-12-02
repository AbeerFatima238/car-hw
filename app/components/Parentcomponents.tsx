import Image from 'next/image';
import React from 'react';
import Childcomponents from './Childcomponents';

const Parentcomponents = () => {
  const cars = [
    {
      CarsName: "TOYOTA COROLLA",
      CarsImage: <Image src="/toyotacorolla.jfif" alt="corolla" width={250} height={250}/>,
      CarsPrice:"63 lac",
      CarsReview: "★★★★☆"
      
    },
    {
        CarsName: "SUZUKI ALTO",
        CarsImage: <Image src="/suzuki alto.jfif" alt="corolla" width={250} height={250}/>,
        CarsPrice:"50 lac",
        CarsReview: "★★★☆☆"
        
      },
      {
        CarsName: "HONDA CITY",
        CarsImage: <Image src="/honda city.jfif" alt="corolla" width={250} height={250}/>,
        CarsPrice:"77 lac",
        CarsReview: "★★★★☆"
        
      },
      {
        CarsName: "HONDA CIVIC",
        CarsImage: <Image src="/honda civic.jfif" alt="corolla" width={250} height={250}/>,
        CarsPrice:"80 lac",
        CarsReview: "★★★★☆"
        
      }
  ];

  return (
    <div>
      {cars.map((gaadi, index) => {
        return (
          <Childcomponents
            key={index}
            CarsName={gaadi.CarsName}
            CarsImage={gaadi.CarsImage}
            CarsReview={gaadi.CarsReview}
            CarsPrice={gaadi.CarsPrice}
          />
          
        );
      })}
    </div>
  );
};

export default Parentcomponents;
