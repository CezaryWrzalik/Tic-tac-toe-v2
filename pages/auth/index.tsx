import { getSession, GetSessionParams} from "next-auth/react";
import Auth from "../../components/auth/Sign";

const AuthPage = () => {
  return (
    <>
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
