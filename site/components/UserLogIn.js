import { IoMdArrowDropdown } from "react-icons/io";
const UserLogIn = () => {
  return (
    <>
      <div className="login-cover ">
        <div className="loged-user row align-items-center ">
          <div className="col-3 profile-image p-0">
            <img src="https://helpx.adobe.com/content/dam/help/en/stock/how-to/visual-reverse-image-search/jcr_content/main-pars/image/visual-reverse-image-search-v2_intro.jpg" />
          </div>
          <div className="col-7 user-name">
            <span>user@1234.com</span>
          </div>
          <div className="col-1 ">
            <IoMdArrowDropdown />
          
          </div>
        </div>
      </div>
      <style jsx>{`
        .login-cover {
          padding: 20px 0 20px 0;
        }
        .loged-user {
          width: 25%;
          border-radius: 10px;
          background-color:white;
          margin-left: auto;
        }
        .loged-user:hover{
          background-color:gray;
          color:white;

        }

        img {
          height: 40px;
          width: 40px;
          border-radius: 50%;
          padding: 5px;
        }
        .user-name {
          overflow: hidden;
        }
      `}</style>
    </>
  );
};
export default UserLogIn;
