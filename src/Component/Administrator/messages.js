import React from 'react'
import {NavLink,Link} from 'react-router-dom'
import { Table, Thead, Tbody, Tr, Th, Td } from 'react-amazing-table-sorter';
import axios from 'axios'



class Messages extends React.Component {
    constructor(props) {
        super(props);
        this.state = {  
            listMsg:[]
        }
    }

    componentDidMount(){
        axios.get('/admin/messages').then(res=>
            this.setState({
                listMsg:res.data
            }))
    }
   
    render() { 
        console.log(this.state.listMsg)
        return ( 
            <div className='admin'>

<Table style={{border:'1px solid #000',fontSize:'22px'}}>
    <Thead>
    <Tr>
        <Th className="custom-class-1">Name</Th>
        <Th sort="number">Email</Th>
        <Th sort="number">Content</Th>
        <Th sort="number">Delete</Th>
    </Tr>
    </Thead>
    <Tbody >
        {
            this.state.listMsg.map((el,i)=>
                <Tr key={el.i} >
                    <Td className="custom-class-2">{el.Name}</Td>
                    <Td sort={el.Email}>{el.Email}</Td>
                    <Td sort={el.Message}>{el.Message}</Td>                 
                    <Td sort=''><Link to={`/delete_user/${el._id}`} >Delete Message</Link></Td>
                </Tr>
            )
        }
    </Tbody>
 </Table>



</div>
         );
         
    }
}
 
export default Messages;