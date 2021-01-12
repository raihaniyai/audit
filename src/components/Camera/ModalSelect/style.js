import { css } from '@emotion/css';
import { N400 } from 'unify-token/build/v2/colors';

export const CheckboxStyle = css`
  display: flex;

  .ant-checkbox-inner {
    margin-top: 13px;
  }

  .ant-checkbox-checked::after {
    border: none;
  }
`;

export const ObjectDetail = css`
  margin-left: 8px;
  margin-top: 8px;
  flex-grow: 1;
`;

export const ObjectName = css`
  font-size: 16px;
  color: rgba(0, 0, 0, 0.7);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  width: 140px;
`;

export const ObjectWrapper = css`
  flex-direction: column;
  display: flex;
  margin-bottom: 16px;
`;

export const ObjectTotal = css`
  margin-left: 14px;
  font-size: 16px;
  margin-top: 8px;
`;

export const ObjectLine = css`
  display: flex;
  justify-content: space-between;
`;

export const ImageContainer = css`
  width: 100%;
  height: 100%;
  object-fit: contain;
  margin-bottom: 16px;
`;

export const Thumbnail = css`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const Description = css`
  display: flex;
  justify-content: space-between;
  font-size: 16px;
  margin-top: 8px;

  span:first-child {
    width: 150px;
    color: ${N400};
  }

  span:last-child {
    text-align: right;
  }
`;
