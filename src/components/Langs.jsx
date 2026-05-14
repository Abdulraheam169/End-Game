export default function Langs(props){

        return <span  className={props.className ? "dead" : undefined} id={props.id} onClick={props.onClick} >{props.lan}</span>
    }

//     return langArr.map(lang => <Langs key={lang.lan} id={lang.id} lan={lang.lan} isDead={lang.isDead} />)
