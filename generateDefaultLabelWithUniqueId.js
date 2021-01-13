import { generateUniqueId } from './helpers';

const generateDefaultLabelWithUniqueId = () => ({
  id: generateUniqueId(),
  name: 'Default label',
  description: 'Default description',
  color: '#ffad05',
  originalName: '',
  originalDescription: '',
  originalColor: '',
  action: 'create',
  validation: 'valid',
});

export default generateDefaultLabelWithUniqueId;
