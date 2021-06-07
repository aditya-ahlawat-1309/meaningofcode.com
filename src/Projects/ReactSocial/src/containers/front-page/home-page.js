import React from 'react'
import { SignInBtn } from '../../components'
import { CreatePost, Navbar } from '../../containers'
import Feed from '../../containers/feed'


import './style.css'

export default function HomePage() {
    return (
        <div className="home">
        <Navbar/>
            <CreatePost/>
            
            <Feed/>
        </div>
    )
}
