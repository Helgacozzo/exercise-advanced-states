import React, { useState } from "react";

export default function RegistrationForm() {

    const [formData, setFormData] = useState({
        email: '',
        password: '',
        colorePreferito: '',
        sex: ''
    });

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
                    <option value="blu">Blu</option>npm
                </select>
            </div>

            <br />

            <label>
                <h3>Sex:</h3>
                <div>
                    Male
                    <input
                        type="radio"
                        name="sex"
                        value="m"
                        checked={formData.sex === 'm'}
                        onChange={(e) => setFormData({
                            ...formData,
                            sex: e.target.value
                        })}
                    />
                </div>

                <div>
                    Female
                    <input
                        type="radio"
                        name="sex"
                        value="f"
                        checked={formData.sex === 'f'}
                        onChange={(e) => setFormData({
                            ...formData,
                            sex: e.target.value
                        })}
                    />
                </div>

            </label>

            <br />

            <button onClick={() => {
                console.log(formData);
            }}>Registrati</button>

            <br />
            <hr />

        </>
    );
}