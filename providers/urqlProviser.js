"use client";

import { Provider } from "urql";
import { urqlClient } from "../lib/urqlClient";

const UrqlProvider = ({ children }) => {
  return <Provider value={urqlClient}>{children}</Provider>;
};

export default UrqlProvider;
