import { ConfigProvider } from 'antd';
import React from 'react';
import Router from './Router';

import { theme } from './themes/main'

const App: React.FC = () => (
  <ConfigProvider
    theme={
      theme
    }
  >
    <Router/>
  </ConfigProvider>
);

export default App;