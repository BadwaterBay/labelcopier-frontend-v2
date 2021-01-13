import { generateUniqueId } from './helpers';

const generateDefaultMilestoneWithUniqueId = () => ({
  id: generateUniqueId(),
  state: 'open',
  title: 'Default milestone',
  description: 'Default description',
  dueOn: '',
  originalState: '',
  originalTitle: '',
  originalDescription: '',
  originalDueOn: '',
  action: 'create',
  validation: 'valid',
});

export default generateDefaultMilestoneWithUniqueId;
