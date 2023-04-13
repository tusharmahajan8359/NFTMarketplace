import React from 'react'
import "./Explore.css"
import {ExploreCard} from "./ExploreCard"
import {menus} from "./DataExplore"
export const Explore = () => {
    return (

        <main className="card1 text-center">
            <h2 className="title fs-1 fw-bolder my-5">Explore Collections</h2>

            <ul className="wrapper">
                {menus.map(item=>{
                    return(
                        <li className="wrapper-item pb-2 ">
                        {item}
                    </li>
                    )
                })}
            </ul>

            <div className="container-card1-body">
                <ExploreCard/>
                <ExploreCard/>
                <ExploreCard/>
                <ExploreCard/>
                <ExploreCard/>
                <ExploreCard/>
                <ExploreCard/>
                <ExploreCard/>
                <ExploreCard/>
                
            </div>


           

        </main>


    )
}
