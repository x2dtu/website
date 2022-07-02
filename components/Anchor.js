const Anchor = ({ id }) => {
  // 64px is min height of theme.mixins.toolbar which we use for our drawer header
  return <span id={id} style={{ scrollMarginTop: 64 }}></span>;
};

export default Anchor;
