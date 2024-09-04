"use client";
import { useParams } from 'next/navigation';
import Project from '../../components/project';
const page = () => {
  const projectId:any = useParams().id;
  return (
    <div>
      <Project
        id={projectId}
      ></Project>
    </div>
  )
}

export default page
