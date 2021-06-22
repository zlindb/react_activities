import ConvertInput from './ConvertInput';
import ConvertStatus from './ConvertStatus';

const ConvertForm = (props) =>{
  return (
    <div className="convert-form">
      Celsius: <ConvertInput/>
      <br/>
      Fahrenheit: <ConvertInput />
      <br/>
      <ConvertStatus />
    </div>
  )
}

export default ConvertForm;
