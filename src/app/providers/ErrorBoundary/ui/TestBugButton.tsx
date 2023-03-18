import { type FC, useEffect, useState } from 'react';
import { ButtonTheme, UxButton } from 'shared/ui/UxButton/UxButton';

interface TestBugButtonProps {
  className?: string
}

/**
 * Component for testing ErrorBoundary. Not a production component.
 */
export const TestBugButton: FC<TestBugButtonProps> = () => {
  const [error, setError] = useState(false);

  const onThrow = (): void => {
    setError(true);
  }

  useEffect(() => {
    if (error) {
      throw new Error();
    }
  }, [error]);

  return (
      // eslint-disable-next-line i18next/no-literal-string
      <UxButton onClick={onThrow} theme={ButtonTheme.BACKGROUND_INVERTED}>
          Test Bug Button
      </UxButton>
  );
};
