const LogoBronx = () => {
    return ( 
        <>
        <div >
        <img class="logoImg"
          src={process.env.PUBLIC_URL + "/images/logo.png"}
          alt="logo"
          style={{ display: "block", margin: "auto"  }}
        />
       <span className="navbar-caption-wrap d-flex align-items-center justify-content-center " style={{width: "100%"}}>
              <h1>BRONX LUGGAGE</h1>
            </span>
      </div>
        </>
     );
}
 
export default LogoBronx;