'use client'
import { useState } from "react"
import styles from "./state.module.css"

export default function State() {
    const [name, setName] = useState('');
    const [message, setMessage] = useState('');

    const handleInputChange = (e) => {
        setName(e.target.value);
    };

    const handleButtonClick = () => {
        setMessage(`Olá ${name}, Hello Kitty te dá as boas-vindas!`);
    };

    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Hello Kitty</h1>
            <input 
                className={styles.input} 
                type="text" 
                value={name} 
                onChange={handleInputChange} 
                placeholder="Digite seu nome" 
            />
            <button className={styles.button} onClick={handleButtonClick}>Enviar</button>
            {message && <p className={styles.message}>{message}</p>}
        </div>
    )
}
