import { useState } from "react";
import { useRouter } from "next/router";
import { useSession } from "next-auth/react";
import { Inter } from "next/font/google";

import Login from "@/components/login";
import NavBar from "@/components/nav";

export default function Page() {
  const [menu, setMenu] = useState<boolean>(true);
  const { data: session } = useSession();
  const router = useRouter();

  return (
    <div>
      {session?.user ? (
        <div className="w-screen h-screen flex justify-center items-center">
          <video controls autoPlay>
            <source src="/prank.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      ) : (
        <Login />
      )}
    </div>
  );
}
