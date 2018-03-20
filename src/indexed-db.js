import idb from 'idb';

export function createDB() {
  if (!('indexedDB' in window)) return;

  idb.open('showcase', 1, upgradeDb => {
    switch (upgradeDb.oldVersion) {
      case 0:
      case 1:
        upgradeDb.createObjectStore('newContent', { keyPath: 'ref' });
        break;
      default:
    }
  });
}

export function saveData(data) {
  if (!('indexedDB' in window)) return;

  idb.open('showcase', 1).then(db => {
    const tx = db.transaction('newContent', 'readwrite');
    tx.objectStore('newContent').add({
      ...data,
      ref: `demo:${data.title.replace(/\s/, '')}`
    });
  });
}
