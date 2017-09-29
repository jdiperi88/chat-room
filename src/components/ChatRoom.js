import React, {Component} from 'react';

class ChatRoom extends Component{

    constructor(props, context){
            super(props, context)
            this.state = {
                messages: [
                    {id:0, text:'first message'},
                    {id:0, text:'second message'},
                ]

            }
    }

    render(){
const currentMessage = this.state.messages.map((message, i ) =>{
    return (
        <li key={message.id}>{message.text}</li>
    )
})

        return(
            <div> 
                <ol>
                    {currentMessage}
                </ol>
                <input type="text" placeholder="Message" />
                <button> Submit Message </button>
            </div>
        )
    }
}

export default ChatRoom;