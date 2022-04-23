export function ContainerLayout(props) {
  return (
    <div
      className="container"
      style={{
        maxWidth: "1200px",
        overflow: "auto",
        position: "relative",
        marginTop: "30px",
        justifyContent: "center",
        width: "90%",
      }}
    >
      {props.children}
    </div>
  );
}
export function CardLayout(props) {
  return (
    <div
      key={props}
      className="card"
      style={{
        width: "30%",
        backgroundColor: "#3e2c41",
        display: "flex",
        color: "white",
        border: "none",
        margin: "20px",
        borderRadius: "20px",
      }}
    >
      {props.children}
    </div>
  );
}
