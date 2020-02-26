const getComponent = () => import(/* webpackChunkName: "lodash" */ 'lodash').then(({
  default: _
}) => _.join(['hello', 'webpack'], ' '))

export default getComponent;
