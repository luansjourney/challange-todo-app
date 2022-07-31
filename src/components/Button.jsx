

function Button({children, variant, type, ...rest}) {
  return (
    <button type={type} className={variant ? 'button '+ variant : 'button' } {...rest} >
        {children}
    </button>
  )
}

function SelectButton ({children, ...rest}) {

  return( 
    <select className="button __select" {...rest} >{children}</select>
  )
}

export {SelectButton};
export default Button;