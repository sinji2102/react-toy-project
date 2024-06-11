import styled from "styled-components";

import Input from "../components/common/Input";

function CreatePage() {
  return (
    <CreatePageWrapper>
      <Input
        placeholder="Enter Title"
        customHeight="5rem"
        customMargin="1rem 0 1rem 3rem"
        customPadding="1.3rem"
      />
      <Input
        placeholder="Contents"
        customHeight="25rem"
        customMargin="0 3rem"
        customPadding="1.3rem"
      />
    </CreatePageWrapper>
  );
}

export default CreatePage;

const CreatePageWrapper = styled.section`
  display: flex;
  flex-direction: column;

  margin: 1rem;
`;
