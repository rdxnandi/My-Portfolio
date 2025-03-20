import React, { useState } from "react";

function SendButton({ sent, disabled, loading }) {
  return (
    <button
      type="submit"
      disabled={disabled || loading}
      className="p-2 rounded-lg tracking-wider text-orange-400 ml-auto cursor-pointer text-xl"
    >
      {loading ? "Sending..." : sent ? "Sent!" : "Send"}
    </button>
  );
}

export default SendButton;
