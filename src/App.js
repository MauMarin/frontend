
import Navbar from './componentes/Navbar'
import Log_in from './componentes/Log_in';
import New_Person from './componentes/New_Person'
import List_of_movements from './componentes/List_of_movements'
import New_movement from './componentes/New_movement'
import New_group from './componentes/New_group'
import New_zone from './componentes/New_zone'
import New_branch from './componentes/New_branch'

import Assign_movements from './componentes/Assign_movement'
import Assign_zones from './componentes/Assign_zones'
import Assign_branch from './componentes/Assign_branch'
import Assign_group from './componentes/Assign_group'

import Edit_movements from './componentes/Edit_movements'
import Edit_zone from './componentes/Edit_zone'
import Edit_branch from './componentes/Edit_branch'
import Edit_group from './componentes/Edit_group'
import Edit_person from './componentes/Edit_person'

import Delete_movements from './componentes/Delete_movements'
import Delete_zone from './componentes/Delete_zone'
import Delete_branch from './componentes/Delete_branch'
import Delete_group from './componentes/Delete_groups'
import Delete_person from './componentes/Delete_person'

import Assign_lider_to_a_zone from './componentes/Assign_lider_to_a_zone'
import Assign_lider_to_a_branch from './componentes/Assign_lider_to_a_branch'
import Assign_lider_to_a_group from './componentes/Assign_lider_to_a_group'

import Update_movement from './componentes/Update_movement'

import './css/App.css'
import './includes/bootstrap';

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <Switch>

          <Route path="/Organization"> <List_of_movements /> </Route>

          <Route path="/New_movement"> <New_movement /> </Route>
          <Route path="/New_Zone">     <New_zone />     </Route>
          <Route path="/New_Branch">   <New_branch />   </Route>
          <Route path="/New_Person">   <New_Person />   </Route>
          <Route path="/New_group">    <New_group />    </Route>

          <Route path="/Assign_zones">      < Assign_zones />       </Route>
          <Route path="/Assign_movements">  < Assign_movements />   </Route>
          <Route path="/Assign_branch">     < Assign_branch />      </Route>
          <Route path="/Assign_group">      < Assign_group />      </Route>

          

          <Route path="/Edit_movements"> < Edit_movements />  </Route>
          <Route path="/Edit_zone">      < Edit_zone />  </Route>
          <Route path="/Edit_branch">    < Edit_branch />  </Route>
          <Route path="/Edit_group">     < Edit_group />  </Route>
          <Route path="/Edit_person">    < Edit_person />  </Route>

          <Route path="/Delete_movements"> < Delete_movements />  </Route>
          <Route path="/Delete_zone">      < Delete_zone />  </Route>
          <Route path="/Delete_branch">    < Delete_branch />  </Route>
          <Route path="/Delete_group">     < Delete_group />  </Route>
          <Route path="/Delete_person">    < Delete_person />  </Route>

          
          <Route path="/Assign_lider_to_a_zone">      < Assign_lider_to_a_zone />     </Route>
          <Route path="/Assign_lider_to_a_branch">    < Assign_lider_to_a_branch />   </Route>
          <Route path="/Assign_lider_to_a_group">     < Assign_lider_to_a_group />    </Route>
          
          <Route path="/Update_movement">     < Update_movement />    </Route>
          
          <Route path="/Log_in"> <Log_in /> </Route>
          <Route path="/"> </Route>

          
        </Switch>
      </Router>

       
    </div>
   
  );
}

export default App;
