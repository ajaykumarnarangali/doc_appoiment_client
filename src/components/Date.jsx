import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import moment from "moment";


function Date({ selectedDate, setSelectedDate, handleAddLeave }) {
    return (
        <div className="flex items-center gap-3 bg-white p-3 rounded-lg shadow-sm max-w-xl">
            <button
                className="w-8 h-8 rounded-full bg-green-100 text-green-600 flex items-center justify-center hover:bg-green-200 transition"
                onClick={handleAddLeave}
            >
                <i className="fa-solid fa-plus"></i>
            </button>

            <DatePicker
                selected={selectedDate}
                onChange={(date) => setSelectedDate(moment(date).format('YYYY-MM-DD'))}
                dateFormat="yyyy-MM-dd"
                showMonthDropdown
                showYearDropdown
                dropdownMode="select"
                className="border border-gray-300 rounded-md p-2 text-sm w-full max-w-xs focus:outline-none focus:ring-2 focus:ring-green-400"
                placeholderText="Select a date"
            />

            <p className="text-gray-700 text-sm whitespace-nowrap">
                Selected: <span className="font-semibold">{moment(selectedDate).format('YYYY MMMM DD')}</span>
            </p>
        </div>
    )
}

export default Date