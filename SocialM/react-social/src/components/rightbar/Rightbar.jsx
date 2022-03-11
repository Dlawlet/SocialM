import "./rightbar.css"

export default function rightbar({profile}) {
  const HomeRightbar = () =>{
    return(
      <>
      <div className="birthdayContainer">
      <img className="birthdayImg" src="assets/gift.png" alt="" />
      <span className="birthdayText">
        <b>Mister Mind</b> and <b>other firend</b> have a birthday today
      </span>
    </div>
    <img src="assets/ad.png" alt="" className="rightbarAd" />
    <h4 className="rightbarTitle"> Online Friends</h4>
    <ul className="rightbarFriendList">
      <li className="rightbarFriend">
        <div className="rightbarProfileImgContainer">
          <img src="assets/person/3.jpeg" alt="" className="rightbarProfileImg" />
          <span className="rightbarOnline"></span>
        </div>
        <span className="rightbarUsername"> Appolinaire </span>
      </li>
      <li className="rightbarFriend">
        <div className="rightbarProfileImgContainer">
          <img src="assets/person/4.jpeg" alt="" className="rightbarProfileImg" />
          <span className="rightbarOnline"></span>
        </div>
        <span className="rightbarUsername"> Azonfack </span>
      </li>
      <li className="rightbarFriend">
        <div className="rightbarProfileImgContainer">
          <img src="assets/person/5.jpeg" alt="" className="rightbarProfileImg" />
          <span className="rightbarOnline"></span>
        </div>
        <span className="rightbarUsername"> Koutheu </span>
      </li>
      <li className="rightbarFriend">
        <div className="rightbarProfileImgContainer">
          <img src="assets/person/3.jpeg" alt="" className="rightbarProfileImg" />
          <span className="rightbarOnline"></span>
        </div>
        <span className="rightbarUsername"> Appolinaire </span>
      </li>
      <li className="rightbarFriend">
        <div className="rightbarProfileImgContainer">
          <img src="assets/person/4.jpeg" alt="" className="rightbarProfileImg" />
          <span className="rightbarOnline"></span>
        </div>
        <span className="rightbarUsername"> Azonfack </span>
      </li>
      <li className="rightbarFriend">
        <div className="rightbarProfileImgContainer">
          <img src="assets/person/5.jpeg" alt="" className="rightbarProfileImg" />
          <span className="rightbarOnline"></span>
        </div>
        <span className="rightbarUsername"> Koutheu </span>
      </li>
    </ul>
      </>
    )
  }
  const ProfileRightbar = () =>{
    return(
      <>
        <h4 className="rightbarTitle"> User information</h4>
        <div className="rightbarInfo"> 
          <div className="rightbarInfoItem">
              <span className="rightbarInfoKey"> City: </span>
              <span className="rightbarInfoValue"> Cameroon </span>
          </div>
          <div className="rightbarInfoItem">
              <span className="rightbarInfoKey"> From: </span>
              <span className="rightbarInfoValue"> Belgium </span>
          </div>
          <div className="rightbarInfoItem">
              <span className="rightbarInfoKey"> Relationship: </span>
              <span className="rightbarInfoValue"> Single forever </span>
          </div>
        </div>
        <h4 className="rightbarTitle"> User friends</h4>
        <div className="rightbarFollowings">
          <div className="rightbarFollowing">
            <img className="rightbarFollowingImg" src="assets/person/1.jpeg" alt="" />
            <span className="rightbarFollowingName"> Essomba </span>
          </div>
          <div className="rightbarFollowing">
            <img className="rightbarFollowingImg" src="assets/person/2.jpeg" alt="" />
            <span className="rightbarFollowingName"> Olama </span>
          </div>
          <div className="rightbarFollowing">
            <img className="rightbarFollowingImg" src="assets/person/3.jpeg" alt="" />
            <span className="rightbarFollowingName"> soffack </span>
          </div>
          <div className="rightbarFollowing">
            <img className="rightbarFollowingImg" src="assets/person/4.jpeg" alt="" />
            <span className="rightbarFollowingName"> Paul </span>
          </div>
          <div className="rightbarFollowing">
            <img className="rightbarFollowingImg" src="assets/person/5.jpeg" alt="" />
            <span className="rightbarFollowingName"> Njembe </span>
          </div>
          <div className="rightbarFollowing">
            <img className="rightbarFollowingImg" src="assets/person/6.jpeg" alt="" />
            <span className="rightbarFollowingName"> Appolinaire </span>
          </div>
        </div>

      </>
    )
  }

  return (
    <>
    <div className="rightbar">
      <div className="rightbarWrapper">
        {profile? <ProfileRightbar/> : <HomeRightbar/>}
      </div>  
    </div>
    </>
  )
}
