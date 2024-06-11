import { useNavigate } from "react-router-dom";
import styled from "styled-components";

import Button from "../components/common/Button";
import CreateInput from "../components/CreateInput";

function CreatePage() {
  const navigate = useNavigate();

  return (
    <CreatePageWrapper>
      <Button
        width="10rem"
        height="4rem"
        margin="2rem 0 0 3rem"
        buttonColor="#EEEEEE"
        fontColor="black"
        onClick={() => navigate("/")}
      >
        ⬅️ Back
      </Button>
      <CreateInput />
      <Button
        id="create-btn"
        width="10rem"
        height="5rem"
        margin="2rem 0 0 63rem"
        buttonColor="#226597"
      >
        Done
      </Button>
    </CreatePageWrapper>
  );
}

export default CreatePage;

const CreatePageWrapper = styled.section`
  display: flex;
  flex-direction: column;

  margin: 1rem;
`;
