import React from "react";
import './home.css'

const linkBtn = document.querySelectorAll('ul li');
console.log(linkBtn);

const Home = ()=>{
    return(
        <section>
            <header>
                <div className="container">
                    <div className='logo'>
                        logo
                    </div>
                    <ul className='links'>
                        <li>
                            <a href='#home'>
                                Home
                            </a>
                        </li>
                        <li>
                            <a href='#home'>
                                Home
                            </a>
                        </li>
                        <li>
                            <a href='#home'>
                                Home
                            </a>
                        </li>
                        <li>
                            <a href='#home'>
                                Home
                            </a>
                        </li>
                        <li>
                            <a href='#home'>
                                Home
                            </a>
                        </li>
                    </ul>
                </div>
            </header>
            <div className='box'>
                <div className="container">
                    <div className="text">
                        home
                    </div>
                    <div className="img">
                        img
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Home;
