import React from "react";
import ProjectLanding from "../projectLanding";
import usersData from "@/public/data/data.json";
import BarChart from "../barChart";
import PieChart from "../pieChart";
const Kodefast = () => {
  const data = usersData.projects.find((e) => e.name == "Kodefast");
  return (
    <div className="xl:px-40 p-5">
      <ProjectLanding text={data?.description} />
      <div className="bg-customGray p-5 flex flex-col space-y-4 md:flex-row md:justify-between md:space-y-0">
        <div className="flex flex-col">
          <div>Expertise</div>
          <div className="font-thin">
            Research, Product Design, App Developer
          </div>
        </div>
        <div className="flex flex-col">
          <div>Platforms</div>
          <div className="font-thin">Web</div>
        </div>
        <div className="flex flex-col">
          <div>Role</div>
          <div className="font-thin">Product Designer, BA</div>
        </div>
        <div className="flex flex-col">
          <div>Year</div>
          <div className="font-thin">2021-2024</div>
        </div>
      </div>

      <div className="mt-2 flex flex-col md:flex-row justify-center md:space-x-4 space-y-4 md:space-y-0">
        <div className="w-full md:w-1/2 h-[400px] flex items-center rounded-[5px] bg-customGray justify-center">
          <div className="w-full max-w-[90%]">
            <BarChart />
          </div>
        </div>

        <div className="w-full md:w-1/2 h-[400px] flex items-center rounded-[5px] bg-customGray justify-center">
          <PieChart />
        </div>
      </div>
    </div>
  );
};

export default Kodefast;
