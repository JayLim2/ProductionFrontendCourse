import {classNames} from "shared/lib/classNames/classNames";
import styles from './UxButton.module.scss';
import {ButtonHTMLAttributes, FC} from "react";

export enum ThemeButton {
    CLEAR= "clear",
}

interface UxButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string,
    theme?: ThemeButton
}

export const UxButton: FC<UxButtonProps> = (props) => {
    const {
        className,
        children,
        theme,
        ...otherProps
    } = props;

    return (
        <button className={classNames(styles.UxButton, {}, [className, styles[theme]])}
                {...otherProps}
        >
            {children}
        </button>
    );
};