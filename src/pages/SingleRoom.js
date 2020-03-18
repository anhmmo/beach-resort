import React, { Component } from 'react'
import defaultBcg from '../images/room-1.jpeg';
import Hero from '../components/Hero';
import Banner from '../components/Banner';
import {Link} from 'react-router-dom';
import {RoomContext} from '../context';
import StyledHero from '../components/StyledHero';



export default class SingleRoom extends Component {
    constructor(props) {
        super(props)
        this.state = {
            slug: this.props.match.params.slug,
            defaultBcg
        };
        
    }

    static contextType = RoomContext;

    render() {
        const {getRoom} = this.context;
        const room = getRoom(this.state.slug);
        const {name, description, capacity, size, price, extras, breakfast, pets, images} = room;
        
        /* check if room is undefine( not found) with tenary operator*/
        
        return room ? 
        // if true (room found)
        <StyledHero img = {images[0]}>
            <Banner title={`${name} room`}>
                <Link to="/rooms" className="btn-primary">
                    back to rooms
                </Link>
            </Banner>
        </StyledHero>
        : 
        // if false (room not found)
        <div className="error">
            <h3>no such room could be found</h3>
            <Link to="/rooms" className="btn-primary">
                back to rooms
            </Link>
        </div>
        
    }
}
