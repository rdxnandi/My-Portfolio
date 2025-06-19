import { Loader2 } from "lucide-react";

function SendButton({ sent, disabled, loading }) {
  return (
    <button
      type="submit"
      disabled={disabled || loading}
      className="p-2 rounded-lg tracking-wider text-orange-400 ml-auto cursor-pointer text-xl"
    >
      {loading ? (
        <div className="flex items-center gap-2">
          <Loader2 className="size-5 animate-spin" />
          Sending...
        </div>
      ) : sent ? (
        "Sent!"
      ) : (
        "Send"
      )}
    </button>
  );
}

export default SendButton;
