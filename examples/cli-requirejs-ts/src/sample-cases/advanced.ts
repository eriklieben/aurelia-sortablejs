export class AdvancedCustomElement {
  public advancedPutPullOptions = {
    group: {
      name: 'advanced',
      pull: true,
      put: true
    },
    animation: 150
  }

  public advancedOnlyPullNoOrderingOptions = {
    sort: false,
    group: {
      name: 'advanced',
      pull: 'clone',
      put: false
    },
    animation: 150
  }

  public advancedOnlyPutOptions = {
    group: {
      name: 'advanced',
      pull: false,
      put: true
    },
    animation: 150
  }
}
