import React, { useState } from 'react';
import { AppstoreOutlined, MailOutlined, SettingOutlined } from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Menu, Layout, Typography, Space } from 'antd';
import { Outlet } from 'react-router-dom';

import Logo from '../../components/layout/Logo'

const { Header, Content, Footer } = Layout;
const { Title, Paragraph, Text, Link } = Typography;



const items: MenuProps['items'] = [
  {
    label: 'Browse Services',
    key: 'browseServices',
    //icon: <MailOutlined />,
  },
  {
    label: 'Help Center',
    key: 'helpCenter',
    //icon: <AppstoreOutlined />,
  },
];

const headerWrapper: React.CSSProperties = {
  display: 'flex'
}

const menu: React.CSSProperties = {
  width: '100%'
}

const footerWrapper = {
  display: 'flex',
  justifyContent: 'center'
}

const footerInner = {
  maxWidth: 1000,
  width: '100%'
}

const footerTypography: React.CSSProperties = {
  display: 'flex',
  width: '100%',
  justifyContent: 'space-between'
}

const contentWrapper: React.CSSProperties = {
  display: 'flex',
  justifyContent: 'center'
}

const contentInner = {
  //maxWidth: 1250
}

const App: React.FC = () => {
  const [current, setCurrent] = useState('mail');

  const onClick: MenuProps['onClick'] = (e) => {
    console.log('click ', e);
    setCurrent(e.key);
  };

  return (
    <Layout>
      <Header >
        <div style={headerWrapper}>
          <Logo/>
          <Menu style={menu} onClick={onClick} selectedKeys={[current]} mode="horizontal" items={items} />
        </div>
      </Header>
      <Content>
        <Space style={contentWrapper}>
          <Space style={contentInner}>
            <Outlet />
          </Space>
        </Space>
      </Content>
      <Footer>
        <div style={footerWrapper}>
          <div style={footerInner}>
            <Typography>
              <div style={footerTypography}>
                <div>
                  <Title level={4}>Title</Title>
                  <Paragraph>
                    <ul>
                      <li>
                        <Link href="/docs/spec/proximity">Principles</Link>
                      </li>
                      <li>
                        <Link href="/docs/spec/overview">Patterns</Link>
                      </li>
                      <li>
                        <Link href="/docs/resources">Resource Download</Link>
                      </li>
                    </ul>
                  </Paragraph>
                </div>
                <div>
                  <Title level={4}>Title</Title>
                  <Paragraph>
                    <ul>
                      <li>
                        <Link href="/docs/spec/proximity">Principles</Link>
                      </li>
                      <li>
                        <Link href="/docs/spec/overview">Patterns</Link>
                      </li>
                      <li>
                        <Link href="/docs/resources">Resource Download</Link>
                      </li>
                    </ul>
                  </Paragraph>
                </div>
                <div>
                  <Title level={4}>Title</Title>
                  <Paragraph>
                    <ul>
                      <li>
                        <Link href="/docs/spec/proximity">Principles</Link>
                      </li>
                      <li>
                        <Link href="/docs/spec/overview">Patterns</Link>
                      </li>
                      <li>
                        <Link href="/docs/resources">Resource Download</Link>
                      </li>
                    </ul>
                  </Paragraph>
                </div>
                <div>
                  <Title level={4}>Title</Title>
                  <Paragraph>
                    <ul>
                      <li>
                        <Link href="/docs/spec/proximity">Principles</Link>
                      </li>
                      <li>
                        <Link href="/docs/spec/overview">Patterns</Link>
                      </li>
                      <li>
                        <Link href="/docs/resources">Resource Download</Link>
                      </li>
                    </ul>
                  </Paragraph>
                </div>
              </div>
            </Typography>
          </div>
        </div>
      </Footer>
    </Layout>
  );
};

export default App;