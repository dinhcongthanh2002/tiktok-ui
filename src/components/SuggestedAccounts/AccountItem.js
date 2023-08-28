import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import Tippy from '@tippyjs/react/headless';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

import AccountPreview from './AccountPreview/';
import styles from './SuggestedAccounts.module.scss';
import { Wrapper as PopperWrapper } from '~/components/Popper';

const cx = classNames.bind(styles);

function AccountItem() {
  const renderPreview = (props) => {
    return (
      <div tabIndex="-1" {...props}>
        <PopperWrapper>
          <AccountPreview />
        </PopperWrapper>
      </div>
    );
  };

  return (
    //Using a wrapper <div> tag around the reference element solves this by creating a new parentNode context.
    <div>
      <Tippy interactive offset={[-20, 0]} delay={[800, 0]} render={renderPreview} placement="bottom">
        <div className={cx('account-item')}>
          <img
            className={cx('avatar')}
            src="https://p16-sign-useast2a.tiktokcdn.com/tos-useast2a-avt-0068-giso/db4db6f2a77927e1cbdd765ce60f90db~c5_100x100.jpeg?x-expires=1693321200&x-signature=8bI5ssQatdTgkXf1UBUp8a%2B9dIM%3D"
            alt=""
          />

          <div className={cx('item-info')}>
            <p className={cx('nickname')}>
              <strong>hello.tin</strong>
              <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
            </p>
            <p className={cx('name')}>Hello Tĩn</p>
          </div>
        </div>
      </Tippy>
    </div>
  );
}

AccountItem.propTypes = {};

export default AccountItem;
