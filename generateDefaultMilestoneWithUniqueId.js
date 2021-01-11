import { generateUniqueId } from './helpers';

const generateDefaultMilestoneWithUniqueId = () => ({
  id: generateUniqueId(),
  state: 'open',
  title: 'Default milestone',
  description: 'Default description',
  dueOn: '',
});

export default generateDefaultMilestoneWithUniqueId;
