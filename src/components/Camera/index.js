import React, { useRef, useEffect, useState } from 'react';
import * as tf from '@tensorflow/tfjs';
import { Upload } from 'antd';
import { func, string, bool, object } from 'prop-types';
import { LoadingOutlined, CameraFilled } from '@ant-design/icons';
import Webcam from "react-webcam";
import detect from '../../helpers/detect';
import ModalConfirm from './ModalConfirm';
import ModalSelect from './ModalSelect';
import { CollectionStyle, CaptureButton, CaptureContainer, WebcamStyle, UploadStyle } from './style'
// import Draw from './draw';

const Camera = ({ loading, returnData, source, setShowCamera }) => {
  const reader = new FileReader();
  const [dataCollected, setDataCollected] = useState([]);
  const [isCaptured, setCaptured] = useState(false);
  const [screenshot, setScreenshot] = useState(null);
  const webcamRef = useRef(null);
  const imgRef = useRef(null);
  const videoConstraints = {
    facingMode: "environment"
  };
  
  useEffect(() => {
    let intervalID;

    if (!isCaptured && !loading) {
      intervalID = setInterval(() => {
        detect(webcamRef, returnData, setDataCollected);
        if (isCaptured) clearInterval(intervalID);
      }, 10);
    } else clearInterval(intervalID);

    return () => clearInterval(intervalID);
  }, [isCaptured, loading, returnData]);

  const handleCapture = () => {
    setCaptured(true);
    setScreenshot(webcamRef.current.getScreenshot());
  }

  return (
    <div className={CollectionStyle}>
      <header>
        {!isCaptured && (
          <>
            <Webcam muted={true} ref={webcamRef} className={WebcamStyle} videoConstraints={videoConstraints} />
            <div>
              <img ref={imgRef} style={{ display: 'none' }} width={webcamRef.current?.video.width} height={webcamRef.current?.video.height} />
            </div>
          </>
        )}
        {isCaptured && <img src={screenshot} className={WebcamStyle} />}
      </header>

      {source === 'collection' && <ModalConfirm img={screenshot} visible={isCaptured} setVisible={setCaptured} data={dataCollected} setShowCamera={setShowCamera} />}
      {source === 'checking' && <ModalSelect img={screenshot} visible={isCaptured} setVisible={setCaptured} data={dataCollected} setShowCamera={setShowCamera} />}
      
      <div className={CaptureContainer}>
        <a onClick={() => setShowCamera(false)}>Back</a>
        {!loading && (
          <>
            <div className={CaptureButton} onClick={handleCapture} ><CameraFilled /></div>
            <Upload 
              className={UploadStyle}
              beforeUpload={file => {
                reader.readAsDataURL(file);
                reader.onload = () => {
                  imgRef.current.src = reader.result;
                  detect(webcamRef, returnData, setDataCollected, imgRef);
                  setCaptured(true);
                  setScreenshot(reader.result);
                }
              }}
            >
              <a>Upload</a>
            </Upload>
          </>
        )}
        {loading && (
        <div>
          <LoadingOutlined />
          <span style={{ marginLeft: '8px', color: 'grey' }}>Loading Dataset...</span>
        </div>)}
      </div>
    </div>
  )
}

Camera.propTypes = {
  source: string.isRequired,
  setShowCamera: func.isRequired,
  loading: bool,
  returnData: object,
};

Camera.defaultProps = {
  loading: true,
  returnData: {},
}

export default Camera;