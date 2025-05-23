import React from 'react'
import Sidebar from '../Components/Sidebar/Sidebar'
import ChatList from '../Components/ChatList/ChatList'

const Layout = ({ children }) => {
    return (
        <>
            <header>

            </header>

            <main className='main_section'>
                {children}
            </main>

            <section className='d-flex'>
                <Sidebar />
                <ChatList />
            </section>
        </>
    )
}

export default Layout