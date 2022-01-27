import Link from "next/link";
import ArrowIcon from "../icons/arrow-icon";

import classes from "./ui-previouspage.module.css";

type PropsTypes = {
	href: string;
}

const UiPreviousPage = ({href}: PropsTypes) => {
  return (
    <Link href={href}>
      <div className={classes.container}>
        <ArrowIcon />
      </div>
    </Link>
  );
};

export default UiPreviousPage;
