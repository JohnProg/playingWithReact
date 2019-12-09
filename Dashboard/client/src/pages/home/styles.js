import styled from 'styled-components';

export const Container = styled.div`
  background-color: ${({ theme }) => theme.colors.white};
`;

export const List = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 10px;
`;

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  margin: 10px;
  min-width: 300px;
  background-color: ${({ theme }) => theme.colors.white};
  border: 1px solid ${({ theme }) => theme.colors.black};
`;

export const Title = styled.h3`
  padding: 10px 20px;
`;

export const ProgressBar = styled.progress`
  width: 90%;
  margin: 0 auto;
`;

export const NoResults = styled.p`
  padding: 10px;
`;

export const Info = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 10px 20px;
`;

export const StatusIcon = styled.span`
  height: 15px;
  width: 15px;
  display: inline-block;
  margin-right: 10px;
  border-radius: 50%;
  background-color: ${props => {
    if (props.status === 'SAVED') {
      return ({ theme }) => theme.colors.orange;
    } else if (props.status === 'LIVE') {
      return ({ theme }) => theme.colors.green;
    } else {
      return ({ theme }) => theme.colors.red;
    }
  }};
`;

export const Totals = styled.p`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  background-color: ${({ theme }) => theme.colors.grayLight};

  .rejected {
    flex: 1;
    color: ${({ theme }) => theme.colors.red};
    text-align: center;
  }
`;
