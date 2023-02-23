import { memo } from "react";

export const MenuButton = memo((props) => {
  const { isOpen, onClick } = props;
  return (
    <button className="mr-10 z-20  " onClick={onClick}>
      <div
        className={
          isOpen
            ? `w-8 h-1 bg-gray-300 mb-2  rotate-45 translate-y-3 menuAnime`
            : `w-8 h-1 mb-2 bg-gray-500 menuAnime`
        }
      />
      <div
        className={
          isOpen
            ? `opacity-0 mb-2 h-1 bg-gray-300 menuAnime`
            : `w-8 h-1 mb-2 bg-gray-500 menuAnime`
        }
      />
      <div
        className={
          isOpen
            ? `w-8 h-1 bg-gray-300  -rotate-45 -translate-y-3 menuAnime`
            : `w-8 h-1  bg-gray-500 menuAnime`
        }
      />
    </button>
  );
});
