import { Link } from "react-router-dom"

function DocCard({ doc }) {
    return (
        <Link to={`/doctor/${doc?._id}`}>
            <div className='bg-white rounded-lg overflow-hidden'>
                <div>
                    <img src={doc?.image?.url} alt="" className="w-full h-60 object-cover object-center" />
                </div>
                <div className="px-2 mb-6">
                    <h1 className="text-md font-medium">Dr {doc?.username}</h1>
                    <h1 className="text-xs text-formText">Dr {doc?.speciality}</h1>
                </div>
            </div>
        </Link>
    )
}

export default DocCard