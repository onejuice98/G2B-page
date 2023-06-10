/** @jsxImportSource @emotion/react */
interface IGrid {
  children: React.ReactNode;
}
const Grid = ({ children }: IGrid) => {
  return (
    <div
      css={{
        display: "grid",
        gridTemplateColumns: "3fr 2fr",
        width: "100%",
        gap: "1.5rem",
      }}
    >
      {" "}
      {children}{" "}
    </div>
  );
};
export default Grid;
