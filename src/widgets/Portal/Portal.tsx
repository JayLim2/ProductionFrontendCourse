import { type FC, type ReactNode, type ReactPortal, useCallback, useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import { useTheme } from 'app/providers/ThemeProvider';

interface PortalProps {
  children: ReactNode
  destinationContainer?: HTMLElement
}

export const Portal: FC<PortalProps> = (props: PortalProps) => {
  const { children } = props;
  const [portal, setPortal] = useState<ReactPortal | null>(null);
  const { theme } = useTheme();

  const createAndSetPortal = useCallback(() => {
    let destinationContainer: HTMLElement;
    if (!props.destinationContainer) {
      destinationContainer = document.body
        .getElementsByClassName(`app ${theme}`)
        .item(0) as HTMLElement;
    } else {
      destinationContainer = props.destinationContainer;
    }
    setPortal(ReactDOM.createPortal(children, destinationContainer));
  }, [theme, children, props.destinationContainer]);

  useEffect(() => {
    createAndSetPortal();
  }, [theme, children, props.destinationContainer, createAndSetPortal]);

  return portal;
};
