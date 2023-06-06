import React from 'react'
import reactCSS from 'reactcss'
import _ from 'lodash'
import icons from '../../helpers/icons'

import FacebookSelectorEmoji from './FacebookSelectorEmoji'

export const FacebookSelectorRC = ({ iconSize, reactions, variant, onSelect }) => {
  const styles = reactCSS({
    'default': {
      selector: {
        display: 'flex'
      },
      icon: {
        width: `${ iconSize + 10 }px`,
      },
    },
  })

  return (
    <div style={ styles.selector }>
      { _.map(reactions, (reaction) => {
        return (
          <div style={ styles.icon } key={ reaction }>
            <FacebookSelectorEmoji
              icon={ icons.find(variant, reaction) }
              label={ reaction }
              onSelect={ onSelect }
            />
          </div>
        )
      }) }
    </div>
  )
}

FacebookSelector.defaultProps = {
  reactions: ['love', 'haha', 'wow', 'sad'],
  iconSize: 38,
  variant: 'facebook',
}

export default FacebookSelectorRC
