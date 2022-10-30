import styled from "@emotion/styled"

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 400px;
  align-items: center;
  justify-content: center;
  padding: 20px;
  margin-bottom: 20px;
  border: 1px solid black;
  border-radius: 8px;
`;

export const Div = styled.div`

`;
export const Label = styled.label`
`;
export const TitleForm = styled.h3`
  font-size: 20px;
  margin-bottom: 5px;
  font-weight: bold;
	color: #FFFFFF;
	text-shadow: 
		-0   -4px 0   #000000,
		 0   -4px 0   #000000,
		-0    4px 0   #000000,
		 0    4px 0   #000000,
		-4px -0   0   #000000,
		 4px -0   0   #000000,
		-4px  0   0   #000000,
		 4px  0   0   #000000,
		-1px -4px 0   #000000,
		 1px -4px 0   #000000,
		-1px  4px 0   #000000,
		 1px  4px 0   #000000,
		-4px -1px 0   #000000,
		 4px -1px 0   #000000,
		-4px  1px 0   #000000,
		 4px  1px 0   #000000,
		-2px -4px 0   #000000,
		 2px -4px 0   #000000,
		-2px  4px 0   #000000,
		 2px  4px 0   #000000,
		-4px -2px 0   #000000,
		 4px -2px 0   #000000,
		-4px  2px 0   #000000,
		 4px  2px 0   #000000,
		-3px -4px 0   #000000,
		 3px -4px 0   #000000,
		-3px  4px 0   #000000,
		 3px  4px 0   #000000,
		-4px -3px 0   #000000,
		 4px -3px 0   #000000,
		-4px  3px 0   #000000,
		 4px  3px 0   #000000,
		-4px -4px 0   #000000,
		 4px -4px 0   #000000,
		-4px  4px 0   #000000,
		 4px  4px 0   #000000,
		-4px -4px 0   #000000,
		 4px -4px 0   #000000,
		-4px  4px 0   #000000,
		 4px  4px 0   #000000;
`;
export const Input = styled.input`
  font-size: 18px;
  margin-bottom: 10px;
  border-radius: 8px;
  padding: 5px;
`;
export const Button = styled.button`
  font-size: 18px;
  padding: 10px;
  width: 200px;
  border-radius: 8px;
  cursor: pointer;
  :hover {transform: scale(1.02)};
`;