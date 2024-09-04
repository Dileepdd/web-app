import React from 'react'
import ProjectLanding from '../projectLanding';
import usersData from '@/public/data/data.json';
const  Esings = () => {
  const data = usersData.projects.find((e) => e.name == "eSigns");
  return (
    <div>
      <ProjectLanding text={data?.description} />
    </div>
  )
}

export default Esings
