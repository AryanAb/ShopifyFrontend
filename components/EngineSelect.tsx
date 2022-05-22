import Engine from "./Engine";

export default function EngineSelect({ selected }) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        height: "100vh",
        width: "25%",
        backgroundColor: "white",
        borderStyle: "solid",
        borderWidth: "0px 4px 0px 0px",
      }}
    >
      <Engine
        name="Curie"
        image="/images/curie.jpg"
        link={"/"}
        selected={selected == "curie"}
      />
      <Engine
        name="Da Vinci"
        image="/images/davinci.webp"
        link={"/davinci"}
        selected={selected == "davinci"}
      />
      <Engine
        name="Ada"
        image="/images/ada.jpg"
        link={"/ada"}
        selected={selected == "ada"}
      />
      <Engine
        name="Babbage"
        image="/images/babbage.jpg"
        link={"/babbage"}
        selected={selected == "babbage"}
      />
    </div>
  );
}
