import { Pagination, Select } from 'antd';
import React, { useEffect, useState } from 'react';

import { useSelector, useDispatch } from 'react-redux';

import { fetchTV } from '../../features/tv/tvSlice';
import { sortBy } from '../../helpers/helpers';
import MovieItem from '../MovieItem/MovieItem';


const { Option } = Select;


export default function TVComponent() {

    const {results, total_pages} = useSelector(state => state.tvReducer.tv);

    const [currentYear, setCurrentYear] = useState(2010);
    const [currentSort, setCurrentSort] = useState(sortBy.asc);
    const [currentPage, setCurrentPage] = useState(1);


    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchTV({currentYear, currentSort, currentPage}))
    }, [currentPage, currentSort, currentYear]);

    const handleChange = (value) => {
        console.log('SORT', value)
        setCurrentSort(value);
    }


    const onChange = (value) => {
        console.log('PAGE', value)
        setCurrentPage(value);
    }

  return (<div>


    <input type="text" value={currentYear} onChange={(e) => setCurrentYear(+e.currentTarget.value)} placeholder='Enter year' />

    <div style={{display: 'flex', jusifyContent: 'space-around', margin: '7px'}}>
   
      <Select defaultValue={sortBy.asc} style={{ width: 120 }} onChange={handleChange}>

        {Object.entries(sortBy).map(([key, value], id) => <Option key={id} value={value}>{key}</Option>)}
      </Select>

    

    <Pagination defaultCurrent={currentPage} total={total_pages ? total_pages * 10: 10} onChange={onChange} />

    </div>

    <div style={{ display: 'flex', flexWrap: 'wrap' }}>

      {!!results && results.map(movie => <MovieItem movie={movie} />)}

    </div>

  </div>);
}
