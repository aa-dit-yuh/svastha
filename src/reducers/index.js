import status from './status'
import member from './member'
import doctors from './doctors'
import appointments from './appointments'
import firstaid from './firstaid'

const rehydrated = (state = false, action) => {
  switch (action.type) {
    case 'persist/REHYDRATE':
      return true;
    default:
      return state;
  }
};

export default {
  rehydrated,
  status,
  member,
  doctors,
  appointments,
  firstaid,
};
