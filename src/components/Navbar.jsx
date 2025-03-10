import React from 'react'

const Navbar = () => {
    return (
        <nav className=" flex bg-blue-900 text-white justify-between py-2">
            <div className="logo font-bold mx-4 text-lg">
                iTask
            </div>
            <ul className=
                "flex mx-8 gap-8">
                <li className="hover:font-bold">Home</li>
                <li className="hover:font-bold">Your Todos</li>
            </ul>
        </nav>
    )
}

export default Navbar
