import Image from "next/image";
import { useRouter } from "next/router";
import { Inter } from "next/font/google";
import { useSession } from "next-auth/react";
import axios from "axios";

import NavBar from "@/components/nav";
import Login from "@/components/login";
import Footer from "@/components/footer";

import hero from "../../public/hero.png";
const inter = Inter({ subsets: ["latin"] });

interface iMovies {
  id: number;
  title: string;
  description: string;
  filename: string;
  release_date: string;
  rating: number;
  img_url: string;
}

interface iHomeProps {
  movies: iMovies[];
}

const Home: React.FC<iHomeProps> = ({ movies }) => {
  const { data: session } = useSession();
  const router = useRouter();

  return (
    <>
      <main className={`${inter.className}`}>
        {session?.user ? (
          <>
            <NavBar />
            <div
              id="hero"
              className="w-full h-[80vh] px-12 py-3"
              style={{
                backgroundImage: `url(${hero.src})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <div className=" h-full w-full">
                <h3 className="text-xl mb-3">FakeFlix Special</h3>
                <h1 className="text-5xl mb-3">The Godfather</h1>
                <button className="btn btn-primary mr-3 min-w-64">PLAY</button>
                <button className="btn btn-secondary">Info</button>
              </div>
            </div>
            <div id="movies" className="my-12 px-12 py-3">
              <h2 className="mb-3 text-2xl">Movies</h2>
              <div className="flex gap-6 w-full">
                {movies.map((movie) => (
                  <div key={movie.title}>
                    <Image
                      src={movie.img_url}
                      width={250}
                      height={250}
                      alt="logo"
                      onClick={() => {
                        if (document) {
                          (
                            document.getElementById(
                              `movie-modal-${movie.id}`
                            ) as HTMLDialogElement
                          ).showModal();
                        }
                      }}
                    />
                    <dialog id={`movie-modal-${movie.id}`} className="modal">
                      <div className="modal-box">
                        <Image
                          src={movie.img_url}
                          width={250}
                          height={250}
                          alt="logo"
                        />
                        <h3 className="font-bold text-lg">{movie.title}</h3>
                        <p className="py-4">{movie.description}</p>
                        <div className="modal-action">
                          <form method="dialog">
                            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                              ✕
                            </button>
                            <button
                              className="btn btn-primary"
                              onClick={() => router.push(`/watch/${movie.id}`)}
                            >
                              Play
                            </button>
                          </form>
                        </div>
                      </div>
                    </dialog>
                  </div>
                ))}
              </div>
            </div>
          </>
        ) : (
          <Login />
        )}
      </main>
      <Footer />
    </>
  );
};

export default Home;

export const getServerSideProps = async () => {
  const api = process.env.NEXT_PUBLIC_API;
  const res = await axios.get(`${api}?watch=true`);
  const data = res.data;
  return { props: { movies: data } };
};
