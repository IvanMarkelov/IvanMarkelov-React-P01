import React from 'react';
import { Card } from 'antd';
import { Typography, Space } from 'antd';

import './App.css';

const { Text, Link } = Typography;

const x1 = 10;
const x2 = 5;

if (x2 === 0) {
  throw new Error("Ошибка выполнения")
}

function App() {
  return (
    <div className="App">
          <Card title="Решение" bordered={false} style={{ width: 300 }}>
      <p><Text mark>{x1} / {x2} = {x1 / x2}</Text></p>
    </Card>
    </div>
  );
}

export default App;
