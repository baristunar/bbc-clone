import icons from '../assets/icons';

const Icon = ({
  width = 10,
  height = 10,
  color = 'white',
  icon,
  className,
  style
}) => {
  const IconComponent = icons[icon];
  return (
    <IconComponent
      width={width}
      height={height}
      className={className}
      style={style}
      color={color}
    />
  );
};

export default Icon;
