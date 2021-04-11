import React, { Component } from 'react'
import styles from './index.module.css'

const Button = ({ type, title, onClick }) => {
    return (
        <button type={type} className={styles.button} onClick={onClick} >{title}</button>
    )
}

export default Button