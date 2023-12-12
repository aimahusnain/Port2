import { useContext } from "react";
import { AlexioContext } from "../Context";

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
      <div className="p-0">
      <div className="flex sm:flex-row flex-col  !mx-0 h-full">
        {children}
        </div>
      </div>
    </div>
  );
};
export default AboutUsLayout;
