import { useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
    addItemsIsError,
    getFilteredItem,
    getItemsIsError,
    getNotes,
    removeItemsIsError
} from '../redux/notes/notesSlice'

import { getNotesAsync, removeNoteAsync } from '../redux/notes/services'
import Loading from './Loading'
import { getItemsIsLoading } from '../redux/notes/notesSlice'
import {
    AlertDialog,
    AlertDialogBody,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogContent,
    AlertDialogOverlay,
    CloseButton,
    Button,
} from '@chakra-ui/react'
import Error from './Error'


function NoteList() {
    const dispatch = useDispatch()

    const notes = useSelector(getNotes)
    const filtered = useSelector(getFilteredItem);

    const itemsIsLoading = useSelector(getItemsIsLoading)

    const addNoteError = useSelector(addItemsIsError)
    const getItemsError = useSelector(getItemsIsError)
    const removeNoteError = useSelector(removeItemsIsError)

    const [isOpen, setIsOpen] = useState();
    const [deleteId, setDeleteId] = useState()
    const cancelRef = useRef();

    const onClose = () => {
        setIsOpen(false);
    }
    const onDelete = async (id) => {
        setIsOpen(false);
        if (isOpen === true) {
            await dispatch(removeNoteAsync(deleteId))
        }
    }

    const filteredNotes = notes.filter((item) =>
        item.note.toLowerCase().includes(filtered.toLowerCase())
    );

    useEffect(() => {
        dispatch(getNotesAsync())
    }, [dispatch])

    if (itemsIsLoading) {
        return <Loading message={"Loading..."} />;
    }

    return (
        <>
            <div className='row row-cols-1 row-cols-md-2 g-4'>

                {getItemsError && <Error message={getItemsError} />}
                {addNoteError && <Error message={addNoteError} />}
                {removeNoteError && <Error message={removeNoteError} />}

                {
                    filteredNotes.map((item) => (
                        <div key={item.id} className='col' >
                            <div className={`${item.color ? item.color : ''} card fs-6`} style={{ width: '18rem' }}>

                                <div className="card-body">

                                    <CloseButton
                                        onClick={() => {
                                            onDelete(setDeleteId(item.id));
                                            setIsOpen(true);
                                        }}
                                        size='lg'
                                        style={{ float: 'right' }}
                                    ></CloseButton>

                                    <AlertDialog
                                        isOpen={isOpen}
                                        leastDestructiveRef={cancelRef}
                                        onClose={onClose}
                                    >
                                        <AlertDialogOverlay>
                                            <AlertDialogContent>
                                                <AlertDialogHeader fontSize='lg' fontWeight='bold'>
                                                    Delete Note
                                                </AlertDialogHeader>

                                                <AlertDialogBody>
                                                    Are you sure? You can't undo this action afterwards.
                                                </AlertDialogBody>

                                                <AlertDialogFooter>
                                                    <Button ref={cancelRef} onClick={onClose}>
                                                        Cancel
                                                    </Button>
                                                    <Button colorScheme='red' ml={3} onClick={onDelete}>
                                                        Delete
                                                    </Button>
                                                </AlertDialogFooter>
                                            </AlertDialogContent>
                                        </AlertDialogOverlay>
                                    </AlertDialog>

                                    <p className="card-title">{item.note}</p>
                                </div>

                            </div>
                        </div>
                    ))
                }
            </div>
        </>
    )
}

export default NoteList