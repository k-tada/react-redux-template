import { createModule } from 'moducks';

export const {
  counter, sagas,
  inc, dec, clear,
} = createModule('counter', {
  INC: { reducer: state => state + 1 },
  DEC: { reducer: state => state - 1 },
  CLEAR: { reducer: state => 0 },
}, 0);

