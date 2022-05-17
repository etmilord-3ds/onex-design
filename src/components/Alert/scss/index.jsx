import PropTypes, { oneOfType } from 'prop-types';
import classNames from 'classnames';
import { Alert as ReactAlert } from 'react-bootstrap';
import InfoRoundedIcon from '@mui/icons-material/InfoRounded';
import WarningRoundedIcon from '@mui/icons-material/WarningRounded';
import ErrorRoundedIcon from '@mui/icons-material/ErrorRounded';
import CheckCircleRoundedIcon from '@mui/icons-material/CheckCircleRounded';
import Button from '../../Buttons/scss';

const Icon = {
  info: <InfoRoundedIcon />,
  warning: <WarningRoundedIcon />,
  error: <ErrorRoundedIcon />,
  success: <CheckCircleRoundedIcon />,
};

const Alert = ({
  className,
  variant,
  title,
  body,
  primaryAction,
  primaryText,
  secondaryAction,
  secondaryText,
  show,
  transition,
}) => {
  const classes = classNames('onex-alert', {
    [className]: className,
  });

  return (
    <ReactAlert show={show} transition={transition} variant={variant} className={classes}>
      <ReactAlert.Heading>
        <span className="onex-alert__icon">{Icon[variant]}</span>
        {title}
      </ReactAlert.Heading>
      <div className="onex-alert__body">{body}</div>
      <div className="onex-alert__control">
        {primaryAction && (
          <Button onClick={primaryAction} variant="secondary">
            {primaryText}
          </Button>
        )}
        {secondaryAction && (
          <Button onClick={secondaryAction} variant="tertiary">
            {secondaryText}
          </Button>
        )}
      </div>
    </ReactAlert>
  );
};

Alert.propTypes = {
  className: PropTypes.string,
  variant: PropTypes.oneOf(['info', 'warning', 'error', 'success']),
  title: PropTypes.string,
  body: oneOfType([PropTypes.string, PropTypes.element]),
  primaryAction: PropTypes.func,
  primaryText: PropTypes.string,
  secondaryAction: PropTypes.func,
  secondaryText: PropTypes.string,
  show: PropTypes.bool,
  transition: oneOfType([PropTypes.bool, PropTypes.elementType]),
};

Alert.defaultProps = {
  className: '',
  variant: 'info',
  title: 'Title',
  body: '',
  primaryAction: null,
  primaryText: '',
  secondaryAction: null,
  secondaryText: '',
  show: false,
  transition: false,
};

export default Alert;