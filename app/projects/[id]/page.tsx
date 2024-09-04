"use client";
import { useParams } from 'next/navigation';
import Project from '../../components/project';
const page = () => {
  const projectId:any = useParams().id;
  // const { id } = router.query;
  console.log("projectId",useParams())
  return (
    <div>
      <Project
        id={projectId}
      ></Project>
    </div>
  )
}

export default page
