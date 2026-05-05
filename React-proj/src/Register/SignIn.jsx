import { useState } from "react";
import { FaGoogle, FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";
import { MdEmail, MdLock } from "react-icons/md";

export const SignIn = ({ onToggle }) => {
  const [rememberMe, setRememberMe] = useState(false);
  return (
    <div className="bg-[#2e2010] border border-[#3d2f1f] rounded-3xl shadow-2xl p-8 lg:p-10">
      <h1 className="text-4xl font-bold text-[#f5ede0] mb-8">Login</h1>

      {/* Email Input */}
      <div className="relative mb-5">
        <input
          type="email"
          placeholder="Email"
          className="w-full bg-[#1a1208] text-[#f5ede0] rounded-lg h-12 p-4 pl-12 focus:outline-none focus:ring-2 focus:ring-[#c9813a] placeholder-[#a08060]"
        />
        <MdEmail className="absolute left-4 top-1/2 transform -translate-y-1/2 text-[#c9813a]" size={18} />
      </div>

      {/* Password Input */}
      <div className="relative mb-6">
        <input
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
      <button className="w-full bg-[#c9813a] hover:bg-[#d99048] text-[#1a1208] font-bold py-3 rounded-lg mb-6 transition transform hover:scale-105">
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
        <button className="border-2 border-[#3d2f1f] rounded-lg p-3 hover:bg-[#3d2f1f] transition">
          <FaGoogle size={24} className="text-[#c9813a]" />
        </button>
        <button className="border-2 border-[#3d2f1f] rounded-lg p-3 hover:bg-[#3d2f1f] transition">
          <FaFacebook size={24} className="text-[#c9813a]" />
        </button>
        <button className="border-2 border-[#3d2f1f] rounded-lg p-3 hover:bg-[#3d2f1f] transition">
          <FaGithub size={24} className="text-[#c9813a]" />
        </button>
        <button className="border-2 border-[#3d2f1f] rounded-lg p-3 hover:bg-[#3d2f1f] transition">
          <FaLinkedin size={24} className="text-[#c9813a]" />
        </button>
      </div>

      {/* Sign Up Link */}
      {onToggle && (
        <div className="mt-6 text-center">
          <span className="text-[#a08060] text-sm">Don't have an account? </span>
          <button
            onClick={onToggle}
            className="text-[#c9813a] hover:text-[#d99048] font-bold text-sm transition"
          >
            Sign Up
          </button>
        </div>
      )}
    </div>
  );
};
