"use client";
import userData from "@/public/data/data.json";
import { Image } from "@nextui-org/react";
const Contact = () => {
  return (
    <div className="pt-4">
      <div className="px-40">
        <div className="text-xl mb-2">
          <span className="text-customGreen self-start">Explore With Me</span>
          <p className="my-5">
            Lets dive into the world of learning and discovery - Where curiosity
            meets excitement
          </p>
          <div className="flex justify-between">
            <div className="w-60 flex-shrink-0">
              <ul>
                {Object.keys(userData.social).map((item) => (
                  <li className="mt-2" key={item}>
                    <div className="inline-flex items-center hover:text-customGreen border-b-2 border-dotted border-opacity-35">
                      <Image
                        alt="Social Icon"
                        className="object-cover rounded-[2px] mr-2" // Margin-right for spacing
                        height={20}
                        width={20} // Fixed width
                        src={userData.social[item].src}
                      />
                      <span className="ml-2">
                        <a target="_blank" href={userData.social[item].link}> {item} </a>
                        </span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-customGray p-5 flex justify-between">
                <div className="p-5 text-xs">
                    <p className="text-xl">
                      {userData.user.name}
                    </p>
                    <span>
                      {userData.user.role}
                    </span>
                    <div className="mt-10">
                        <ul>
                          <li className="mt-2">{userData.user.phone}</li>
                          <li className="mt-2">{userData.user.mail}</li>
                          <li className="mt-2">{userData.user.website}</li>
                          <li className="mt-2">{userData.user.location}</li>
                        </ul>
                    </div>
                </div>
                <div className="p-5 flex flex-col justify-center">
                  <div>Logo</div>
                  <div>{userData.user.nickName}</div>
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Contact;
