import { motion } from "framer-motion";

const ReusableButton = ({
  children,
  handleMouseMove,
  btnRef,
  buttonText,
  additionalClasses,
  onClick,
}) => {
  return (
    <motion.button
      initial={{ y: 200, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{
        duration: 0.5,
        delay: 0.6,
      }}
      onMouseMove={handleMouseMove}
      ref={btnRef}
      className={`btn rounded-none hover:text-black bg-[FD022C] md:text-[14px] lg:text-[16px] xl:text-[18px] text-white border border-black w-max px-6 py-[0.6rem] lg:px-5 lg:py-[16px] shadow-[10px_9px_0px_1px_#111] ${additionalClasses}`}
      onClick={onClick}
    >
      <span>{buttonText || children}</span>
    </motion.button>
  );
};

export default ReusableButton;
