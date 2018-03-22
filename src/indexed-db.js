import idb from 'idb';

const storeName = 'videos';

export function createDB() {
  if (!('indexedDB' in window)) return;

  idb.open('showcase', 2, upgradeDb => {
    switch (upgradeDb.oldVersion) {
      case 0:
      case 1:
        upgradeDb.createObjectStore(storeName, { keyPath: 'ref' });
        upgradeDb.transaction.objectStore(storeName)
          .createIndex('type', 'type', { unique: false })
        break;
      default:
    }
  });
}

export function saveData(data) {
  if (!('indexedDB' in window)) return;

  idb.open('showcase', 2).then(db => {
    const tx = db.transaction(storeName, 'readwrite');
    const store = tx.objectStore(storeName);

    return Promise.all(data.map(item =>
      store.add({
        ...item,
        ref: item.ref || `demo:${item.title.replace(/\s/, '')}`
      })
    ))
    .catch(e => {
      tx.abort();
      console.error(e);
    });
  });
}

export function getData() {
  if (!('indexedDB' in window)) return;

  const dbPromise = idb.open('showcase', 2);

  return dbPromise.then(db =>
      db.transaction(storeName)
      .objectStore(storeName).getAll()
  );
}
