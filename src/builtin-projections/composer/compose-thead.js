import _ from 'underscore';

export function composeThead({ config }) {
  return {
    props: {},
    classes: [],
    styles: {},
    events: {},
    trs: [{
      key: 'default',
      props: {},
      events: {},
      ths: _.chain(config.columns)
        .map(column => config.composeThs({ column, config }))
        .flatten()
        .compact()
        .value(),
    }],
  };
}