export default function MyTable() {
  
  const students = [
    {id: 1, name: '김일', mejor: '컴퓨터공학과'},
    {id: 2, name: '김이', mejor: '고분자공학과'},
    {id: 3, name: '김삼', mejor: '패션디자인과'},
  ];
  
  return (
    <>
      <table>
        <tbody>
          {
            students.map(student => 
              <tr key={student.id}>
                <td>{student.name}</td>
                <td>{student.mejor}</td>
              </tr>
            )
          }
        </tbody>
      </table>
    </>
  );
}