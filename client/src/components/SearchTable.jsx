import { Table } from "react-bootstrap"
import { useDispatch, useSelector } from "react-redux"
import {setContentUri} from '../store/actions'

export default function SearchTable (props) {
    const searchResult = useSelector(state => state.searchResult)
    const dispatch = useDispatch()

    const linkUrl = (input) => {
        dispatch(setContentUri(input))
    }

    return (
        <>
        {
            !searchResult.length 
            ?
            null
            :
            <Table bordered hover size="sm">
                <thead>
                    <tr>
                    <th>No.</th>
                    <th>Title</th>
                    <th>Link</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        searchResult.map((el, i) => (
                            <>
                            <tr>
                                <td>{i+1}</td>
                                <td>{el.title}</td>
                                <td onClick={() => linkUrl(el.url)}>{el.url}</td>
                            </tr>
                            </>
                        ))
                    }
                </tbody>
            </Table>
        }

        </>
    )
}