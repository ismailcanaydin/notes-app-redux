import { Input } from '@chakra-ui/react'
import { useDispatch, useSelector } from 'react-redux';
import { filterNote, getFilteredItem } from '../redux/notes/notesSlice';
import Note from './Note'

function Search() {
    const dispatch = useDispatch();
    const filtered = useSelector(getFilteredItem);

    return (
        <div>
            <Input
                style={{ color: 'black', marginTop: '10px', marginBottom: '15px', borderRadius: '50px', borderColor: 'gray', width: '200px' }}
                value={filtered}
                onChange={
                    (e) => {
                        dispatch(filterNote(e.target.value))
                        console.log(filterNote());
                    }
                }
                placeholder='Search...' />
            <Note />
        </div>
    )
}

export default Search