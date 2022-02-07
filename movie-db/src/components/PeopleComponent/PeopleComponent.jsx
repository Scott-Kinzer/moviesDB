import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { fetchPerson } from '../../features/person/personSlice';
import apiIntance from '../../service/person.service';
import PersonItem from '../PersonItem/PersonItem';

export default function PeopleComponent() {


    const [personName, setPersonName] = useState('Bob');

    const persons = useSelector(state => state.personReducer.persons);
    const dispatch = useDispatch();

    console.log(persons);

    useEffect(() => {
        console.log('dispatch')
        dispatch(fetchPerson(personName))
    }, [personName]);


    return (

        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
            <div style={{ justifyContent: 'center', display: 'flex' }}>
                <input value={personName} onChange={(e) => setPersonName(e.currentTarget.value)}
                    type="text" placeholder='FIND PERSON' />
            </div>
            <div style={{ display: 'flex', flexWrap: 'wrap' }}>
                {!!persons.length && persons.map((person) => <PersonItem person={person} />)}
            </div>
        </div>

    );
}
