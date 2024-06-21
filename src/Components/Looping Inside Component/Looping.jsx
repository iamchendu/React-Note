
import './Looping.css'

const Looping = () =>{

    let sub = ["Html","CSS","JAVA","Python","BootStrap","React JS "];


// We create a html element it defiend className a selector create in javaScript ... 

    let block = "Container";

    return(

        <div className="Looping">

        <h1> Looping in React </h1>


        {/* Example - className call with js variable ,  and variable create the className selector  */}

            <h1 className={block}> Hlo Brother</h1>


        {/* Example - In Jsx Array value iterate on unorder list  */}

            <ul>
                <li>{sub[0]}</li>
                <li>{sub[1]}</li>
                <li>{sub[2]}</li>
                <li>{sub[3]}</li>
                <li>{sub[4]}</li>
            </ul>



{/*       map()     
*/}

    {/* Example - In Jsx Array Value Iterate with Map() method */}

            <ul>
                {
                    sub.map((item,index) => <li key={index}> {item} </li>)
                }
            </ul>

        {/* Example - Iterate with index and item  */}

            <ul>
                {
                    sub.map((item,index) => <li key={index}> {index + " - " + item} </li>)
                }
            </ul>


        {/* Example - Index Counting start whatever number We add */}

            <ul>
                {
                    sub.map((item,index) => <li key={index}> {(index + 2) + " - " + item} </li>)
                }
            </ul>


    {/* Example - Whenever map method using , individually need's in key attribute in child element's  */}

            <ul>
                {
                    sub.map((item,index) => <li key={index}> {item} </li>)
                }
            </ul>



    {/* Example -  Array  Value Add in Select element , like drop down  */}

            <h1> SELECT Subject </h1>

            <select>
                
                <option value="">-- Subject --</option>

                {
                    sub.map((a,index) => <option key={index}> {a} </option>)
                }

            </select>

<hr /> 

    {/* Example -  Array  Value Add in Form Element's   */}

            <h1> Checkbox </h1>
            
                {
                    sub.map((item,index) =>

                    <label key={index}>
                        <input type='checkbox' value={item} name="" />
                        {item}
                    </label>)
                }



    {/* Example  */}

        </div>
    )
}

export default Looping;