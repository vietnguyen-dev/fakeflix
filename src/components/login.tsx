import loginBG from "../../public/login-bg.jpeg";
import { signIn } from "next-auth/react";

const Login = () => {
  return (
    <div
      id="login"
      className="h-[90vh] w-full flex justify-center items-center flex-col"
      style={{
        background: `url(${loginBG.src})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "90vh", // Set a specific height for the container
      }}
    >
      <div className="bg-black p-12 flex flex-col">
        <h1 className="text-3xl mb-6">FakeFlix</h1>
        <button className="btn btn-primary" onClick={() => signIn()}>
          Sign In
        </button>
      </div>
    </div>
  );
};

export default Login;
