import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faCircleXmark,
    faMagnifyingGlass,
    faSpinner,
    faPlus,
    faEllipsisVertical,
} from '@fortawesome/free-solid-svg-icons';

import styles from './Header.module.scss';
import images from '~/assets/images';

const cx = classNames.bind(styles);

function Header() {
    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <div className={cx('logo')}>
                    <img src={images.logo} alt="Tiktok" />
                </div>
                <div className={cx('search')}>
                    <input placeholder="Search accounts and videos" spellCheck={false} />
                    <button className={cx('clear')}>
                        <FontAwesomeIcon icon={faCircleXmark} />
                    </button>
                    <FontAwesomeIcon className={cx('loading')} icon={faSpinner} />

                    <button className={cx('search-btn')}>
                        <FontAwesomeIcon icon={faMagnifyingGlass} />
                    </button>
                </div>
                <div className={cx('actions')}>
                    <div className={cx('upload')}>
                        <FontAwesomeIcon className={cx('plus')} icon={faPlus} />
                        <button className={cx('upload-btn')}>Upload</button>
                    </div>
                    <button className={cx('login-btn')}>Login</button>
                    <div className={cx('EllipsisVertical')}>
                        <FontAwesomeIcon icon={faEllipsisVertical} />
                    </div>
                </div>
            </div>
        </header>
    );
}
export default Header;
