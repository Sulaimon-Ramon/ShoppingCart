import { useState } from "react";
import { FaGoogle, FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";
import { MdEmail, MdLock } from "react-icons/md";
import { FaUser } from "react-icons/fa";
import { SignIn } from "./SignIn";

const Login = ({setPage}) => {
  const [isSignIn, setIsSignIn] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const [name, setName] = useState("");
  const [signupEmail, setSignupEmail] = useState("");
  const [signupPassword, setSignupPassword] = useState("");
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setloginPassword] = useState("")




  return (
    <div className="h-[600px] flex items-center justify-center p-6 overflow-hidden mt-[30px]">
      <style>{`
        @keyframes slideInLeft {
          from {
            opacity: 0;
            transform: translateX(-100%);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes slideOutLeft {
          from {
            opacity: 1;
            transform: translateX(0);
          }
          to {
            opacity: 0;
            transform: translateX(-100%);
          }
        }

        @keyframes slideInRight {
          from {
            opacity: 0;
            transform: translateX(100%);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes slideOutRight {
          from {
            opacity: 1;
            transform: translateX(0);
          }
          to {
            opacity: 0;
            transform: translateX(100%);
          }
        }
      `}</style>

      <div className="w-full max-w-5x">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center relative min-h-86">
          {!isSignIn ? (
            // Sign Up View
            <>
              {/* Registration Form - Left Side */}
              <div
                style={{
                  animation: !isSignIn 
                    ? "slideInLeft 0.6s ease-out forwards" 
                    : "slideOutLeft 0.6s ease-out forwards"
                }}
                className="bg-[#2e2010] border border-[#3d2f1f] rounded-3xl shadow-2xl p-8 lg:p-10"
              >
                <h1 className="text-4xl font-bold text-[#f5ede0] mb-8">Registration</h1>

                {/* Username Input */}
                <div className="relative mb-5">
                  <input value={name}
                  onChange={(event) => setName(event.target.value)}
                    type="text"
                    
                    placeholder="Username"
                    className="w-full bg-[#1a1208] text-[#f5ede0] rounded-lg h-12 p-4 pl-12 focus:outline-none focus:ring-2 focus:ring-[#c9813a] placeholder-[#a08060]"
                  />
                  <FaUser className="absolute left-4 top-1/2 transform -translate-y-1/2 text-[#c9813a]" size={18} />
                </div>

                {/* Email Input */}
                <div className="relative mb-5">
                  <input
                  value={signupEmail}
                  onChange={(event) => setSignupEmail(event.target.value)}
                    type="email"
                    placeholder="Email"
                    className="w-full bg-[#1a1208] text-[#f5ede0] rounded-lg h-12 p-4 pl-12 focus:outline-none focus:ring-2 focus:ring-[#c9813a] placeholder-[#a08060]"
                  />
                  <MdEmail className="absolute left-4 top-1/2 transform -translate-y-1/2 text-[#c9813a]" size={18} />
                </div>

                {/* Password Input */}
                <div className="relative mb-8">
                  <input
                  value={signupPassword}
                  onChange={(event) => setSignupPassword(event.target.value)}
                    type="password"
                    placeholder="Password"
                    className="w-full bg-[#1a1208] text-[#f5ede0] rounded-lg h-12 p-4 pl-12 focus:outline-none focus:ring-2 focus:ring-[#c9813a] placeholder-[#a08060]"
                  />
                  <MdLock className="absolute left-4 top-1/2 transform -translate-y-1/2 text-[#c9813a]" size={18} />
                </div>

                {/* Register Button */}
                <button onClick={() => setPage("home")} className="w-full bg-[#c9813a] hover:bg-[#d99048] text-[#fff] font-bold py-3 rounded-lg mb-6 transition transform hover:scale-105">
                  Register
                </button>

                {/* Divider */}
                <div className="flex items-center mb-6">
                  <div className="flex-grow border-t border-[#3d2f1f]"></div>
                  <span className="px-3 text-[#a08060] text-sm font-medium">or register with social platforms</span>
                  <div className="flex-grow border-t border-[#3d2f1f]"></div>
                </div>

                {/* Social Icons */}
                <div className="flex gap-4 justify-center">
                  <button className="border-2 border-[#3d2f1f] rounded-lg p-3 hover:bg-[#3d2f1f] transition text-[#c9813a] hover:text-[#d99048]">
                    <FaGoogle size={24} />
                  </button>
                  <button className="border-2 border-[#3d2f1f] rounded-lg p-3 hover:bg-[#3d2f1f] transition text-[#c9813a] hover:text-[#d99048]">
                    <FaFacebook size={24} />
                  </button>
                  <button className="border-2 border-[#3d2f1f] rounded-lg p-3 hover:bg-[#3d2f1f] transition text-[#c9813a] hover:text-[#d99048]">
                    <FaGithub size={24} />
                  </button>
                  <button className="border-2 border-[#3d2f1f] rounded-lg p-3 hover:bg-[#3d2f1f] transition text-[#c9813a] hover:text-[#d99048]">
                    <FaLinkedin size={24} />
                  </button>
                </div>
              </div>

              {/* Welcome Panel - Right Side */}
              <div
                style={{
                  animation: !isSignIn 
                    ? "slideInRight 0.6s ease-out 0.2s forwards" 
                    : "slideOutRight 0.6s ease-out forwards",
                  opacity: 0
                }}
                className="hidden lg:flex flex-col justify-center items-center bg-gradient-to-br from-[#c9813a] to-[#a66f2e] rounded-3xl shadow-2xl p-12 min-h-96 text-center relative overflow-hidden group"
              >
                {/* Decorative corner curve */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#1a1208] rounded-full -translate-y-1/2 translate-x-1/2 opacity-10"></div>
                <div className="absolute bottom-0 left-0 w-32 h-32 bg-[#1a1208] rounded-full translate-y-1/2 -translate-x-1/2 opacity-10"></div>

                <h2 className="text-5xl font-bold text-[#1a1208] mb-4 relative z-10">Hello, Welcome!</h2>
                <p className="text-[#2e2010] text-lg mb-8 relative z-10">Already have an account?</p>
                <button
                  onClick={() => setIsSignIn(true)}
                  className="border-2 border-[#1a1208] text-[#fff] font-bold py-3 px-8 rounded-lg hover:bg-[#1a1208] hover:text-[#c9813a] transition transform hover:scale-105 relative z-10"
                >
                  Login
                </button>
              </div>
            </>
          ) : (
            // Sign In View
            <>
              {/* Welcome Panel - Left Side */}
              <div
                style={{
                  animation: isSignIn 
                    ? "slideInLeft 0.6s ease-out 0.2s forwards" 
                    : "slideOutLeft 0.6s ease-out forwards",
                  opacity: 0
                }}
                className="hidden lg:flex flex-col justify-center items-center bg-gradient-to-br from-[#c9813a] to-[#a66f2e] rounded-3xl shadow-2xl p-12 min-h-96 text-center relative overflow-hidden group order-2 lg:order-1"
              >
                {/* Decorative corner curve */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#1a1208] rounded-full -translate-y-1/2 translate-x-1/2 opacity-10"></div>
                <div className="absolute bottom-0 left-0 w-32 h-32 bg-[#1a1208] rounded-full translate-y-1/2 -translate-x-1/2 opacity-10"></div>

                <h2 className="text-5xl font-bold text-[#1a1208] mb-4 relative z-10">Hello, Welcome!</h2>
                <p className="text-[#2e2010] text-lg mb-8 relative z-10">Don't have an account?</p>
                <button
                  onClick={() => setIsSignIn(false)}
                  className="border-2 border-[#1a1208] text-[#fff] font-bold py-3 px-8 rounded-lg hover:bg-[#1a1208] hover:text-[#c9813a] transition transform hover:scale-105 relative z-10"
                >
                  Sign Up
                </button>
              </div>

              {/* Login Form - Right Side */}
              <div
                style={{
                  animation: isSignIn 
                    ? "slideInRight 0.6s ease-out forwards" 
                    : "slideOutRight 0.6s ease-out forwards"
                }}
                className="bg-[#2e2010] border border-[#3d2f1f] rounded-3xl shadow-2xl p-8 lg:p-10 order-1 lg:order-2"
              >
                <h1 className="text-4xl font-bold text-[#f5ede0] mb-8">Login</h1>

                {/* Email Input */}
                <div className="relative mb-5">
                  <input
                  value={loginEmail}
                  onChange={(event) => setLoginEmail(event.target.value)}
                    type="email"
                    placeholder="Email"
                    className="w-full bg-[#1a1208] text-[#f5ede0] rounded-lg h-12 p-4 pl-12 focus:outline-none focus:ring-2 focus:ring-[#c9813a] placeholder-[#a08060]"
                  />
                  <MdEmail className="absolute left-4 top-1/2 transform -translate-y-1/2 text-[#c9813a]" size={18} />
                </div>

                {/* Password Input */}
                <div className="relative mb-6">
                  <input
                  value={loginPassword}
                  onChange={(event) => setloginPassword(event.target.value)}
                    type="password"
                    placeholder="Password"
                    className="w-full bg-[#1a1208] text-[#f5ede0] rounded-lg h-12 p-4 pl-12 focus:outline-none focus:ring-2 focus:ring-[#c9813a] placeholder-[#a08060]"
                  />
                  <MdLock className="absolute left-4 top-1/2 transform -translate-y-1/2 text-[#c9813a]" size={18} />
                </div>

                {/* Remember Me Checkbox */}
                <div className="flex items-center mb-6">
                  <input
                    type="checkbox"
                    id="rememberMe"
                    checked={rememberMe}
                    onChange={(e) => setRememberMe(e.target.checked)}
                    className="w-4 h-4 accent-[#c9813a] bg-[#1a1208] border-2 border-[#3d2f1f] rounded cursor-pointer"
                  />
                  <label htmlFor="rememberMe" className="ml-2 text-[#a08060] text-sm cursor-pointer hover:text-[#c9813a] transition">
                    Remember me
                  </label>
                </div>

                {/* Forgot Password */}
                <div className="text-right mb-8">
                  <button className="text-[#c9813a] hover:text-[#d99048] text-sm font-medium transition">
                    Forgot Password?
                  </button>
                </div>

                {/* Login Button */}
                <button onClick={() => setPage("home")} className="w-full bg-[#c9813a] hover:bg-[#d99048] text-[#fff] font-bold py-3 rounded-lg mb-6 transition transform hover:scale-105">
                  Login
                </button>

                {/* Divider */}
                <div className="flex items-center mb-6">
                  <div className="flex-grow border-t border-[#3d2f1f]"></div>
                  <span className="px-3 text-[#a08060] text-sm font-medium">or login with social</span>
                  <div className="flex-grow border-t border-[#3d2f1f]"></div>
                </div>

                {/* Social Icons */}
                <div className="flex gap-4 justify-center">
                  <button className="border-2 border-[#3d2f1f] rounded-lg p-3 hover:bg-[#3d2f1f] transition text-[#c9813a] hover:text-[#d99048]">
                    <FaGoogle size={24} />
                  </button>
                  <button className="border-2 border-[#3d2f1f] rounded-lg p-3 hover:bg-[#3d2f1f] transition text-[#c9813a] hover:text-[#d99048]">
                    <FaFacebook size={24} />
                  </button>
                  <button className="border-2 border-[#3d2f1f] rounded-lg p-3 hover:bg-[#3d2f1f] transition text-[#c9813a] hover:text-[#d99048]">
                    <FaGithub size={24} />
                  </button>
                  <button className="border-2 border-[#3d2f1f] rounded-lg p-3 hover:bg-[#3d2f1f] transition text-[#c9813a] hover:text-[#d99048]">
                    <FaLinkedin size={24} />
                  </button>
                </div>
              </div>
            </>
          )}
        </div>

        {/* Mobile Toggle Button */}
        <div className="lg:hidden flex justify-center gap-4 mt-8">
          <button
            onClick={() => setIsSignIn(false)}
            className={`px-6 py-2 rounded-lg font-bold transition ${
              !isSignIn
                ? "bg-[#c9813a] text-[#1a1208]"
                : "bg-[#2e2010] text-[#a08060] hover:bg-[#3d2f1f]"
            }`}
          >
            Sign Up
          </button>
          <button
            onClick={() => setIsSignIn(true)}
            className={`px-6 py-2 rounded-lg font-bold transition ${
              isSignIn
                ? "bg-[#c9813a] text-[#1a1208]"
                : "bg-[#2e2010] text-[#a08060] hover:bg-[#3d2f1f]"
            }`}
          >
            Login
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
