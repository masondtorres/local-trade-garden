import { promises as fs } from "fs";
import path from "path";
import type { MarketStore } from "@/lib/types";

const emptyStore = (): MarketStore => ({
  users: [],
  listings: [],
  favorites: {},
  messages: [],
  reports: [],
  events: [],
});

type GlobalMarket = typeof globalThis & { __ltgStore?: MarketStore };

function memory(): MarketStore {
  const g = globalThis as GlobalMarket;
  if (!g.__ltgStore) g.__ltgStore = emptyStore();
  return g.__ltgStore;
}

const tmpPath = path.join("/tmp", "ltg-market-store.json");

export async function loadStore(): Promise<MarketStore> {
  const mem = memory();
  if (mem.users.length || mem.listings.length) return mem;
  try {
    const raw = await fs.readFile(tmpPath, "utf8");
    Object.assign(mem, JSON.parse(raw) as MarketStore);
  } catch {
    /* empty start */
  }
  return mem;
}

export async function saveStore(store: MarketStore) {
  const mem = memory();
  Object.assign(mem, store);
  await fs.writeFile(tmpPath, JSON.stringify(store)).catch(() => undefined);
}

export async function mutateStore<T>(fn: (store: MarketStore) => T | Promise<T>) {
  const store = await loadStore();
  const result = await fn(store);
  await saveStore(store);
  return result;
}
