export function getLocalStorageSizeInKB() {
  let total = 0;

  for (let i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i);
    total += key.length;

    const value = localStorage.getItem(key);
    total += value.length;
  }
  const totalBytes = total * 2;
  const totalKB = totalBytes / 1024;
  return totalKB.toFixed(2);
}
