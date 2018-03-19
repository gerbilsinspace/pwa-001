export default function register() {
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('service-worker.js?v2');
  }
}

export function unregister() {
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.ready.then(registration => {
      registration.unregister();
    });
  }
}
