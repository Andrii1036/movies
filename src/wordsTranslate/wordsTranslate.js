import {useSelector} from "react-redux";


const Translate=()=>{
const {language} = useSelector(state => state.localChange)
    let words={
        languageSwitcher:'Змінити мову',
        languageSwitcherItem1:'Англійська',
        languageSwitcherItem2:'Українська',
        languageSwitcherItem3:'Російська',
    }
    if(language==='en'){
        words={...words,
            languageSwitcher:'qweq',
            languageSwitcherItem1:'weqe',
            languageSwitcherItem2:'wqe',
            languageSwitcherItem3:'ewq',
        }
    }
    return words
}





export default Translate