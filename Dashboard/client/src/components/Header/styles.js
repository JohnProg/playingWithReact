import styled from 'styled-components';

export const Wrapper = styled.div`
  background: ${({ theme }) => theme.colors.grayLight};
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 10px 40px;

  button {
    padding: 10px;
    border-radius: 4px;
    font-size: 20px;
    font-weight: bold;
  }
`;

export const Calendar = styled.div`
  flex-grow: 1;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;
