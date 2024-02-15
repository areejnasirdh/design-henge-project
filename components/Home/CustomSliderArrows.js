export function CustomPrevArrow(props) {
  const { className, style, onClick } = props;

  return (
    <div
      className={`${className} custom_slick_prev`}
      style={{
        ...style,
      }}
      onClick={onClick}
    />
  );
}

export function CustomNextArrow(props) {
  const { className, style, onClick } = props;

  return (
    <div
      className={`${className} custom_slick_next`}
      style={{
        ...style,
      }}
      onClick={onClick}
    />
  );
}
