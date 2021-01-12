import React from 'react';
import { Layout, Avatar, Button } from 'antd';
import { UserOutlined, SearchOutlined } from '@ant-design/icons';
import { ContentStyle, Logo, HeaderStyle, ProfileSection, Biodata, LayoutStyle, Feature } from './style'

const { Header, Content } = Layout;

const Audit = () => {
  return (
    <Layout className={LayoutStyle}>
      <Header className={HeaderStyle}>
        <div className={Logo}>AudIT</div>
      </Header>

      <Content className={ContentStyle}>
        <div className={ProfileSection}>
          <span>
            <Avatar size={64} icon={<UserOutlined />} />
          </span>

          <span className={Biodata}>
            <div>
              Dharmawan Santosa
            </div>
            <div>
              Rektorat AudIT
            </div>
          </span>
        </div>
        <div className={Feature}>
            Data<br /> Collection
        </div>
        <div className={Feature}>
          Data <br />Checking
        </div>
      </Content>
    </Layout>
  );
};

export default Audit;