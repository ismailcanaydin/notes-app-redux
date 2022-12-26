import { useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getNotes } from '../redux/notes/notesSlice'
import { getNotesAsync, removeNoteAsync } from '../redux/notes/services'
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

function NoteList() {
    const dispatch = useDispatch()
    const notes = useSelector(getNotes)

    const [isOpen, setIsOpen] = useState();
    const [deleteId, setDeleteId] = useState()
    const cancelRef = useRef();

    const onClose = () => {
        setIsOpen(false);
    }
    const onDelete = async (id) => {
        setIsOpen(false);
        if(isOpen === true) {
            await dispatch(removeNoteAsync(deleteId))
        }
    }

    useEffect(() => {
        dispatch(getNotesAsync())
    }, [dispatch])

    return (
        <>
            <div className='row row-cols-1 row-cols-md-2 g-4'>
                {
                    notes.map((item) => (
                        <div key={item.id} className='col'>
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