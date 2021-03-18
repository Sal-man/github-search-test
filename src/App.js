import ActionForm from './containers/actionForm';
import { useSelector, useDispatch } from "react-redux";
import { searchUsers, onActionChange } from "./actions";
import { loadRepos } from './reducers';
import ShowUsers from './components/showUsers';
import ShowRepos from './components/showRepos';


function App() {

  const repos = useSelector((state) => state.repos);
  const type = useSelector((state) => state.type);

  const dispatch = useDispatch();

  const onRepoSearch = (search) => {
    dispatch(searchUsers(search));
    dispatch(loadRepos());
  }

  const onChangeType = (val) => {
    dispatch(onActionChange(val));
    dispatch(loadRepos());
  }

  return (
    <div className={`${repos.length === 0 ? 'centerAlign' : ''} container`}>
      <div>
        <div>
          <ActionForm  onSearch={onRepoSearch} onTypeChange={onChangeType} />
        </div>
        <ul className='items_listing'>
          {repos.map((item) => {
            return type === 'users' ?<ShowUsers key={item.id} data={item} />  : <ShowRepos key={item.id} data={item} /> 
          })}
        </ul>
      </div>
    </div>
  );
}

export default App;
