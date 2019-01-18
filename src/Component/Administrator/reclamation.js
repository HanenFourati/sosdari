import React from 'react'
import {NavLink,Link} from 'react-router-dom'
import { Table, Thead, Tbody, Tr, Th, Td } from 'react-amazing-table-sorter';
import './example.scss';
import axios from 'axios'

class Reclamtion extends React.Component {
    constructor(props) {
        super(props);
        this.state = {  
            listReclamation:[]
        }
    }

    componentDidMount(){
        axios.get('/admin/reclamation').then(res=>
            this.setState({
                listReclamation:res.data
            }))
    }
    render() { 
        console.log(this.state.listReclamation)
        return ( 
           
<div className='admin'>

<Table>
<Thead>
    <Tr>
        <Th className="custom-class-1">UserId</Th>
        <Th sort="number">Content</Th>
    </Tr>
    </Thead>
    <Tbody>
        {
            this.state.listReclamation.map((el,i)=>
                <Tr key={i}>
                    <Td className="custom-class-2">{el.SenderID}</Td>
                    <Td sort={el.LastNameWorker}>{el.Content}</Td>
                    {/* <Td sort={el.AdresseWorker}>{el.AdresseWorker}</Td>
                    <Td sort={el.EmailWorker}>{el.EmailWorker}</Td>
                    <Td sort={el.Job}>{el.Job}</Td>
                    <Td sort={el.CommitementRating}>{el.CommitementRating}</Td>
                    <Td sort={el.QualityRating}>{el.QualityRating}</Td>
                    <Td sort=''><Link to={`/delete_worker/${el._id}`} >Delete Worker</Link></Td> */}
                </Tr>
            )
        }
    </Tbody>
 </Table>



</div>
            
           
         );
    }
}
 
export default Reclamtion;