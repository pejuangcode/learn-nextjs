export default function Stats() { 
    return <div>
        <h2 className="text-2xl font-bold mb-4">Your tasks today</h2>
        <div className="space-y-4">
            <div className="p-4 bg-white border rounded-xl text-gray-800 space-y-2">
                <div className="flex justify-between">
                    <div className="text-gray-400 text-xs">Number 10</div>
                    <div className="text-gray-400 text-xs">4h</div>
                </div>
                <a href="javascript:void(0)" className="font-bold hover:text-yellow-800 hover:underline">Blog and social posts</a>
                <div className="text-sm text-gray-600">
                    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" className="text-gray-800 inline align-middle mr-1" viewBox="0 0 16 16">
                    <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 4a.905.905 0 0 0-.9.995l.35 3.507a.552.552 0 0 0 1.1 0l.35-3.507A.905.905 0 0 0 8 4zm.002 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2z"/>
                    </svg>Deadline is today
                </div>
            </div>
            <div className="p-4 bg-white border rounded-xl text-gray-800 space-y-2">
                <div className="flex justify-between">
                    <div className="text-gray-400 text-xs">Grace Aroma</div>
                    <div className="text-gray-400 text-xs">7d</div>
                </div>
                <a href="javascript:void(0)" className="font-bold hover:text-yellow-800 hover:underline">New campaign review</a>
                <div className="text-sm text-gray-600">
                    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" className="text-gray-800 inline align-middle mr-1" viewBox="0 0 16 16">
                    <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 4a.905.905 0 0 0-.9.995l.35 3.507a.552.552 0 0 0 1.1 0l.35-3.507A.905.905 0 0 0 8 4zm.002 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2z"/>
                    </svg>New feedback
                </div>
            </div>
            <div className="p-4 bg-white border rounded-xl text-gray-800 space-y-2">
                <div className="flex justify-between">
                    <div className="text-gray-400 text-xs">Petz App</div>
                    <div className="text-gray-400 text-xs">2h</div>
                </div>
                <a href="javascript:void(0)" className="font-bold hover:text-yellow-800 hover:underline">Cross-platform and browser QA</a>
            </div>
        </div>
    </div>
}