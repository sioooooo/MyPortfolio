import { memo } from "react";

export const Text = memo((props) => {
  const { children } = props;
  return (
    <div className="font-serif tracking-wide py-2">
      <p className="text-base">{children}</p>
    </div>
  );
});
