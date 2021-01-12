import { css } from '@emotion/css';

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
`;

export const InputTotalObject = css`
  text-align: center;
  margin: 4px 4px 0 4px;
  font-size: 14px;
  width: 60px;
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
