const Card = ({user}) => {
  const {name, surname, favSong} = user;
  return (
    <div className="bg-green-300 p-6 rounded-md">
      <h2 className="text-xl">¡Hola <span className="font-bold">{name} {surname}</span>!</h2>
      <br/>
      <p>Sabemos que tu canción favorita es <span className="font-bold">{favSong}</span></p>
    </div>
  )
}

export default Card