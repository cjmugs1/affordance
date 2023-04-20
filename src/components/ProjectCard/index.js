import React from 'react';
import { Link } from "react-router-dom";

import { Card } from 'antd';
const { Meta } = Card;


function ProjectCard({ project }) {
  return (
    <Link to={project.link} key={project.key} target='_blank'>
        <Card hoverable style={{ width: 440 }} cover={<img src={project.image} key={project.key}/>}>
            <Meta title={project.title} description={project.description} />
            <br></br>
            <a href={project.link} target='_blank'>View Project GitHub</a>
        </Card>
    </Link>
  );
}

export default ProjectCard;