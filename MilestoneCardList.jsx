import React from 'react';

import MilestoneCard from './MilestoneCard';

const MilestoneCardListItem = (props) => {
  const { milestone, setMilestones } = props;
  return (
    <li>
      <MilestoneCard milestone={milestone} setMilestones={setMilestones} />
    </li>
  );
};

const MilestoneCardList = (props) => {
  const { milestones, setMilestones } = props;
  const milestoneCardListItems = milestones.map((milestone) => {
    const { id } = milestone;
    return (
      <MilestoneCardListItem
        key={id}
        milestone={milestone}
        setMilestones={setMilestones}
      />
    );
  });
  return <ul>{milestoneCardListItems}</ul>;
};

export default MilestoneCardList;
