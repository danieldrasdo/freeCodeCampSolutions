function spinalCase(str) {
  return str
  .replace(/([a-z])([A-Z])/g, '$1 $2')
  .replace(/\s/g, '-')
  .replace(/_/g, '-')
  .replace(/--/g, '-')
  .toLowerCase();
}

spinalCase('This Is Spinal Tap');
