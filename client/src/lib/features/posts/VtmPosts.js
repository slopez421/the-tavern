import React from "react";
import SiteStats from "../../components/SiteStats";
import FilterMenu from "../../components/FilterMenu";
import FilteredPosts from "./FilteredPosts";

function VtmPosts({setRefresh}) {
    const ttrpg = "vtm"
    return (
        <div className="grid grid-cols-4">
            <div className="col-span-1 mt-10">
                <div className="item-fixed">
                <FilterMenu />
                </div>
            </div>
            <div className="col-span-2 mt-10">
                <div>
                <FilteredPosts setRefresh={setRefresh} ttrpg={ttrpg} />
                </div>
            </div>
            <div className="col-span-1 mt-10">
                <div className="home-stats">
                    <SiteStats />
                </div>
            </div>
    </div>
    )
}

export default VtmPosts