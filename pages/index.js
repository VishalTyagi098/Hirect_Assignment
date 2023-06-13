import React from "react";
import Navbar from "../Components/Navbar";
import SmallCard from "../Components/SmallCard";
import MainCard from "../Components/MainCard";

// Fetching API
export const getStaticProps = async () => {
  const res = await fetch(
    "https://randomuser.me/api/?inc=gender,name,nat,location,picture,email&results=%2020"
  );
  const Data = await res.json();

  return {
    props: { data: Data },
  };
};

const index = ({ data }) => {
  return (
    <div className="">
      <Navbar />
      <div className="my-10">
        <MainCard data={data} />
      </div>
      <div className="flex flex-wrap justify-center">
        <SmallCard data={data} />
      </div>
    </div>
  );
};

export default index;
