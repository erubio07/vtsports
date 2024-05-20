import React, {useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllUser } from "../../Redux/actions";

const AllUsers = () => {
const dispatch = useDispatch();
const users = useSelector((state) => state.userList);
console.log(users);

useEffect(() => {
    dispatch(getAllUser());
}, [])

    return(
        <div>Todos los Usuarios </div>
    )
}

export default AllUsers;