import { Player } from "@lottiefiles/react-lottie-player";
import login from "@/public/login.json";
import { motion } from "framer-motion";

export default function LoginAnimation() {
  return (
    <div className="flex items-center justify-center flex-col my-4 px-2  ">
      <Player autoplay loop src={login}></Player>
    </div>
  );
}
