# event-dispatcher

EventDispatcher is a class that enables **addEventListener**,  **removeEventListener** and **dispatchEvent** methods in your class when extended.

## Example
````javascript
import { EventDispatcher } from '@jslibrary/event-dispatcher'

export class Controller extends EventDispatcher {
  async remoteMethod() {
    this.dispatchEvent(new CustomEvent("beforeRemoteCall")

    await const response = remoteCall()
    this.dispatchEvent(new CustomEvent("afterRemoteCall", response))
  }
}
````

````javascript
import { Controller } from './Controller';

let controller = new Controller()

controller.addEventListener('afterRemoteCall', (response) => {
  alert(response);
})

controller.remoteMethod()

````

## Instalation

```bash
npm install @jslibrary/event-dispatcher
```
