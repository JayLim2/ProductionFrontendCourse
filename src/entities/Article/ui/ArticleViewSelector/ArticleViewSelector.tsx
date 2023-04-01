import { classNames, type Modifiers } from 'shared/lib/classNames/classNames';
import { type FunctionComponent, memo, type SVGAttributes } from 'react';
import ListIcon from 'shared/assets/icons/list-24-24.svg';
import TiledIcon from 'shared/assets/icons/tiled-24-24.svg';
import { UxIcon } from 'shared/ui/UxIcon/UxIcon';
import { UxButton, ButtonTheme } from 'shared/ui/UxButton/UxButton';
import styles from './ArticleViewSelector.module.scss';
import { ArticleView } from '../../model/types/ArticleViewTypes';

interface ArticleViewSelectorProps {
  className?: string
  view: ArticleView
  onViewClick?: (view: ArticleView) => void
}

interface ViewSelector {
  view: ArticleView
  icon: FunctionComponent<SVGAttributes<SVGElement>>
}

const viewTypes: ViewSelector[] = [
  {
    view: ArticleView.SMALL,
    icon: TiledIcon
  },
  {
    view: ArticleView.BIG,
    icon: ListIcon
  }
];

export const ArticleViewSelector = memo((props: ArticleViewSelectorProps) => {
  const { className, view, onViewClick } = props;

  const onClick = (newView: ArticleView) => () => {
    onViewClick?.(newView);
  };

  const getModifiers = (viewType: ViewSelector): Modifiers => ({
    [styles.selected]: viewType.view === view
  });

  return (
        <div className={classNames(styles.ArticleViewSelector, {}, [className])}>
            {viewTypes.map((viewType) => (
                <UxButton
                    key={viewType.view}
                    theme={ButtonTheme.CLEAR}
                    onClick={onClick(viewType.view)}
                >
                    <UxIcon
                        SVG={viewType.icon}
                        className={classNames('', getModifiers(viewType))}
                    />
                </UxButton>
            ))}
        </div>
  );
});
