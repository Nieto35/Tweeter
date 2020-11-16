import React from "react";
import { users } from "../../users";
import Shearch from "../sheach/shearch"
import './styles.css';

class listUsers extends React.Component {
  constructor() {
    super();
    this.state = {
      users: users,
      searchUser: "",
    };
  }

  handleSearch = (evento) => {
    //Capturar lo que está escribiendo el usuario
    const user = evento.target.value;
    this.setState({ searchUser: user });
  };



  render() {
    return (
      <div className="col-md-7">
        <form>
          <Shearch searchUserFn = {this.state.searchUser} handleSearchFn = {this.handleSearch}/>
        </form>
        <div className="list-group">
          {this.state.users
            .filter((user) =>
              user.profile
                .toLowerCase()
                .includes(this.state.searchUser.toLowerCase())
            )
            .map((user, index) => {
              return (
                  <div className="users" key={index}>
                    <img
                      className="profile-avatar"
                      src={user.profileImg}
                      alt="profileImage"
                      
                    />
                    <div className="user-profile">
                    <h5>{user.profile}</h5>
                    <small>{user.username}</small>
                    </div>
                  </div>
        
              );
            })}
        </div>
      </div>
    );
  }
}

export default listUsers;
