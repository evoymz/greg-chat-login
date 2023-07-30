import { useState } from 'react';
import { Photo } from './components/Photo';
import { LoginMenu } from './components/LoginMenu';
import styles from './App.module.css';

function App() {
  return (
    <div id={styles.login}>
      <LoginMenu />
      <Photo />
    </div>
  )
}

export default App
