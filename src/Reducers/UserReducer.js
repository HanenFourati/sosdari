var Users=[
    {   _id:'0001',
        name:'JIHEN',
        last:'FOURATI',
        email:'yosra@gmail.com'
    }
]

const UserReducer=(state=Users,action)=>
{
  switch(action.type)
  {
    case 'REMOVE_CONTACT':
    return (
        state.filter(el=>el._id!==action._id)
    )
      default :
      return state
  }
}
export default UserReducer