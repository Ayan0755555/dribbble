import React from "react";

const SignUp = () => {
  return (
    <div className="container">
      <div className="contact-box">
        <div className="left"></div>
        <div className="right">
          <div>
            <h6 className="sign-l text-purple-500">
              Already a member?
              <a href="/signin" className="lin">
                SignIn
              </a>
            </h6>
          </div>
          <h1 className="sign-h mb-8 text-start">Sign up to Dribbble</h1>
          <div className="mt-8 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            <div className="sm:col-span-3">
              <label
                htmlFor="first-name"
                className="block text-sm  text-left font-medium leading-6 text-gray-900"
              >
                Name
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="first-name"
                  id="first-name"
                  autoComplete="given-name"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="sm:col-span-3">
              <label
                htmlFor="last-name"
                className="block text-sm  text-left font-medium leading-6 text-gray-900"
              >
                Username
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="last-name"
                  id="last-name"
                  autoComplete="family-name"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="col-span-full">
              <label
                htmlFor="email"
                className="block text-sm text-left font-medium leading-6 text-gray-900"
              >
                Email
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="email"
                  id="email"
                  autoComplete="email"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div className="col-span-full">
              <label
                htmlFor="password"
                className="block mb-2 text-sm text-left font-medium leading-6 text-gray-900"
              >
                Password
              </label>
              <div className="mb-7">
                <input
                  type="password"
                  name="password"
                  id="password"
                  autoComplete="password"
                  className="block w-full mb-10 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
          </div>
          <div className="flex happy items-center justify-between">
            <input id="agree" type="checkbox" />
            <label className="text-gray-700" for="agree">
              Creating an account means you're okay with our
              <a class="text-blue-500" href="/policy">
                Terms of Service,
              </a>
              <a className="text-blue-500" href="/policy">
                Privacy Policy,
              </a>
              and our
              <a className="text-blue-500" href="/policy">
                default Notification Settings.
              </a>
            </label>
          </div>
          <div className="mt-6">
            <button
              className="btyn bten text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="button"
            >
              Create Account
            </button>
          </div>
          <div className="mt-3 mb-6 tie text-gray-700 text-center">
            This site is protected by reCAPTCHA and the{" "}
            <a className="text-blue-500" href="/policy">
              Google
            </a>{" "}
            <a className="text-blue-500" href="/policy">
              Privacy Policy
            </a>{" "}
            and{" "}
            <a class="text-blue-500" href="/policy">
              Terms of Service
            </a>{" "}
            apply.
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
