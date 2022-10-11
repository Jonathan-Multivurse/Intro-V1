const HEIGHT = "120px";
const WIDTH = "120px";

export default function ServiceImage({ source, borderoutline }) {
  return (
    <img
      style={{
        border: borderoutline,
        borderRadius: "16px",
        objectFit: 'cover',
        padding: "3px",
      }}
      src={source}
      width={WIDTH}
      height={HEIGHT}
      alt="service"
    />
  );
}
