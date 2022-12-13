import { Button, Radio, RadioGroup, Stack } from '@chakra-ui/react'
import React from 'react'

function ContentFooter() {
    return (
        <div style={{ marginTop: '20px' }}>
            <Button style={{ float: 'right', borderRadius: '20px', padding: '0 30px 0 30px', fontSize: '18px' }} colorScheme={'teal'}>Add</Button>

            <RadioGroup
                // defaultValue='2'
                color={'#000'}
            >
                <Stack spacing={5} direction='row'>
                    <Radio colorScheme='red' value='1'>
                        Kırmızı
                    </Radio>
                    <Radio colorScheme='green' value='2'>
                        Yeşil
                    </Radio>
                    <Radio colorScheme='blue' value='3'>
                        Mavi
                    </Radio>
                </Stack>
            </RadioGroup>

        </div>
    )
}

export default ContentFooter