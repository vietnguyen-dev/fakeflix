import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { signOut } from "next-auth/react";

const NavBar: React.FC = () => {
  const [menu, setMenu] = useState<boolean>(true);

  return (
    <nav className="flex justify-between px-16 py-4 sticky top-0 w-full bg-black z-[999]">
      <div className="flex gap-6 items-center">
        <h1 className="text-xl">
          <Link href="/">Fakeflix</Link>
        </h1>
        <Link href="/#movies" className="text-sm">
          Movies
        </Link>
        <Link href="/#tv-shows" className="text-sm">
          TV Shows
        </Link>
      </div>
      <div className="flex items-center gap-3">
        <div className="border-2 border-white rounded-full h-[35px]">
          <Image
            src="/favicon.ico"
            width={30}
            height={30}
            alt="profile image"
            onClick={() => setMenu(!menu)}
          />
        </div>
        <button onClick={() => setMenu(!menu)}>
          {menu ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 16 16"
            >
              <path fill="#fff" d="M8 1l6 6H2z" />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 16 16"
            >
              <path fill="#fff" d="M8 15l6-6H2z" />
            </svg>
          )}
        </button>
        {!menu && (
          <div className="absolute right-16 top-14">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 16 16"
              className="ml-[72.5%]"
            >
              <path fill="#fff" d="M8 1l6 6H2z" />
            </svg>
            <ul className="bg-base-100 rounded-box w-52 shadow-2xl flex flex-col">
              <div className="flex gap-1 p-2">
                <Image src="/account.png" height={20} width={35} alt="" />
                <Link
                  href="/account"
                  className="text-center p-2 text-sm hover:link"
                >
                  Manage Account
                </Link>
              </div>

              <button
                className="border-t border-white p-3 text-sm"
                onClick={() => signOut()}
              >
                Sign Out of Fakeflix
              </button>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default NavBar;
