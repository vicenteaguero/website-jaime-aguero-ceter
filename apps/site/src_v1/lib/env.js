export const ENV = {
  isChatEnabled: import.meta.env.VITE_FEATURE_CHAT === "true",
  chatEndpoint: import.meta.env.VITE_CHAT_ENDPOINT || "/api/chat"
};
