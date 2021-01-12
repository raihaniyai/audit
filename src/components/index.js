import React, { useState } from 'react';
import { Layout, Avatar } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import getModel from '../helpers/getModel';
import Camera from './Camera';
import { ContentStyle, Logo, HeaderStyle, ProfileSection, Biodata, LayoutStyle, Feature } from './style'

const { Header, Content } = Layout;

const Audit = () => {
  const { loading, returnData } = getModel();
  const [showCamera, setShowCamera] = useState(false);
  const [source, setSource] = useState(``);

  const handleOpenCamera = src => {
    setShowCamera(true);
    setSource(src);
  };

  return (
    <>
      {showCamera && <Camera source={source} setShowCamera={setShowCamera} loading={loading} returnData={returnData} />}

      {!showCamera && (
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

            <div className={Feature} onClick={() => handleOpenCamera('collection')}>
              Data<br />Collection
            </div>

            <div className={Feature} onClick={() => handleOpenCamera('checking')}>
              Data<br />Checking
            </div>
          </Content>
        </Layout>
      )}
    </>
  );
};

export default Audit;