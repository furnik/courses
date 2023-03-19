import {StorageTypes} from "../types/storage";

export const setToStorage = (id: string, duration: number) => {
  const progresses = localStorage.getItem(StorageTypes.PROGRESS);
  const data = progresses ? JSON.parse(progresses) : {};
  localStorage.setItem(StorageTypes.PROGRESS, JSON.stringify({...data, [id]: duration}));
}

export const getVideoProgress = (id: string) => {
  const progresses = localStorage.getItem(StorageTypes.PROGRESS);
  const data = progresses ? JSON.parse(progresses) : {};
  return data[id] || 0;
}
