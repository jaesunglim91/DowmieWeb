export const setItemToLocalStorage = (itemObj) => {
  Object.entries(itemObj).forEach(([k, v]) =>
    window.localStorage.setItem(k, JSON.stringify(v)),
  );
};

export const removeItemFromLocalStorage = (keyList) => {
  keyList.forEach((k) => window.localStorage.removeItem(k));
};

export const getLocalStorageItem = (key) => {
  const item = window.localStorage.getItem(key);
  if (!item) return null;
  return JSON.parse(item);
};

export const isEmptyObject = (obj) => {
  return Object.keys(obj).length === 0 && obj.constructor === Object;
};
