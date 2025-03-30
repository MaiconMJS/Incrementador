import ButtonProps from "@/props/ButtonProps";
import DisplayProps from "@/props/DisplayProps";

const Display: React.FC<DisplayProps> = ({ n1, n2 }) => {
  return (
    <section className="text-white flex space-x-35 space-y-3">
      <h1 className="text-9xl font-semibold text-blue-600/100 dark:text-blue-500/100">
        N1: {n1}
      </h1>
      <h1 className="text-9xl font-semibold text-blue-600/100 dark:text-blue-500/100">
        N2: {n2}
      </h1>
    </section>
  );
};

const ButtonStyle: React.FC<ButtonProps> = ({
  text,
  isPressed,
  onClick,
  style,
}) => {
  return (
    <button
      onClick={onClick}
      className={`transition-transform duration-150} ${
        isPressed ? "scale-90" : "scale-100"
      } ${style}`}
    >
      {text}
    </button>
  );
};

export { Display, ButtonStyle };
