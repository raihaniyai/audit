import { css } from '@emotion/css';
import { N100 } from 'unify-token/build/v2/colors';

export const CollectionStyle = css`
  width: 100%;
`;

export const CaptureButton = css`
  width: 65px;
  height: 65px;
  border-radius: 50%;
  background: ${N100};
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 24px;
`;
  
export const CaptureContainer = css`
  z-index: 10;
  width: 100%;
  bottom: 0;
  height: 100px;
  background: white;
  display: flex;
  position: absolute;
  justify-content: space-around;
  align-items: center;
`;

export const WebcamStyle = css`
  position: absolute;
  margin-left: auto;
  margin-right: auto;
  left: 0;
  right: 0;
  text-align: center;
  z-index: 9;
  width: 100%;
  height: 100%;
  object-fit: contain;
`;

export const UploadStyle = css`
  .ant-upload-list {
    display: none;
  }
`;