// lib/urqlClient.js
import { createClient, fetchExchange } from "urql";

export const urqlClient = createClient({
  url: "http://localhost:4000/graphql", // Replace with your actual GraphQL URL
  exchanges: [fetchExchange], // Only using fetchExchange
});
