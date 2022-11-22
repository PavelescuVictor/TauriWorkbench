import { FocusContext } from '../GlobalContextController/FocusContext/FocusContext';
import useCustomContext from '../../hooks/useCustomContext';

const FocusController = (): JSX.Element => {
  const focusContext = useCustomContext(FocusContext);

  return <></>;
};

export default FocusController;
