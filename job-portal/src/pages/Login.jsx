import React, { useContext, useState } from "react";
import { AuthContext } from "../context/AuthProvider";
import { useLocation, useNavigate, Link } from "react-router-dom";
import { FaGoogle, FaGithub } from "react-icons/fa";
import login_image from "../assets/Tablet login-amico.svg";

const Login = () => {
  const [errorMessage, setErrorMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const { signIn, signUpWithGmail, signUpWithGithub } = useContext(AuthContext);

  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || "/";

  const handleLogin = async (event) => {
    event.preventDefault();
    setLoading(true);
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    try {
      await signIn(email, password);
      console.log("Login successful");
      alert("Login successful!");
      navigate(from, { replace: true });
    } catch (error) {
      console.error("Login error: ", error);
      if (error.code === "auth/user-not-found") {
        setErrorMessage("User not found. Please register first.");
      } else if (error.code === "auth/wrong-password") {
        setErrorMessage("Incorrect password. Please try again!");
      } else {
        setErrorMessage("Failed to log in. Please try again!");
      }
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleLogin = async () => {
    setLoading(true);
    try {
      await signUpWithGmail();
      navigate(from, { replace: true });
    } catch (error) {
      console.error("Google sign-in error: ", error);
      setErrorMessage("Failed to log in with Google. Please try again!");
    } finally {
      setLoading(false);
    }
  };

  const handleGithubLogin = async () => {
    setLoading(true);
    try {
      await signUpWithGithub();
      navigate(from, { replace: true });
    } catch (error) {
      console.error("Github sign-in error: ", error);
      setErrorMessage("Failed to log in with Github. Please try again!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex w-full h-screen justify-center items-center gradient">
      <div className="flex w-2/5 p-5">
        <form
          onSubmit={handleLogin}
          className="bg-white shadow-md rounded-lg p-8 m-4 w-3/4"
        >
          <h3 className="text-xl font-semibold mb-4">Login to Seekify</h3>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Email Address
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="email"
              name="email"
              type="email"
              placeholder="name@email.com"
              required
              disabled={loading}
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Password
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              id="password"
              name="password"
              type="password"
              placeholder="************"
              required
              disabled={loading}
            />
            {errorMessage && (
              <p className="text-red-500 text-xs italic">{errorMessage}</p>
            )}
          </div>
          <div className="flex items-center justify-between">
            <button
              className="bg-[#102c57] w-32 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
              disabled={loading}
            >
              {loading ? "Logging in..." : "Log in"}
            </button>
          </div>
          <div className="mt-4 text-center">
            {errorMessage && errorMessage.includes("User not found") && (
              <p className="text-gray-700 text-sm">
                User not found. Do not have an account?{" "}
                <Link to="/register" className="text-blue-500">
                  Register for free
                </Link>
              </p>
            )}
          </div>
          <div className="mt-4 text-center">
            <p className="text-gray-700 text-sm">
              Do not have an account?{" "}
              <Link to="/register" className="text-blue-500 hover:underline">
                Sign up here
              </Link>
            </p>
          </div>
          <div className="mt-8 text-center w-full mx-auto">
            <p className="mb-4">Or log in with</p>
            <div className="flex items-center justify-center gap-4 w-full mx-auto">
              <button
                className="border-2 text-blue hover:text-white hover:bg-blue font-bold p-3 rounded-full focus:outline-none focus:shadow-outline flex items-center gap-2"
                type="button"
                onClick={handleGoogleLogin}
                disabled={loading}
              >
                <FaGoogle />
              </button>
              <button
                className="border-2 text-blue hover:text-white hover:bg-blue font-bold p-3 rounded-full focus:outline-none focus:shadow-outline flex items-center gap-2"
                type="button"
                onClick={handleGithubLogin}
                disabled={loading}
              >
                <FaGithub />
              </button>
            </div>
          </div>
        </form>
      </div>
      <div className="flex w-2/5 h-full items-center">
        <img src={login_image} className="h-3/4 p-16" alt="login-page_image" />
      </div>
    </div>
  );
};

export default Login;
