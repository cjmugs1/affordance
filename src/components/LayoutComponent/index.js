import { Breadcrumb, Layout } from 'antd';
const { Content } = Layout;

import '../../App.css'

import HeaderComponent from '../HeaderComponent';
import FooterComponent from '../FooterComponent';

function LayoutComponent ({ children }) {
  
    return (
        <Layout className='layout'>
            <HeaderComponent />
            <Content style={{ padding: '0 50px' }}>
                {children}
            </Content>
            <FooterComponent />
        </Layout>
    );
};
export default LayoutComponent;