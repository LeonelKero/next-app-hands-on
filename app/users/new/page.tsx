"use client";
import { useRouter } from "next/navigation";

const NewUsersPage = () => {
  const router = useRouter();
  return (
    <>
      <div>NewUsersPage</div>
      <button
        className="btn btn-primary"
        onClick={() => {
          router.push("/");
        }}
      >
        Go Hone
      </button>
    </>
  );
};

export default NewUsersPage;
