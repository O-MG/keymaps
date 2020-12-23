import Utils from './utils';

import global from './global.json';
import us from './region_en-us.json';

const MODIFIER = '02';

const { reverseObjectMapping, reverseModifierScancodeMapping } = Utils(MODIFIER)

const humanReadable = {
  global: reverseObjectMapping(global),
  regions: {
    us: reverseModifierScancodeMapping(us)
  }
};

export default {
  scancodes: {
    global,
    regions: {
      us,
    },
  },
  humanReadable
  }
};
