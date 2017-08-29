import { ActionTypes } from 'redux/lib/createStore';
import {
  counter, sagas,
  inc, dec, clear,
} from '~/modules/counter';

describe('Assignment', () => {
  describe('creators', () => {
    it('inc', () => {
      expect(inc()).toEqual({ type: 'counter/INC' });
    });
    it('dec', () => {
      expect(dec()).toEqual({ type: 'counter/DEC' });
    });
    it('clear', () => {
      expect(clear()).toEqual({ type: 'counter/CLEAR' });
    });
  });
  describe('reducer', () => {
    let state;
    it('defaultState', () => {
      state = counter(state, ActionTypes.INIT);
      expect(state).toEqual(0);
    });
    it('inc', () => {
      state = counter(state, inc());
      expect(state).toEqual(1);
      state = counter(state, inc());
      expect(state).toEqual(2);
    });
    it('dec', () => {
      state = counter(state, dec());
      expect(state).toEqual(1);
      state = counter(state, dec());
      expect(state).toEqual(0);
    });
    it('clear', () => {
      state = counter(state, inc());
      expect(state).toEqual(1);
      state = counter(state, inc());
      expect(state).toEqual(2);
      state = counter(state, clear());
      expect(state).toEqual(0);
    });
  });
  describe.skip('should be written', () => {});
});
