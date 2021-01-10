import { generateUniqueId } from './helpers';

const generateDefaultLabelWithUniqueId = () => ({
  id: generateUniqueId(),
  name: 'Dummy label',
  description: 'Dummy description',
  color: '#ffad05',
});

export default generateDefaultLabelWithUniqueId;
