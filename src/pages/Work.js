import '../App.css';
import React from "react";
import LayoutComponent from '../components/LayoutComponent';
import ProjectCard from '../components/ProjectCard';
import { Col, Row } from 'antd';

import recipeasy from '../assets/images/recipeasy.JPG';
import pixum from '../assets/images/pixum.png';
import sneakyLink from '../assets/images/sneakylink.JPG';
import jate from '../assets/images/jate.JPG';
import noteTaker from '../assets/images/note-taker-screenshot.JPG';
import sqlpic from '../assets/images/sql.JPG';


const projects = [
    {
        key: 1,
        title: 'Recipeasy',
        description: 'A web application that allows users to search for recipes and save them to their profile.',
        image: recipeasy,
        link: 'https://github.com/cjmugs1/recipeasy'
    },
    {
        key: 2,
        title: 'Pixum',
        description: 'A web application that allows users to browse for movies and bookmark them for later.',
        image: pixum,
        link: 'https://github.com/mkalik/pixum'
    },
    {
        key: 3,
        title: 'SneakyLink',
        description: 'All your links in one place!',
        image: sneakyLink,
        link: 'https://github.com/JWLeamy/SneakyLink'
    },
    {
        key: 4,
        title: 'J.A.T.E.',
        image: jate,
        description: 'A text editor built into the browser.',
        link: 'https://github.com/cjmugs1/text-editor-pwa'
    },
    {
        key: 5,
        title: 'Note-Taker',
        image: noteTaker,
        description: 'Write down and save your To-Dos!',
        link: 'https://github.com/cjmugs1/note-taker'
    },
    {
        key: 6,
        title: 'SQL Database',
        image: sqlpic,
        description: 'A purely backend project that allows users to create, read, update, and delete data from an sql database.',
        link: 'https://github.com/cjmugs1/sql-employee-database'
    },
]

const Work = () => {
  return (
      <LayoutComponent>
        <Row gutter={[24, 16]}>
            {projects.map((project) => (
                <Col span={8}>
                    <ProjectCard project={project} />
                </Col>
            ))}
        </Row>
      </LayoutComponent>
  );
};

export default Work;