import React from 'react';
import {classNames} from "shared/lib/classNames/classNames";
import styles from './NavigationBar.module.scss';
import {UxLink, UxLinkTheme} from "shared/ui/UxLink/UxLink";
import {useTranslation} from "react-i18next";

interface NavigationBarProps {
    className?: string,
}

export const NavigationBar = ({className}: NavigationBarProps) => {
    const {t} = useTranslation();

    return (
        <div className={classNames(styles.NavigationBar, {}, [className])}>
            <div className={styles.links}>
                <UxLink theme={UxLinkTheme.SECONDARY} to={"/"}>
                    {t('mainPageLinkTitle')}
                </UxLink>
                <UxLink theme={UxLinkTheme.SECONDARY} to={"/about"}>
                    {t('aboutPageLinkTitle')}
                </UxLink>
            </div>
        </div>
    );
};

