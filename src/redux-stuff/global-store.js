//-------- globalStore.js ------------
export function saveStore(createdStore) {
    window.p7hostGlobal.store = createdStore;
}
export function getStore() {
    return window.p7hostGlobal.store;
}