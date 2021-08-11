import { useSelector } from "react-redux"

export default function Content (props) {
    const contentUri = useSelector(state => state.contentUri)

    return (
        <>
        <div className="border m-2 p-2" 
        style={{
            "width": "83vw",
            "height": "57%",
            "borderRadius": "10px"
        }} >

            <div className="ms-3 h5"> 
                Content
            </div>

            {/* <div className="overflow-scroll" 
                style={{
                "height": "90%",
            }} > */}
            
            {
                !contentUri
                ? null
                :
                <iframe src={contentUri}
                    className="p-2"
                    style={{
                        "width": "100%",
                        "height": "90%",
                    }} />

            }
        </div>
        </>
    )
}