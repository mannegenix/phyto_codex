export const services = {
  enquiries: { sales: "sales@phytoelements.in", samples: "samples@phytoelements.in", maxMessageChars: 4000 },
  chatbot: { maxMessageChars: 2000, maxOutputTokens: 700, maxHistoryMessages: 12, retrievalTopK: 5, requestTimeoutMs: 30000 },
  delivery: { maxAttempts: 5, initialRetrySeconds: 30 },
} as const;
