import { Player } from "@lottiefiles/react-lottie-player";
import order from "@/public/order.json";
import { motion } from "framer-motion";

export default function OrderAnimation() {
  return (
    <div className="flex items-center justify-center flex-col my-4 px-2  ">
      <Player autoplay loop src={order}></Player>
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="text-[1.5rem]"
      >
        Prepping your order ✨
      </motion.h1>
    </div>
  );
}
