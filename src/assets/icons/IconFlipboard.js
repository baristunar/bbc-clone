const IconFlipboard = ({ width, height, color, className }) => {
  return (
    <svg
      height={height}
      width={width}
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 448 512"
    >
      <path
        color={color}
        d="M0 32v448h448V32H0zm358.4 179.2h-89.6v89.6h-89.6v89.6H89.6V121.6h268.8v89.6z"
      />
    </svg>
  );
};

export default IconFlipboard;
