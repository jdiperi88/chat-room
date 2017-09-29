import React, {Component} from 'react';

class ChatRoom extends Component{

    constructor(props, context){
            super(props, context)
            this.state = {
                message: [{
                    id:0, text:'first message'
                }]

            }
    }

    render(){
        return(
            <div> 
                <ol>
                    <li>1</li>
                    <li>2</li>
                    <li>3</li>
                    <li>4</li>
                </ol>
                <input type="text" placeholder="Message" />
                <button> Submit Message </button>
            </div>
        )
    }
}

export default ChatRoom;