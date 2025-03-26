 import "../About us/About.scss"

 export function AbtUs(){

    return(
        <>
        <div className="AbtUs-content">
           

            <div className="content-text">
                <p>Декілька слів про нас</p>
                <h2>Побачте процес приготування страв
                на власні очі</h2>
                <img  src="src/assets/workImages/content-image-1.jpg" alt="AbtUs-logo" />
               
            </div>
            <div className="content-image">
            <h2>Ми не готуємо багато запасів. Щоб усе було свіже, цехи працюють щодня.</h2>
            <img src="src/assets/workImages/content-image-2.jpg" alt="AbtUs-logo" />
            </div>
        </div>
        </>
    )
 }