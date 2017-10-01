import SC from 'soundcloud';

import config from './config';

SC.initialize({
  client_id: config.soundcloud.CLIENT_ID,
});

export default SC;
