import { findProperty } from "../data/properties";

export function readPropertyIds(key, limit) {
  try {
    const ids = JSON.parse(localStorage.getItem(key));
    if (!Array.isArray(ids)) return [];

    const validIds = ids.filter((id, index) => (
      Number.isInteger(id) && ids.indexOf(id) === index && findProperty(id)
    ));
    return validIds.slice(0, limit);
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
