import { classNames } from 'shared/lib/classNames/classNames';
import { memo, useCallback } from 'react';
import { UxButton, ButtonTheme } from 'shared/ui/UxButton/UxButton';
import CopyIcon from 'shared/assets/icons/copy-20-20.svg';
import styles from './UxCode.module.scss';

interface CodeProps {
  className?: string
  text: string
}

export const UxCode = memo((props: CodeProps) => {
  const { className, text } = props;

  const onCopy = useCallback(() => {
    void navigator.clipboard.writeText(text);
  }, [text]);

  return (
        <pre className={classNames(styles.UxCode, {}, [className])}>
            <UxButton onClick={onCopy}
                    className={styles.copyButton}
                    theme={ButtonTheme.CLEAR}
            >
                <CopyIcon className={styles.copyIcon} />
            </UxButton>
            <code>
                {text}
            </code>
        </pre>
  );
});
