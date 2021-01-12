import React, { useState } from 'react';
import { Modal, Button, Radio, Row, Col, Input } from 'antd';
import { ReadDatabase } from '../../../services/database';
import { func, bool, arrayOf, object, string } from 'prop-types';
import { ObjectDetail, ObjectName, ObjectWrapper, ObjectLine, ObjectTotal, ImageContainer, Thumbnail, Description } from './style';

const ModalConfirm = ({ visible, setVisible, data, setShowCamera, img }) => {
  const [showData, setShowData] = useState(false);
  const [showPhoto, setShowPhoto] = useState(false);
  const [dataSelected, setDataSelected] = useState(``);
  const [photoSelected, setPhotoSelected] = useState(``);
  const result = ReadDatabase('/object');

  const handleCancel = () => {
    setVisible(false);
    setShowData(false);
    setShowPhoto(false);
  };

  const handleOk = () => {
    setVisible(false);
    setShowData(false);
    setShowCamera(false);
  };

  const handleBack = () => {
    if (showData) setShowData(false);
    if (showPhoto) setShowPhoto(false);
  };

  const handleSelectData = name => {
    setDataSelected(name);
    setShowData(true);
  };
  
  const handleSelectPhoto = object => {
    setPhotoSelected(object);
    setShowPhoto(true);
    setShowData(false);
  };

  const handleReport = () => {
    setVisible(false);
    setShowData(false);
    setShowPhoto(false);
    setShowCamera(false);

    Modal.confirm({
      title: 'Yakin Ingin Melaporkan Data?',
      okText: 'Yakin',
      cancelText: 'Batal',
    })
  };

  return (
    <Modal 
      title={showData ? dataSelected : "Data Checking"}
      onCancel={handleCancel}
      visible={visible}
      footer={showData || showPhoto ? ([
        <Button key="back" onClick={handleBack}>
          Kembali
        </Button>,
        <Button key="submit" type="primary" onClick={handleOk}>
          Selesai
        </Button>
      ]) : [
        <Button key="submit" type={data.length > 0 ? 'primary' : 'default'} onClick={data.length > 0 ? handleOk : handleCancel}>
          {data.length > 0 ? 'Selesai' : 'Kembali'}
        </Button>,
      ]}
    >
      {!showData && !showPhoto && (
        <>
          <img src={img} alt="" className={ImageContainer} />
        
          {data.length < 1 && <div>Belum ada produk yang terdeteksi, mohon coba kembali</div>}
          {data.length > 0 && <div style={{ fontSize: '16px', marginBottom: '8px' }}>Produk Terdeteksi:</div>}

          {data.map((object, index) => (
            <div className={ObjectWrapper} key={index}>
              <div className={ObjectLine}>
                <div className={ObjectDetail}>
                  <div className={ObjectName}>{object.name}</div>
                </div>

                <div className={ObjectTotal}>
                  <a onClick={() => handleSelectData(object.name)}>Lihat Data</a>
                </div>
              </div>
            </div>
          ))}
        </>
      )}

      {showData && !showPhoto && (
        <>
          <div style={{ fontSize: '16px', marginBottom: '8px' }}>
            <span>Total Data: </span>
            <span>{result?.data[dataSelected]?.total || 'Belum ada data yang disimpan'}</span>
          </div>
          <div>
            <Row align="middle" gutter={[4, 4]}>
              {Object.keys(result?.data[dataSelected]?.data || {}).map(key => (
                <Col span={8} key={key}>
                  <img className={Thumbnail} src={result.data[dataSelected].data[key].image} onClick={() => handleSelectPhoto(result.data[dataSelected].data[key])}/>
                  </Col>   
              ))}
            </Row>
          </div>
        </>
      )}

      {!showData && showPhoto && (
        <>
          <img src={photoSelected.image} alt="" className={ImageContainer} />
          
          <div>
            <div className={Description}>
              <span>
                Diupload oleh
              </span>
              <span>
                {photoSelected.uploaded_by}
              </span>
            </div>

            <div className={Description}>
              <span>
                Lokasi
              </span>
              <span>
                {photoSelected.location}
              </span>
            </div>

            <div className={Description}>
              <span>
                Waktu
              </span>
              <span>
                {photoSelected.upload_time}
              </span>
            </div>
          </div>

          <div style={{ marginTop: '32px', color: 'gray' }}>
            Menemukan impostor? <a onClick={handleReport} style={{ color: 'red' }}>Laporkan!</a>
          </div>
        </>
      )}
    </Modal>
  );
};

ModalConfirm.propTypes = {
  data: arrayOf(object),
  visible: bool,
  setVisible: func,
  setShowCamera: func,
  img: string,
};

ModalConfirm.defaultProps = {
  data: [],
  visible: false,
  setVisible: () => {},
  setShowCamera: () => {},
  img: ``,
};


export default ModalConfirm;
