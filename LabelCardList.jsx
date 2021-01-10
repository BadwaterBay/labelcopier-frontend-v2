import React from 'react';

import LabelCard from './LabelCard';

const LabelCardListItem = (props) => {
  const { label, setLabels } = props;
  return (
    <li>
      <LabelCard label={label} setLabels={setLabels} />
    </li>
  );
};

const LabelCardList = (props) => {
  const { labels, setLabels } = props;
  const labelCardListItems = labels.map((label) => {
    const { id } = label;
    return <LabelCardListItem key={id} label={label} setLabels={setLabels} />;
  });
  return <ul>{labelCardListItems}</ul>;
};

export default LabelCardList;
