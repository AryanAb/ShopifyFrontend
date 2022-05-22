import EngineSelect from "../components/EngineSelect";
import Chat from "../components/Chat";

export default function Home() {
  return (
    <div style={{ display: "flex", width: "100wh" }}>
      <EngineSelect selected={"babbage"} />
      <Chat engine="text-babbage-001" />
    </div>
  );
}
