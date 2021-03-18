import React, {useState} from 'react';
import {debounce} from 'lodash';

const ActionForm = (props) => {

    const [state, setState] = useState({
        search: '',
    });

    const onHandleFormChange = debounce((search) => {
            setState({
                ...state,
                search,
            });
            props.onSearch(search);
    }, 500)
    
    const onTypeChange = (event) => {
        props.onTypeChange(event.target.value);
    }

    return (
        <React.Fragment>
            <div className='action_form_wrapper'>
                <div className='info_wrapper'>
                    <img src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png" alt="" />
                    <div>
                        <h4>GitHub Searcher</h4>
                        <p>Search users or repositories below</p>
                    </div>
                </div>

                <div className='form_wrapper'>
                    <input name='search' onChange={(e) => onHandleFormChange(e.target.value)} type="text" placeholder='Start typing to search ...' />
                    <select onChange={onTypeChange}>
                        <option value="users" key="users">Users</option>
                        <option value="repositories" key="repositories">Repositories</option>
                    </select>
                </div>
            </div>
        </React.Fragment>
    );
}

export default ActionForm;
