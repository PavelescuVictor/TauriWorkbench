import { WebviewWindow } from '@tauri-apps/api/window';
import WindowContextProvider, {
  WindowContext,
} from '../GlobalContextController/WindowContext/WindowContext';
import useCustomContext from '../../hooks/useCustomContext';
import { useEffect } from 'react';

const windowLabels = {
  TEST: 'TEST',
};

const WindowController = (): JSX.Element => {
  const windowContext = useCustomContext(WindowContext);

  const createWindow = () => {
    const webview = new WebviewWindow(windowLabels.TEST, {
      url: 'path/to/page.html',
    });
    // since the webview window is created asynchronously,
    // Tauri emits the `tauri://created` and `tauri://error` to notify you of the creation response
    webview.once('tauri://created', function () {
      // webview window successfully created
    });
    webview.once('tauri://error', function (e) {
      // an error occurred during webview window creation
    });
  };

  const removeWindow = (windowId: number) => {};

  useEffect(() => {}, []);
  return <></>;
};

export default WindowController;
