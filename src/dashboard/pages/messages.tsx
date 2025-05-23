import React, { useState } from 'react';

function Messages() {
  // Sample messages data
  const [messages, setMessages] = useState([
    { id: 1, sender: 'Jane Doe', subject: 'Meeting Reminder', body: 'Don\'t forget our meeting tomorrow at 10 AM.' },
    { id: 2, sender: 'John Smith', subject: 'Event Update', body: 'The community event is rescheduled to next weekend.' },
    { id: 3, sender: 'Emily Johnson', subject: 'New Policies', body: 'Please review the updated daycare policies for next month.' },
    { id: 4, sender: 'Michael Brown', subject: 'Vacation Schedule', body: 'I will be on vacation from the 15th to the 20th of next month.' },
    { id: 5, sender: 'Sarah Lee', subject: 'School Supplies Drive', body: 'We are collecting school supplies for underprivileged students.' },
    { id: 6, sender: 'David Turner', subject: 'Holiday Hours', body: 'Our office will be closed for the holidays from December 24th to January 2nd.' },
    // Add more mock messages if needed
  ]);

  // Function to delete a message
  const handleDeleteMessage = (id: number) => {
    setMessages(messages.filter((message) => message.id !== id));
  };

  // Function to clear all messages
  const handleClearMessages = () => {
    setMessages([]);
  };

  return (
    <section className="px-6 py-10 max-w-6xl mx-auto mt-17">
      <header className="text-center mb-12">
        <h1 className="text-3xl sm:text-4xl font-bold text-[#8F36FF]">Messages</h1>
        <p className="text-lg text-gray-600 mt-2">View and manage your messages.</p>
      </header>

      {/* Message Management */}
      <div className="space-y-6">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-semibold text-[#8F36FF]">Inbox</h2>
          <button
            onClick={handleClearMessages}
            className="px-4 py-2 bg-red-500 text-white rounded-full font-medium hover:bg-red-600 transition"
          >
            Clear All Messages
          </button>
        </div>

        {/* Display Messages with scrollable container */}
        {messages.length > 0 ? (
          <div
            className="space-y-4 max-h-[400px] overflow-auto"
          >
            {messages.map((message) => (
              <div
                key={message.id}
                className="border border-gray-300 rounded-2xl overflow-hidden p-6 shadow-sm hover:shadow-md transition duration-300"
              >
                <h3 className="text-xl font-semibold text-[#8F36FF]">{message.subject}</h3>
                <p className="mt-2 text-gray-700">
                  <strong>From:</strong> {message.sender}
                </p>
                <p className="mt-2 text-gray-600">{message.body}</p>

                <div className="mt-4 flex justify-between">
                  <button
                    onClick={() => handleDeleteMessage(message.id)}
                    className="px-6 py-2 bg-red-500 text-white rounded-full font-medium hover:bg-red-700 transition"
                  >
                    Delete Message
                  </button>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-center text-gray-600">No messages available.</p>
        )}
      </div>
    </section>
  );
}

export default Messages;
