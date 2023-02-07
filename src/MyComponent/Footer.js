import React from 'react'

const Footer = () => {
  let footerStyle = {
    position: "absolute",
    width: "100%",
    bottom: "0%"
  }
  return (
    <footer className='bg-dark text-light py-3' style={footerStyle}>
      <p className='text-center'>
        Copyright &copy; myTodosList.in
      </p>
    </footer>
  )
}

export default Footer
