import React from 'react'
import reactCSS from 'reactcss'

export const FacebookCounterReaction = ({ reaction, bg, index, icons }) => {
  const styles = reactCSS({
    'default': {
      reaction: {
        width: '16px',
        height: '16px',
        backgroundSize: '100% 100%',
        borderRadius: '8px',
        backgroundImage: `url(${ icons.find('facebook', reaction) })`,
        boxShadow: `0 0 0 2px ${ bg }`,
        position: 'relative',
        zIndex: index,
      },
    },
  })
  return (
    <div style={ styles.reaction } />
  )
}

export default FacebookCounterReaction
