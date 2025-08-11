import { Link, useLocation, useNavigate } from "react-router";
import { AuthContext } from "../Provider/AuthProvider";
import { use, useState } from "react";
import { toast } from "react-toastify";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import app from "../Firebase/firebase.config";
const auth = getAuth(app);
const Login = () => {
  const [error, setError] = useState("");
  const location = useLocation();
  const navigate = useNavigate();
  // console.log(location);

  const provider = new GoogleAuthProvider();
  const handleGoolesginIn = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        const user = result.user;
        console.log(user);
        toast.success("Login with Google successful!");
        navigate(`${location.state ? location.state : "/"}`);
      })
      .catch((error) => {
        console.error("Google Sign-In Error:", error.message);
        toast.error("Google Sign-In failed.");
      });
  };
  const { login } = use(AuthContext);
  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);

    login(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        toast.success("Login Successfully done!");
        navigate(`${location.state ? location.state : "/"}`);
      })
      .catch((error) => {
        console.log(error);
        const errorCode = error.code;
        setError(errorCode);
      });
  };
  return (
    <>
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <img
            alt="Your Company"
            src="/Appstore.png"
            className="mx-auto h-10 w-auto"
          />
          <h2 className="mt-10 text-center text-2xl/9 font-bold tracking-tight text-gray-900">
            Login in to your account
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form
            onSubmit={handleLogin}
            action="#"
            method="POST"
            className="space-y-6"
          >
            {/* email */}
            <div>
              <label
                htmlFor="email"
                className="block text-sm/6 font-medium text-gray-900"
              >
                Email address
              </label>
              <div className="mt-2">
                <input
                  name="email"
                  type="email"
                  placeholder="Enter your email"
                  required
                  autoComplete="email"
                  className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-primary2 sm:text-sm/6"
                />
              </div>
            </div>
            <div>
              {/* password */}
              <div className="flex items-center justify-between">
                <label
                  htmlFor="password"
                  className="block text-sm/6 font-medium text-gray-900"
                >
                  Password
                </label>
                <div className="text-sm">
                  <a
                    href="#"
                    className="font-bold hover:underline text-blue-700"
                  >
                    Forgot password?
                  </a>
                </div>
              </div>
              <div className="mt-2">
                <input
                  name="password"
                  placeholder="Enter your password"
                  type="password"
                  required
                  autoComplete="current-password"
                  className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-primary2 sm:text-sm/6"
                />
              </div>
            </div>

            {error && <p className="text-red-500">{error}</p>}
            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-primary1 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-xs hover:bg-orange-400 "
              >
                LogIn
              </button>
            </div>
          </form>
          <div className="my-5">
            <p className="text-center ">OR</p>
            <button
              onClick={handleGoolesginIn}
              className="btn bg-white hover:bg-primary2 text-black border-[#e5e5e5] w-full"
            >
              <svg
                aria-label="Google logo"
                width="16"
                height="16"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
              >
                <g>
                  <path d="m0 0H512V512H0" fill="#fff"></path>
                  <path
                    fill="#34a853"
                    d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"
                  ></path>
                  <path
                    fill="#4285f4"
                    d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"
                  ></path>
                  <path
                    fill="#fbbc02"
                    d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"
                  ></path>
                  <path
                    fill="#ea4335"
                    d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"
                  ></path>
                </g>
              </svg>
              Login with Google
            </button>
          </div>
          <p className="mt-10 text-center text-sm/6 ">
            Don't Have An account?{" "}
            <Link
              to="/auth/register"
              className="font-bold hover:underline text-blue-700"
            >
              Register
            </Link>
          </p>
        </div>
      </div>
    </>
  );
};

export default Login;
