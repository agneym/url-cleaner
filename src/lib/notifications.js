import { writable, derived } from "svelte/store";
import { uniqueId } from "lodash";

const DEFAULT_TIMEOUT = 3000;

function createNotificationStore() {
  const _notifications = writable([]);

  function send(message, type = "default", timeout = DEFAULT_TIMEOUT) {
    _notifications.update((state) => {
      return [...state, { id: uniqueId(), type, message, timeout }];
    });
  }

  const notifications = derived(_notifications, ($_notifications, set) => {
    set($_notifications);
    if ($_notifications.length > 0) {
      const timer = setTimeout(() => {
        _notifications.update((state) => {
          state.shift();
          return state;
        });
      }, $_notifications[0].timeout ?? DEFAULT_TIMEOUT);
      return () => {
        clearTimeout(timer);
      };
    }
  });
  const { subscribe } = notifications;

  return {
    subscribe,
    send,
    default: (msg, timeout) => send(msg, "default", timeout),
    danger: (msg, timeout) => send(msg, "danger", timeout),
    warning: (msg, timeout) => send(msg, "warning", timeout),
    info: (msg, timeout) => send(msg, "info", timeout),
    success: (msg, timeout) => send(msg, "success", timeout),
  };
}

export const notifications = createNotificationStore();
