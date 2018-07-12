import React, { Component } from 'react';
import '../style/footer.css';
import '../style/modal.css';
import Modal from 'react-modal';
import Popup from "reactjs-popup";
import fireBase from "../fire";


var db = fireBase.firestore();
export default class Footer extends Component {
    constructor(props){
        super(props);
        this.state = { open: false };
        this.addfb = this.addfb.bind(this);
    }
    openModal = () => {
        this.setState({ open: true });
    };
    closeModal = () => {
        this.setState({ open: false });
    };
    addfb(){

        // Get a reference to the database service
        var title = this.refs.title.value;
        var description = this.refs.descr.value;
        var url = 'https://www.youtube.com/embed/'+this.refs.url.value;
        var uid = localStorage.getItem('uid');
         db.collection("youtube").add({
             userId:uid,
             title: title,
             url: url,
             description:description
         })
         .then(function(docRef) {
             console.log("Document written with ID: ", docRef.id);
             db.collection("youtube").doc(uid).update({
                 videoId:docRef.id,
                 userId:uid,
                 title: title,
                 url: url,
                 description:description
             })

         })
         .catch(function(error) {
             console.error("Error adding document: ", error);
         });
    }

    render() {
        return (
            <div>
                <div className="footer">
                    <Popup
                        trigger={<div className="text-center"> <i className="fas cfas fa-plus-circle" onClick={this.openModal}></i></div>}
                        modal
                        closeOnDocumentClick>


                        <h3 className="header cb"> Add Video </h3>
                        <div>
                            <input type='text' className='col-md-10 cb' ref='title' placeholder='title'/>
                            <input type='text' className='col-md-10 cb' ref='url' placeholder='url'/>

                            <input type='text' className='col-md-10 cb' ref='descr' placeholder='descr'/>

                        </div>
                        <div>
                        <h3 className="header cb"> Add Video </h3>
                            <button className="cb" onClick={this.addfb} >Add Url</button>
                        </div>

                    </Popup>
                </div>
            </div>
        );
    }
}

