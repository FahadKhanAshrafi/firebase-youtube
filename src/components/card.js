import React, { Component } from 'react';
import '../style/styleCard.css'
import Popup from "reactjs-popup";
import fireBase from "../fire";
var db = fireBase.firestore();

export default class Card extends Component {
    constructor(props){
        super(props);
    this.editfb = this.editfb.bind(this);
    this.deletfb = this.deletfb.bind(this);
    }
deletfb(){
        var vid =this.props.vid;
        db.collection('youtube').doc(vid).delete();
}

    editfb(){
        var vid =this.props.vid;
        console.log(vid)
        var title = this.refs.title.value;
        var description = this.refs.descr.value;
        var url = 'https://www.youtube.com/embed/'+this.refs.url.value;
        var uid = localStorage.getItem('uid');
        // Get a reference to the database service
       /* if(!this.refs.title.value){ this.props.title}else{title = this.refs.title.value}
        if(!this.refs.descr.value){this.props.description}else{description = this.refs.descr.value}
        if(!this.refs.url.value){this.props.url}else{url = 'https://www.youtube.com/embed/'+this.refs.url.value}*/
        var db = fireBase.firestore();
        db.collection("youtube").doc(vid).update({
            title: title,
            url: url,
            description:description
        }).catch(function(error) {
                console.error("Error adding document: ", error);
            });

    }
    render() {
        return (

            <li style={{marginLeft:25}}>
                {/*profile div*/}

                <div className="card" style={{width:'280px',marginBottom:'25px',marginRight:'10px'}}>
                    <img className="card-img-top" src={require('../img/img_avatar.png')} alt="Card image cap" style={{width:'280px',height:'286px',padding:5}}/>
                    <div className="ccard-body">
                        <h3 className="card-title Ccard-title">{this.props.title}</h3>
                        <p className="card-text Ccard-text">{this.props.description}</p>
                        <Popup
                            trigger={<button className="btn btn-primary"  onClick={this.openModal}>Play <i className="fas fa-play"></i></button>}
                            modal
                            closeOnDocumentClick>
                            {close => (
                                <div>
                                    <a className="close" onClick={close}>
                                        &times;
                                    </a>


                            <h3 className="header cb"> Watch Video </h3>
                            <iframe width="560" height="315" src={this.props.url}
                                    frameBorder="0" allow="autoplay; encrypted-media" allowFullScreen></iframe>
                                </div>
                                    )}
{/*
                            <div class="embed-responsive embed-responsive-21by9">
                                    <iframe class="embed-responsive-item" src={this.props.url}>
                                    </iframe>
                                </div>
*/}
                        </Popup>
                        <Popup
                            trigger={<button className="btn btn-primary"  onClick={this.openModal}>Edit <i className="fas fa-edit"></i></button>}
                               modal
                               closeOnDocumentClick
                               >
                            {close => (
                            <div>
                                <a className="close" onClick={close}>
                                    &times;
                                </a>
                            </div>
                            )}

                            <h3 className="header cb"> Edit Video </h3>
                            <div>

                                <input type='text' className='col-md-10 cb' ref='title' placeholder={this.props.title} />
                                <input type='text' className='col-md-10 cb' ref='url' placeholder={this.props.url} />
                                <input type='text' className='col-md-10 cb' ref='descr' placeholder={this.props.description}/>

                            </div>
                            <div>
                                <button className="cb" onClick={this.editfb}>Edit Url</button>
                            </div>


                        </Popup>
                        <button className="btn btn-primary" onClick={this.deletfb} >Delet<i className="fas fa-trash-alt"></i></button>

                    </div>
                </div>

                {/*profile col-md-3*/}
                {/*<div className="card col-md-3" style={{margin:5}}>
                    <img className="card-img-top" src={require('../img/img_avatar.png')} alt="Card image cap" style={{width:'280px',height:'286px',margin:'-13px'}}/>
                    <div className="card-body">
                        <h3 className="card-title">Card title</h3>
                        <p className="card-text">Some quick example text to build on the card title and make up the
                            bulk of the card's content.</p>
                        <a href="#" className="btn btn-primary">Go somewhere</a>
                    </div>
                </div>*/}
            </li>

        );
    }
}

















