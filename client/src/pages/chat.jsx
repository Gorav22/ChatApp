import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  FaSignOutAlt,
  FaUserCircle,
  FaPaperPlane,
} from "react-icons/fa";
import "./chatDashboard.css";

const ChatDashboard = () => {
  const navigate = useNavigate();

  const [users, setUsers] = useState([
    { id: 1, name: "Aaryan", online: true },
    { id: 2, name: "Neha", online: false },
    { id: 3, name: "Rohit", online: true },
    { id: 4, name: "Kriti", online: false },
  ]);

  const [selectedUser, setSelectedUser] = useState(null);
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");

  const handleSend = () => {
    if (newMessage.trim() && selectedUser) {
      setMessages([
        ...messages,
        { sender: "You", text: newMessage, userId: selectedUser.id },
      ]);
      setNewMessage("");
    }
  };

  const handleLogout = () => {
    // You can clear tokens or auth state here if needed
    navigate("/login");
  };

  const filteredMessages = selectedUser
    ? messages.filter((msg) => msg.userId === selectedUser.id)
    : [];

  return (
    <div className="chat-dashboard">
      {/* Sidebar */}
      <aside className="sidebar">
        <h2 className="app-title">💬 ChatHub</h2>
        <ul className="user-list">
          {users.map((user) => (
            <li
              key={user.id}
              className={`user-item ${
                selectedUser?.id === user.id ? "active" : ""
              }`}
              onClick={() => setSelectedUser(user)}
            >
              <FaUserCircle className="user-icon" />
              <span className="user-name">{user.name}</span>
              <span
                className={`status-dot ${user.online ? "online" : "offline"}`}
              />
            </li>
          ))}
        </ul>
        <button className="logout-btn" onClick={handleLogout}>
          <FaSignOutAlt className="mr-2" /> Logout
        </button>
      </aside>

      {/* Chat Section */}
      <main className="chat-section">
        {selectedUser ? (
          <>
            {/* Chat Header */}
            <div className="chat-header">
              <h3 className="chat-user">{selectedUser.name}</h3>
              <span
                className={`status ${
                  selectedUser.online ? "online" : "offline"
                }`}
              >
                {selectedUser.online ? "Online" : "Offline"}
              </span>
            </div>

            {/* Chat Messages */}
            <div className="chat-messages">
              {filteredMessages.map((msg, idx) => (
                <div
                  key={idx}
                  className={`chat-bubble ${
                    msg.sender === "You" ? "sent" : "received"
                  }`}
                >
                  {msg.text}
                </div>
              ))}
              {filteredMessages.length === 0 && (
                <p className="no-messages">✨ No messages yet. Start chatting!</p>
              )}
            </div>

            {/* Input Box */}
            <div className="chat-input">
              <input
                type="text"
                placeholder={`Message ${selectedUser.name}...`}
                value={newMessage}
                onChange={(e) => setNewMessage(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleSend()}
              />
              <button onClick={handleSend}>
                <FaPaperPlane />
              </button>
            </div>
          </>
        ) : (
          <div className="no-chat">
            <h2>👋 Select a user to start chatting</h2>
          </div>
        )}
      </main>
    </div>
  );
};

export default ChatDashboard;
