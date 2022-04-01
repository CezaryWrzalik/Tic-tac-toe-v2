import { fetchData } from "next-auth/client/_utils";
import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";
import ArrowIcon from "../../icons/arrow-icon";
import {
  SidebarContainer,
  StatsList,
  SvgContainer,
  WelcomeMessage,
} from "./Sidebar.styled";

type FetchedDataType = {
  username: string;
  won: number;
	lost: number;
	draws: number;
};

const Sidebar = () => {
  const { data: session } = useSession();
  const [isVisible, setIsVisible] = useState(false);
  const [data, setData] = useState<FetchedDataType | undefined>();

  const fetchData = async () => {
    const data = await (
      await fetch(`/api/stats/user/${session?.user.username}`)
    ).json();
    setData(data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <SidebarContainer visible={isVisible}>
      <SvgContainer
        visible={isVisible}
        onClick={() => setIsVisible(!isVisible)}
      >
        <ArrowIcon />
      </SvgContainer>
      <div>
        <WelcomeMessage>Hello {session?.user?.username}</WelcomeMessage>
        <p>Your stats</p>
        <StatsList>
          <li>Wins: {data?.won}</li>
          <li>Loses: {data?.lost}</li>
          <li>Draws: {data?.draws}</li>
        </StatsList>
      </div>
    </SidebarContainer>
  );
};

export default Sidebar;
