export function ContainerLayout(props) {
  return (
    <div
      className="container"
      style={{
        overflow: "auto",
        position: "relative",
        marginTop: "90px",
        justifyContent: "center",
        width: "90%",
      }}
    >
      {props.children}
    </div>
  );
}
export function CardLayout(props) {
  return <div className="card">{props.children}</div>;
}
