// import {useEffect, useState} from "react";
// import axios from "axios";
//
// let searchBoxToggle = false;
// export function SearchBox(prop) {
//     let [searchState,setSearchState] = useState([]);
//     let size = prop.pageSize;
//     searchBoxToggle = prop.searchBoxToggle;
//     useEffect(() => {
//         axios.get('http://localhost:3001/search/team-league?pageSize='+size)
//             .then((response) => {
//                 setSearchState(response.data.data)
//                 return response.data.data;
//             })
//             .catch(error => console.error('Error:', error));
//     }, [size]);
//     return (
//         <>
//                 {
//                     (searchBoxToggle) ? searchState.map((result, index) => (
//                         <div key={index}>
//                             <div style={{marginTop: "0rem", color: "red"}}>
//                                 {result.id} - {result.team}
//                             </div>
//                         </div>
//                     )) : ""
//                 }
//         </>
//     )
// }
