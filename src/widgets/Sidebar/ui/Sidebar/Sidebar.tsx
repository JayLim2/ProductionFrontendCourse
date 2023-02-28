import {classNames} from "shared/lib/classNames/classNames";
import styles from './Sidebar.module.scss';
import React, {useState} from "react";
import {UxButton} from "shared/ui/UxButton/UxButton";
import {ThemeSwitcher} from "widgets/ThemeSwitcher/ThemeSwitcher";
import {useTranslation} from "react-i18next";
import {LanguageSwitcher} from "widgets/LanguageSwitcher/ui/LanguageSwitcher";

interface SidebarProps {
    className?: string,
}

export const Sidebar = ({className}: SidebarProps) => {

    const [isCollapsed, setCollapsed] = useState(false);
    const {t} = useTranslation();

    const onToggleCollapsed = () => {
        setCollapsed(prevIsCollapsed => !prevIsCollapsed);
    };

    return (
        <div className={classNames(styles.Sidebar, {
            [styles.isCollapsed]: isCollapsed
        }, [className])}>
            <UxButton onClick={onToggleCollapsed}>
                {t('toggleSidebarButton')}
            </UxButton>
            <div className={styles.switchersContainer}>
                <ThemeSwitcher/>
                <LanguageSwitcher className={styles.indentLanguageSwitcher}/>
            </div>
        </div>
    );
};
