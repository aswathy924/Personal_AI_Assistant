import { useState } from "react";
import axios from "axios";

export default function SendMessage() {
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [response, setResponse] = useState(null);

  const sendMessage = async () => {
    try {
      const res = await axios.post("http://127.0.0.1:8000/whatsapp/send-message/", {
        phone,
        message,
      });
      setResponse(res.data);
    } catch (error) {
      setResponse(error.response ? error.response.data : "Error sending message");
    }
  };

  return (
    <div className="container">
      <h2>Send WhatsApp Message</h2>
      <input
        type="text"
        placeholder="Phone Number"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
      />
      <input
        type="text"
        placeholder="Message"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
      <button onClick={sendMessage}>Send</button>
      {response && <p>{JSON.stringify(response)}</p>}
    </div>
  );
}
