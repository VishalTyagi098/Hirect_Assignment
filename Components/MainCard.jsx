import React from "react";

const MainCard = ({ data }) => {
  // Function to capitalise first letter
  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  return (
    <div className="shadow-[0_3px_40px_rgb(0,0,0,0.2)] w-[80%] md:w-[60%] h-[50vh] md:h-[35vh] rounded-xl px-12 md:px-28 py-4 bg-white flex flex-col md:flex-row m-auto justify-center items-center">
      <div className="">
        <img
          src={data.results[0].picture.large}
          alt=""
          className="rounded-full w-[100%]"
        />
      </div>
      <div className="mx-0 md:mx-10 text-center md:text-left">
        <div className="text-4xl md:text-5xl font-bold text-[#e16259] underline my-2">
          {data.results[0].name.title} {data.results[0].name.first}{" "}
          {data.results[0].name.last}
        </div>
        <div className="my-2 font-medium">
          <span className="text-[#a258fe]">{data.results[0].location.street.number}</span>,{" "}
          {data.results[0].location.street.name},{" "}
          {data.results[0].location.city}, {data.results[0].location.state},{" "}
          <span className="font-bold">{data.results[0].location.country}</span>,{" "}
          {data.results[0].location.postcode},{" "}
          {data.results[0].location.timezone.offset}-{" "}
          <span className="underline">{data.results[0].location.timezone.description}</span>
        </div>
        <div className="text-[#666767]">
          {capitalizeFirstLetter(data.results[0].gender)}
        </div>
      </div>
    </div>
  );
};

export default MainCard;
