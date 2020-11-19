import React from 'react';
import axios from "axios";

function getNameMovement(leader,people){
    const person =  people.find( personID => { return personID._id === leader })
    if (person === undefined){
        return ""
    }else{
        return person.name
    }
}

function getNameZone(leader,people){
    const person =  people.find( personID => { return personID._id === leader })
    if (person === undefined){
        return ""
    }else{
        return person.name
    }
}

function getNameBranch(leader,people){
    const person =  people.find( personID => { return personID._id === leader })
    if (person === undefined){
        return ""
    }else{
        return person.name
    }
}
function getNameGroup(leader,people){
    const person =  people.find( personID => { return personID.id === leader })
    if (person === undefined){
        return ""
    }else{
        return person.name
    }
}

function getPerson(leader,people){
    const person =  people.find( personID => { return personID._id === leader })
    if (person === undefined){
        return ""
    }else{
        return person.name
    }
}


function printZones(zone,movement,branches,groups,people){

            if(movement.zones.find( zonaName => { return zonaName === zone.name} )){
            return  <div className="card" style={{marginBottom: 20}}> 
                        <div class="card-body">
                            <h6 className="card-title"> {zone.name} </h6> 
                            <h4 className="card-title"> Name:  {zone.name} </h4> 
                            {zone.leaders.map((leader,index) => {
                                                    return <div> 
                                                                <h5 className="card-title"> &nbsp;&nbsp;&nbsp;Leader {index+1}: {getNameZone(leader,people)} </h5> 
                                                            </div>
                                                })}
                            <hr color='white'></hr>
                            {branches.map((branch) => {
                                                    return <div> 
                                                                {printBranch(zone,branch,groups,people)}
                                                    
                                                            </div>
                                                })}
                        </div>
                    </div>
            }   
}

function printBranch(zone,branch,groups,people){
    if(zone.branches.find( branchName => { return branchName === branch.name} )){
        return  <div className="card"  style={{marginBottom: 20}}> 
                    <div class="card-body">
                        <h6 className="card-title"> {branch.name} </h6> 
                        {branch.leaders.map((leader,index) => {
                                                    return <div> 
                                                                <h5 className="card-title"> &nbsp;&nbsp;&nbsp;Leader {index+1}: {getNameBranch(leader,people)}  </h5> 
                                                            </div>
                                                })}
                        <hr color='white'></hr>
                        {groups.map((group) => {
                                                return <div> 
                                                            {printGroup(branch,group,people)}
                                                    
                                                        </div>
                                                })}
                    </div>
                </div>
        }  
}

function printGroup(branch,group,people){
    if(branch.groups.find( groupName => { return groupName === group.name} )){
        return  <div className="card"  style={{marginBottom: 20}}> 
                    <div class="card-body">
                        <h6 className="card-title"> {group.name} </h6> 
                                <h5 className="card-title"> &nbsp;&nbsp;&nbsp;Monitor:  {getNameGroup(group.monitor,people)}</h5> 
                        <hr color='white'></hr>
                        {people.map((person) => {
                                                return <div> 
                                                            {printPeople(group,person)}
                                                    
                                                        </div>
                                                })}
                    </div>
                </div>
        }  
}

function printPeople(group,person){
    if(group.members.find( personName => { return personName === person.id} )){
        return  <div class="card-body ">
                    <h6 className="card-text"> {person.name}:{person.id} </h6> 
                    <hr color='white'></hr>
                        
                </div>
                
        }  
}

class List_of_movements extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            people: [], 
            movements: [], 
            zones: [],
            branches: [],
            groups: [],    
        }
    }
    componentDidMount(){
        axios.get('https://backend-proyi.herokuapp.com/movement/getAll')
            .then(response=> {
                const res = response.data.result
                this.setState({movements:res})
            })

        axios.get('https://backend-proyi.herokuapp.com/zone/getAll')
            .then(response=> {
                const res = response.data.result
                this.setState({zones:res})
            })

        axios.get('https://backend-proyi.herokuapp.com/branch/getAll')
            .then(response=> {
                const res = response.data.result
                this.setState({branches:res})
  
            })
        
        axios.get('https://backend-proyi.herokuapp.com/group/getAll')
            .then(response=> {
                const res = response.data.result
                this.setState({groups:res})
                
            })

        axios.get('https://backend-proyi.herokuapp.com/member/getAll')
            .then(response=> {
                const res = response.data.result
                this.setState({people:res})
            })
        
    }  
    

   handleSubmit(response){
       alert(response.data.result.message);
   }

   
  


    render(){
     
        const { people , movements ,zones, branches,groups} = this.state
        return(  
            <div>
                <div className = "container py-5">
                    <div className="jumbotron">

                        <h1> Movements: </h1>
                        {movements.map((movement,index) => {
                            return <div >
                                        <div className="card " style={{marginBottom: 80}}> 
                                            <div class="card-body">
                                                    <h4 className="card-title"> Name: {movement.name} </h4> 
                                                    <h5 className="card-title"> &nbsp;&nbsp;&nbsp;Leader:{getNameMovement(movement.leader , people)} </h5> 
                                                    <hr color='white'></hr>
                                                    {zones.map((zone) => {
                                                        return <div> 
                                                                    {printZones(zone,movement,branches,groups,people)}
                                                        
                                                                </div>
                                                    })}
                                                    
                                            </div>
                                        </div>
                                       
                                    </div>
                                    
                                   
                        })}
                    </div>
                    <a href="/New_movement" className="btn btn-info" role="button">Make new movement</a> 
                </div>
            </div>

        )
    }
}
export default List_of_movements;
