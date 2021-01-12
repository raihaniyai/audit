import { css } from '@emotion/css';
import { N0, N200, B600 } from 'unify-token/build/v2/colors';

export const LayoutStyle = css`
  background: ${N0};
  justify-content: center;
  display: flex;
  align-items: center;
`;

export const HeaderStyle = css`
  padding: 0 16px;
  background: ${N0};
  text-align:center;
`;

export const ContentStyle = css`
  padding: 24px;
  min-height: 280px;
  background: ${N0};
  align-self: center;
`;
  
export const Logo = css`
  font-size: 24px;
  color: ${B600};
  font-weight: 800;
`;

export const ProfileSection = css`
  display: flex;
  margin-bottom: 32px;
`;

export const Biodata = css`
  margin-left: 16px;
  font-size: 22px;

  div:last-child {
    font-size: 16px;
    color: ${N200};
  }
`;

export const Feature = css`
  width: 100%;
  color: ${N0};
  display: flex;
  margin: 24px 0;
  font-size: 24px;
  font-weight: 500;
  min-height: 180px;
  border-radius: 8px;
  text-align: center;
  align-items: center;
  background: ${B600};
  justify-content: center;
`;

export const FlipCamera = css`
  position: absolute;
  font-size: 24px;
`;
