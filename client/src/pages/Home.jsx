import PersonList from "../components/PersonList"
import SearchList from "../components/SearchList"
import Content from "../components/Content"

export default function Home(params) {
    return (
        <>
        <div className="d-flex justify-content-between">
        <div>
            <PersonList />
        </div>
        <div>
            <SearchList />
            <Content />
        </div>
        </div>
        </>
    )
}