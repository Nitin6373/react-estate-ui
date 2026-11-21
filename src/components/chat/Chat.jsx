

import React, { useState } from 'react'
import "./chat.scss"

const Chat = () => {
    const [showChat, setshowChat] = useState(true)
    return (
        <div className='chatCont'>
            <div className="messages">
                <h1>Messages</h1>

                <div className="message">
                    <img src="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" />
                    <span>John Doe</span>
                    <p>
                        Lorem ipsum dolor sit amet...
                    </p>
                </div>
                <div className="message">
                    <img src="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" />
                    <span>John Doe</span>
                    <p>
                        Lorem ipsum dolor sit amet...
                    </p>
                </div>
                <div className="message">
                    <img src="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" />
                    <span>John Doe</span>
                    <p>
                        Lorem ipsum dolor sit amet...
                    </p>
                </div>
                <div className="message">
                    <img src="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" />
                    <span>John Doe</span>
                    <p>
                        Lorem ipsum dolor sit amet...
                    </p>
                </div>
                <div className="message">
                    <img src="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" />
                    <span>John Doe</span>
                    <p>
                        Lorem ipsum dolor sit amet...
                    </p>
                </div>
                <div className="message">
                    <img src="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" />
                    <span>John Doe</span>
                    <p>
                        Lorem ipsum dolor sit amet...
                    </p>
                </div>
                <div className="message">
                    <img src="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" />
                    <span>John Doe</span>
                    <p>
                        Lorem ipsum dolor sit amet...
                    </p>
                </div>
                <div className="message">
                    <img src="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" />
                    <span>John Doe</span>
                    <p>
                        Lorem ipsum dolor sit amet...
                    </p>
                </div>
                <div className="message">
                    <img src="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" />
                    <span>John Doe</span>
                    <p>
                        Lorem ipsum dolor sit amet...
                    </p>
                </div>
                <div className="message">
                    <img src="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" />
                    <span>John Doe</span>
                    <p>
                        Lorem ipsum dolor sit amet...
                    </p>
                </div>
            </div>
            {showChat !== null && (
                <div className="chatBox">
                    <div className="top">
                        <div className="user">
                            <img src="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" />
                            <span>John Doe</span>
                        </div>
                        <div className="close" onClick={()=>setshowChat(null)}>X</div>
                    </div>
                    <div className="center">
                        <div className="chatMsg own">
                            <p>Lorem ipsum dolor sit amet...</p>
                            <span>1 hour Ago</span>
                        </div>
                        <div className="chatMsg">
                            <p>Lorem ipsum dolor sit amet...</p>
                            <span>1 hour Ago</span>
                        </div>
                        <div className="chatMsg own">
                            <p>Lorem ipsum dolor sit amet...</p>
                            <span>1 hour Ago</span>
                        </div>
                        <div className="chatMsg">
                            <p>Lorem ipsum dolor sit amet...</p>
                            <span>1 hour Ago</span>
                        </div>
                        <div className="chatMsg own">
                            <p>Lorem ipsum dolor sit amet...</p>
                            <span>1 hour Ago</span>
                        </div>
                        <div className="chatMsg">
                            <p>Lorem ipsum dolor sit amet...</p>
                            <span>1 hour Ago</span>
                        </div>
                        <div className="chatMsg own">
                            <p>Lorem ipsum dolor sit amet...</p>
                            <span>1 hour Ago</span>
                        </div>
                        <div className="chatMsg">
                            <p>Lorem ipsum dolor sit amet...</p>
                            <span>1 hour Ago</span>
                        </div>
                        <div className="chatMsg own">
                            <p>Lorem ipsum dolor sit amet...</p>
                            <span>1 hour Ago</span>
                        </div>
                        <div className="chatMsg">
                            <p>Lorem ipsum dolor sit amet...</p>
                            <span>1 hour Ago</span>
                        </div>
                    </div>
                    <div className="bottom">
                        <textarea name="" id="">

                        </textarea>
                        <button>Send</button>
                    </div>
                </div>
            )}
        </div>
    )
}

export default Chat
