const RestaurantCard = (props)=>{
    const {resData} = props;
    const { name, cuisines, avgRating}=resData.info;
    const {deliveryTime} = resData.info.sla;
    return(
       <div className="res-card" style={{backgroundColor:"#f0f0f0"}}>
          <img className="res-logo"  />
          <h2>{name}</h2>
          <h3>{cuisines.join(",")}</h3>
          <h3>{avgRating}</h3>
          <h3>{deliveryTime} minutes</h3>
       </div>
    )
 };
 export default RestaurantCard;