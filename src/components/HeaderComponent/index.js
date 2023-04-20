// react
import React, { useState } from 'react';
import { Link } from "react-router-dom";
// antd
import { Layout, Menu } from 'antd';
const { Header } = Layout;
import {
    CodepenOutlined,
    HeatMapOutlined,
    HeartOutlined
} from '@ant-design/icons';
// personal styling and assets
import '../../App.css'
import logo from '../../assets/images/vuv.svg';

const menuItems = [
    {
        key: 'work',
        label: (<Link to={`/affordance/work`}>Work</Link>),
        icon: <CodepenOutlined style={{ fontSize: 24 }}/>,
    },
    {
        key: 'contact',
        label: (<Link to={`/affordance/contact`}>Contact</Link>),
        icon: <HeatMapOutlined style={{ fontSize: 24 }}/>
    },
    {
        key: 'resume',
        label: (<Link to={`/affordance/resume`}>Resume</Link>),
        icon: <HeartOutlined style={{ fontSize: 24 }}/>
    }
]

function HeaderComponent () {

    const [current, setCurrent] = useState();
    const onClick = (e) => {
        setCurrent(e.key);
    }

    return (
        <Header className="header-component">
            <Link to={`/affordance/`}>
                <img className="logo"src={logo} alt="logo" />
            </Link>
            <Menu className="nav-menu" breakpoint="sm"
                theme="light"
                mode="horizontal"
                selectedKeys={[current]}
                items={menuItems}
            />
        </Header>
    )
}

export default HeaderComponent;