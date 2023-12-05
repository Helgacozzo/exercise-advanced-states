import { useState } from "react"

export default function () {

    const [name, setName] = useState('')
    const [saluto, setSaluto] = useState('')

    return (

        <>

            <h4>Inserisci il tuo nome:</h4>

            <input
                type="text"
                value={name}
                onChange={e => setName(e.target.value)}
            />

            <button onClick={() => {
                setSaluto(`Ciao, ${name}!`);
                setName('');
            }
            }>Saluta!</button>

            <p>{saluto}</p>

            <br />
            <hr />

        </>


    )

}