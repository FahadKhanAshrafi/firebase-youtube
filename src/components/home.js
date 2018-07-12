import React, { Component } from 'react';
import Nav from "./nav";
import Card from "./card";
import Footer from "./footer";
import fireBase from "../fire";
import '../style/styleCard.css'

export default class Home extends Component {
    constructor(props){
        super(props);
        this.state={
            datas:[],
            newdata:[],
            loder:false
        }
        this.fatchData = this.fatchData.bind(this);
    }
    componentWillMount(){
        this.fatchData();
    }

   async fatchData(){
        var db = fireBase.firestore();
        var that = this;
        db.collection("youtube")
            .onSnapshot(function(querySnapshot) {
                var datas = [];
                querySnapshot.forEach(function(doc) {
                    console.log('From fire base',doc.data());
                   var data = {
                       vid:doc.id,
                        id:doc.data().userId,
                        title:doc.data().title,
                        description:doc.data().description,
                        url:doc.data().url
                    }
                   datas.push(data);
//                   console.log('DATA',data);
                   console.log('DATAs',datas);
                    that.setState({datas:datas})
                    console.log(that.state.datas,'state')

                });
            });
    }

    render() {
        var data = this.state.datas.map((item,i)=>{
            return <Card key={i}
                         vid={item.vid}
                         title={item.title}
                         description={item.description}
                         url={item.url}/>
        });
        return (
            <div>
                <Nav/>
                <div className='container-fluid'>
                    <div className='row'>
                <ul className='list-inline'>{data}</ul>
                </div>
                </div>
                {/*<button onClick={this.fatchData}></button>*/}
                <Footer/>
            </div>
        );
    }
}

