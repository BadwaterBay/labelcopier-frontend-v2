import { generateUniqueId } from './helpers';

const generateDefaultLabelWithUniqueId = () => ({
  id: generateUniqueId(),
  name: 'Default label',
  description: 'Default description',
  color: '#ffad05',
});

export default generateDefaultLabelWithUniqueId;
