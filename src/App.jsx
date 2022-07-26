import { useState, useEffect, useMemo, useRef } from 'react';
import ViewComponents from './view-components';
import { Tabs, Check, DataGrid, Modal, Button, Card, Select, Dropzone } from './components';
import ThemeProvider from './components/ThemeProvider';

import './scss/platform.scss';

const dataGridColumns = [
  {
    Header: 'ID',
    accessor: 'id',
  },
  {
    Header: 'Study',
    accessor: 'study',
    filter: 'includes',
  },
  {
    Header: 'Country',
    accessor: 'country',
  },
  {
    Header: 'Category',
    accessor: 'category',
  },
  {
    Header: 'Created',
    accessor: 'created',
  },
];

const dataGridSortBy = [
  {
    id: 'id',
    desc: true,
  },
  {
    id: 'study',
    desc: false,
  },
];

const range = (len) => Array.from({ length: len }, (v, i) => i);

const newPerson = (ind) => ({
  id: `M123${Date.now().toString(36) + Math.random().toString(36).substr(2)}`,
  study: `Test${ind}`,
  country: `United States${ind}`,
  category: `Management${ind}`,
  created: '26 Aug 2020',
});

const makeData = (...lens) => {
  const makeDataLevel = (depth = 0) => {
    const len = lens[depth];
    return range(len).map((item, ind) => ({
      ...newPerson(ind),
      subRows: lens[depth + 1] ? makeDataLevel(depth + 1) : undefined,
    }));
  };

  return makeDataLevel();
};

const dropdownItems = [
  { eventKey: 'one', title: 'item one', badge: 100, active: true },
  { eventKey: 'two', title: 'item two', badge: 100 },
  { eventKey: 'three', title: 'item three' },
  { eventKey: 'four', title: 'item four', badge: 100 },
  { eventKey: 'five', title: 'item five', badge: 100 },
  { eventKey: 'six', title: 'item six', badge: 100 },
  { eventKey: 'seven', title: 'item seven', badge: 100 },
  { eventKey: 'eight', title: 'item eight', badge: 100 },
];

const optionsMultiSelect = [
  { value: 'brazil', label: 'Brazil' },
  { value: 'colombia', label: 'Colombia' },
  { value: 'poland', label: 'Poland' },
  { value: 'portugal', label: 'Portugal' },
  { value: 'spain', label: 'Spain' },
];

const optionsMultiSelectSub = [
  { value: 'brazil', label: 'Brazil', subLabel: 'Sao Paolo' },
  { value: 'colombia', label: 'Colombia', subLabel: 'Bogota' },
  { value: 'poland', label: 'Poland', subLabel: 'Warsaw' },
  { value: 'portugal', label: 'Portugal', subLabel: 'Lisbon' },
  { value: 'spain', label: 'Spain', subLabel: 'Madrid' },
];

const groupedOptionsMultiSelect = [
  {
    label: 'Countries',
    options: [
      { value: 'brazil', label: 'Brazil', subLabel: 'Sao Paolo' },
      { value: 'colombia', label: 'Colombia', subLabel: 'Bogota' },
      { value: 'poland', label: 'Poland', subLabel: 'Warsaw' },
      { value: 'portugal', label: 'Portugal', subLabel: 'Lisbon' },
      { value: 'spain', label: 'Spain', subLabel: 'Madrid' },
    ],
  },
  {
    label: 'Cars',
    options: [
      { value: 'bmw', label: 'BMW', subLabel: 'M2' },
      { value: 'mercedes', label: 'Mercedes', subLabel: 'AMG GT' },
      { value: 'ford', label: 'Ford', subLabel: 'GT' },
      { value: 'tesla', label: 'Tesla', subLabel: 'Model S Plaid' },
      { value: 'porshe', label: 'Porshe', subLabel: '911 GT3' },
    ],
  },
];

const DevExamples = () => {
  const [show, setShow] = useState(false);
  const dataGridData = useMemo(() => makeData(32), []);
  const dropZoneRef = useRef(null);
  const [attachedFiles, setAttachedFiles] = useState([]);
  const dataGridSortByUpd = useMemo(() => dataGridSortBy, []);

  const handleModalPrimaryAction = () => setShow(false);
  const handleModalSecondaryAction = () => setShow(false);
  const [selectedValues, setSelectedValues] = useState();

  useEffect(() => {
    setSelectedValues([{ value: 'brazil', label: 'Brazil', subLabel: 'Sao Paolo' }]);
  }, []);

  const handleSelect = (values) => {
    setSelectedValues(values);
  };

  const handleOnDrop = (files) => {
    setAttachedFiles(
      files.map((file) => ({
        name: file.name,
        size: file.size,
        isSuccess: true,
      })),
    );
  };

  const GridControl = {
    filters: [
      {
        id: 'study',
        name: 'Study',
        defaultFilter: true,
        options: [
          {
            value: 'Test1',
            label: 'Test1',
          },
          {
            value: 'Test2',
            label: 'Test2',
          },
          {
            value: 'Test3',
            label: 'Test3',
          },
          {
            value: 'Test4',
            label: 'Test4',
          },
          {
            value: 'Test5',
            label: 'Test5',
          },
          {
            value: 'Test6',
            label: 'Test6',
          },
        ],
      },
      {
        id: 'country',
        name: 'Country',
        defaultFilter: true,
        options: [
          {
            value: 'United States0',
            label: 'United States0',
          },
          {
            value: 'United States1',
            label: 'United States1',
          },
          {
            value: 'United States2',
            label: 'United States2',
          },
          {
            value: 'United States3',
            label: 'United States3',
          },
          {
            value: 'United States4',
            label: 'United States4',
          },
          {
            value: 'United States5',
            label: 'United States5',
          },
        ],
      },
      {
        id: 'category',
        name: 'Сategory',
        options: [
          {
            value: ' 0',
            label: 'United States0',
          },
          {
            value: 'United States1',
            label: 'United States1',
          },
          {
            value: 'United States2',
            label: 'United States2',
          },
          {
            value: 'United States3',
            label: 'United States3',
          },
          {
            value: 'United States4',
            label: 'United States4',
          },
          {
            value: 'United States5',
            label: 'United States5',
          },
        ],
      },
    ],
    secondaryActions: [
      {
        title: 'action1',
      },
      {
        title: 'action2',
      },
      {
        title: 'action3',
      },
    ],
  };

  return (
    <div className="p-5">
      <div style={{ padding: '20px', minHeight: '300px' }}>
        <Dropzone ref={dropZoneRef} onDrop={handleOnDrop} files={attachedFiles} />
      </div>
      <div>
        <Select
          size="md"
          className="select"
          dataTestId="select"
          options={optionsMultiSelect}
          selectedValues={selectedValues}
          onSelect={handleSelect}
        />
      </div>
      <div>
        <Select
          size="md"
          className="select"
          dataTestId="select"
          options={optionsMultiSelectSub}
          selectedValues={selectedValues}
          onSelect={handleSelect}
        />
      </div>
      <div>
        <Select
          size="md"
          className="select"
          dataTestId="select"
          groupedOptions={groupedOptionsMultiSelect}
          selectedValues={selectedValues}
          onSelect={handleSelect}
        />
      </div>
      <div>
        <Check id="check-id" type="radio" checked disabled>
          Test label text
        </Check>
        <br />
        <br />
        <DataGrid
          useRowSelection
          columns={dataGridColumns}
          data={dataGridData}
          sortBy={dataGridSortByUpd}
          rowsPerPageOptions={[10, 20, 30]}
          dataGridControlProps={GridControl}
          draggable
          dataGridBulkActionsProps={{
            actions: [
              { title: 'action1' },
              { title: 'action2' },
              { title: 'action3' },
              { title: 'action4' },
              { title: 'action5action5action5' },
              { title: 'action5action5action6' },
              { title: 'action5action5action7' },
            ],
            defaultDropdownActions: [
              { title: 'action8' },
              { title: 'action9' },
              { title: 'action10' },
            ],
          }}
        />
        <br />
        <Button variant="primary" onClick={() => setShow(true)}>
          Launch demo modal
        </Button>
        <Modal
          show={show}
          handleClose={() => setShow(false)}
          onSecondaryClick={handleModalSecondaryAction}
          onPrimaryClick={handleModalPrimaryAction}
          secondaryActionName="Secondary Action"
          primaryActionName="Save Changes"
          size="lg"
          showFooter
          title="Modal"
          link="#"
          actionLinkName="Link"
        >
          Woohoo, youre reading this text in a modal!
        </Modal>
        <br />
        <br />
        <Card
          showActionBar
          showTitleBar
          actionLinkName="Link"
          actionHeaderName="Button"
          dropdownItems={dropdownItems}
          variant="default"
          // titleAction="button"
          // titleActionVariant="select"
          // optionsSelect={optionsMultiSelect}
          // selectedValues={selectedValues}
          // onHandleSelect={handleSelect}
          link="#"
          badgeContent="100"
          title="Card Heading"
          subtitle="Subtitle"
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur nam quidem rerum
          corrupti ab aliquam assumenda ratione. Temporibus saepe eaque dolore ipsam ab tenetur
          nobis eligendi, debitis quaerat, voluptatem inventore.
        </Card>
      </div>
    </div>
  );
};

const TabItems = [
  { title: 'Dev mode', eventKey: 'devMode' },
  { title: 'Test mode', eventKey: 'testMode' },
];

const App = () => {
  const [currentTab, setCurrentTab] = useState('testMode');

  useEffect(() => {
    if (currentTab === 'testMode') {
      window.history.pushState('', '', window.location.origin);
    }
  }, [currentTab]);

  return (
    <ThemeProvider style={{ padding: '50px' }}>
      <Tabs size="lg" visibleItems={TabItems} onSelect={setCurrentTab} activeKey={currentTab} />
      {currentTab === 'devMode' && <DevExamples />}
      {currentTab === 'testMode' && <ViewComponents />}
    </ThemeProvider>
  );
};

export default App;
