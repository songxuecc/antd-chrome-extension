import React, { Component } from 'react';
import { Button } from 'antd';
import   './AddHHBtn.scss';



export default class AddHHBtn extends Component {
    constructor(props) {
        super(props);
        this.state = {
            messageFromBg: null
        };
    }

    // Background 通讯
    async sendMsgToBackground() {
        const res = await contentClient.seedMessage(new ChromeMessage('test connect'));

        this.setState({
            messageFromBg: res.msg
        });
    }

    render() {
        return (
            <div className={`${WRAPPER_CLASS_NAME}`}>
                <Button type="primary" onClick={() => this.sendMsgToBackground()} className="red">
                    点击加入虎虎
                </Button>
            </div>
        );
    }
}
