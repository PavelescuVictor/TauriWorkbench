import { useState } from 'react';
import { WebviewWindow } from '@tauri-apps/api/window';
import StyledMainWindow from './MainWindow.style';

const windowOptions = {
  center: true,
  width: 600,
  height: 600,
};

const MainWindow = () => {
  const [windowId, setWindowId] = useState<WebviewWindow>();
  console.log(windowId);

  const createWindow = () => {
    const webview = new WebviewWindow('theUniqueLabel', windowOptions);
    webview.once('tauri://created', function () {
      console.log('Successfully created a new window');
      setWindowId(webview);
    });
    webview.once('tauri://error', function (e) {
      console.log(e);
      throw new Error('Error while creating a new window');
    });
  };

  const closeWindow = () => {
    windowId?.close();
  };
  const minimizeWindow = () => {
    windowId?.minimize();
  };
  const fullscreenWindow = () => {
    windowId?.toggleMaximize();
  };

  return (
    <StyledMainWindow>
      <button onClick={() => createWindow()}>
        <p>Create Window</p>
      </button>
      <button onClick={() => closeWindow()}>
        <p>Close Window</p>
      </button>
      <button onClick={() => minimizeWindow()}>
        <p>Minimize Window</p>
      </button>
      <button onClick={() => fullscreenWindow()}>
        <p>Fullscreen Window</p>
      </button>
    </StyledMainWindow>
  );
};

export default MainWindow;
