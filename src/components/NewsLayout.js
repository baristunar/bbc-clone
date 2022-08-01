const NewsLayout = ({ children, className }) => {
  return (
    <div
      className={`grid grid-cols-1 gap-2 md:grid-cols-2 lg:grid-cols-3 ${className}`}
    >
      {children}
    </div>
  );
};

export default NewsLayout;
