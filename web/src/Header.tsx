import React from 'react'

interface HeaderProps{
    title: string;
    color?: string //aceita nulo
}

//function Header()
const Header: React.FC<HeaderProps> = (props) => {
    return (
        <header>
            <h1>{props.title}</h1>
        </header>
    )
}

export default Header;