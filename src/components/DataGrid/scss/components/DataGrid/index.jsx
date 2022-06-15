import PropTypes from 'prop-types';
import classNames from 'classnames';
import DataGridTable from '../DataGridTable';

const DataGrid = ({ className, data, columns, rowsPerPageOptions, dataGridControlComponent }) => {
  const dataGridClasses = classNames('onex-data-grid', {
    [className]: className,
  });

  return (
    <div className={dataGridClasses}>
      {dataGridControlComponent}
      <DataGridTable columns={columns} data={data} rowsPerPageOptions={rowsPerPageOptions} />
    </div>
  );
};

/* eslint-disable */
DataGrid.propTypes = {
  className: PropTypes.string,
  columns: PropTypes.arrayOf(
    PropTypes.shape({
      Header: PropTypes.string,
      columns: PropTypes.arrayOf(
        PropTypes.shape({
          Header: PropTypes.string,
          accessor: PropTypes.string,
        }),
      ),
    }),
  ),
  data: PropTypes.array,
  rowsPerPageOptions: PropTypes.arrayOf(PropTypes.number),
  dataGridControlComponent: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
};
/* eslint-enable */

DataGrid.defaultProps = {
  className: undefined,
  data: [{}],
  columns: [],
  rowsPerPageOptions: [],
  dataGridControlComponent: undefined,
};

export default DataGrid;