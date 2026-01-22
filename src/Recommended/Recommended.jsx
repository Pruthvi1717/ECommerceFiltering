import "./Recommended.css"
const Recommended = ({handleClick}) => {
    return (
        <> 
        <div>
            <h2 className = "recommended-title">Recommended</h2>
            <div className="recommended-flex">
                <button className = "btns" onClick = {handleClick} >All Products</button>
                <button className = "btns" onClick = {handleClick} value="Nike">Nike</button>
                <button className = "btns" onClick = {handleClick} value ="Adidas">Adidas</button>
                <button className = "btns" onClick = {handleClick} value="Puma">Puma</button>
                <button className = "btns" onClick = {handleClick} value="Vans">Vans</button>
            </div>
        </div>
       </>
    )
}

export default Recommended;
