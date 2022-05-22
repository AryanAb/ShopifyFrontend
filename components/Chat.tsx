import { useState } from "react";
import axios from "axios";

export default function Chat({ engine }) {
  const [prompt, setPrompt] = useState("");
  const [temp, setTemp] = useState(5);
  const [topp, setTopp] = useState(10);
  const [freqPen, setFreqPen] = useState(0);
  const [presPen, setPresPen] = useState(0);
  const [messages, setMessages] = useState([]);

  async function onEnterPress(e) {
    if (e.key == "Enter") {
      e.preventDefault();
      const response = await axios.post("/api/send-prompt", {
        engine: engine,
        data: {
          prompt: prompt,
          temperature: temp / 10,
          max_tokens: 64,
          top_p: topp / 10,
          frequency_penalty: freqPen / 10,
          presence_penalty: presPen / 10,
        },
      });
      setMessages([
        { sender: "OpenAI", content: response.data.choices[0].text },
        { sender: "Me", content: prompt },
        ...messages,
      ]);
      setPrompt("");
    }
  }

  return (
    <div style={{ display: "flex", width: "75%" }}>
      <div
        style={{
          display: "flex",
          flexDirection: "column-reverse",
          height: "100vh",
          width: "57%",
          backgroundColor: "rgba(125, 125, 125, 0.15)",
        }}
      >
        <textarea
          style={{
            justifySelf: "center",
            resize: "none",
            width: "100%",
            height: "15%",
            fontSize: 18,
          }}
          placeholder="Type Prompt and Press Enter"
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          onKeyDown={onEnterPress}
        />
        {messages.map((message) => {
          if (message.sender == "Me") {
            return (
              <div
                style={{
                  marginTop: 10,
                  marginBottom: 10,
                  background:
                    "linear-gradient(to top, rgba(2,0,36,1) 0%, rgba(148,255,126,1) 0%, rgba(126,255,199,1) 100%)",
                  marginLeft: "35%",
                  marginRight: "1%",
                  borderRadius: "10px 10px 0px 10px",
                }}
              >
                <p style={{ paddingLeft: 10 }}>{message.content}</p>
              </div>
            );
          } else {
            return (
              <div
                style={{
                  marginTop: 10,
                  marginBottom: 10,
                  backgroundImage:
                    "linear-gradient(to top, rgba(2,0,36,1) 0%, rgba(126,243,255,1) 0%, rgba(126,172,255,1) 100%)",
                  marginRight: "35% ",
                  marginLeft: "1% ",
                  borderRadius: "0px 10px 10px 10px",
                }}
              >
                <p style={{ paddingLeft: 10 }}>{message.content}</p>
              </div>
            );
          }
        })}
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          height: "100vh",
          width: "43%",
          borderStyle: "solid",
          borderWidth: "0px 0px 0px 4px",
        }}
      >
        <h3 style={{ alignSelf: "center" }}>Parameters</h3>
        <div style={{ marginLeft: 10, marginBottom: 10 }}>
          <h4>Temperature</h4>
          <p>{temp / 10}</p>
          <input
            type="range"
            min="0"
            max="10"
            value={temp}
            onChange={(e) => setTemp(parseInt(e.target.value))}
          />
        </div>
        <div style={{ marginLeft: 10, marginBottom: 10 }}>
          <h4>Top P</h4>
          <p>{topp / 10}</p>
          <input
            type="range"
            min="0"
            max="10"
            value={topp}
            onChange={(e) => setTopp(parseInt(e.target.value))}
          />
        </div>
        <div style={{ marginLeft: 10, marginBottom: 10 }}>
          <h4>Frequency Penalty</h4>
          <p>{freqPen / 10}</p>
          <input
            type="range"
            min="0"
            max="10"
            value={freqPen}
            onChange={(e) => setFreqPen(parseInt(e.target.value))}
          />
        </div>
        <div style={{ marginLeft: 10, marginBottom: 10 }}>
          <h4>Presence Penalty</h4>
          <p>{presPen / 10}</p>
          <input
            type="range"
            min="0"
            max="10"
            value={presPen}
            onChange={(e) => setPresPen(parseInt(e.target.value))}
          />
        </div>
      </div>
    </div>
  );
}
