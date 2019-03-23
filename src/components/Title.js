import React from 'react';

const title = (props) => {
  // props is an object and to access its properties we have to use do notation
  // without .message sends as object and with .message it sends only the message
  // console.log('props: ', props.message); 
  return (
    <div>
      { props.message }
    </div>
  )
}

export default title;