import * as React from "react";
import { useRef } from "react";

import { motion, useCycle } from "framer-motion";

import { menu } from "./Menu";
import { useDimensions } from "./useDimensions";

const Path = (props: any) => (
  <motion.path
    fill="transparent"
    strokeWidth="2"
    stroke="black"
    strokeLinecap="round"
    {...props}
  />
);

const sidebar = {
  open: (height = 1000) => ({
    clipPath: `circle(${height * 2 + 200}px at calc(100% - 40px) 40px)`,
    transition: {
      type: "spring",
      stiffness: 20,
      restDelta: 2,
    },
  }),
  closed: {
    clipPath: "circle(20px at calc(100% - 40px) 47px)",
    transition: {
      delay: 0.5,
      type: "spring",
      stiffness: 400,
      damping: 40,
    },
  },
};


export function MenuExpanded() {
  const [isOpen, toggleOpen] = useCycle(false, true);
  const containerRef = useRef(null);
  const { height } = useDimensions(containerRef);

  function openMenu() {
    isOpen
      ? document.body.classList.remove("menu-expanded")
      : document.body.classList.add("menu-expanded");
  }

  return (
    <motion.nav
      initial={false}
      animate={isOpen ? "open" : "closed"}
      custom={height}
      ref={containerRef}
      className="pc:hidden"
    >
      <motion.div
        className="fixed inset-0 bg-white max-h-screen"
        variants={sidebar}
      />

      <Navigation />

      <MenuToggle openMenu={openMenu} toggle={() => toggleOpen()} />
    </motion.nav>
  );
}

interface MenuToggleProps {
  toggle: () => void;
  openMenu: () => void;
}

function MenuToggle({ toggle, openMenu }: MenuToggleProps) {
  function handleCLick() {
    toggle();
    openMenu();
  }

  return (
    <button
      className="fixed outline-none border-none cursor-pointer top-[38px] right-[22.5px] bg-transparent rounded-full ml-3 pb-1"
      onClick={handleCLick}
    >
      <svg width="30" height="30" viewBox="-1.5 1 30 30">
        <Path
          variants={{
            closed: { d: "M 2 2.5 L 20 2.5" },
            open: { d: "M 3 16.5 L 17 2.5" },
          }}
        />
        <Path
          d="M 2 9.423 L 20 9.423"
          variants={{
            closed: { opacity: 1 },
            open: { opacity: 0 },
          }}
          transition={{ duration: 0.1 }}
        />
        <Path
          variants={{
            closed: { d: "M 2 16.346 L 20 16.346" },
            open: { d: "M 3 2.5 L 17 16.346" },
          }}
        />
      </svg>
    </button>
  );
}

export function Navigation() {
  const variants = {
    open: {
      transition: { staggerChildren: 0.07, delayChildren: 0.2 },
    },
    closed: {
      transition: { staggerChildren: 0.05, staggerDirection: -1 },
    },
  };

  return (
    <div>
      <motion.ul className="top-24 left-8 fixed" variants={variants}>
        {menu.map((i) => (
          <MenuItem i={i} key={i.name} />
        ))}
      </motion.ul>
    </div>
  );
}

const MenuItem = ({ i }: any) => {
  const variants = {
    open: {
      y: 0,
      opacity: 1,
      transition: {
        y: { stiffness: 1000, velocity: -100 },
      },
      display: "flex",
    },
    closed: {
      y: 50,
      opacity: 0,
      transition: {
        y: { stiffness: 1000 },
      },
      transitionEnd: {
        display: "none",
      },
    },
  };

  return (
    <motion.li
      variants={variants}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
    >
      <a href={i.href}>
        <h3 className="flex text-lg items-center cursor-pointer mb-6 text-black font-semibold tracking-wider z-10">
          {i.name}
        </h3>
      </a>
    </motion.li>
  );
};
