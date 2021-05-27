import React, {useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {getBugs} from '../../controllers/redux/bugSlice.js'
import BugCard from '../bug_cards/bugCard'

export default()=>{
    const dispatch = useDispatch();
    const {bugs} = useSelector(state=>state);
    
    useEffect(()=>{
        dispatch(getBugs());
    }, [bugs.length < 1])

    return(
        <div className="page-container">
            {bugs.map((bug,key)=>(
                <BugCard key={key} props={bug} />
            ))}
        </div>
    )
}