import styled, { css } from 'styled-components';

interface StyledTitlebarProps {}

const StyledTitlebar = styled.div<StyledTitlebarProps>`
  ${(props) => {
    const {} = props;
    return css`
      .titlebar {
        height: 30px;
        background: #329ea3;
        user-select: none;
        display: flex;
        justify-content: flex-end;
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
      }
      .titlebar-button {
        display: inline-flex;
        justify-content: center;
        align-items: center;
        width: 30px;
        height: 30px;
      }
      .titlebar-button:hover {
        background: #5bbec3;
      }
    `;
  }}
`;

StyledTitlebar.displayName = 'StyledTitlebar';

export default StyledTitlebar;