import TypeIt from "typeit-react";

const TypingAnimation = () => {
  return (
    <span>
      <TypeIt
        options={{
          speed: 150,
          loop: true,
          strings: ["Designing", "Development"],
          breakLines: false,
        }}
      />
    </span>
  );
};
export default TypingAnimation;
