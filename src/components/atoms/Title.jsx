export const Title = (props) => {
  const { children } = props;
  return (
    <div className="p-2 text-2xl font-Playfair italic text-gray-500">
      {children}
    </div>
  );
};
