"use client";
import { motion } from "framer-motion";
import styles from "../styles/Index";
import { navVariants } from "../utils/motion";
import { FiSearch } from "react-icons/fi";
import { HiOutlineBars3CenterLeft } from "react-icons/hi2";
const Navbar = () => {
	return (
		<motion.nav
			variants={navVariants}
			initial="hidden"
			whileInView={"show"}
			className={`${styles.xPaddings} py-8 relative`}>
			<div className="absolute w-[50%] inset-0 gradient-01" />
			<div
				className={`${styles.innerWidth} mx-auto flex justify-between gap-8
				`}>
				<FiSearch className="cursor-pointer text-4xl p-[4px] object-contain  text-white" />
				<h2 className="font-extrabold text-[24px] leading-[30px] text-white">
					MetaVersus
				</h2>
				<HiOutlineBars3CenterLeft className="cursor-pointer text-4xl p-[4px] object-contain  text-white" />
			</div>
		</motion.nav>
	);
};

export default Navbar;
