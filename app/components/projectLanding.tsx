import React from "react";
interface ProjectLanding {
    text? : string,
    src? : string
}
const ProjectLanding = ({text,src}:ProjectLanding) => {
  return (
    <div className="hero min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          Image
        </div>
        <div className="card w-full max-w-sm shrink-0 shadow-2xl">
         Case Study
         <div className="mt-20">
            Logo
            {src}
         </div>
         <p className="mt-5">
            {text || "Project Description"}
         </p>
        </div>
      </div>
    </div>
  );
};

export default ProjectLanding;
