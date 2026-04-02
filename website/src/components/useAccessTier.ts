"use client";

import { useState, useEffect } from "react";
import type { AccessTier } from "./PasswordGate";

const STORAGE_KEY = "course-access-tier";

export function useAccessTier(): AccessTier | null {
  const [tier, setTier] = useState<AccessTier | null>(null);

  useEffect(() => {
    const stored = sessionStorage.getItem(STORAGE_KEY) as AccessTier | null;
    setTier(stored);
  }, []);

  return tier;
}
