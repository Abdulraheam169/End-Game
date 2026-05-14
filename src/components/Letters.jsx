export default function Letters(props){
    return <button className={props.className ? "click" : "unclick"}  onClick={props.onClick} value={props.val}>{props.letter}</button>
}
//