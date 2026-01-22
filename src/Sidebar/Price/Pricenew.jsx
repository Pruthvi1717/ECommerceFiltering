import Input  from "../../Components/Input";
import "./Pricenew.css"

const Pricenew = ({handleChange}) => {
    return (
        <div className="ml">
        <h2 className="sidebar-title price-title">Price</h2>
          <label className="sidebar-label-container">
             <input type="radio" onChange={handleChange} value = "" name = "test2" />
             <span className="checkmark"></span> All
           </label>
          
           <Input
            handleChange={handleChange}
            value = {100}
            title = "$50 - $100"
            name = "test2"
           />
            <Input
            handleChange={handleChange}
            value = {150}
            title = "$100 - $150"
            name = "test2"
           />
            <Input
            handleChange={handleChange}
            value = {200}
            title = "above $150"
            name = "test2"
           />
        </div>
    )
}

export default Pricenew;
