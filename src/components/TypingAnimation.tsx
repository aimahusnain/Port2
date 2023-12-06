import TypeIt from "typeit-react";

const TypingAnimation = () => {
  return (
    <span>
      <TypeIt
        options={{
          speed: 200,
          loop: true,
          strings: ["Designer", "Developer"],
          breakLines: false,
        }}
      />
    </span>
  );
};
export default TypingAnimation;
