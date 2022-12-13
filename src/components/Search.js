import { Input } from '@chakra-ui/react'
import React from 'react'
import Note from './Note'

function Search() {
    return (
        <div>
            <Input
                style={{ marginTop: '10px', marginBottom: '15px', borderRadius: '50px', borderColor: 'gray', width: '200px' }}
                placeholder='Search...' />
            <Note />
        </div>
    )
}

export default Search