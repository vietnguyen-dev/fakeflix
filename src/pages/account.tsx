import { Inter } from "next/font/google";
import { useSession } from "next-auth/react";
import Image from "next/image";

import Login from "@/components/login";
import NavBar from "@/components/nav";
import Footer from "@/components/footer";

const inter = Inter({ subsets: ["latin"] });

const Profile = () => {
  const { data: session } = useSession();

  return (
    <>
      <main className={`${inter.className}`}>
        {session ? (
          <>
            <NavBar />
            <div className="px-72 py-16">
              <h1 className="text-3xl mb-5">Account Details</h1>
              <div className="overflow-x-auto">
                <table className="table">
                  <tr>
                    <th>Email</th>
                    <td>{session.user?.email}</td>
                  </tr>
                  <tr>
                    <th>Name</th>
                    <td>{session.user?.name}</td>
                  </tr>
                </table>
              </div>
            </div>
            <dialog id="profile-photo" className="modal">
              <div className="modal-box">
                <form method="dialog">
                  {/* if there is a button in form, it will close the modal */}
                  <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                    ✕
                  </button>
                </form>
                <h3 className="font-bold text-lg">Hello!</h3>
                <input type="file" className="file-input w-full max-w-xs" />
              </div>
            </dialog>
          </>
        ) : (
          <Login />
        )}
      </main>
      <Footer />
    </>
  );
};

export default Profile;
