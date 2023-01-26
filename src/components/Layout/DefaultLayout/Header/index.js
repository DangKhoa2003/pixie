import { Fragment } from 'react';
import styles from './Header.module.scss';
import clsx from 'clsx';
import { Link } from 'react-router-dom';
function Header() {
    return (
        <header id='header' className={clsx('container', styles.header)}>
            <nav>
                <ul className={clsx(styles.listItem)}>
                    <li>
                        <Link className={clsx('text-decoration-none', 'text-light')} to="/collection">Collection</Link>
                    </li>
                    <li>
                        <Link className={clsx('text-decoration-none', 'text-light')} to="/artist">Artist</Link>
                    </li>
                    <li>
                        <Link className={clsx('text-decoration-none', 'text-light')} to="/library">Library</Link>
                    </li>
                </ul>
            </nav>

            <div>
                <ul className={clsx(styles.liLogo)}>
                    <li>
                        <Link className={clsx('text-decoration-none', 'text-light', styles.logo)} to="/">pixie</Link>
                    </li>
                </ul>
            </div>
            <nav>
                <ul className={clsx(styles.contactUs)}>
                    <li>
                        <Link className={clsx('text-decoration-none', 'text-light')} to="/contact">Contact Us</Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;
