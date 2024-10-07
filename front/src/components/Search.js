import { useState } from 'react';

const Search = (props) => {
    const [findId, setFindId] = useState('');
    const [searchUser, setSearchUser] = useState('')

    const findInfo = (event) => {
        setFindId(event.target.value)
    }


    const searchUserInfo = async (event) => {
        // 검색 중인지 아닌지 확인 
        props.isSearching();
        event.preventDefault();

        // 검색 시 해당 User 정보 반환
        // await axios.get(`http://localhost:3000/user/${findId}`)
        //     .then(response => {
        //         setSearchUser(response.data)
        //     })
    }

    return (
        <div>
            <form onSubmit={searchUserInfo}>
                <label htmlFor="Search"></label>
                <input type="text" name="id" onChange={findInfo}></input>
                <button type="submit">검색</button>
            </form>

            <div className="mt-4">
            {searchUser && <ul key={searchUser.id} className="list-group list-group-horizontal justify-content-center">
                <li className="list-group-item">{searchUser.id}</li>
                <li className="list-group-item" >{searchUser.name}</li>
                <li className="list-group-item">{searchUser.description}</li>
            </ul>
            }
            </div>


        </div>
    )

}
export default Search;