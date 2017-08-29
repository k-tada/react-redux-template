import { flattenSagas } from 'moducks';
import { sagas as counter } from '~/modules/counter';

export default flattenSagas({
  counter,
});

