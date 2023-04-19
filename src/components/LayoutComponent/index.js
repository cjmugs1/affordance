import { Breadcrumb, Layout } from 'antd';
const { Content } = Layout;

import HeaderComponent from '../HeaderComponent';
import FooterComponent from '../FooterComponent';

function SiteLayout ({ children }) {
  
    return (
        <Layout className="layout">
            <HeaderComponent />
            <Content style={{ padding: '0 50px' }}>
                <Breadcrumb style={{ margin: '16px 0' }}>
                    <Breadcrumb.Item>affordance</Breadcrumb.Item>
                    <Breadcrumb.Item>List</Breadcrumb.Item>
                    <Breadcrumb.Item>App</Breadcrumb.Item>
                </Breadcrumb>
                {children}
            </Content>
            <FooterComponent />
        </Layout>
    );
};
export default SiteLayout;