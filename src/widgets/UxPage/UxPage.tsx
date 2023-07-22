import { classNames } from 'shared/lib/classNames/classNames';
import {
  memo, type MutableRefObject, type ReactNode, useRef, type UIEvent
} from 'react';
import { useInfiniteScroll } from 'shared/lib/hooks/useInfiniteScroll/useInfiniteScroll';
import styles from './UxPage.module.scss';
import { useTypedDispatch } from 'shared/lib/hooks/useTypedDispatch/useTypedDispatch';
import { getUIScrollByPath, scrollPositionActions } from 'features/ScrollPositionRestoring';
import { useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { type StateSchema } from 'app/providers/StoreProvider';
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect/useInitialEffect';
import { useThrottle } from 'shared/lib/hooks/useThrottle/useThrottle';

interface UxPageProps {
  className?: string
  children: ReactNode
  onScrollEnd?: () => void
}

export const UxPage = memo((props: UxPageProps) => {
  const { className, children, onScrollEnd } = props;
  const wrapperRef = useRef() as MutableRefObject<HTMLDivElement>;
  const triggerRef = useRef() as MutableRefObject<HTMLDivElement>;
  const dispatch = useTypedDispatch();
  const { pathname: pathName } = useLocation();
  const scrollPosition = useSelector(
    (state: StateSchema) => getUIScrollByPath(state, pathName)
  );

  useInfiniteScroll({
    triggerRef,
    wrapperRef,
    callback: onScrollEnd
  });

  useInitialEffect(() => {
    wrapperRef.current.scrollTop = scrollPosition;
  });

  // TODO investigate this feature
  const onScroll = useThrottle((e: UIEvent<HTMLDivElement>) => {
    dispatch(scrollPositionActions.setScrollPosition({
      position: e.currentTarget.scrollTop,
      path: pathName
    }));
  }, 300);

  return (
        <section
            ref={wrapperRef}
            className={classNames(styles.UxPage, {}, [className])}
            onScroll={onScroll}
        >
            {children}
            <div ref={triggerRef} />
        </section>
  );
});
