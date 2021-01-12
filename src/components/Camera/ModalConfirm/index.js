import React from 'react';
import { Modal, Checkbox, InputNumber } from 'antd';
import { Increment, PostDatabase } from '../../../services/database';
import { storage } from '../../../firebase';
import randomStr from '../../../helpers/randomStr';
import GetCity from '../../../helpers/getCity';
import { func, bool, arrayOf, object, string } from 'prop-types';
import dayjs from 'dayjs';
import useGeolocation from 'react-hook-geolocation'
import { CheckboxStyle, ObjectDetail, ObjectName, ObjectWrapper, ObjectTotal, InputTotalObject, ObjectLine, ImageContainer } from './style';

const ModalConfirm = ({ visible, setVisible, data, setShowCamera, img }) => {
  const geolocation = useGeolocation();
  const location = GetCity(geolocation.latitude, geolocation.longitude);

  const handleOk = () => {
    setVisible(false);

    storage.ref(randomStr(10) + '.png').putString(img, 'data_url')
      .then(res => {
        res.ref.getDownloadURL().then(url => {
          const now = dayjs().format('HH:mm - D MMM YYYY');

          data.forEach(object => {
            Increment('/object/' + object.name + '/total', object.total);
            PostDatabase('/object/' + object.name + '/data').push({
              uploaded_by: 'Dharmawan Santosa',
              location: location?.returnData?.display_name,
              upload_time: now,
              image: url,
            });
          });

          Modal.success({
            title: 'Berhasil!',
            content: 'Data berhasil disimpan di Project 01.MM',
            onOk: () => setShowCamera(false),
          })
        }).catch(() => {
          Modal.success({
            title: 'Gagal',
            content: 'Data gagal disimpan di Project 01.MM',
            okText: 'Ulang',
          })
        })
      })
      .catch(e => {
        Modal.success({
          title: 'Gagal',
          content: 'Data gagal disimpan di Project 01.MM',
          okText: 'Ulang',
        })
      });
  };

  const handleCancel = () => {
    setVisible(false);
  };

  return (
    <Modal 
      title="Konfirmasi"
      visible={visible}
      onOk={handleOk}
      onCancel={handleCancel}
      okText="Simpan"
      cancelText={data.length < 1 ? "Ulang" : "Batal"}
      okButtonProps={{ disabled: data.length < 1 }}
    >
      <img src={img} alt="" className={ImageContainer} />

      {data.length < 1 && <div>Belum ada produk yang terdeteksi, mohon coba kembali</div>}
      {data.map((object, index) => (
        <div className={ObjectWrapper} key={index}>
          <div className={ObjectLine}>
            <Checkbox
              className={CheckboxStyle}
              defaultChecked={true}
            >
              <div className={ObjectDetail}>
                <div className={ObjectName}>{object.name}</div>
              </div>
            </Checkbox>

            <div className={ObjectTotal}>
              <InputNumber className={InputTotalObject} defaultValue={object.total} />
            </div>
          </div>
        </div>
      ))}
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