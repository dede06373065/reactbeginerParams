import React, { Component } from 'react'
import { Link, Switch,Route} from 'react-router-dom'
import Detail from './detail/detail'

export default class Message extends Component {
    state = {
        messageArr: [
            { id: '01', title: "message 1" },
            { id: '02', title: "message 2" },
            { id: '03', title: "message 3" }
        ]
    }
    render() {
        const { messageArr } = this.state
        return (
            <div>
                <div className="content">This is my message!</div>
                <ul>
                    {//1.params
                        messageArr.map((msgObj) => {
                            return (
                                <li key={msgObj.id}>
                                    
                                    <Link to={`/home/message/detail/${msgObj.id}/${msgObj.title}`}>{msgObj.title}</Link>
                                </li>
                                
                            )
                        })
                    }
                </ul>
                <Switch>
                    <Route path="/home/message/detail/:id/:title" component={Detail}/>
                </Switch>
                
            </div>
        )
    }
}
