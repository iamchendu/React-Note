// Example - one component data to  Another to another component Data transfer

// Direct Props Called 

const ComponentProp = ({mycity,mystate,username,title}) => {

        return(
            <section>
                <u><h1>Componenent Prop </h1></u>
                <h3>City : {mycity}</h3>
                <h3>State :{mystate} </h3>
                <h3>Name :{username}  
                <br/> Title : {title}</h3>
            </section>
        )
}
export default ComponentProp