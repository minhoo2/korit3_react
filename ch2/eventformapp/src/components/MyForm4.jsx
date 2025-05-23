import { useState } from "react";

export default function MyForm4() {
  const [ firstName, setFirstName ] = useState(''); 
  const [ lastName, setLastName ] = useState(''); 
  const [ email, setEmail ] = useState(''); 

  const handleSubmit = event => {
    alert(`안녕하세요 ${firstName} ${lastName}. Email 주소는 ${email}입니다.`);
    event.preventDefault();
  }
  

  return(
    <form onSubmit={handleSubmit}>
      <label>First Name </label>
      <input type="text" value={firstName} onChange={event => setFirstName(event.target.value)} /> <br />
      <br />
      <label>Last Name </label>
      <input type="text" value={lastName} onChange={event => setLastName(event.target.value)} /> <br />
      <br />
      <label>Email </label>
      <input type="text" value={email} onChange={event => setEmail(event.target.value)} /> <br />

      <input type="submit" value="제출"/>
    </form>
  );
}