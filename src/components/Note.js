import { Textarea } from '@chakra-ui/react'
import React from 'react'

function Note() {
    return (
        <div>
            <Textarea
                className='Text-area'
                rows={7}
                color={'#000'}
                resize={'none'}
                border={'transparent'}
                placeholder='Enter your note here...'
            />
            <br />
        </div>
    )
}

export default Note