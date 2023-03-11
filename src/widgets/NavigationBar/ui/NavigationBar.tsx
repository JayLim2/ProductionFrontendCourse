import { classNames } from 'shared/lib/classNames/classNames'
import styles from './NavigationBar.module.scss'
import { type FC } from 'react'

interface NavigationBarProps {
  className?: string
}

export const NavigationBar: FC<NavigationBarProps> = (props) => {
  const { className } = props

  return (
        <div className={classNames(styles.NavigationBar, {}, [className])}>
            <div className={styles.links}>
            </div>
        </div>
  )
}
