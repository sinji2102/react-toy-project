import { useParams } from "react-router-dom";
import styled from "styled-components";

function EditPage() {
  const { noteId } = useParams();
  return <EditPageWrapper>수정 페이지입니다~~{noteId}</EditPageWrapper>;
}

export default EditPage;

const EditPageWrapper = styled.section`
  display: flex;

  margin: 3rem;
`;
