import styled from 'styled-components';
import TableRow from '../../scss/components/TableRow';
// eslint-disable-next-line import/no-unresolved
import cssString from '../platform.css?raw';

// eslint-disable-next-line react/prop-types
export default ({ children, ...props }) => <StyledComponent {...props}>{children}</StyledComponent>;

const StyledComponent = styled(TableRow)`
  ${() =>
    cssString
      .replaceAll('.onex-', '&.onex-')
      .replaceAll('.table', '&.table')
      .replaceAll('.table-', '&.table-')}
`;