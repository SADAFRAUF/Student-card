
import React from 'react';

interface StudentProps{
  name:string;
  age:number;
  rollNumber:string;
  ClassName:String;

}


const StudentCard:React.FC<StudentProps> = ({name,age,rollNumber,ClassName}) => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg p-7 m-5 bg-green-300 border-gray-200 ">
     <h2 className="text-xl font-bold mb-3">STUDENT ID CARD OF SCHOOL</h2>
     <p className="text-gray-700">Name:{name}</p>
     <p className="text-gray-700">Age:{age}</p>
     <p className="text-gray-700">Roll Number:{rollNumber}</p>
     <p className="text-gray-700">Class:{ClassName}</p>
     
    
    </div>
  )
}


const Student:React.FC = () => {
  const students = [
    {name:'Malaika',age:20,rollNumber:'0121123',ClassName:'Accounting'},
    {name:'Laiba',age:26,rollNumber:'0121124',ClassName:'Islamic Studies'},
    {name:'Omaima',age:9,rollNumber:'031332',ClassName:'Three'},  
  ];
  return (
    <div className="flex flex-wrap justify-center">{students.map((student,index)=>(
      <StudentCard
      key={index}
      name={student.name}
      age={student.age}
      rollNumber={student.rollNumber}
      ClassName={student.ClassName}
      />
    ))}
    </div>
  );
};

export default Student;