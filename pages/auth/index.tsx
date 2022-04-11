import { getSession, GetSessionParams, useSession } from "next-auth/react";
import { useRouter } from "next/router";
import Auth from "../../components/auth/Sign";



const AuthPage = () => {
  const router = useRouter();
  const { data: session } = useSession()
  if(session){
    console.log('heyyy');
    router.push('./multiplayer')
  }
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
