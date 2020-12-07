import React, { useState } from 'react';

const App = () => {
 
const [ persons, setPersons ] = useState([
    { name: 'Arto Hellas', number: '040-123456' },
    { name: 'Ada Lovelace', number: '39-44-5323523' },
    { name: 'Dan Abramov', number: '12-43-234345' },
    { name: 'Mary Poppendieck', number: '39-23-6423122' }
  ])
const [ newName, setNewName ] = useState('')

const [newFilter, setNewFilter] = useState([])


                            const addName = event => {

                            event.preventDefault()

                            console.log(`name: "${document.getElementById('inputName').value}"`)

                            if (persons.find(({name}) => name === document.getElementById('inputName').value)) {

                              alert(`${document.getElementById('inputName').value} is already added to phonebook`)
                            }


                            else {


                            const BookObject = {
                                name: document.getElementById('inputName').value,
                                number: document.getElementById('inputNumber').value,
                                date: new Date().toISOString(),
                                id: persons.length + 1,
                              }

                            setPersons(persons.concat(BookObject))
                            setNewName('')
                            document.getElementById('inputName').value= ''
                            document.getElementById('inputNumber').value= ''

                            }

                          }
/*const handleNamechange = event => {

  setNewName(event.target.value)
  
};*/



const search = () => {

//let a = persons.filter((per) => new RegExp(document.getElementById('inputSearch').value, 'i').test(per.name))


setNewFilter(persons.filter((per) => new RegExp(document.getElementById('inputSearch').value, 'i').test(per.name)))

if(document.getElementById('inputSearch').value === '')
{setNewFilter([])}

}


                        return (
                          
                      <div>

                        <div>
                            <h2>Phonebook</h2>
                            <form onSubmit={addName}>
                              
                                Name: <input id='inputName' placeholder='Example John' /*onChange = {handleNamechange}*/ />
                              
                              <br /> Number: <input id='inputNumber' type='tel' placeholder='111-111-1111' />
                            
                              <br/><button type="submit" >add</button>
                              
                            </form>
                          
                          </div>  


                      <div>
                      <h2>Search The Phonebook</h2>

                      Filter: <input id='inputSearch' type='search' onChange={search} placeholder='Please Enter a Name' />

                      {newFilter.map((fil, i) => <div key={i}>{fil.name} {fil.number}</div>)}

                      </div>

                      <br/>


                        <div>
                          <h2>Numbers</h2>
                        {persons.map((person, i) => <div key={i}>{person.name} {person.number}</div>)}
                          
                        </div>

                        
                          <br/> <div>debug: {newName}</div>
                          



                      </div>
                        );


                        
                      }

export default App;
