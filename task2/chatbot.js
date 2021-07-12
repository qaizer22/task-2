window.watsonAssistantChatOptions = {
  integrationID: "a7d2ac5d-95a5-47d1-ab63-a931ff8edf8f", // The ID of this integration.
  region: "us-south", // The region your integration is hosted in.
  serviceInstanceID: "98ba990f-9761-4e22-8078-2e9cc568b7e6", // The ID of your service instance.
  onLoad: function (instance) {
    instance.render();
  },
};
setTimeout(function () {
  const t = document.createElement("script");
  t.src =
    "https://web-chat.global.assistant.watson.appdomain.cloud/loadWatsonAssistantChat.js";
  document.head.appendChild(t);
});
