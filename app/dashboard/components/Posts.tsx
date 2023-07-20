
export default function Posts() {
    return  <div>
        <h2 className="text-2xl font-bold mb-4">Stats</h2>
        <div className="grid grid-cols-2 gap-4">
            <div className="col-span-2">
                <div className="p-4 bg-green-100 rounded-xl">
                    <div className="font-bold text-xl text-gray-800 leading-none">Good day, <br/>Kristin</div>
                    <div className="mt-5">
                        <button type="button" className="inline-flex items-center justify-center py-2 px-3 rounded-xl bg-white text-gray-800 hover:text-green-500 text-sm font-semibold transition">
                            Start tracking
                        </button>
                    </div>
                </div>
            </div>
            <div className="p-4 bg-yellow-100 rounded-xl text-gray-800">
                <div className="font-bold text-2xl leading-none">20</div>
                <div className="mt-2">Tasks finished</div>
            </div>
            <div className="p-4 bg-yellow-100 rounded-xl text-gray-800">
                <div className="font-bold text-2xl leading-none">5,5</div>
                <div className="mt-2">Tracked hours</div>
            </div>
            <div className="col-span-2">
                <div className="p-4 bg-purple-100 rounded-xl text-gray-800">
                    <div className="font-bold text-xl leading-none">Your daily plan</div>
                    <div className="mt-2">5 of 8 completed</div>
                </div>
            </div>
        </div>
    </div>
}