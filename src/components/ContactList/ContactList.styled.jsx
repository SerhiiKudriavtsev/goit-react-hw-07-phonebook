import styled from '@emotion/styled';

export const List = styled.ul`
  width: 400px;
  padding: 20px;
`;
export const ListItem = styled.li`
  display: flex;
  justify-content: space-between;
  padding: 5px;
  :nth-of-type(odd) {
    background-color: #edebeb;
  }
  :nth-of-type(even) {
    background-color: #d9d4d4;
  }
`;
export const Name = styled.p`
  width: 45%;
  padding: 5px;
  font-size: 18px;
  font-weight: bold;
`;

export const Number = styled.p`
  padding: 5px;
  font-size: 18px;
  font-weight: bold;
`;
export const Button = styled.button`
  padding: 5px;
  border-radius: 8px;
  cursor: pointer;
  :hover {
    transform: scale(1.02);
    color: red;
    font-weight: bold;
  };
`;
export const Text = styled.h2`
display: flex;
font-size: 28px;
color: red;
justify-content: center;
`;
