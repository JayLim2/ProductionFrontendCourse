import { classNames } from 'shared/lib/classNames/classNames';
import {
  memo, type MutableRefObject, type ReactNode, useRef
} from 'react';
import { useInfiniteScroll } from 'shared/lib/hooks/useInfiniteScroll/useInfiniteScroll';
import styles from './UxPage.module.scss';

interface UxPageProps {
  className?: string
  children: ReactNode
  onScrollEnd?: () => void
}

export const UxPage = memo((props: UxPageProps) => {
  const { className, children, onScrollEnd } = props;
  const wrapperRef = useRef() as MutableRefObject<HTMLDivElement>;
  const triggerRef = useRef() as MutableRefObject<HTMLDivElement>;

  useInfiniteScroll({
    triggerRef,
    wrapperRef,
    callback: onScrollEnd
  });

  return (
        <section
            ref={wrapperRef}
            className={classNames(styles.UxPage, {}, [className])}
        >
            {children}
            <div ref={triggerRef} />
        </section>
  );
});
