import { createContext, useContext, useEffect, useState } from "react";
import { findProperty, useProperties } from "./data/properties";
import { readPropertyIds, savePropertyIds } from "./utils/propertyStorage";

const FAVORITES_KEY = "havenly.favorites";
const COMPARE_KEY = "havenly.compare";
const RECENT_KEY = "havenly.recentlyViewed";
export const COMPARE_LIMIT = 3;
export const RECENT_LIMIT = 10;

/** @type {import("react").Context<any>} */
const Ctx = createContext(null);

export function HavenlyProvider({ children }) {
  const [ready, setReady] = useState(false);
  const [favoriteIds, setFavoriteIds] = useState([]);
  const [compareIds, setCompareIds] = useState([]);
  const [recentIds, setRecentIds] = useState([]);
  const list = useProperties();

  useEffect(() => {
    setFavoriteIds(readPropertyIds(FAVORITES_KEY));
    setCompareIds(readPropertyIds(COMPARE_KEY, COMPARE_LIMIT));
    setRecentIds(readPropertyIds(RECENT_KEY, RECENT_LIMIT));
    setReady(true);
  }, []);
  useEffect(() => { if (ready) savePropertyIds(FAVORITES_KEY, favoriteIds); }, [ready, favoriteIds]);
  useEffect(() => { if (ready) savePropertyIds(COMPARE_KEY, compareIds); }, [ready, compareIds]);
  useEffect(() => { if (ready) savePropertyIds(RECENT_KEY, recentIds); }, [ready, recentIds]);

  const actions = {
    favoriteIds,
    compareIds,
    compareLimit: COMPARE_LIMIT,
    onToggleFavorite: (id) =>
      setFavoriteIds((ids) => (ids.includes(id) ? ids.filter((x) => x !== id) : [...ids, id])),
    onToggleCompare: (id) => {
      if (compareIds.includes(id)) {
        setCompareIds(compareIds.filter((x) => x !== id));
        return true;
      }
      if (compareIds.length >= COMPARE_LIMIT) return false;
      setCompareIds([...compareIds, id]);
      return true;
    },
  };

  const resolve = (ids) => ids.map((id) => findProperty(id, list)).filter(Boolean);

  return (
    <Ctx.Provider value={{ actions, favoriteIds, compareIds, recentIds, setCompareIds, setRecentIds, resolve }}>
      {children}
    </Ctx.Provider>
  );
}

/** @returns {any} */
export function useHavenly() {
  return useContext(Ctx);
}
