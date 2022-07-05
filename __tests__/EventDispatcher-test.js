/**
 * @jest-environment jsdom
 */

import { EventDispatcher } from '../src/EventDispatcher';

describe('EventDispatcher', () => {
  let instance = new EventDispatcher();

  //-------------------------------------------
  // listeners
  //-------------------------------------------
  it('listeners', done => {
    let customMethod = function(e) {
      expect(e.detail).toBe("param");
      done();
    }

    instance.addEventListener("custom", customMethod);
    // instance.removeEventListener("custom", customMethod); // when uncomented, it generates a timeout bacause no method won't listen to.

    instance.dispatchEvent(new CustomEvent("custom", {detail:"param"}));
  });
});
