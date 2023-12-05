import React, { useState } from "react";

export default function RegistrationForm() {

    const [formData, setFormData] = useState({
        email: '',
        password: '',
        colorePreferito: '',
        sex: ''
    });

    const [isButtonPressed, setIsButtonPressed] = useState(false);

    return (
        <>
            <h4>Inserisci i tuoi dati</h4>

            <div>
                <p>Email:</p>
                <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({
                        ...formData,
                        email: e.target.value
                    })}
                />
            </div>

            <div>
                <p>Password:</p>
                <input
                    type="password"
                    value={formData.password}
                    onChange={(e) => setFormData({
                        ...formData,
                        password: e.target.value
                    })}
                />
            </div>

            <div>
                <p>Colore preferito:</p>
                <select
                    value={formData.colorePreferito}
                    onChange={(e) => setFormData({
                        ...formData,
                        colorePreferito: e.target.value
                    })}
                >
                    <option value="rosso">Rosso</option>
                    <option value="verde">Verde</option>
                    <option value="blu">Blu</option>
                </select>
            </div>

            <br />

            <div>
                <input
                    type="radio"
                    id="maschio"
                    checked={formData.sex === 'maschio'}
                    onChange={() => setFormData({
                        ...formData,
                        sex: 'maschio'
                    })}
                />
                <label htmlFor="maschio">Maschio</label>

                <input
                    type="radio"
                    id="femmina"
                    checked={formData.sex === 'femmina'}
                    onChange={() => setFormData({
                        ...formData,
                        sex: 'femmina'
                    })}
                />
                <label htmlFor="femmina">Femmina</label>
            </div>

            <br />

            <button onClick={() => {
                setIsButtonPressed(true)
            }}>Registrati</button>

            <div>
                {isButtonPressed &&
                    <p>Ciao, la tua email è: {formData.email},
                        il tuo colore preferito è: {formData.colorePreferito},
                    </p>
                }
            </div>

            <br />
            <hr />

        </>
    );
}