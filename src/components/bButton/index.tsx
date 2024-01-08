import { AlexioContext } from '@/src/Context';
import { Undo2 } from 'lucide-react'
import { useContext } from 'react'
import * as React from "react";

// Add this type definition before your BButton component
type BButtonProps = {};

const BButton: React.FC<BButtonProps> = () => {
  const { changeNav, toggle, nav } = useContext(AlexioContext);

  return (
    <>
      {nav === "home" ? (
          <div>
            {/* Add your code for the other button or leave it empty */}
          </div>
      ) : (
        <div
          onClick={() => changeNav("home", false)}
          className="fixed top-0 mt-20 ml-7 left-0 rounded-full cursor-pointer bg-black items-center justify-center flex p-2 sm:hidden visible outline"
        >
          <Undo2 className="text-white" />
        </div>
      )}
    </>
  );
};

export default BButton;
