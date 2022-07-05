class EventDispatcher {
  constructor() {
    const eventTarget = document.createDocumentFragment();

    ["addEventListener", "dispatchEvent", "removeEventListener"].map(method => {
      this[method] = eventTarget[method].bind(eventTarget);
    });
  }
}

export {
  EventDispatcher
}