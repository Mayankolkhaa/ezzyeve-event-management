import React, { useState } from "react";
import axios from "axios";

const AIChatbot = () => {

  // USER INPUT
  const [message, setMessage] = useState("");

  // CHAT HISTORY
  const [chat, setChat] = useState([]);

  // LOADING
  const [loading, setLoading] = useState(false);

  // SEND MESSAGE FUNCTION
  const sendMessage = async () => {

    if (!message.trim()) return;

    // USER MESSAGE OBJECT
    const userMessage = {
      role: "user",
      content: message,
    };

    // ADD USER MESSAGE TO CHAT
    setChat((prev) => [...prev, userMessage]);

    // START LOADING
    setLoading(true);

    try {

      // SEND TO BACKEND
      const response = await axios.post(
        "http://localhost:5000/chat",
        {
          message,
        }
      );

      // AI RESPONSE
      const aiMessage = {
        role: "ai",
        content: response.data.reply,
      };

      // ADD AI MESSAGE
      setChat((prev) => [...prev, aiMessage]);

    } catch (error) {

      console.log(error);

    }

    // STOP LOADING
    setLoading(false);

    // CLEAR INPUT
    setMessage("");
  };

  return (

    <div className="h-full bg-[#FBF6EE] p-5 text-[#2C1A10]">

      {/* TITLE */}
      <h2 className="text-4xl font-serif font-semibold">
        Ezzy AI
      </h2>

      {/* CHAT BOX */}
      <div className="mt-8 height:520px; overflow-y-auto space-y-4 bg-white/10 rounded-3xl p-6">

        {/* CHAT MESSAGES */}
        {chat.map((msg, index) => (

          <div
            key={index}
            className={`flex ${
              msg.role === "user"
                ? "justify-end"
                : "justify-start"
            }`}
          >

            <div
              className={`max-w-[80%] px-5 py-4 rounded-3xl ${
                msg.role === "user"
                  ? "bg-white text-black"
                  : "bg-[#F6D08A] text-black"
              }`}
            >

              {msg.content}

            </div>

          </div>

        ))}

        {/* LOADING */}
        {loading && (

          <div className="bg-white/10 px-5 py-4 rounded-3xl w-fit animate-pulse">

            Ezzy AI is typing...

          </div>

        )}

      </div>

      {/* INPUT AREA */}
      <div className="flex gap-4 mt-6">

        <input
          type="text"
          placeholder="Ask Ezzy AI..."
          value={message}
          onChange={(e) =>
            setMessage(e.target.value)
          }
          className="flex-1 px-5 py-4 rounded-2xl bg-white text-black outline-none"
        />

        <button
          onClick={sendMessage}
          className="bg-[#F6D08A] text-black px-8 py-4 rounded-2xl font-semibold"
        >

          Send

        </button>

      </div>

    </div>

  );
};

export default AIChatbot;