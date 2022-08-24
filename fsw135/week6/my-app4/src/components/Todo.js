
export default function Todo(){
  const {title, description, imgUrl, _id} = props
  return (
    <div className="todo">
    <h1>{title}</h1>
    <h3>{description}</h3>
    <img src={imgUrl} alt='Todo Pic' width={300} />
    </div>
  )
}