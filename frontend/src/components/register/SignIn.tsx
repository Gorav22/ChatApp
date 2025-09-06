import React, { useState, useEffect, Dispatch } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import chat from "../../assets/chat.jpg"; // adjust path
import { TOKEN } from "../../config/Config";
import { currentUser, loginUser } from "../../redux/auth/AuthAction";
import { RootState } from "../../redux/Store";
import { AuthReducerState, LoginRequestDTO } from "../../redux/auth/AuthModel";
import { Button, TextField } from "@mui/material";

const SignIn = () => {
  const [signInData, setSignInData] = useState<LoginRequestDTO>({
    email: "",
    password: "",
  });

  const navigate = useNavigate();
  const dispatch: Dispatch<any> = useDispatch();
  const token: string | null = localStorage.getItem(TOKEN);
  const state: AuthReducerState = useSelector((state: RootState) => state.auth);

  useEffect(() => {
    if (token) {
      dispatch(currentUser(token));
    }
  }, [token, state.reqUser, dispatch]);

  useEffect(() => {
    if (state.reqUser) {
      navigate("/");
    }
  }, [state, navigate]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSignInData({ ...signInData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    dispatch(loginUser(signInData));
  };

  return (
    <div className="min-h-screen flex">
      {/* Left Side - Form */}
      <div className="w-full md:w-1/2 flex items-center justify-center bg-gradient-to-br from-gray-900 to-black">
        <div className="bg-gray-800 p-10 rounded-2xl shadow-2xl w-full max-w-md">
          <h2 className="text-3xl font-extrabold text-center text-indigo-400 mb-6">
            Welcome Back!
          </h2>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <TextField
                fullWidth
                id="email"
                type="email"
                label="Enter your email"
                variant="outlined"
                name="email"
                value={signInData.email}
                onChange={handleChange}
                InputLabelProps={{ style: { color: "#9CA3AF" } }}
                InputProps={{
                  style: { color: "white", backgroundColor: "#374151" },
                }}
              />
            </div>

            <div>
              <TextField
                fullWidth
                id="password"
                type="password"
                label="Enter your password"
                variant="outlined"
                name="password"
                value={signInData.password}
                onChange={handleChange}
                InputLabelProps={{ style: { color: "#9CA3AF" } }}
                InputProps={{
                  style: { color: "white", backgroundColor: "#374151" },
                }}
              />
            </div>

            <Button
              fullWidth
              variant="contained"
              size="large"
              type="submit"
              style={{ backgroundColor: "#6366F1" }}
            >
              Sign in
            </Button>
          </form>

          <p className="text-center text-gray-400 text-sm mt-6">
            Don’t have an account?{" "}
            <span
              onClick={() => navigate("/signup")}
              className="text-indigo-400 hover:underline cursor-pointer"
            >
              Sign Up
            </span>
          </p>
        </div>
      </div>

      {/* Right Side - Image */}
      <div className="hidden md:flex w-1/2 relative">
        <img
          src={chat}
          alt="Chat Illustration"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-70 flex flex-col items-center justify-center p-10">
          <h1 className="text-4xl font-bold text-indigo-400 mb-4 text-center">
            Chat Anytime, Anywhere.
          </h1>
          <p className="text-gray-300 text-lg text-center max-w-md">
            Stay connected with your friends and community. Log in to continue
            your conversations!
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
