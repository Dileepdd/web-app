import userData from "@/public/data/data.json";
import ProjectCards from "./cards";

const HomeComp = () => {
  return (
    <div className="pt-2">
      <div className="flex flex-col items-center justify-center text-center">
        <div className="text-3xl mb-2">
          Hello, I'm{" "}
          <span className="text-customGreen">{userData.user.name || "My Name"}</span>
        </div>
        <div className="max-w-md text-base font-light">
          {userData.user.description ||
            "Product Designer dedicated to transforming user needs into intuitive, innovative experiences."}
        </div>
      </div>
      <div className="mt-5 flex flex-col items-center justify-center">
        <div className="items-start">
          <h1 className="text-customGreen">{userData.projects_title}</h1>
        </div>
        <div className="mt-2">
          {userData.projects.map((project) => (
            <div className="m-2" key={project.id}>
              <ProjectCards
                name={project.name}
                description={project.description}
                pid={project.id}
                src="https://nextui.org/images/album-cover.png"
                isLocked={project.is_locked}
                password={project.password}
              />
            </div>
          ))}
        </div>
        <div className="my-6">
          <div>
          <h1 className="text-customGreen text-center">Additional Projects</h1>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-2">
            {userData.additional_projects.map((project) => (
              <div className="m-2 w-full" key={project.id}>
                <ProjectCards
                  name={project.name}
                  description={project.description}
                  src="https://nextui.org/images/album-cover.png"
                  type="Project-Sub"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeComp;
