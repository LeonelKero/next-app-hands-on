import { getServerSession } from "next-auth";
import { authOptions } from "./api/auth/[...nextauth]/route";

export default async function Home() {
  const serverSession = await getServerSession(authOptions);

  return (
    <main>
      <h2>Hello {serverSession && <code>{serverSession.user?.name}</code>}</h2>
    </main>
  );
}
