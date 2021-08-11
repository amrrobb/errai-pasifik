import SearchTable from "./SearchTable"
export default function SearchList (props) {
    return (
        <>
        <div className="border m-2 p-2" 
        style={{
            "width": "83vw",
            "height": "40%",
            "borderRadius": "10px"
        }} >

            <div className="ms-3 h5"> 
                Search List
            </div>

            <div className="overflow-scroll" 
                style={{
                "height": "90%",
            }} >
                <SearchTable />

            </div>  
        </div>
        </>
    )
}