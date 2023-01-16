import { Button, Textarea } from '@chakra-ui/react'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addNoteAsync } from '../redux/notes/services'


function Note() {
    const dispatch = useDispatch()

    const [form, setForm] = useState(
        {
            note: '',
            color: '',
        }
    )

    const handleText = (e) => {
        setForm({ ...form, note: e.target.value });
    };

    const handleColor = (e) => {
        setForm({ ...form, color: e.target.value })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()

        if (checkValues(form)) {
            await dispatch(addNoteAsync({ ...form }));
        }

        setForm({ ...form, note: '' })
    }

    const checkValues = (form) => {
        return form.note !== "" && form.color !== ""
            ? true
            : false;
    };

    return (
        <div>
            <form
                onSubmit={handleSubmit}>

                <Textarea
                    id='note'
                    name='note'
                    rows={4}
                    color={'#000'}
                    resize={'none'}
                    border={'transparent'}
                    placeholder='Enter your note here...'
                    value={form.note}
                    onChange={handleText}
                />
                <div>
                    <Button
                        htmlFor='note'
                        type='submit'
                        style={{ float: 'right', borderRadius: '20px', padding: '0 30px 0 30px', fontSize: '18px' }}
                        colorScheme={'teal'}
                    >
                        Add
                    </Button>
                    {/* <RadioGroup
                        color={'#000'}

                    >
                        <Stack spacing={5} direction='row' onChange={handleColor}>
                            <Radio colorScheme='red' value='text-bg-danger' >

                            </Radio>
                            <Radio colorScheme='green' value='text-bg-success' >

                            </Radio>
                            <Radio colorScheme='blue' value='text-bg-primary' >

                            </Radio>
                            <Radio colorScheme='yellow' value='text-bg-warning' >

                            </Radio>
                            <Radio colorScheme='gray' value='text-bg-secondary' >

                            </Radio>
                        </Stack>
                    </RadioGroup> */}

                    <div className="d-flex justify-content-between align-item-center">
                        <div className="radios d-flex justify-content-start align-item-center">
                            <div className="form-check">
                                <input
                                    onChange={handleColor}
                                    className="form-check-input"
                                    type="radio"
                                    name="colorRadio"
                                    id="color_1"
                                    value="text-bg-danger"
                                />
                                <label
                                    className="color-check-label text-bg-danger"
                                    htmlFor="color_1"
                                >
                                    <img
                                        src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/242518/check-icn.svg"
                                        alt="radioBox"
                                    />
                                </label>
                            </div>
                            <div className="form-check">
                                <input
                                    onChange={handleColor}
                                    className="form-check-input"
                                    type="radio"
                                    name="colorRadio"
                                    id="color_2"
                                    value="text-bg-info"
                                />
                                <label
                                    className="color-check-label text-bg-info"
                                    htmlFor="color_2"
                                >
                                    <img
                                        src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/242518/check-icn.svg"
                                        alt="radioBox"
                                    />
                                </label>
                            </div>
                            <div className="form-check">
                                <input
                                    onChange={handleColor}
                                    className="form-check-input"
                                    type="radio"
                                    name="colorRadio"
                                    id="color_3"
                                    value="color-label-3"
                                />
                                <label
                                    className="color-check-label color-label-3"
                                    htmlFor="color_3"
                                >
                                    <img
                                        src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/242518/check-icn.svg"
                                        alt="radioBox"
                                    />
                                </label>
                            </div>
                            <div className="form-check">
                                <input
                                    onChange={handleColor}
                                    className="form-check-input"
                                    type="radio"
                                    name="colorRadio"
                                    id="color_4"
                                    value="color-label-4"
                                />
                                <label
                                    className="color-check-label color-label-4"
                                    htmlFor="color_4"
                                >
                                    <img
                                        src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/242518/check-icn.svg"
                                        alt="radioBox"
                                    />
                                </label>
                            </div>
                            <div className="form-check">
                                <input
                                    onChange={handleColor}
                                    className="form-check-input"
                                    type="radio"
                                    name="colorRadio"
                                    id="color_5"
                                    value="text-bg-secondary"
                                />
                                <label
                                    className="color-check-label text-bg-secondary"
                                    htmlFor="color_5"
                                >
                                    <img
                                        src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/242518/check-icn.svg"
                                        alt="radioBox"
                                    />
                                </label>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
            <br />
        </div>
    )
}

export default Note