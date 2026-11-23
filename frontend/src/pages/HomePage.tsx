import { useEffect, useState } from "react";

import { getHealth } from "@/api/health";

export function HomePage() {
  const [status, setStatus] = useState("laedt...");

  useEffect(() => {
    getHealth()
      .then((r) => setStatus(r.status))
      .catch(() => setStatus("Backend nicht erreichbar"));
  }, []);

  return <h1>Backend-Status: {status}</h1>;
}
