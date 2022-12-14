import React from "react";
import {RouteComponentProps}  from "react-router-dom"

interface MatchParams{
    touristRouteId:string
}

export const DetailPage:React.FC<RouteComponentProps<MatchParams>>=(props)=>{
    return (
        <h1>旅游路线详情页ID:{props.match.params.touristRouteId}</h1>
    )
}