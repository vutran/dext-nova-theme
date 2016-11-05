colors = require('nova-colors');

module.exports = {
  window: {
    backgroundColor: colors.uiGroups.background,
    color: colors.uiGroups.userCurrentState,
    fontWeight: 200,
  },
  searchBase: {
    borderColor: colors.uiGroups.background,
    fontWeight: 200,
  },
  search: {
    color: colors.uiGroups.userCurrentState,
    fontWeight: 200,
  },
  result: {
    color: colors.uiGroups.userCurrentState,
    fontWeight: 200,
  },
  resultActive: {
    backgroundColor: colors.uiGroups.gray2,
    color: colors.syntaxGroups.identifier,
    fontWeight: 200,
  },
  resultDetails: {
    backgroundColor: colors.uiGroups.background,
    color: colors.uiGroups.userCurrentState,
    borderColor: colors.uiGroups.background,
    fontWeight: 200,
  },
};
