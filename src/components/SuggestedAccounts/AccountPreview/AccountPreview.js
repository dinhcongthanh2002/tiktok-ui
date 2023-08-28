import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

import styles from './AccountPreview.module.scss';
import Button from '~/components/Button/Button';

const cx = classNames.bind(styles);

function AccountPreview() {
  return (
    <div className={cx('wrapper')}>
      <div className={cx('header')}>
        <img
          className={cx('avatar')}
          src="https://p16-sign-useast2a.tiktokcdn.com/tos-useast2a-avt-0068-giso/db4db6f2a77927e1cbdd765ce60f90db~c5_100x100.jpeg?x-expires=1693321200&x-signature=8bI5ssQatdTgkXf1UBUp8a%2B9dIM%3D"
          alt=""
        />
        <Button className={cx('follow-btn')} primary>Follow</Button>
      </div>
      <div className={cx('body')}>
        <p className={cx('nickname')}>
          <strong>hello.tin</strong>
          <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
        </p>
        <p className={cx('name')}>Hello Tĩn</p>
      </div>

      <p className={cx('analytics')}>
        <strong className={cx('value')}>8.2M </strong>
        <span className={cx('label')}>Followers</span>
        <strong className={cx('value')}>8.2M </strong>
        <span className={cx('label')}>Likes</span>
      </p>
    </div>
  );
}

export default AccountPreview;
