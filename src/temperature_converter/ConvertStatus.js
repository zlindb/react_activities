
const ConvertStatus = (props) =>{
  //return <div className="convert-status">messages goes here...</div>
  //const msg = props.value;

  return (
    <UpdateContext.Consumer>
      {props =>{
        <div className="convert-status">{props}</div>
      }}
    </UpdateContext.Consumer>
  )
}

export default ConvertStatus;
