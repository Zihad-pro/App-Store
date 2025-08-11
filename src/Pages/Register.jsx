import React, { use } from "react";
import { Link, useLocation, useNavigate } from "react-router";
import { AuthContext } from "../Provider/AuthProvider";
import { toast } from "react-toastify";
import { getAuth, signInWithPopup } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";
const auth = getAuth();
const Register = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { createUser, setUser, updateUser } = use(AuthContext);

  const provider = new GoogleAuthProvider();
  const handleGoolesginIn2 = () => {
    signInWithPopup(auth, provider)
      .then((res) => {
        const user = res.user;
        console.log(user);
        navigate(`${location.state ? location.state : "/"}`);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleRegister = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const photourl = form.photourl.value;
    const email = form.email.value;
    const password = form.password.value;
    console.log(name, photourl, password, email);

    createUser(email, password)
      .then((result) => {
        const user = result.user;
        navigate(`${location.state ? location.state : "/auth/login"}`);
        updateUser({ displayName: name, photoURL: photourl })
          .then(() => {
            setUser({ ...user, displayName: name, photoURL: photourl });
          })
          .catch((error) => {
            // An error occurred
            console.log(error);
            setUser(user);
            // ...
          });
        toast.success("Register Successfully done!");
      })
      .catch(() => {
        // const errorMessage = error.message;
        toast.error("Already register You!");
        // ..
      });
  };
  return (
    <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <img
          alt="Your Company"
          src="/Appstore.png"
          className="mx-auto h-10 w-auto"
        />
        <h2 className="mt-10 text-center text-2xl/9 font-bold tracking-tight text-gray-900">
          Register in to your account
        </h2>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form onSubmit={handleRegister} method="POST" className="space-y-6">
          {/* name */}
          <div>
            <div className="flex items-center justify-between">
              <label
                htmlFor="password"
                className="block text-sm/6 font-medium text-gray-900"
              >
                Name
              </label>
            </div>
            <div className="mt-2">
              <input
                name="name"
                type="text"
                placeholder="Enter your name"
                required
                autoComplete="current-password"
                className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-primary2 sm:text-sm/6"
              />
            </div>
          </div>
          {/* photourl */}
          <div>
            <div className="flex items-center justify-between">
              <label
                htmlFor="password"
                className="block text-sm/6 font-medium text-gray-900"
              >
                PhotoURL
              </label>
            </div>
            <div className="mt-2">
              <input
                name="photourl"
                type="text"
                placeholder="Enter your photo URL"
                required
                autoComplete="current-password"
                className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-primary2 sm:text-sm/6"
              />
            </div>
          </div>
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
            <div className="flex items-center justify-between">
              <label
                htmlFor="password"
                className="block text-sm/6 font-medium text-gray-900"
              >
                Password
              </label>
            </div>
            <div className="mt-2">
              <input
                pattern="(?=.*[a-z])(?=.*[A-Z]).{6,}"
                title="Must be more than 6 characters, lowercase letter, uppercase letter"
                name="password"
                type="password"
                placeholder="Enter your password"
                required
                autoComplete="current-password"
                className="block w-full
              rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1
              -outline-offset-1 outline-gray-300 placeholder:text-gray-400
              focus:outline-2 focus:-outline-offset-2 focus:outline-primary2
              sm:text-sm/6"
              />
            </div>
          </div>
          <div>
            <button
              type="submit"
              className="flex w-full justify-center rounded-md bg-primary1 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-xs hover:bg-orange-400 "
            >
              Register
            </button>
          </div>
        </form>
        <div className="my-5">
          <p className="text-center ">OR</p>
          <button
            onClick={handleGoolesginIn2}
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
          If you have an account?{" "}
          <Link
            to="/auth/login"
            className="font-bold hover:underline text-blue-700"
          >
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
