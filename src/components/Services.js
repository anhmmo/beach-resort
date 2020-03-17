import React, { Component } from 'react';
import {FaCocktail, FaHiking, FaShuttleVan, FaBeer} from 'react-icons/fa';
import Title from './Title';

class Services extends Component {
    state = {
        services:[
            {
                icon:<FaCocktail/>,
                title:"free cocktails",
                info: "lorem ipsum dolor sit amet consectusur adiising elit Magni corpicos!"
            },
            {
                icon:<FaHiking/>,
                title:"Endless Hiking",
                info: "lorem ipsum dolor sit amet consectusur adiising elit Magni corpicos!"
            },
            {
                icon:<FaShuttleVan/>,
                title:"Free shuttle",
                info: "lorem ipsum dolor sit amet consectusur adiising elit Magni corpicos!"
            },
            {
                icon:<FaBeer/>,
                title:"Strongest Beer",
                info: "lorem ipsum dolor sit amet consectusur adiising elit Magni corpicos!"
            }
        ]
    }
    render() {
        return (
            <section className="services">
                <Title title="services" />
                <div className="services-center">
                    {this.state.services.map((item, index) => {
                        return (
                        <article key={index} className="service">
                            <span>{item.icon}</span>
                            <h6>{item.title}</h6>
                            <p>{item.info}</p>
                        </article>
                        );
                    })}
                </div>
            </section>
        );
    }
}

export default Services;