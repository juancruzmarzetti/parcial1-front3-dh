import { useState } from "react";
import Card from "./Card";
import ErrorMessage from "./ErrorMessage";

const Form = () => {

    const [user, setUser] = useState({name: "", surname: "", favSong: ""});
    const [show, setShow] = useState(false);
    const [error, setError] = useState(false);

    function handleName(e){
        setUser({...user, name: e.target.value});    
    }
    function handleSurName(e){
        setUser({...user, surname: e.target.value});    
    }
    function handleFavSong(e){
        setUser({...user, favSong: e.target.value});    
    }
    function handleSubmit(e){
        e.preventDefault();
        if(
            user.name.trim().length > 3 &&
            user.surname.length > 6 &&
            user.favSong.trim()
          ){
            setShow(true);
            setError(false);
          }else {
            setError(true);
            if(show === true){
                setShow(false);
            }
        }
    }


    return (
        <>
            <form onSubmit={handleSubmit} className="w-2/5	flex flex-col bg-blue-950 rounded-md justify-center items-center shadow-xl shadow-white">
                <div className="m-3 mt-10 w-2/3 flex">
                    <label className="w-3/6 text-white">Name:</label>
                    <input onChange={handleName} value={user.name} type='text' id='name' name='surname' className="w-3/6 rounded-md"/>
                </div>
                <div className="m-3 w-2/3 flex">
                    <label className="w-3/6 text-white">Surname:</label>
                    <input onChange={handleSurName} value={user.surname} type='text' id='surname' name='surname' className="w-3/6 rounded-md"/>
                </div>
                <div className="m-3 mb-5 w-2/3 flex">
                    <label className="w-3/6 text-white">Favorite Song:</label>
                    <input onChange={handleFavSong} value={user.favSong} type='text' id='fav-song' name='fav-song' className="w-3/6 rounded-md"/>
                </div>
                <button type='submit' className="w-3/6 mb-10 mt-5 bg-black text-white px-2.5 py-1 w-20 rounded-md">Send</button>
            </form>
            <div className="mt-10">
                {show && <Card user={user}/>}
                {error && <ErrorMessage/>}
            </div>
        </>
    )
}

export default Form;