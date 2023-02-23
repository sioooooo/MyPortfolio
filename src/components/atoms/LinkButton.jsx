import { memo } from "react";
import { useNavigate } from "react-router-dom";

export const LinkButton = memo((props) => {
  const { link, children } = props;
  const navigate = useNavigate();
  const onClick = () => {
    navigate(link);
  };
  return (
    <button
      onClick={onClick}
      className="bg-gray-800 text-white border py-2 px-6 text-base rounded duration-300 shadow-md
       hover:text-gray-800 hover:bg-white"
    >
      {children}
    </button>
  );
});
