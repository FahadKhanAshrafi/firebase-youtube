import React, { Component } from 'react';
import Popup from "reactjs-popup";

export default class Close extends Component {
    constructor(props){
        super(props);

    }
    render() {
        return (
            <div>
                <Popup trigger={<button>Trigger</button>} modal>
                    {close => (
                        <div>
                            Content here
                            <a className="close" onClick={close}>
                                &times;
                            </a>
                        </div>
                    )}
                </Popup>

            </div>
        );
    }
}

