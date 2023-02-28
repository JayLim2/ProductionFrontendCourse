import {classNames} from "shared/lib/classNames/classNames";
import styles from './Sidebar.module.scss';
import React, {useState} from "react";
import {UxButton} from "shared/ui/UxButton/UxButton";
import {UxThemeSwitcher} from "shared/ui/UxThemeSwitcher/UxThemeSwitcher";

interface SidebarProps {
    className?: string,
}

export const Sidebar = ({className}: SidebarProps) => {

    const [isCollapsed, setCollapsed] = useState(false);

    const onToggleCollapsed = () => {
        setCollapsed(prevIsCollapsed => !prevIsCollapsed);
    };

    return (
        <div className={classNames(styles.Sidebar, {
            [styles.isCollapsed]: isCollapsed
        }, [className])}>
            <UxButton onClick={onToggleCollapsed}>
                Toggle
            </UxButton>
            <div className={styles.switchersContainer}>
                <UxThemeSwitcher/>
            </div>
        </div>
    );
};
