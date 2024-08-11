import ChatList from "./chatlist/ChatList";
import UserInfo from "./userinfo/UserInfo";

import "./List.css";

const List = () => {
  return (
    <div className="list">
      <UserInfo />
      <ChatList />
    </div>
  );
};

export default List;
