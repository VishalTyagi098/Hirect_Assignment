import React from "react";

const SmallCard = ({ data }) => {
  console.log(data.results);

  // Function to capitalize first letter
  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  return (
    <>
      {data.results.map((person,i) => (
        <div className="shadow-[0_3px_10px_rgb(0,0,0,0.2)] w-[70%] md:w-[22%] rounded px-4 py-4 bg-white hover:bg-[#a258fe] group m-4 cursor-pointer">
          <div className="my-2 text-[#666767] group-hover:text-white">
            {capitalizeFirstLetter(person.gender)} . NL
          </div>
          <div className="my-2 text-3xl font-bold group-hover:text-white">
            {person.name.title} {person.name.first} {person.name.last}
          </div>
          <div className="text-[#e16259] group-hover:text-white">
            {person.email}
          </div>
        </div>
      ))}
    </>
  );
};

export default SmallCard;
