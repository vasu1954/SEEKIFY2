import React, { useContext, useState } from "react";
import { FaGoogle, FaGithub } from "react-icons/fa";
import { AuthContext } from "../context/AuthProvider";
import { useLocation, useNavigate } from "react-router-dom";
import signup_image from "../assets/Sign up-amico.svg";

const Signup = () => {
  const [errorMessage, setErrorMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const { createUser, signUpWithGmail, signUpWithGithub } =
    useContext(AuthContext);

  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || "/";

  const handleSignup = async (event) => {
    event.preventDefault();
    setLoading(true);
    const { firstName, lastName, email, password, phoneNumber } =
      event.target.elements;

    const phoneNumberPattern = /^[0-9]{10}$/;
    if (!phoneNumberPattern.test(phoneNumber.value)) {
      setErrorMessage("Please enter a valid 10-digit mobile number.");
      setLoading(false);
      return;
    }
    const displayName = `${firstName.value} ${lastName.value}`;

    try {
      await createUser(email.value, password.value, displayName);
      alert("Signup successful!");
      navigate(from, { replace: true });
    } catch (error) {
      if (error.code === "auth/email-already-in-use") {
        setErrorMessage("Email already in use. Please log in.");
      } else {
        console.error("Signup error: ", error);
        setErrorMessage("Failed to create account. Please try again!");
      }
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleSignup = async () => {
    setLoading(true);
    try {
      await signUpWithGmail();
      navigate(from, { replace: true });
    } catch (error) {
      console.error("Google sign-up error: ", error);
      setErrorMessage("Failed to sign up with Google. Please try again!");
    } finally {
      setLoading(false);
    }
  };

  const handleGithubSignup = async () => {
    setLoading(true);
    try {
      await signUpWithGithub();
      navigate(from, { replace: true });
    } catch (error) {
      console.error("Github sign-up error: ", error);
      setErrorMessage("Failed to sign up with Github. Please try again!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex w-full h-screen justify-center items-center gradient">
      <div className="flex w-2/5 p-5">
        <form
          onSubmit={handleSignup}
          className="bg-white shadow-md rounded-lg p-8 m-4 w-3/4"
        >
          <h3 className="text-xl font-semibold mb-4">Sign up to Seekify</h3>
          <div className="flex gap-4">
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                First Name
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                name="firstName"
                type="text"
                placeholder="Enter Your First Name"
                required
                disabled={loading}
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Last Name
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                name="lastName"
                type="text"
                placeholder="Enter Your Last Name"
                required
                disabled={loading}
              />
            </div>
          </div>
          <div className="flex gap-6">
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Code
              </label>
              <input
                className="shadow appearance-none border rounded w-20 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                name="code"
                type="tel"
                maxLength={3}
                placeholder="eg. +91"
                required
                disabled={loading}
              />
            </div>
            <div className="mb-4 w-full">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Mobile Number
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                name="phoneNumber"
                type="tel"
                maxLength={10}
                placeholder="Enter Your Number"
                required
                disabled={loading}
              />
            </div>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Email Address
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              name="email"
              type="email"
              placeholder="name@email.com"
              required
              disabled={loading}
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Password
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
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
              {loading ? "Signing up..." : "Sign up"}
            </button>
          </div>
          <div className="mt-4 text-center">
            <p className="text-gray-700 text-sm">
              Already have an account?{" "}
              <button
                className="text-blue-500 hover:underline"
                onClick={() => navigate("/login")}
              >
                Log in
              </button>
            </p>
          </div>
          <div className="mt-8 text-center w-full mx-auto">
            <p className="mb-4">Or sign up with</p>
            <div className="flex items-center justify-center gap-4">
              <button
                className="border-2 text-blue hover:text-white hover:bg-blue font-bold p-3 rounded-full focus:outline-none focus:shadow-outline flex items-center gap-2"
                type="button"
                onClick={handleGoogleSignup}
                disabled={loading}
              >
                <FaGoogle />
              </button>
              <button
                className="border-2 text-blue hover:text-white hover:bg-blue font-bold p-3 rounded-full focus:outline-none focus:shadow-outline flex items-center gap-2"
                type="button"
                onClick={handleGithubSignup}
                disabled={loading}
              >
                <FaGithub />
              </button>
            </div>
          </div>
        </form>
      </div>
      <div className="flex w-2/5 h-full items-center">
        <img
          src={signup_image}
          className="h-3/4 p-16"
          alt="signup_image_image"
        />
      </div>
    </div>
  );
};

export default Signup;
