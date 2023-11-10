import './ButtonStyle.css'

const Button = ({name, func, text, className, id}) => {
  return (
    <button className={className? 'highlight' : ''} id={id} name={name} onClick={func}>{text}</button>
  )
}

export default Button