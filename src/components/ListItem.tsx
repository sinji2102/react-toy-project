import { useNavigate } from "react-router-dom";
import styled from "styled-components";

import { ListItemProps } from "../types/listProps";

function ListItem({ id, title, body }: ListItemProps) {
  const navigate = useNavigate();

  return (
    <ListItemWrapper>
      <ListItemContainer type="button" onClick={() => navigate(`/edit/${id}`)}>
        <Title>{title}</Title>
        <Body>{body}</Body>
      </ListItemContainer>
    </ListItemWrapper>
  );
}

export default ListItem;

const ListItemWrapper = styled.section`
  display: flex;
`;

const ListItemContainer = styled.button`
  display: flex;
  flex-direction: column;

  width: 70rem;
  height: 10rem;
  margin: 0 1rem 1rem 1rem;
  padding: 1.5rem;

  border-radius: 0.3rem;

  background-color: ${({ theme }) => theme.colors.white};
`;

const Title = styled.h2`
  display: flex;

  margin-top: 1rem;

  ${({ theme }) => theme.fonts.SemiBold};
  color: ${({ theme }) => theme.colors.black};
  font-size: 2rem;
`;

const Body = styled.article`
  display: inline;
  text-align: left;

  width: 65rem;
  margin-top: 0.5rem;

  ${({ theme }) => theme.fonts.Light};
  color: ${({ theme }) => theme.colors.bodyBlack};
  font-size: 1.5rem;

  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;
