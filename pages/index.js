import {LogoutLink, useKindeAuth} from "@kinde-oss/kinde-auth-nextjs";
import { useRouter } from "next/router";

export default function Home() {
  const router = useRouter();
  const { isLoading, isAuthenticated, user, getToken } = useKindeAuth();

  if (isLoading) return "Loading...";

  if (!isAuthenticated) return router.push("/api/auth/login?");

  if (isAuthenticated) return (
    <>
        <p>Welcome {user.given_name}</p>
        <LogoutLink>Log out</LogoutLink>
    </>
  )
}
