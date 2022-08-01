const Container = ({ children, className }) => {
  return (
    <div className={`px-2 lg:container lg:px-0 ${className}`}>{children}</div>
  );
};

export default Container;
