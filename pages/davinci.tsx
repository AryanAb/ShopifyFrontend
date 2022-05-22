import EngineSelect from "../components/EngineSelect";
import Chat from "../components/Chat";

export default function Home() {
  return (
    <div style={{ display: "flex", width: "100wh" }}>
      <EngineSelect selected={"davinci"} />
      <Chat engine="text-davinci-002" />
    </div>
  );
}
