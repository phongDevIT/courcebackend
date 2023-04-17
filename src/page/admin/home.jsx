import {
    LogoutOutlined,
    UserOutlined,
} from '@ant-design/icons';
import { Breadcrumb, Button, Layout, Menu } from 'antd';
import React, { useState } from 'react';
import { useDispatch, } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Pages from '../../page/index'
import DepartMentTotal from '../../page/deapart-total/DepartMentTotal'


const { Header, Content, Footer, Sider } = Layout;


function getItem(label, key, icon, children, navigate) {
    return {
        key,
        icon,
        children,
        label,
        navigate
    };
}

const items = [
    getItem('Admin', 'sub1', <UserOutlined />, [
        getItem('Dịch vụ', '2', '', null,
            <div>
                <Pages.Department />
                <Pages.Bond />
                <Pages.DepartmentDetail />

            </div>

        )
        ,
        getItem('Lịch sử', '3', '', null,
            <div>
                <Pages.ManagerBills />
                <Pages.ViewBills />
            </div>
        ),
        getItem('Danh sách bệnh nhân', '4', '', null,
            <div>
                <Pages.ManagerPatients />
                <Pages.ViewPatients />
            </div>),
        getItem('Quản lý', '5', '', null, <div>
            <Pages.ManagerDoctor />

            <Pages.ViewDoctor />
        </div>),
        getItem('Tài khoản', '6', '', null, <div>
            <Pages.ExaminationPackage />
            <Pages.ViewAccount />
        </div>),
    ]),
];

const listComponentRender = [
    getItem('Dịch vụ', '2', '', null,
        <div>
            <Pages.Department />
            <Pages.Bond />
            <Pages.DepartmentDetail />
        </div>),
    getItem('Lịch sử', '3', '', null,
        <div>
            <Pages.ManagerBills />
            <Pages.ViewBills />
        </div>),
    getItem('Danh sách bệnh nhân', '4', '', null,
        <div>
            <Pages.ManagerPatients />
            <Pages.ViewPatients />
        </div>),
    getItem('Quản lý', '5', '', null,
        <div>
            <Pages.ManagerDoctor />
            <Pages.ViewDoctor />
        </div>),
    getItem('Tài khoản', '6', '', null,
        <div>
            <Pages.ExaminationPackage />
            <Pages.ViewAccount />
        </div>),

]



const Home = () => {
    //const { logOut } = useContext();
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const [collapsed, setCollapsed] = useState(false);
    const [componentLayout, setComponentLayout] = useState(<Pages.Account />)
    const [element, setElement] = useState('Người dùng')
    const [breakcum, setBreakcum] = useState('Tài khoản')
    const handleMenuClick = (e) => {
        for (let item of listComponentRender) {
            if (item.key === e.key) {
                setComponentLayout(item.navigate)
                setElement(e.keyPath[1])
                setBreakcum(item.label)
            }
        }
    }
    return (
        <Layout
            style={{
                minHeight: '120vh',
            }}
        >
            <Sider collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
                <div className="logo" />
                <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline" items={items} defaultOpenKeys={['sub1']} onClick={handleMenuClick} />
                <div className='logout-btn'>
                    <Button block style={{
                        backgroundColor: 'red',
                        marginTop: 20
                    }} onClick={() => { }}> <LogoutOutlined />Thoát</Button>
                </div>
            </Sider>
            <Layout className="site-layout">
                <Content
                    style={{
                        margin: '0 16px',
                    }}
                >
                    <Breadcrumb
                        style={{
                            margin: '16px 0',
                        }}
                    >
                        <Breadcrumb.Item>{element === 'sub1' ? 'User' : 'User'}</Breadcrumb.Item>
                        <Breadcrumb.Item>{breakcum}</Breadcrumb.Item>
                    </Breadcrumb>
                    <div
                        className="site-layout-background"
                        style={{
                            padding: 0,
                            textAlign: 'left'
                        }}
                    >
                        {componentLayout}
                    </div>
                </Content>

            </Layout>
        </Layout>
    );
};

export default Home;