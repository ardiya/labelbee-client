import React, { useState } from 'react';
import './App.css';
import 'antd/dist/antd.css';
import logo from './logo.svg';

import Annotation from './Annotation';
import { fileList as mockFileList } from './mock/index';

const App = () => {
  const [fileList, setFileList] = useState(mockFileList);

  console.log(mockFileList);

  const goBack = (data) => {
    console.log('goBack', data);
  };

  if (fileList.length > 0) {
    return <Annotation fileList={fileList} goBack={goBack} />;
  }

  return <div className='App'>123</div>;
};

export default App;
