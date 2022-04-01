import { useRouter } from "next/router";
import ArrowIcon from "../icons/arrow-icon";
import { UiPreviousPageContainer } from "./Ui-Previouspage.styled";

const UiPreviousPage = () => {
  const router = useRouter();
  return (
    <UiPreviousPageContainer onClick={() => router.back()}>
      <ArrowIcon />
    </UiPreviousPageContainer>
  );
};

export default UiPreviousPage;
