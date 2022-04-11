import { getSession, GetSessionParams } from "next-auth/react";
import Auth from "../../components/auth/Sign";
import UiPreviousPage from "../../components/ui/ui-previouspage";

const AuthPage = () => {
  return (
    <>
      <UiPreviousPage />
      <Auth />;
    </>
  );
};

export async function getServerSideProps(context: GetSessionParams) {
  const session = await getSession(context);

  if(session) {
    return{
      redirect: {
        destination: '/',
        pernament: false,
      },
    }
  }

  return {
    props: {session}
  }
}

export default AuthPage;
