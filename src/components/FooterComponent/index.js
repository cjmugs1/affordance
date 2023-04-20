import React from 'react';
import { Layout, Divider, Space, Typography } from 'antd';
const { Footer } = Layout;
import {
    GithubOutlined,
    LinkedinOutlined,
    GoogleOutlined
} from '@ant-design/icons';

import '../../App.css'

function FooterComponent () {
    return (
        <Footer style={{ textAlign: 'center', fontSize: 16 }}>
             <Space split={<Divider type="vertical" />}>
                <p>affordance ©2023 by Connor Mulligan</p>
                <div>
                    <Typography.Link className="footer-link" href="https://github.com/cjmugs1" target='_blank'><GithubOutlined style={{ fontSize: 24 }}/></Typography.Link>
                    <Typography.Link className="footer-link" href="https://www.linkedin.com/in/connorjmulligan/" target='_blank'><LinkedinOutlined style={{ fontSize: 24 }}/></Typography.Link>
                    <Typography.Link className="footer-link" href="mailto:connor26m@gmail.com" target='_blank'><GoogleOutlined style={{ fontSize: 24 }}/></Typography.Link>
                </div>
            </Space>
        </Footer>
    )
}

export default FooterComponent;