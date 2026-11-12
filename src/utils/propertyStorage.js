import { findProperty } from "../data/properties";

export function readPropertyIds(key) {
  try {
    const ids = JSON.parse(localStorage.getItem(key));
    if (!Array.isArray(ids)) return [];

    return ids.filter((id, index) => (
      Number.isInteger(id) && ids.indexOf(id) === index && findProperty(id)
    ));
  } catch {
    return [];
  }
}

export function savePropertyIds(key, ids) {
  try {
    localStorage.setItem(key, JSON.stringify(ids));
  } catch {
    return;
  }
}
