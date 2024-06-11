import styled from "styled-components";

import Input from "../components/common/Input";

import { ListItemProps } from "../types/listProps";

function EditInput({ title, body }: ListItemProps) {
  return (
    <EditInputWrapper>
      <Input
        id="title"
        customHeight="5rem"
        customMargin="1rem 0 1rem 3rem"
        customPadding="1.3rem"
      >
        {title}
      </Input>
      <Input
        id="body"
        customHeight="20rem"
        customMargin="0 3rem"
        customPadding="1.3rem"
      >
        {body}
      </Input>
    </EditInputWrapper>
  );
}

export default EditInput;

const EditInputWrapper = styled.section`
  display: flex;

  flex-direction: column;
`;
