import { useState, useEffect } from 'react';
import axios from 'axios';
import UpdateUser from './UpdateUser';

const UserList = () => {
    const [dataList, setDataList] = useState([]);
    useEffect(() => {
        const getUserData = async () => {
            await axios.get('http://localhost:3000/user')
                .then(response => {
                    setDataList(response.data)
                })
        }
        getUserData()
    }, [])
    

    // 해당 id의 User 정보 삭제하기
    const deleteUserData = async(selectedId) => {
        await axios.delete(`http://localhost:3000/user/${selectedId}`)
            .then(response => {
                console.log(response);
                console.log("삭제되었습니다");
            })
    }

    return (
        <div>
            {dataList.map((data) => {
                return (
                    <ul key={data.id} className="list-group list-group-horizontal justify-content-center">
                        <li className="list-group-item">{data.id}</li>
                        <li className="list-group-item" >{data.name}</li>
                        <li className="list-group-item">{data.description}</li>
                        <li className="list-group-item"><button onClick={() => {deleteUserData(data.id)}}>삭제</button></li>
                        <li className="list-group-item"><button onClick={() => { <UpdateUser id = {data.id}/>}}>수정</button></li>
                    </ul>
                )

            })}
        </div>

    )
}
export default UserList;