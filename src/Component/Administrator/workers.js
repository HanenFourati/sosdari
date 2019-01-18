import React from 'react'
import {NavLink,Link} from 'react-router-dom'
import { Table, Thead, Tbody, Tr, Th, Td } from 'react-amazing-table-sorter';
import axios from 'axios'

class Workers extends React.Component {
    constructor(props) {
        super(props);
        this.state = {  
            listWorkers:[]
        }
    }

    componentDidMount(){
        axios.get('/admin/workers').then(res=>
            this.setState({
                listWorkers:res.data
            }))
    }
    render() { 
        console.log(this.state.listWorkers)
        return ( 
            <div className='admin'>

<Table>
    <Thead>
    <Tr>
        <Th className="custom-class-1">First Name</Th>
        <Th sort="number">LastName</Th>
        <Th sort="number">Adress</Th>
        <Th sort="number">Email</Th>
        <Th sort="number">Job</Th>
        <Th sort="number">Commitement Rating</Th>
        <Th sort="number">Quality Rating</Th>
        <Th sort="number">Delete</Th>
    </Tr>
    </Thead>
    <Tbody>
        {
            this.state.listWorkers.map((el,i)=>
                <Tr key={i}>
                    <Td className="custom-class-2">{el.FirstNameWorker}</Td>
                    <Td sort={el.LastNameWorker}>{el.LastNameWorker}</Td>
                    <Td sort={el.AdresseWorker}>{el.AdresseWorker}</Td>
                    <Td sort={el.EmailWorker}>{el.EmailWorker}</Td>
                    <Td sort={el.Job}>{el.Job}</Td>
                    <Td sort={el.CommitementRating}>{el.CommitementRating}</Td>
                    <Td sort={el.QualityRating}>{el.QualityRating}</Td>
                    <Td sort=''><Link to={`/delete_worker/${el._id}`} >Delete Worker</Link>
                    </Td>
                </Tr>
            )
        }
    </Tbody>
 </Table>



</div>
         );
    }
}
 
export default Workers;