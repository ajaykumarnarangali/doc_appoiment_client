import { Link } from "react-router-dom"

function DocCard({ doc }) {
    return (
        <Link to={`/doctor/${doc?._id}`}>
            <div className='bg-white rounded-lg overflow-hidden flex gap-2 flex-col border-2 border-gray-200 '>
                <div>
                    <img src={doc?.image?.url} alt="" className="w-full lg:h-60 object-cover object-center" />
                </div>
                <div className="px-4 mb-6">
                    <div className="flex items-center gap-2">
                        <div className="bg-green-400 w-2 h-2 rounded-full"></div>
                        <p className="text-green-400">Available</p>
                    </div>
                    <h1 className="text-md font-medium">Dr {doc?.username}</h1>
                    <h1 className="text-xs text-formText">Dr {doc?.speciality}</h1>
                </div>
            </div>
        </Link>
    )
}

export default DocCard