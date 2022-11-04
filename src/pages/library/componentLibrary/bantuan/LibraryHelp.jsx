import React from "react";
import './LibraryHelp.scss';

export default function LibraryHelp() {
    return (
        <>
            <div className="libraryHelp">
                <h1>Help On Usage</h1>
                <hr />
                <h2>Searching</h2>
                <p>There is 2 method available on searching library catalog. The first one is SIMPLE SEARCH, which is the simplest method on searching catalog, you just enter any keyword, either it contained in document titles, authors name or subjects. You can supply more than one keywords in Simple Search method and it will expanding your search results.</p>
                <p><b>ADVANCED SEARCH</b>, lets you define keywords in more specific fields. If you want your keywords only contained in title field, then type your keyword in Title field and the system will scope it search only on <b>Title </b> field, not in other fields. Location field lets you narrowing search results by specific location, so only collection that exists in selected location get fetched by system.</p>
            </div>
        </>
    )
}