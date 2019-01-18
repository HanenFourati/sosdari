import React from 'react'
import {NavLink,Link} from 'react-router-dom'
import { Table, Thead, Tbody, Tr, Th, Td } from 'react-amazing-table-sorter';
import { Container, Button, Modal, ModalBody, ModalHeader, ModalFooter } from 'mdbreact';
import axios from 'axios'



class Users extends React.Component {
    constructor(props) {
        super(props);
        this.state = {  
            listUsers:[],
            modal: false

        }
    }

    componentDidMount(){
        axios.get('/admin/users').then(res=>
            this.setState({
                listUsers:res.data
            }))
    }
  
   
    render() { 
        
        return ( 
            <div className='admin'>

<Table style={{border:'1px solid #000',fontSize:'22px'}}>
    <Thead>
    <Tr>
        <Th className="custom-class-1">FirstName</Th>
        <Th sort="number">LastName</Th>
        <Th sort="number">Email</Th>
        <Th sort="number">Adresse</Th>
        <Th sort="number">Delete</Th>
    </Tr>
    </Thead>
    <Tbody >
        {
            this.state.listUsers.map((el,i)=>
                <Tr key={i} >
                    <Td className="custom-class-2">{el.FirstNameUser}</Td>
                    <Td sort={el.LastNameUser}>{el.LastNameUser}</Td>
                    <Td sort={el.EmailUser}>{el.EmailUser}</Td>
                    <Td sort={el.AdresseUser}>{el.AdresseUser}</Td>                    
                    <Td sort=''><Link to={`/delete_user/${el._id}`} >
                            Delete User
                            
                    </Link></Td>
                </Tr>
            )
        }
    </Tbody>
 </Table>



</div>
         );
         
    }
}
 
export default Users;