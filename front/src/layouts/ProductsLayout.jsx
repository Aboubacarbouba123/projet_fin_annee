import React from "react";
import Dashboard from "./Dashboard";
import { NavLink } from "react-router-dom";
import { motion as m } from "framer-motion";

const ProductsLayout = ({ children, isOpen }) => {
  return (
    <Dashboard>
      <div className={`flex flex-col h-full  ${isOpen? 'overflow-none': 'overflow-hidden'}`}>
        <div className="flex flex-rows justify-between py-2 w-full h-8 items-center">
          <NavLink
            to={"/grume"}
            className="grume  w-1/3  flex justify-center hover:bg-gray-100 focus:bg-gray-100 dark:hover:bg-gray-700 dark:focus:bg-gray-700"
          >
            <p>Grume</p>
          </NavLink>
          <NavLink
            to={"/entree"}
            className="produit w-1/3 flex justify-center hover:bg-gray-100 focus:bg-gray-100 dark:hover:bg-gray-700 dark:focus:bg-gray-700"
          >
            <p>Entree</p>
          </NavLink>
          <NavLink
            to={"/debite"}
            className="debite w-1/3 flex justify-center hover:bg-gray-100 focus:bg-gray-100 dark:hover:bg-gray-700 dark:focus:bg-gray-700 "
          >
            <p>Debité</p>
          </NavLink>
        </div>
        <m.div
          initial={{   opacity: 0}}
          animate={{  opacity: 1 }}
          exit={{ opacity: 0, duration: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="px-10 h-full "
        >
          {children}
        </m.div>
      </div>
    </Dashboard>
  );
};

export default ProductsLayout;
