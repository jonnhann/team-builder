import React, {useState} from 'react';
import './App.css';
import Form from "./Form";
import TeamMember from "./TeamMember";

function App() {
  const [members, setMembers] = useState([])
  return (
    <div>
      <Form members={members} setMembers={setMembers}/>
      <TeamMember members={members}/>
    </div>
  );
}

export default App;