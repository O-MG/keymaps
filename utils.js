function reverseObjectMapping(obj) {
  return Object.entries(obj).reduce(
    (prev, [key, value]) => ({
      ...prev,
      [value]: key,
    }),
    {},
  );
}

function reverseModifierScancodeMapping(modifier, obj) {
  return Object.entries(obj).reduce(
    (prev, [key, [unmodified, modified]]) => ({
      ...prev,
      [unmodified]: `00,${key}`,
      [modified]: `${modifier},${key}`,
    }),
    {},
  );
}

export default (modifier) => {
  return {
    reverseObjectMapping,
    reverseModifierScancodeMapping: reverseModifierScancodeMapping.bind(
      null,
      modifier,
    ),
  };
};
