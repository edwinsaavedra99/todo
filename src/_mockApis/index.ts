import mock from './mockAdapter';

import './apps/notes/index'

mock.onAny().passThrough();
