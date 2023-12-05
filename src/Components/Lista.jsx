import { useState } from "react";

export default function ListaInvitati() {

    const [lista, setLista] = useState([]);
    const [newElement, setNewElement] = useState('');
    const [saluto, setSaluto] = useState('')

    return (

        <>
            <br />
            <h3>Lista Invitati</h3>

            <div>
                <input
                    type="text"
                    value={newElement}
                    onChange={(e) => setNewElement(e.target.value)}
                />

                <button onClick={() => {
                    setLista([
                        ...lista,
                        newElement
                    ]);
                    setNewElement('');
                }}>Aggiungi</button>
            </div>

            <ul>
                {lista.map((element, i) => (

                    <li key={i}>{element}

                        <button onClick={() => {
                            setLista(lista.filter(el => el !== element))
                        }}>Rimuovi</button>

                        <button onClick={() => {
                            setSaluto(`Ciao, ${element}!`)
                        }}>Saluta!</button>

                        <p>{saluto}</p>

                    </li>

                ))}

            </ul>

        </>

    );
}
