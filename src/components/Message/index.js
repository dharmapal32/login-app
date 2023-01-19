// Write your code here

const Message = props => {
  const {contentType} = props
  if (contentType === 'Please Login') {
    return 'Welcome User'
  } else {
    return 'Please Login'
  }
}

export default Message
