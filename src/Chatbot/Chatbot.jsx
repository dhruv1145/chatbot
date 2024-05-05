import React from 'react'
import './Chatbot.css'

function Chatbot() {
    return (
        <div>
            <div class="chatbot-container">
                <div id="header">
                    <h1>Chatbot</h1>
                </div>
                <div id="chatbot">
                    <div id="conversation">
                        <div class="chatbot-message">
                            <p class="chatbot-text">Hi! I,m Lauren👋 it's great to see you!</p>
                            <p class="chatbot-text">What would You like to access</p>
                            <ul>
                                <li><button><a href="https://todo-list-gray-ten.vercel.app/">To do list</a></button></li>
                                <li><button><a href="https://reminder-app-eight.vercel.app/">Medicine Reminder</a></button></li>
                                <li><button>Location Tracking</button></li>
                            </ul>
                        </div>
                    </div>
                    <form id="input-form">
                        <message-container>
                            <input id="input-field" type="text" placeholder="Type your message here" />
                            <button id="submit-button" type="submit">
                                <img class="send-icon" src="send-message.png" alt="" />
                            </button>
                        </message-container>

                    </form>
                </div>

            </div>


        </div>
    )
}

export default Chatbot