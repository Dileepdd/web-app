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
      <div className="bg-customGray p-5 flex justify-between">
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

      <div className="mt-2 flex justify-center space-x-4">
        <div className="w-1/2 h-[400px] pt-20">
          <BarChart />
        </div>
        <div className="w-1/2 h-[400px] flex items-center justify-center">
          <PieChart />
        </div>
      </div>
    </div>
  );
};

export default Kodefast;
