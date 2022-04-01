import Link from "next/link";
import ArrowIcon from "../icons/arrow-icon";
import { UiPreviousPageContainer } from "./Ui-Previouspage.styled";

type PropsTypes = {
  href: string;
};

const UiPreviousPage = ({ href }: PropsTypes) => {
  return (
    <UiPreviousPageContainer>
      <Link href={href}>
        <a href="">
          <ArrowIcon />
        </a>
      </Link>
    </UiPreviousPageContainer>
  );
};

export default UiPreviousPage;
