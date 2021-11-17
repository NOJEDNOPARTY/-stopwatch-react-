import './Button.scss';

function ElButton(props) {
    return (
        <button className={props.className}
          onClick={props.clickEvent}>{props.name}</button>
    );
}
  
export default ElButton;