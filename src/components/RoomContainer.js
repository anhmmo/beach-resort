import React from 'react'
import RoomFilter from './RoomFilter'
import RoomList from './RoomList'
import {RoomConsumer} from '../context'
import Loading from './Loading'
import { logDOM } from '@testing-library/react'


export default function RoomContainer() {
    return (
        <RoomConsumer>
        {
            (value) => {
                const{loading, sorted } = value
                return (
                    <div>
                        Room container
                        <RoomFilter />
                        <RoomList />
                    </div>
                );
            }
         }
        </RoomConsumer>
    );
}
