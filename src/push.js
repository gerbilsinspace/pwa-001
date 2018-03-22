let permissionStatus;

export function setUp() {
  if (!('Notification' in window)) return;

  Notification.requestPermission(status => {
    permissionStatus = status
    console.log('Notification permission status:', permissionStatus);
  });
}
