import React from "react"
import { useHistory, useParams } from "react-router-dom"
import courseStyles from "../styles/main.module.css"

export default function Course (props){
const history = useHistory();
const params = useParams()

console.log(params)

    return(<div className={courseStyles.course}>

    <button onClick={history.goBack}>REGRESAR</button>

    <h1>Usted esta en el curso de {params.id}</h1>
    </div>
    )
}