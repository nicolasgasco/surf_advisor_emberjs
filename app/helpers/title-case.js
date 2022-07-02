import { helper } from '@ember/component/helper';

export default helper(function titleCase([string]) {
  const tokenizedString = string
    .split(' ')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase());
  return tokenizedString.join(' ');
});
