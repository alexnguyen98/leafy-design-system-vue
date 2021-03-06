
'use strict';

import LIcon from './icon'
import LButton from './button'
import LCheckbox from './checkbox'
import LGoogle from './google-icon'
import LFb from './fb-icon'

const components = [
  LIcon,
  LButton,
  LCheckbox,
  LGoogle,
  LFb
]

const install = (Vue) => {
  components.map(component => {
    Vue.component(component.name, component)
  })
}

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
}

export{
  LIcon,
  LButton,
  LCheckbox,
  LGoogle,
  LFb
}

export default install