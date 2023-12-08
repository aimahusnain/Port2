import { ReactNode, useContext } from "react";
import { AlexioContext } from "../Context";
import ContactShort from "./ContactShort";
import TypingAnimation from "./TypingAnimation";
import Image from "next/image";

const AboutUsLayout = ({
  extraClass,
  name,
  children,
}) => {
  const { nav, changeNav } = useContext(AlexioContext);
  const activePageClass = (name: any) => (name === nav ? "" : "page--inactive");
  return (
    <div
      className={`page ${extraClass} bg-darkness ml-0 gap-0  ${activePageClass(name)}`}
      id={name}
      onClick={() => changeNav(name, false)}
    >
      <div className="container-fluid m-ml-0 gap-0 p-0">
        <div className="row no-gutters full-screen">
        {children}
          
        </div>
      </div>
    </div>
  );
};
export default AboutUsLayout;
